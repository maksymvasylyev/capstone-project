import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.div`
  position: fixed;
  color: Pink;
  width: 80%;
  top: 10vh;
  right: 10vw;
  text-align: center;
  font-size: 2.5em;
  padding: 10px;
  border: 3px solid black;
  border-radius: 10%;

  &:hover {
    background-color: grey;
  }
`;

export default function HomePage() {
  return (
    <>
      <Link href="/filter-form">
        <StyledLink>Filter to get exactly what you need </StyledLink>
      </Link>
      <CarsList data={data} />
    </>
  );
}
