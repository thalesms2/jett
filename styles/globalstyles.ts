import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    :target {
        scroll-margin-top: 0px;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #121212;
        color: white;
    }

    a {
        text-decoration: none;
    }
`