import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Tema escuro
        primary: {
            main: '#1e1e1e', // Cor primária (cinza escuro)
        },
        secondary: {
            main: '#ffffff', // Cor secundária (branco)
        },
        background: {
            default: '#121212', // Fundo escuro
            paper: '#1e1e1e', // Cor de fundo para componentes como cards
        },
        text: {
            primary: '#ffffff', // Texto branco
            secondary: '#b3b3b3', // Texto cinza claro
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export default theme;