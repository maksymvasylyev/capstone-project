import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Head>
        <title>Choose your Car</title>
      </Head>
      <Headline>Choose your car</Headline>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
