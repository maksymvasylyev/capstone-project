import StyledList from "./StyledList";
import { StyledImage } from "../Favorites/StyledFavorites";
import { StyledNameDiv } from "../Favorites/StyledFavorites";

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

          <StyledNameDiv>
            {car.name} {car.model}
          </StyledNameDiv>
        </li>
      ))}
    </StyledList>
  );
}

export default CarsList;
