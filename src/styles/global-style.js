import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root {
        --site-width: 1280px;
        --line-height-for-nav: 70px;
        --line-height-for-search: 50px;
   }
    *,
    *::before,
    *::after
    {
        padding: 0px;
        margin: 0px;
        box-sizing: inherit;
    }
    *:focus {
        outline: none;
    }

    html, html * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: '-apple-system', 'BlinkMacSystemFont', sans-serif;
        text-rendering: optimizeLegibility;
    }

`;

export default GlobalStyle;