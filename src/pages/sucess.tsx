import { stripe } from "@/lib/stripe";
import { ImageContainer, SucessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SucessProps {
    curtomerName: string,
    product: {
        name: string,
        imageUrl: string
    }
}

export default function Sucess({ curtomerName, product }: SucessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SucessContainer>
                <h1>Compra efetuada!</h1>

                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={110} alt='' />
                </ImageContainer>

                <p>Uhuul <strong>{curtomerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>

                <Link href="/">
                    Voltar ao inicio
                </Link>

            </SucessContainer>
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {

    if (!query.session_id) { // caso a pessoa tenta acessar direto
        return {
            redirect: {
                destination: '/',// redireciona p home
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const curtomerName = session.customer_details.name
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            curtomerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}