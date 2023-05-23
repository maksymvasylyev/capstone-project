import FilteredCarsList from "./FilteredCarsList";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import StyledForm, { StyledSubmitButton } from "../FilterForm/StyledForm";

const StyledSelect = styled.select`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  margin-top: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  color: blue;
`;

const StyledResetButton = styled.button`
  background-color: white;
  border: 3px solid black;
  color: black;
  border-radius: 10%;
  padding: 5px 10vw;
  position: relative;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

//if the number is in the range
function between(x, min, max) {
  return x >= min && x <= max;
}

function FilterForm({ cars, onToggleFavorite, onToggleCompared }) {
  const [ourFilterData, setOurFilterData] = useLocalStorageState(null);

  const filteredCars = ourFilterData
    ? cars.filter(
        (car) =>
          car.section !== "myGarage" &&
          car.CountryOfManufacture === ourFilterData.CountryOfManufacture &&
          car.bodyType === ourFilterData.BodyType &&
          car.Fuel.includes(ourFilterData.Fuel) &&
          between(
            car.Price,
            Number(ourFilterData.minPrice) || 1,
            Number(ourFilterData.maxPrice) || 90000000000
          )
      )
    : cars;

  function handleSubmit(event) {
    event.preventDefault();
    //fetch input data
    const formData = new FormData(event.target);
    const inputData = Object.fromEntries(formData);
    setOurFilterData(inputData);

    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="CountryOfManufacture">
          Country of Manufacture
        </StyledLabel>
        <StyledSelect
          name="CountryOfManufacture"
          id="CountryOfManufacture"
          required
        >
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="United States">United States</option>
        </StyledSelect>

        <StyledLabel htmlFor="BodyType">Body Type</StyledLabel>
        <StyledSelect name="BodyType" id="BodyType" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </StyledSelect>

        <StyledLabel htmlFor="Fuel">Fuel</StyledLabel>
        <StyledSelect name="Fuel" id="Fuel" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
        </StyledSelect>

        <StyledLabel htmlFor="minPrice">Min Price (Euro):</StyledLabel>
        <StyledInput type="number" name="minPrice" id="minPrice" min={1} />
        <StyledLabel htmlFor="maxPrice">Max Price (Euro):</StyledLabel>
        <StyledInput type="number" name="maxPrice" id="maxPrice" />

        <StyledSubmitButton type="Submit">Go</StyledSubmitButton>
      </StyledForm>

      <StyledResetButton type="button" onClick={() => setOurFilterData(null)}>
        Clean search result
      </StyledResetButton>

      <FilteredCarsList
        cars={cars}
        list={filteredCars}
        onToggleFavorite={onToggleFavorite}
        onToggleCompared={onToggleCompared}
      />
    </>
  );
}

export default FilterForm;
