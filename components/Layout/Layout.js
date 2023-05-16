import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  height: 185vh;
  display: grid;
  text-align: center;
  grid-template-rows: 5rem auto 2em;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  text-align: center;
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
