import { useRouter } from "next/router";
import {
  StyledHeader,
  StyledNewCarInput,
  StyledNewCarLabel,
  StyledNewCarSelect,
} from "../AddCarForm/AddCarForm.styled";
import StyledForm, { StyledSubmitButton } from "../FilterForm/Form.styled";

function UpdateCarForm({
  car,
  onEditCar,
  toggleVisibilityOfAddCarForm,
  isFormShown,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData);

    onEditCar(updatedData, car.id);

    router.push("/myGarage");
    // toggleVisibilityOfAddCarForm();
  }
  return (
    <>
      <StyledHeader>Edit Your Car</StyledHeader>

      <StyledForm onSubmit={handleSubmit}>
        <StyledNewCarLabel htmlFor="name">Name:</StyledNewCarLabel>
        <StyledNewCarInput name="name" id="name" defaultValue={car.name} />

        <StyledNewCarLabel htmlFor="model">Model:</StyledNewCarLabel>
        <StyledNewCarInput name="model" id="model" defaultValue={car.model} />

        <StyledNewCarLabel htmlFor="bodyType">Body Type:</StyledNewCarLabel>
        <StyledNewCarSelect
          name="bodyType"
          id="bodyType"
          defaultValue={car.bodyType}
        >
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
        <StyledNewCarSelect
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
        </StyledNewCarSelect>

        <StyledNewCarLabel htmlFor="acceleration">
          Acceleration (0-100km/h (s)):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="acceleration"
          id="acceleration"
          defaultValue={car.acceleration}
        />

        <StyledNewCarLabel htmlFor="Fuel">Fuel:</StyledNewCarLabel>
        <StyledNewCarSelect name="Fuel" defaultValue={car.Fuel} id="Fuel">
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
          defaultValue={car.FuelEconomy}
          id="FuelEconomy"
        />

        <StyledNewCarLabel htmlFor="TopSpeed">
          Top Speed (km/h):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="TopSpeed"
          defaultValue={car.TopSpeed}
          id="TopSpeed"
        />

        <StyledNewCarLabel htmlFor="Engine">Engine (L):</StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="Engine"
          defaultValue={car.Engine}
          id="Engine"
        />

        <StyledNewCarLabel htmlFor="Power">Power (HP):</StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          min={0}
          name="Power"
          defaultValue={car.Power}
          id="Power"
        />

        <StyledNewCarLabel htmlFor="CountryOfManufacture">
          Country of Manufacture:
        </StyledNewCarLabel>
        <StyledNewCarInput
          name="CountryOfManufacture"
          defaultValue={car.CountryOfManufacture}
          id="CountryOfManufacture"
        />

        <StyledNewCarLabel htmlFor="price">
          Approx. Price (Euro):
        </StyledNewCarLabel>
        <StyledNewCarInput
          type="number"
          name="price"
          defaultValue={car.price}
          id="price"
          min={1}
          max={900000000}
        />

        <StyledSubmitButton type="Submit">Update</StyledSubmitButton>
      </StyledForm>
    </>
  );
}

export default UpdateCarForm;
