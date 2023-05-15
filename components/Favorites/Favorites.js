import Link from "next/link";
import StyledList from "../CarsList/StyledList";
import {
  StyledLikeButton,
  StyledNameDiv,
  StyledResultDiv,
  StyledImage,
  StyledLink,
  StyledPriceDiv,
  StyledCompareButton,
} from "./StyledFavorites";
import Image from "next/image";

function Favorites({ cars, onToggleFavorite, onToggleCompared }) {
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
                  onClick={() => onToggleFavorite(car.id)}
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
                <StyledCompareButton
                  type="button"
                  active={car.isCompared}
                  onClick={() =>
                    cars.filter((car) => car.isCompared).length > 1 &&
                    car.isCompared === false
                      ? alert("You can compare only 2 cars at the same time")
                      : onToggleCompared(car.id)
                  }
                >
                  {car.isCompared
                    ? "Added to Compare List"
                    : "Add to Compare List"}
                </StyledCompareButton>
              </li>
            ))}
        </StyledList>
      )}
    </>
  );
}

export default Favorites;
