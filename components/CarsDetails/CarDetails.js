import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  StyledDescriptionBackLink,
  StyledDescriptionList,
} from "./StyledCarDetails";

function CarDetails({ car }) {
  return (
    <>
      <div>
        <StyledDescriptionBackLink href="/filter-form">
          <Image src={"/left-arrow.png"} alt="liked" width={40} height={40} />
        </StyledDescriptionBackLink>
      </div>
      <Image src={car.imageSource} alt="car" width={600} height={300} />
      <h1>{car.name}</h1>
      <h2>{car.model}</h2>
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
