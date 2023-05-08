import React from "react";
import Image from "next/image";
import StyledList from "./StyledList";

function CarsList({ data }) {
  return (
    <StyledList>
      {data.map((car) => (
        <li key={car.id}>
          <Image
            src={car.imageSource}
            alt={car.model}
            width={400}
            height={200}
          />
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
  );
}

export default CarsList;
