import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #3E3E3E;
    /* outline: 1px solid black; */
  }

  :root {
  --color-layout: #c9c9c9;
  --color-text: #E9E9E9;
  --color-highlight: #d30a40;
  --color-backgroundLayout:#252525;
}

  body {
    margin: 0;
    font-family: system-ui;
    font-family: ${montserrat.style.fontFamily};
    color:black;
  }
`;
