import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import Link from "next/link";
import {
  StyledImage,
  StyledResultDiv,
  StyledLikeButton,
  StyledLink,
  StyledNameDiv,
  StyledPriceDiv,
  StyledCompareButton,
} from "../Favorites/StyledFavorites";

function FilteredCarsList({ list, onToggleFavorite, onToggleCompared }) {
  return (
    <>
      {list.length < 1 ? (
        <StyledResultDiv>{"We didn`t find anything for you"}</StyledResultDiv>
      ) : (
        <StyledList role="list">
          {list.map((car) => (
            <li key={car.id}>
              <StyledLikeButton
                type="button"
                onClick={() => onToggleFavorite(car.id)}
              >
                {car.isFavorite ? (
                  <Image src="/heart.png" alt="liked" width={40} height={40} />
                ) : (
                  <Image
                    src="/notLiked.png"
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
                  width={350}
                  height={175}
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
                  list.filter((car) => car.isCompared).length > 1 &&
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
