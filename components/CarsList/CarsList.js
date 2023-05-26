import StyledList from "./List.styled";
import { StyledImage } from "../Favorites/Favorites.styled";
import { StyledNameDiv } from "../Favorites/Favorites.styled";

function CarsList({ cars }) {
  return (
    <StyledList role="list">
      {cars.map((car) => (
        <li key={car.id}>
          <StyledImage
            src={car.imageSource}
            alt={car.model}
            width={350}
            height={175}
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
