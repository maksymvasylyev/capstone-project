import StyledList from "../CarsList/List.styled";
import {
  StyledImage,
  StyledLikeButton,
  StyledResultDiv,
} from "../Favorites/Favorites.styled";
import Image from "next/image";
import styled from "styled-components";
import { StyledSubmitButton } from "../FilterForm/Form.styled";

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

const StyledNameCompareH4 = styled.h4`
  margin: 0;
  font-size: 1.2em;
`;

const StyledYourCarDiv = styled.div`
  font-size: 1.5em;
  margin-bottom: 13px;
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
        <div>
          {" "}
          <StyledList role="list">
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
                      <Image
                        src="/heart.png"
                        alt="liked"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Image
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
                  <Image src="/cross.png" alt="delete" width={20} height={20} />
                </StyledLikeButton>

                <StyledImage
                  src={car.imageSource}
                  alt={car.model}
                  width={350}
                  height={175}
                />

                <h2>{car.name}</h2>
                <h3>{car.model}</h3>
              </li>
            ))}
          </StyledList>
          <StyledNameCompareH4>{"Body Type:"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.bodyType}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Wheels Drive:"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.wheelsDrive}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>
            {"Acceleration (0-100km/h (s))"}
          </StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.acceleration}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4> {"Fuel:"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>
                {" "}
                {Array.isArray(car.Fuel) && car.Fuel.length > 1
                  ? `${car.Fuel[0]}, ${car.Fuel[1]}`
                  : `${car.Fuel}`}
              </li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Fuel Economy (l/100km)"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.FuelEconomy}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Top Speed (km/h)"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.TopSpeed}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Engine (L)"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.Engine}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Power (HP)"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.PowerHP}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Country of Manufacture"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
              <li key={car.id}>{car.CountryOfManufacture}</li>
            ))}
          </StyledCompareList>
          <StyledNameCompareH4>{"Price from (Euro)"}</StyledNameCompareH4>
          <StyledCompareList>
            {carsToCompare.map((car) => (
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
