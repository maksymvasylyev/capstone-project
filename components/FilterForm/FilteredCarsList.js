import React from "react";
import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import styled from "styled-components";

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
              <Image
                style={{ borderRadius: "10%" }}
                src={car.imageSource}
                alt={car.model}
                width={400}
                height={200}
              />
              <div
                style={{
                  fontSize: "2rem",
                  color: "white",
                  position: "relative",
                  top: "-40px",
                  left: "20px",
                }}
              >
                from {car.Price} Euro
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  color: "black",
                  position: "relative",
                  top: "-40px",
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