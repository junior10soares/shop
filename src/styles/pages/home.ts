import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))', // calculo p deixar sempre a img da direita na borda final
    marginLeft: 'auto',
    minHeight: 656,
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden', // esconde o footer para nao aparecer lá de baixo vindo

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        left: '0.25rem',
        bottom: '0.25rem',
        right: '0.25rem',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',

        transform: 'translateY(110%)', // p sair da tela a descrição da camisa
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '$gray100'
        },
        span: {
            color: '$green300'
        }
    },
    '&:hover': {
        footer: {
            transform: 'translateY(0%)', // voltar a posição original
            opacity: 1
        }
    }
})