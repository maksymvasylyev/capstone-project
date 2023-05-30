import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  text-align: center;
`;

const Main = styled.main`
  margin-top: 50px;
`;

const Headline = styled.h1`
  position: fixed;
  width: 100%;
  display: flex;
  top: 0px;
  margin-top: 0;
  padding-top: 0;
  justify-content: space-around;
  text-align: center;
  z-index: 2;
  background-color: pink;
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
