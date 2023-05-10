import FilteredCarsList from "./FilteredCarsList";
import data from "../../data.json";
import StyledForm from "./StyledForm";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

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
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  color: blue;
`;

const StyledSubmitButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 50%;
  color: white;
  padding: 15px 15px;
  position: relative;
  right: -200px;
  text-decoration: none;
  display: inline-block;
  font-size: 3rem;

  &:hover {
    background-color: orange;
  }
`;

const StyledResetButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 10%;
  color: white;
  padding: 15px 15px;
  position: relative;

  text-decoration: none;
  display: inline-block;
  font-size: 3rem;

  &:hover {
    background-color: orange;
  }
`;

const StyledH1Filter = styled.h1`
  color: red;
  text-align: center;
  display: flex;
  position: relative;
  border: 1px solid black;
  border-radius: 10%;
  width: 80%;
  margin: 10px auto 20px auto;
  padding: 20px;
  right: -100px;
`;

//if the number is in the range
function between(x, min, max) {
  return x >= min && x <= max;
}

function FilterForm() {
  const [list, setList] = useLocalStorageState("list", { defaultValue: data });

  function handleSubmit(event) {
    event.preventDefault();
    //fetch input data
    const formData = new FormData(event.target);
    const inputData = Object.fromEntries(formData);
    //destructing
    const { CountryOfManufacture, BodyType, Fuel, minPrice, maxPrice } =
      inputData;

    setList(
      data.filter(
        (car) =>
          car.CountryOfManufacture === CountryOfManufacture &&
          car.bodyType === BodyType &&
          car.Fuel.includes(Fuel) &&
          between(
            car.Price,
            Number(minPrice) || 1,
            Number(maxPrice) || 90000000000
          )
      )
    );
    event.target.reset();
  }

  return (
    <>
      <StyledH1Filter>Choose your Car</StyledH1Filter>
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

      <StyledResetButton type="button" onClick={() => setList(data)}>
        Clean search result
      </StyledResetButton>

      <FilteredCarsList list={list} />
    </>
  );
}

export default FilterForm;
