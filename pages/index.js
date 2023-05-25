import CarsList from "@/components/CarsList/CarsList";

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLinkDivMain = styled.div`
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

export default function HomePage({ cars }) {
  // const router = useRouter();
  // const { data } = useSWR("/api/products");

  // const [cars, setCars] = useLocalStorageState("list", {
  //   defaultValue: [],
  // });
  // setCars(data);
  // console.log(cars);

  // if (!data) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <Link href="/filter-form">
        <StyledLinkDivMain>
          Click to choose exactly what you need{" "}
        </StyledLinkDivMain>
      </Link>
      <CarsList cars={cars} />
    </>
  );
}
