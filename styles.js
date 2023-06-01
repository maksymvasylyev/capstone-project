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
    background-color: var(--color-background);
    /* outline: 1px solid black; */
  }
  
  :root {
    --color-button:  ${({ isDarkMode }) =>
      isDarkMode ? "#ff3fa6" : "#c9c9c9"};
  --color-layout:  ${({ isDarkMode }) => (isDarkMode ? "black" : "#c9c9c9")};
  --color-text: ${({ isDarkMode }) => (isDarkMode ? "black" : "#E9E9E9")};
  --color-backgroundLayout:${({ isDarkMode }) =>
    isDarkMode ? "#91eee8" : "#252525"};
     --color-background:${({ isDarkMode }) =>
       isDarkMode ? "#ffd5ec" : "#3E3E3E"};
       --color-startButton:  ${({ isDarkMode }) =>
         isDarkMode ? "#ff3fa6" : "#3E3E3E"};
}
/* "#91EEE8" */
  body {
    margin: 0;
    font-family: system-ui;
    font-family: ${montserrat.style.fontFamily};
    color:black;
  }
`;
