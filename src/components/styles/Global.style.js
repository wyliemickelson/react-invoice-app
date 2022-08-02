import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

  * {
    font-size: '16px';
    font-weight: '500';
    font-family: 'League Spartan', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: inherit;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles;