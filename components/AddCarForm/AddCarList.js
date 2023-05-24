import Image from "next/image";
import { StyledDescriptionList } from "../CarsDetails/StyledCarDetails";
import styled from "styled-components";
import {
  StyledCompareButton,
  StyledLikeButton,
} from "../Favorites/StyledFavorites";
import Link from "next/link";

const StyledAddCarList = styled.ul`
  list-style: none;
  padding: 0px;
  gap: 10px;
  display: grid;
  font-size: 1em;
  justify-items: center;
  grid-template-columns: 1fr;
`;

const StyledUpdateLink = styled(Link)`
  &:hover {
    border: solid black 1px;
    padding-top: 30px;
  }
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  position: relative;
  top: 45px;
  right: -640px;
  &:hover {
    border: solid red 1px;
  }
`;

function AddCarList({ newCars, onDeleteCar, onToggleCompared }) {
  return (
    <StyledAddCarList role="list">
      {newCars
        .filter((car) => car.section == "myGarage")
        .map((car) => (
          <li key={car.id}>
            <StyledDeleteButton
              type="button"
              onClick={() => onDeleteCar(car.id)}
            >
              <Image src="/cross.png" alt="delete" width={40} height={40} />
            </StyledDeleteButton>
            <Image
              src={car.imageSource}
              alt="yourCar"
              width={700}
              height={350}
            />
            <StyledUpdateLink href={`/updateCar/${car.id}`}>
              <Image src="/pencil.png" alt="edit" width={40} height={40} />
            </StyledUpdateLink>
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
                newCars.filter((car) => car.isCompared).length > 1 &&
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
