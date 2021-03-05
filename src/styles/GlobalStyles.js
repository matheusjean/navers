import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }

    *:focus {
        outline:0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #696969 no-repeat center top;
        background-size: cover;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    /* #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  } */

    button {
        cursor: pointer
    }
`;
