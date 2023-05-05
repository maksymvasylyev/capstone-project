import React, { useState } from "react";
import Image from "next/image";
import FilteredCarsList from "./FilteredCarsList";
import data from "../../data.json";

function FilterForm() {
  const [list, setList] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.elements.CountryOfManufacture.value);
    const formData = new FormData(event.target);
    const inputData = Object.fromEntries(formData);
    const { CountryOfManufacture, BodyType, Fuel, PriceRange } = inputData;
    console.log(CountryOfManufacture);
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

        <label htmlFor="PriceRange">Price Range (Euro)</label>
        <select name="PriceRange" id="PriceRange" required>
          <option defaultValue value="">
            --Make a choice--
          </option>
          <option value="30000-50000">30.000-50.000</option>
          <option value="50000-100000">50.000-100.000</option>
          <option value="over100000">Over 100.000</option>
        </select>
        <button type="Submit">Go</button>
      </form>
      <ul>
        {data
          .filter(
            (car) =>
              car.CountryOfManufacture === "Germany" && car.bodyType === "Sedan"
          )
          .map((car) => (
            <li key={car.id}>
              <Image
                src={car.imageSource}
                alt={car.model}
                width={400}
                height={200}
              />
              <div>
                {car.name} {car.model}
              </div>
            </li>
          ))}
      </ul>

      <FilteredCarsList data={data} />
    </>
  );
}

export default FilterForm;
