import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";
import Link from "next/link";
import styled from "styled-components";

const StyledLinkDivMain = styled.div`
  position: fixed;
  font-weight: bold;
  color: #c9c9c9;
  width: 80%;
  bottom: 10vh;
  right: 17vw;
  text-align: center;
  font-size: 2.5em;
  padding: 10px;
  box-shadow: 0 0.7em 1.5em -0.5em black;
  border-radius: 10%;
  background-color: #252525;

  &:hover {
    background-color: grey;
  }
`;

export default function HomePage() {
  return (
    <>
      <CarsList data={data} />
      <Link href="/filter-form">
        <StyledLinkDivMain>
          Click to choose exactly what you need{" "}
        </StyledLinkDivMain>
      </Link>
    </>
  );
}
