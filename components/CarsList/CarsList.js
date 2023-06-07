import StyledList from "./List.styled";
import { StyledImage, StyledPictureDiv } from "../Favorites/Favorites.styled";
import { StyledNameDiv } from "../Favorites/Favorites.styled";
import Link from "next/link";

function CarsList({ data }) {
  return (
    <StyledList role="list">
      {data.map((car) => (
        <li key={car.id}>
          <Link href={`/detailsCar/${car.id}`}>
            <StyledPictureDiv>
              <StyledImage
                src={car.imageSource}
                alt={car.model}
                width={180}
                height={90}
              />
            </StyledPictureDiv>
          </Link>
          <StyledNameDiv>
            {car.name} {car.model}
          </StyledNameDiv>
        </li>
      ))}
    </StyledList>
  );
}

export default CarsList;
