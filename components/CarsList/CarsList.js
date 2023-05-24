import StyledList from "./StyledList";
import { StyledImage } from "../Favorites/StyledFavorites";
import { StyledNameDiv } from "../Favorites/StyledFavorites";
import { useRouter } from "next/router";
import useSWR from "swr";

function CarsList() {
  const router = useRouter();
  const { data } = useSWR("/api/products");

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <StyledList role="list">
      {data.map((car) => (
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
