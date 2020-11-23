import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    z-index: 3;

    font-family: 'Inter';
  }

  body, html {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #EEE;
  }
  button {
    cursor: pointer;
  }
`;