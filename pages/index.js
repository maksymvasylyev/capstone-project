import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.div`
  position: fixed;
  color: Pink;
  top: 0px;
  right: 60px;
  font-size: 2em;
  padding: 10px;
  border: 3px solid black;
  border-radius: 10%;
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
