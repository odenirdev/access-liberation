import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #66cccc;
    --secundary-color: #143047;

    --white: #fff;
    --gray: #eeeeee;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh; 
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  [class*="col-"] {
    padding: 0;
    margin: 0;
  }
`;
