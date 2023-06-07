import { StyledDescriptionList } from "../CarsDetails/CarDetails.styled";
import styled from "styled-components";
import {
  StyledCompareButton,
  StyledPictureDiv,
} from "../Favorites/Favorites.styled";
import { StyledLikeImage } from "../FilterForm/Form.styled";
import {
  StyledAddCarList,
  StyledDeleteButton,
  StyledUpdateLink,
} from "./AddCarForm.styled";
import Image from "next/image";

export const StyledMyCarImage = styled(Image)`
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 2px 20px var(--color-text);
  position: relative;
  right: -5px;
`;
export const StyledMyCarDescriptionH2 = styled.h2`
  color: var(--color-text);
  text-align: center;
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
              <StyledLikeImage
                src="/cross.png"
                alt="delete"
                width={30}
                height={30}
              />
            </StyledDeleteButton>
            <StyledPictureDiv>
              <StyledMyCarImage
                src={car.imageSource}
                alt="yourCar"
                width={360}
                height={180}
              />
            </StyledPictureDiv>
            <div>
              <StyledUpdateLink href={`/updateCar/${car.id}`}>
                <StyledLikeImage
                  src="/pencil.png"
                  alt="edit"
                  width={30}
                  height={30}
                />
              </StyledUpdateLink>
            </div>
            <StyledMyCarDescriptionH2>{car.name}</StyledMyCarDescriptionH2>
            <StyledMyCarDescriptionH2>{car.model}</StyledMyCarDescriptionH2>
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
              style={{ top: "20px", right: "-100px", marginBottom: "30px" }}
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
