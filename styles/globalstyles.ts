import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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