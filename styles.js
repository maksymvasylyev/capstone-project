import { createGlobalStyle } from "styled-components";
import { Gluten } from "@next/font/google";

const gluten = Gluten({
  weight: "400",
  subsets: ["latin"],
});

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
    font-family: ${gluten.style.fontFamily};
    color:black;
  }
`;
