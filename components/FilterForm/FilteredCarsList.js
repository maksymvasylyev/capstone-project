import React from "react";
import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledResultDiv = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
  margin: 50px;
`;

function FilteredCarsList({ list }) {
  const router = useRouter();
  return (
    <>
      {list.length < 1 ? (
        <StyledResultDiv>{"We didn`t find anything for you"}</StyledResultDiv>
      ) : (
        <StyledList>
          {list.map((car) => (
            <li key={car.id}>
              <Image
                style={{ borderRadius: "10%" }}
                src={car.imageSource}
                alt={car.model}
                width={300}
                height={150}
              />
              <Link href="https:google.com/">Link</Link>

              <div
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  position: "relative",
                  top: "-30px",
                  left: "20px",
                }}
              >
                from {car.Price} Euro
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  position: "relative",
                  top: "-30px",
                }}
              >
                {car.name} {car.model}
              </div>
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

export default FilteredCarsList;
