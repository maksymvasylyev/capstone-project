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
} from "../Favorites/StyledFavorites";
import styled from "styled-components";

function FilteredCarsList({ list, handleToggleFavorite }) {
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

export default FilteredCarsList;
