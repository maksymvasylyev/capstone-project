import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Headline = styled.h1`
  color: var(--color-layout);
  background-color: var(--color-backgroundLayout);
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 0px;
  padding-left: 30px;
  text-align: start;
  box-shadow: 5em 0.7em 1em -0.5em var(--color-backgroundLayout);
  position: fixed;
  top: 0;
  height: 3rem;
  width: 100%;
  z-index: 30;
`;
const StyledDarkModeButton = styled.button`
  display: flex;
  position: relative;
  top: -40px;
  right: -480px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1em 0.7em 1.1em;
  color: #e9e9e9;
  background: ${({ isDarkMode }) => (isDarkMode ? "#3E3E3E" : "#ff3fa6")};
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 50;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em red;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
`;
const StyledLayoutDiv = styled.div`
  width: 700px;
`;
export default function Layout({ children, toggleDarkMode, isDarkMode }) {
  return (
    <StyledLayoutDiv>
      <Head>
        <title>Car compare analyser</title>
      </Head>
      <div>
        <Headline>
          Car compare analyser
          <StyledDarkModeButton
            isDarkMode={isDarkMode}
            onClick={() => toggleDarkMode()}
          >
            {isDarkMode ? "Normal Mode" : "Bubble Gum Mode"}
          </StyledDarkModeButton>
        </Headline>
        <Main>{children}</Main>
        <Navigation />
      </div>
    </StyledLayoutDiv>
  );
}
