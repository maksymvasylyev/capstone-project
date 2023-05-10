import React from "react";
import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import styled from "styled-components";
import Link from "next/link";

const StyledResultDiv = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
  margin: 50px;
`;

function FilteredCarsList({ list }) {
  return (
    <>
      {list.length < 1 ? (
        <StyledResultDiv>{"We didn`t find anything for you"}</StyledResultDiv>
      ) : (
        <StyledList>
          {list.map((car) => (
            <li key={car.id}>
              <Link href={`/detailsCar/${car.id}`}>
                <Image
                  style={{ borderRadius: "10%" }}
                  src={car.imageSource}
                  alt={car.model}
                  width={300}
                  height={150}
                />
              </Link>
              <Link
                href={`/detailsCar/${car.id}`}
                style={{ textDecoration: "none" }}
              >
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
              </Link>
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
