import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  /* height: 190vh;
  display: grid;
  text-align: center;
  grid-template-rows: 3rem auto 3em; */
`;

const Main = styled.main`
  /* overflow-y: scroll; */
  padding-top: 3rem; /* top */
  padding-bottom: 3rem; /* bottom */
`;

const Headline = styled.h1`
  color: var(--color-layout);
  background-color: var(--color-backgroundLayout);
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 0px;
  text-align: center;
  box-shadow: 5em 0.7em 1em -0.5em var(--color-backgroundLayout);
  position: fixed;
  top: 0; /* tell it where to position itself */
  height: 3rem; /* need to set a height */
  width: 100%; /* need to tell it to take up the full width of the page, otherwise it will only take up the amount of space it needs */
  z-index: 10;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Car compare analyser</title>
      </Head>
      <Wrapper>
        <Headline>Car compare analyser</Headline>
        <Main>{children}</Main>
        <Navigation />
      </Wrapper>
    </>
  );
}
