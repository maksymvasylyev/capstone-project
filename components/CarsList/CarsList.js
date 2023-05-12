import StyledList from "./StyledList";
import { StyledImage } from "../Favorites/StyledFavorites";

function CarsList({ data }) {
  return (
    <StyledList role="list">
      {data.map((car) => (
        <li key={car.id}>
          <StyledImage
            src={car.imageSource}
            alt={car.model}
            width={230}
            height={115}
          />

          <div
            style={{
              fontSize: "1.2em",
              color: "black",
              position: "relative",
              top: "-25px",
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
