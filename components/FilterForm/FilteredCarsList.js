import Image from "next/image";
import StyledList from "../CarsList/StyledList";
import styled from "styled-components";
import Link from "next/link";
import FilterForm from "./FilterForm";

export const StyledResultDiv = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
  margin: 50px;
`;

export const StyledLikeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  position: relative;
  top: 43px;
  right: -245px;
`;

function FilteredCarsList({ list, handleToggleFavorite }) {
  return (
    <>
      {list.length < 1 ? (
        <StyledResultDiv>{"We didn`t find anything for you"}</StyledResultDiv>
      ) : (
        <StyledList>
          {list.map((car) => (
            <li key={car.id}>
              <StyledLikeButton onClick={() => handleToggleFavorite(car.id)}>
                {car.isFavorite ? (
                  <Image
                    src={"/heart.png"}
                    alt="liked"
                    width={40}
                    height={40}
                  ></Image>
                ) : (
                  <Image
                    src={"/notLiked.png"}
                    alt="notLiked"
                    width={40}
                    height={40}
                  ></Image>
                )}
              </StyledLikeButton>
              <Link href={`/detailsCar/${car.id}`}>
                <Image
                  style={{ borderRadius: "10%" }}
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

export default FilteredCarsList;
