import {
  StyledDescriptionBackLink,
  StyledDescriptionList,
} from "./CarDetails.styled";
import { StyledImage } from "../Favorites/Favorites.styled";
import { StyledLikeImage } from "../FilterForm/Form.styled";
import { StyledDescriptionH2 } from "../AddCarForm/AddCarForm.styled";

function CarDetails({ car }) {
  return (
    <>
      <StyledDescriptionBackLink href="/filter-form">
        <StyledLikeImage
          src={"/left-arrow.png"}
          alt="liked"
          width={40}
          height={40}
        />
      </StyledDescriptionBackLink>
      <StyledImage src={car.imageSource} alt="car" width={600} height={300} />
      <StyledDescriptionH2>{car.name}</StyledDescriptionH2>
      <StyledDescriptionH2>{car.model}</StyledDescriptionH2>
      <StyledDescriptionList>
        <li>Body Type: {car.bodyType}</li>
        <li>Wheels Drive: {car.wheelsDrive}</li>
        <li>Acceleration (0-100km/h (s)): {car.acceleration}</li>
        <li>
          Fuel:{" "}
          {car.Fuel.length < 2
            ? `${car.Fuel[0]}`
            : `${car.Fuel[0]}, ${car.Fuel[1]}`}
        </li>
        <li>Fuel Economy (l/100km): {car.FuelEconomy}</li>
        <li>Top Speed (km/h): {car.TopSpeed}</li>
        <li>Engine (L): {car.Engine}</li>
        <li>Power (HP): {car.Power}</li>
        <li>Price (Euro): {car.Price}</li>
        <li>Country of Manufacture: {car.CountryOfManufacture}</li>
      </StyledDescriptionList>
    </>
  );
}

export default CarDetails;
