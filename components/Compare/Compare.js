import StyledList from "../CarsList/StyledList";
import {
  StyledImage,
  StyledLikeButton,
  StyledResultDiv,
} from "../Favorites/StyledFavorites";
import Image from "next/image";
import styled from "styled-components";
import { StyledSubmitButton } from "../FilterForm/StyledForm";

const StyledCompareList = styled.ul`
  list-style: none;
  padding: 0px;
  margin-top: 5px;
  display: grid;
  gap: 10px;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: grey;
  font-size: 1.2em;
`;

const StyledNameCompareH3 = styled.h3`
  margin: 0;
`;

function Compare({
  cars,
  onToggleFavorite,
  onToggleCompared,
  clearComparedList,
}) {
  return (
    <>
      {cars.filter((car) => car.isCompared).length < 1 ? (
        <StyledResultDiv>{"You have nothing to compare yet"}</StyledResultDiv>
      ) : (
        <div>
          {" "}
          <StyledList role="list">
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>
                  <StyledLikeButton
                    style={{ top: "65px", right: "-5px" }}
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
                  <StyledLikeButton
                    style={{ top: "25px", right: "-200px" }}
                    type="button"
                    onClick={() => onToggleCompared(car.id)}
                  >
                    <Image
                      src={"/cross.png"}
                      alt="delete"
                      width={20}
                      height={20}
                    />
                  </StyledLikeButton>

                  <StyledImage
                    src={car.imageSource}
                    alt={car.model}
                    width={230}
                    height={115}
                  />

                  <h1>{car.name}</h1>
                  <h2>{car.model}</h2>
                </li>
              ))}
          </StyledList>
          <StyledNameCompareH3>{"Body Type:"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.bodyType}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Wheels Drive:"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.wheelsDrive}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>
            {"Acceleration (0-100km/h (s))"}
          </StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.acceleration}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3> {"Fuel:"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>
                  {" "}
                  {car.Fuel.length < 2
                    ? `${car.Fuel[0]}`
                    : `${car.Fuel[0]}, ${car.Fuel[1]}`}
                </li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Fuel Economy (l/100km)"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.FuelEconomy}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Top Speed (km/h)"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.TopSpeed}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Engine (L)"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.Engine}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Power (HP)"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.PowerHP}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Country of Manufacture"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.CountryOfManufacture}</li>
              ))}
          </StyledCompareList>
          <StyledNameCompareH3>{"Price from (Euro)"}</StyledNameCompareH3>
          <StyledCompareList>
            {cars
              .filter((car) => car.isCompared)
              .map((car) => (
                <li key={car.id}>{car.Price}</li>
              ))}
          </StyledCompareList>
          <StyledSubmitButton type="button" onClick={clearComparedList}>
            Compare Other Cars
          </StyledSubmitButton>
        </div>
      )}
    </>
  );
}

export default Compare;
