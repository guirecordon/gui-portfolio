import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ul, li { 
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #1c1917;
  }
`;
