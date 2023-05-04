import React from "react";
import Image from "next/image";
import StyledList from "./StyledList";

function CarsList({ data }) {
  return (
    <>
      <StyledList>
        <ul>
          {data.map((car) => (
            <li key={car.id}>
              <Image
                src={car.imageSource}
                alt={car.model}
                width={400}
                height={200}
              ></Image>
              {car.name} {car.model}
            </li>
          ))}
        </ul>
      </StyledList>
      {/* <Image
        src={data[11].imageSource}
        alt={data[11].model}
        width={400}
        height={400}
      ></Image> */}
    </>
  );
}

export default CarsList;
