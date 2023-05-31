import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  height: 190vh;
  display: grid;
  text-align: center;
  grid-template-rows: 3rem auto 3em;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  color: var(--color-layout);
  background-color: var(--color-backgroundLayout);
  margin-top: 0px;
  margin-bottom: 5px;
  padding-top: 0px;
  text-align: center;
  box-shadow: 5em 0.7em 1em -0.5em var(--color-backgroundLayout);
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Choose your New Car</title>
      </Head>
      <Wrapper>
        <Headline>Choose your New car</Headline>
        <Main>{children}</Main>
        <Navigation />
      </Wrapper>
    </>
  );
}
