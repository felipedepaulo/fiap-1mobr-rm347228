import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    background: var(--background);
    //background-image:url("./assets/background.webp");
    color: var(--white);
  }

  :root {
    --white: #fff;
    --black: #000;
    --background: #005bda;
    --background-image: url("./assets/background.webp");
  }
`;

export { GlobalStyles };