import StyledList from "../CarsList/List.styled";
import {
  StyledImage,
  StyledLikeButton,
  StyledPictureDiv,
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
  font-size: 1em;
`;

const StyledNameCompareDiv = styled.div`
  margin: 0;
  font-size: 1em;
  color: var(--color-layout);
  text-align: center;
`;

const StyledYourCarDiv = styled.div`
  font-size: 1em;
  margin-bottom: 13px;
  text-align: center;
`;

const StyledCompareDiv = styled.div`
  padding-left: 0px;
  display: grid;
`;
const StyledCompareNameDiv = styled.div`
  color: var(--color-text);
  text-align: center;
`;

const StyledCompareNameList = styled.li`
  color: var(--color-text);
  background-color: var(--color-backgroundLayout);
  font-size: 0.7em;
`;

const StyledCompareListDiv = styled.div`
  width: 100%;
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
                    style={{ top: "55px", right: "-5px" }}
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
                )}

                <StyledLikeButton
                  type="button"
                  onClick={() => onToggleCompared(car.id)}
                >
                  <StyledLikeImage
                    style={{ top: "-7px", right: "-10px" }}
                    src="/cross.png"
                    alt="delete"
                    width={20}
                    height={20}
                  />
                </StyledLikeButton>

                <StyledPictureDiv>
                  <StyledImage
                    src={car.imageSource}
                    alt={car.model}
                    width={180}
                    height={90}
                  />
                </StyledPictureDiv>
                <StyledCompareNameDiv>
                  <div>{car.name}</div>
                  <div>{car.model}</div>
                </StyledCompareNameDiv>
              </li>
            ))}
          </StyledList>
          <StyledCompareListDiv>
            <StyledNameCompareDiv>{"Body Type:"}</StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.bodyType}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>{"Wheels Drive:"}</StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.wheelsDrive}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>
              {"Acceleration (0-100km/h (s))"}
            </StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.acceleration}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv> {"Fuel:"}</StyledNameCompareDiv>
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
            <StyledNameCompareDiv>
              {"Fuel Economy (l/100km)"}
            </StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.FuelEconomy}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>{"Top Speed (km/h)"}</StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.TopSpeed}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>{"Engine (L)"}</StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.Engine}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>{"Power (HP)"}</StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.PowerHP}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>
              {"Country of Manufacture"}
            </StyledNameCompareDiv>
            <StyledCompareList>
              {carsToCompare.map((car) => (
                <StyledCompareNameList key={car.id}>
                  {car.CountryOfManufacture}
                </StyledCompareNameList>
              ))}
            </StyledCompareList>
            <StyledNameCompareDiv>{"Price from (Euro)"}</StyledNameCompareDiv>
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
          </StyledCompareListDiv>
        </StyledCompareDiv>
      )}
    </>
  );
}

export default Compare;
