import StyledList from "./StyledList";
import { StyledImage } from "../Favorites/StyledFavorites";
import { StyledNameDiv } from "../Favorites/StyledFavorites";
import { useRouter } from "next/router";
import useSWR from "swr";

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
