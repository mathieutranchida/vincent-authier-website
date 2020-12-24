import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
