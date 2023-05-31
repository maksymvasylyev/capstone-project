import { StyledDescriptionList } from "../CarsDetails/CarDetails.styled";
import styled from "styled-components";
import {
  StyledCompareButton,
  StyledImage,
} from "../Favorites/Favorites.styled";
import Link from "next/link";
import { StyledLikeImage } from "../FilterForm/Form.styled";
import {
  StyledAddCarList,
  StyledDeleteButton,
  StyledDescriptionH2,
  StyledUpdateLink,
} from "./AddCarForm.styled";

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
              <StyledLikeImage
                style={{ top: "10px" }}
                src="/cross.png"
                alt="delete"
                width={40}
                height={40}
              />
            </StyledDeleteButton>
            <StyledImage
              src={car.imageSource}
              alt="yourCar"
              width={700}
              height={350}
            />
            <div>
              <StyledUpdateLink href={`/updateCar/${car.id}`}>
                <StyledLikeImage
                  src="/pencil.png"
                  alt="edit"
                  width={40}
                  height={40}
                />
              </StyledUpdateLink>
            </div>
            <StyledDescriptionH2>{car.name}</StyledDescriptionH2>
            <StyledDescriptionH2>{car.model}</StyledDescriptionH2>
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
              style={{ top: "20px", right: "-250px", marginBottom: "30px" }}
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
