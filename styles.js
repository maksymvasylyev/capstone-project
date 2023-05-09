import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    /* outline: 1px solid black; */
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
