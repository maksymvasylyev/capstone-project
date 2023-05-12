import Link from "next/link";
import StyledList from "../CarsList/StyledList";
import { StyledLikeButton } from "./StyledFavorites";
import Image from "next/image";
import { StyledResultDiv } from "./StyledFavorites";
import { StyledImage } from "./StyledFavorites";

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
                    width={300}
                    height={150}
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

export default Favorites;
