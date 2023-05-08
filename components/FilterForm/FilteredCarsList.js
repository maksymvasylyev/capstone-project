import React from "react";
import Image from "next/image";
import StyledList from "../CarsList/StyledList";

function FilteredCarsList({ list }) {
  return (
    <>
      {list.length < 1 ? (
        "We didn`t find anything for you"
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
