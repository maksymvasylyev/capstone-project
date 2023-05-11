import Image from "next/image";
import StyledList from "./StyledList";

function CarsList({ data }) {
  return (
    <StyledList>
      {data.map((car) => (
        <li key={car.id}>
          <Image
            style={{
              borderRadius: "10%",
            }}
            src={car.imageSource}
            alt={car.model}
            width={300}
            height={150}
          />

          <div
            style={{
              fontSize: "1.5rem",
              color: "black",
              position: "relative",
              top: "-30px",
              left: "20px",
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
