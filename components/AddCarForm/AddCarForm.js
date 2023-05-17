import React from "react";
import StyledForm, { StyledSubmitButton } from "../FilterForm/StyledForm";
import styled from "styled-components";
import AddCarList from "./AddCarList";

const StyledHeader = styled.h2`
  font-size: 1.7em;
`;
const StyledNewCarLabel = styled.label`
  color: black;
  margin: 0;
`;

const StyledNewCarSelect = styled.select`
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledNewCarInput = styled.input`
  margin-bottom: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function AddCarForm({ cars, onAddCar }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCarData = Object.fromEntries(formData);

    onAddCar(newCarData);
    event.target.reset();
  }
  return (
    <>
      <StyledHeader>Add Your Own Car</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledNewCarLabel htmlFor="name">Name:</StyledNewCarLabel>
        <StyledNewCarInput name="name" id="name" />

        <StyledNewCarLabel htmlFor="model">Model:</StyledNewCarLabel>
        <StyledNewCarInput name="model" id="model" />

        <StyledNewCarLabel htmlFor="bodyType">Body Type:</StyledNewCarLabel>
        <StyledNewCarSelect name="BodyType" id="BodyType">
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
          <option value="VAN">VAN</option>
          <option value="Cabriolet">Cabriolet</option>
        </StyledNewCarSelect>

        <StyledNewCarLabel htmlFor="wheelsDrive">
          Wheels Drive:
        </StyledNewCarLabel>
        <StyledNewCarSelect name="wheelsDrive" id="wheelsDrive">
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="awd">awd</option>
          <option value="rwd">rwd</option>
          <option value="fwd">fwd</option>
        </StyledNewCarSelect>

        <StyledNewCarLabel htmlFor="acceleration">
          Acceleration (0-100km/h (s)):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="acceleration"
          id="acceleration"
        />

        <StyledNewCarLabel htmlFor="Fuel">Fuel:</StyledNewCarLabel>
        <StyledNewCarSelect name="Fuel" id="Fuel">
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electro">Electro</option>
        </StyledNewCarSelect>

        <StyledNewCarLabel htmlFor="FuelEconomy">
          Fuel Economy (l/100km):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="FuelEconomy"
          id="FuelEconomy"
        />

        <StyledNewCarLabel htmlFor="TopSpeed">
          Top Speed (km/h):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="TopSpeed"
          id="TopSpeed"
        />

        <StyledNewCarLabel htmlFor="Engine">Engine (L):</StyledNewCarLabel>
        <StyledNewCarInput type="number" min={0} name="Engine" id="Engine" />

        <StyledNewCarLabel htmlFor="Power">Power (HP):</StyledNewCarLabel>
        <StyledNewCarInput type="number" min={0} name="Power" id="Power" />

        <StyledNewCarLabel htmlFor="CountryOfManufacture">
          Country of Manufacture:
        </StyledNewCarLabel>
        <StyledNewCarInput
          name="CountryOfManufacture"
          id="CountryOfManufacture"
        />

        <StyledNewCarLabel htmlFor="price">
          Approx. Price (Euro):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          name="price"
          id="price"
          min={1}
          max={900000000}
        />

        <StyledSubmitButton type="Submit">Go</StyledSubmitButton>
      </StyledForm>
      <AddCarList cars={cars} />
    </>
  );
}

export default AddCarForm;
