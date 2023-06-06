import StyledList from "../CarsList/List.styled";
import Link from "next/link";
import {
  StyledImage,
  StyledResultDiv,
  StyledLikeButton,
  StyledLink,
  StyledNameDiv,
  StyledPriceDiv,
  StyledCompareButton,
  StyledPictureDiv,
} from "../Favorites/Favorites.styled";
import { StyledLikeImage } from "./Form.styled";

function FilteredCarsList({ cars, list, onToggleFavorite, onToggleCompared }) {
  return (
    <>
      {list.length < 1 ? (
        <StyledResultDiv>{"We didn`t find anything for you"}</StyledResultDiv>
      ) : (
        <StyledList role="list">
          {list
            .filter((car) => car.section !== "myGarage")
            .map((car) => (
              <li key={car.id}>
                <StyledLikeButton
                  type="button"
                  onClick={() => onToggleFavorite(car.id)}
                >
                  {car.isFavorite ? (
                    <StyledLikeImage
                      src="/heart.png"
                      alt="liked"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <StyledLikeImage
                      src="/notLiked.png"
                      alt="notLiked"
                      width={30}
                      height={30}
                    />
                  )}
                </StyledLikeButton>
                <Link href={`/detailsCar/${car.id}`}>
                  <StyledPictureDiv>
                    <StyledImage
                      src={car.imageSource}
                      alt={car.model}
                      // layout="fill"
                      width={180}
                      height={90}
                    />
                  </StyledPictureDiv>
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

export default FilteredCarsList;
