import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.div`
  position: fixed;
  color: red;
  top: 0px;
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
