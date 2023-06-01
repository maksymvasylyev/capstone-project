import { useRouter } from "next/router";
import StyledForm, {
  StyledHeader,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledSubmitButton,
} from "../FilterForm/Form.styled";
import styled from "styled-components";

const StyledUpdateDiv = styled.div`
  display: grid;
  width: 700px;
  grid-template-columns: 1fr;
`;

const StyledUpdateHeader = styled.h2`
  font-size: 1.7em;
  color: var(--color-text);
  text-align: center;
  margin: 10px auto 10px auto;
`;
function UpdateCarForm({ car, onEditCar }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData);

    onEditCar(updatedData, car.id);

    router.push("/myGarage");
  }

  return (
    <StyledUpdateDiv>
      <StyledHeader>Edit Your Car</StyledHeader>

      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput name="name" id="name" defaultValue={car.name} />

        <StyledLabel htmlFor="model">Model:</StyledLabel>
        <StyledInput name="model" id="model" defaultValue={car.model} />

        <StyledLabel htmlFor="bodyType">Body Type:</StyledLabel>
        <StyledSelect name="bodyType" id="bodyType" defaultValue={car.bodyType}>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
          <option value="VAN">VAN</option>
          <option value="Cabriolet">Cabriolet</option>
        </StyledSelect>

        <StyledLabel htmlFor="wheelsDrive">Wheels Drive:</StyledLabel>
        <StyledSelect
          name="wheelsDrive"
          id="wheelsDrive"
          defaultValue={car.wheelsDrive}
        >
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="awd">awd</option>
          <option value="rwd">rwd</option>
          <option value="fwd">fwd</option>
        </StyledSelect>

        <StyledLabel htmlFor="acceleration">
          Acceleration (0-100km/h (s)):
        </StyledLabel>
        <StyledInput
          type="number"
          min={0}
          name="acceleration"
          id="acceleration"
          defaultValue={car.acceleration}
        />

        <StyledLabel htmlFor="Fuel">Fuel:</StyledLabel>
        <StyledSelect name="Fuel" defaultValue={car.Fuel} id="Fuel">
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electro">Electro</option>
        </StyledSelect>

        <StyledLabel htmlFor="FuelEconomy">Fuel Economy (l/100km):</StyledLabel>
        <StyledInput
          type="number"
          min={0}
          name="FuelEconomy"
          defaultValue={car.FuelEconomy}
          id="FuelEconomy"
        />

        <StyledLabel htmlFor="TopSpeed">Top Speed (km/h):</StyledLabel>
        <StyledInput
          type="number"
          min={0}
          name="TopSpeed"
          defaultValue={car.TopSpeed}
          id="TopSpeed"
        />

        <StyledLabel htmlFor="Engine">Engine (L):</StyledLabel>
        <StyledInput
          type="number"
          min={0}
          name="Engine"
          defaultValue={car.Engine}
          id="Engine"
        />

        <StyledLabel htmlFor="Power">Power (HP):</StyledLabel>
        <StyledInput
          type="number"
          min={0}
          name="Power"
          defaultValue={car.Power}
          id="Power"
        />

        <StyledLabel htmlFor="CountryOfManufacture">
          Country of Manufacture:
        </StyledLabel>
        <StyledInput
          name="CountryOfManufacture"
          defaultValue={car.CountryOfManufacture}
          id="CountryOfManufacture"
        />

        <StyledLabel htmlFor="price">Approx. Price (Euro):</StyledLabel>
        <StyledInput
          type="number"
          name="price"
          defaultValue={car.price}
          id="price"
          min={1}
          max={900000000}
        />

        <StyledSubmitButton
          style={{ top: "0px", left: "5px", marginTop: "10px" }}
          type="Submit"
        >
          Update
        </StyledSubmitButton>
      </StyledForm>
    </StyledUpdateDiv>
  );
}

export default UpdateCarForm;
