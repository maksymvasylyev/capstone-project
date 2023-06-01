import StyledList from "../CarsList/List.styled";
import {
  StyledImage,
  StyledLikeButton,
  StyledResultDiv,
} from "../Favorites/Favorites.styled";
import styled from "styled-components";
import { StyledLikeImage, StyledSubmitButton } from "../FilterForm/Form.styled";

const StyledCompareList = styled.ul`
  list-style: none;
  padding: 0px;
  margin-top: 5px;
  display: grid;
  gap: 10px;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-backgroundLayout);
  font-size: 1.2em;
`;

const StyledNameCompareH4 = styled.h4`
  margin: 0;
  font-size: 1.2em;
  color: var(--color-layout);
  text-align: center;
`;

const StyledYourCarDiv = styled.div`
  font-size: 1.5em;
  margin-bottom: 13px;
`;

const StyledCompareDiv = styled.div`
  padding: 0px;
  display: grid;
`;
const StyledCompareNameDiv = styled.div`
  color: var(--color-text);
  text-align: center;
`;

const StyledCompareNameList = styled.li`
  color: var(--color-text);
  background-color: var(--color-backgroundLayout);
  font-size: 1.2em;
`;
function Compare({
  cars,
  onToggleFavorite,
  onToggleCompared,
  clearComparedList,
}) {
  const carsToCompare = cars.filter((car) => car.isCompared);
  return (
    <>
      {cars.filter((car) => car.isCompared).length < 1 ? (
        <StyledResultDiv>You have nothing to compare yet</StyledResultDiv>
      ) : (
        <StyledCompareDiv>
          {" "}
          <StyledList role="list" style={{ gap: "15px" }}>
            {carsToCompare.map((car) => (
              <li key={car.id}>
                {car.isFavorite === null ? (
                  <StyledYourCarDiv>Your Car</StyledYourCarDiv>
                ) : (
                  <StyledLikeButton
                    style={{ top: "65px", right: "-5px" }}
                    type="button"
                    onClick={() => onToggleFavorite(car.id)}
                  >
                    {car.isFavorite ? (
                      <StyledLikeImage
                        src="/heart.png"
                        alt="liked"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <StyledLikeImage
                        src="/notLiked.png"
                        alt="notLiked"
                        width={40}
                        height={40}
                      />
                    )}
                  </StyledLikeButton>
                )}

                <StyledLikeButton
                  style={{ top: "25px", right: "-300px" }}
                  type="button"
                  onClick={() => onToggleCompared(car.id)}
                >
                  <StyledLikeImage
                    src="/cross.png"
                    alt="delete"
                    width={20}
                    height={20}
                  />
                </StyledLikeButton>

                <StyledImage
                  src={car.imageSource}
                  alt={car.model}
                  width={350}
                  height={175}
                />
                <StyledCompareNameDiv>
                  <h2>{car.name}</h2>
                  <h3>{car.model}</h3>
                </StyledCompareNameDiv>
              </li>
            ))}
          </StyledList>
          <div>
            <StyledNameCompareH4>{"Body Type:"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.bodyType}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>{"Wheels Drive:"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.wheelsDrive}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>
              {"Acceleration (0-100km/h (s))"}
            </StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.acceleration}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4> {"Fuel:"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {" "}
                  {Array.isArray(car.Fuel) && car.Fuel.length > 1
                    ? `${car.Fuel[0]}, ${car.Fuel[1]}`
                    : `${car.Fuel}`}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>
              {"Fuel Economy (l/100km)"}
            </StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.FuelEconomy}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>{"Top Speed (km/h)"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.TopSpeed}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>{"Engine (L)"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.Engine}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>{"Power (HP)"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.PowerHP}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>
              {"Country of Manufacture"}
            </StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.CountryOfManufacture}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareH4>{"Price from (Euro)"}</StyledNameCompareH4>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.Price}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledSubmitButton
              style={{ left: "50px", top: "0px" }}
              type="button"
              onClick={clearComparedList}
            >
              Compare Other Cars
            </StyledSubmitButton>
          </div>
        </StyledCompareDiv>
      )}
    </>
  );
}

export default Compare;
