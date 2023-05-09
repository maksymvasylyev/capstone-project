import FilteredCarsList from "./FilteredCarsList";
import data from "../../data.json";
import StyledForm from "./StyledForm";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const StyledSelect = styled.select`
  height: "50px";
  width: 80%;
  font-size: 1.5rem;
  text-align: center;
`;

const StyledInput = styled.input`
  height: 50px;
  width: 80%;
  font-size: 2rem;
  text-align: center;
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
`;

//if the number is in the range
function between(x, min, max) {
  return x >= min && x <= max;
}

function FilterForm() {
  const [list, setList] = useLocalStorageState(data, { defaultValue: [] });

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
          between(car.Price, Number(minPrice), Number(maxPrice))
      )
    );
    event.target.reset();
    // event.target.elements.CountryOfManufacture.focus();
  }
  return (
    <>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          border: "1px solid black",
          borderRadius: "10%",
          width: "80%",
          margin: "10px auto 20px auto",
          padding: "20px",
        }}
      >
        Choose your Car
      </h1>
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
        <StyledInput type="number" name="minPrice" id="minPrice" required />
        <StyledLabel htmlFor="maxPrice">Max Price (Euro):</StyledLabel>
        <StyledInput type="number" name="maxPrice" id="maxPrice" required />

        <StyledSubmitButton type="Submit">Go</StyledSubmitButton>
      </StyledForm>

      <FilteredCarsList list={list} />
    </>
  );
}

export default FilterForm;
