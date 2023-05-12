import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import Link from "next/link";
import {
  StyledImage,
  StyledResultDiv,
  StyledLikeButton,
} from "../Favorites/StyledFavorites";

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
              <Link
                href={`/detailsCar/${car.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    position: "relative",
                    top: "-30px",
                    left: "20px",
                  }}
                >
                  from {car.Price} Euro
                </div>
              </Link>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  position: "relative",
                  top: "-30px",
                }}
              >
                {car.name} {car.model}
              </div>
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

export default FilteredCarsList;
