import Link from "next/link";
import StyledList from "../CarsList/StyledList";
import {
  StyledLikeButton,
  StyledNameDiv,
  StyledResultDiv,
  StyledImage,
  StyledLink,
  StyledPriceDiv,
} from "./StyledFavorites";
import Image from "next/image";

function Favorites({ cars, handleToggleFavorite }) {
  return (
    <>
      {cars.filter((car) => car.isFavorite).length < 1 ? (
        <StyledResultDiv>{"You didn`t like anything yet"}</StyledResultDiv>
      ) : (
        <StyledList role="list">
          {cars
            .filter((car) => car.isFavorite)
            .map((car) => (
              <li key={car.id}>
                <StyledLikeButton
                  type="button"
                  onClick={() => handleToggleFavorite(car.id)}
                >
                  {car.isFavorite ? (
                    <Image
                      src={"/heart.png"}
                      alt="liked"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src={"/notLiked.png"}
                      alt="notLiked"
                      width={40}
                      height={40}
                    />
                  )}
                </StyledLikeButton>
                <Link href={`/detailsCar/${car.id}`}>
                  <StyledImage
                    src={car.imageSource}
                    alt={car.model}
                    width={230}
                    height={115}
                  />
                </Link>
                <StyledLink href={`/detailsCar/${car.id}`}>
                  <StyledPriceDiv>from {car.Price} Euro</StyledPriceDiv>
                </StyledLink>
                <StyledNameDiv>
                  {car.name} {car.model}
                </StyledNameDiv>
              </li>
            ))}
        </StyledList>
      )}
    </>
  );
}

export default Favorites;
