import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #dce0e8;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 16px Roboto, sans-serif ;

    }

    #root {
        margin: 0 auto ;
    }

    button {
        cursor: pointer;
    }
`;
