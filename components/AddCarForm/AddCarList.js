import Image from "next/image";
import { StyledDescriptionList } from "../CarsDetails/StyledCarDetails";
import styled from "styled-components";
import {
  StyledCompareButton,
  StyledLikeButton,
} from "../Favorites/StyledFavorites";

const StyledAddCarList = styled.ul`
  list-style: none;
  padding: 0px;
  gap: 10px;
  display: grid;
  font-size: 1em;
  justify-items: center;
  grid-template-columns: 1fr;
`;

function AddCarList({ cars, myCars, onDeleteCar, onToggleCompared }) {
  return (
    <StyledAddCarList role="list">
      {myCars
        .filter((car) => car.section == "myGarage")
        .map((car) => (
          <li key={car.id}>
            <StyledLikeButton
              style={{ right: "-640px" }}
              type="button"
              onClick={() => onDeleteCar(car.id)}
            >
              <Image src="/cross.png" alt="delete" width={40} height={40} />
            </StyledLikeButton>
            <Image
              src={car.imageSource}
              alt="yourCar"
              width={700}
              height={350}
            />
            <h1>{car.name}</h1>
            <h2>{car.model}</h2>
            <StyledDescriptionList>
              <li>Body Type: {car.bodyType}</li>
              <li>Wheels Drive: {car.wheelsDrive}</li>
              <li>Acceleration (0-100km/h (s)): {car.acceleration}</li>
              <li>Fuel: {car.Fuel}</li>
              <li>Fuel Economy (l/100km): {car.FuelEconomy}</li>
              <li>Top Speed (km/h): {car.TopSpeed}</li>
              <li>Engine (L): {car.Engine}</li>
              <li>Power (HP): {car.Power}</li>
              <li>Country of Manufacture: {car.CountryOfManufacture}</li>
              <li>Approx. Price (Euro): {car.price}</li>
            </StyledDescriptionList>
            <StyledCompareButton
              type="button"
              style={{ top: "30px", right: "-200px", marginBottom: "30px" }}
              active={car.isCompared}
              onClick={() =>
                myCars.filter((car) => car.isCompared).length > 1 &&
                car.isCompared === false
                  ? alert("You can compare only 2 cars at the same time")
                  : onToggleCompared(car.id)
              }
            >
              {car.isCompared ? "Added to Compare List" : "Add to Compare List"}
            </StyledCompareButton>
          </li>
        ))}
    </StyledAddCarList>
  );
}

export default AddCarList;
