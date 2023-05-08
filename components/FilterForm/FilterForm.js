import React, { useState } from "react";
import FilteredCarsList from "./FilteredCarsList";
import data from "../../data.json";

function FilterForm() {
  const [list, setList] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    //fetch input data
    const formData = new FormData(event.target);
    const inputData = Object.fromEntries(formData);
    //destructing
    const { CountryOfManufacture, BodyType, Fuel, minPrice, maxPrice } =
      inputData;

    //if the number is in the range
    function between(x, min, max) {
      return x >= min && x <= max;
    }

    setList(
      data.filter(
        (car) =>
          car.CountryOfManufacture === `${CountryOfManufacture}` &&
          car.bodyType === `${BodyType}` &&
          car.Fuel.includes(`${Fuel}`) &&
          between(car.Price, Number(`${minPrice}`), Number(`${maxPrice}`))
      )
    );
    event.target.reset();
    event.target.elements.CountryOfManufacture.focus();
  }
  return (
    <>
      <h1>Choose your Car</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="CountryOfManufacture">Country of Manufacture</label>
        <select name="CountryOfManufacture" id="CountryOfManufacture" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="United States">United States</option>
        </select>

        <label htmlFor="BodyType">Body Type</label>
        <select name="BodyType" id="BodyType" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </select>

        <label htmlFor="Fuel">Fuel</label>
        <select name="Fuel" id="Fuel" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
        </select>

        <label htmlFor="minPrice">Min Price (Euro):</label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          min="0"
          max="1000000"
          required
        />
        <label htmlFor="maxPrice">Max Price (Euro):</label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          min="0"
          max="1000000"
          required
        />

        <button type="Submit">Go</button>
      </form>

      <FilteredCarsList list={list} />
    </>
  );
}

export default FilterForm;
