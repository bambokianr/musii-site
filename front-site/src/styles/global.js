import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #d9d9d9;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Cairo', sans-serif;
    font-size: 1.6rem;
    /* color: #000; */
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* laptops and small desktops */
  @media screen and (max-width: 1280px) {
  }

  /* Tablets and larger smartphones */
  @media screen and (max-width: 768px) {
    html {
      text-align: center;
    }
  }

  /* Smaller smartphones */
  @media screen and (max-width: 480px) {
    html {
      font-size: 45%;
    }
  }
`; 