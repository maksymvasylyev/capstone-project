import React from "react";

function FilterForm() {
  return (
    <>
      <h1>Choose your Car</h1>
      <form>
        <label htmlFor="CountryOfManufacture">Country of Manufacture</label>
        <select name="CountryOfManufacture" id="CountryOfManufacture" required>
          <option selected disabled value="">
            --Make a choice--
          </option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="United States">United States</option>
        </select>

        <label htmlFor="BodyType">Body Type</label>
        <select name="BodyType" id="BodyType" required>
          <option selected disabled value="">
            --Make a choice--
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </select>

        <label htmlFor="Fuel">Fuel</label>
        <select name="Fuel" id="Fuel" required>
          <option selected disabled value="">
            --Make a choice--
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
        </select>

        <label htmlFor="PriceRange">Price Range (Euro)</label>
        <select name="PriceRange" id="PriceRange" required>
          <option selected disabled value="">
            --Make a choice--
          </option>
          <option value="30000-50000">30.000-50.000</option>
          <option value="50000-100000">50.000-100.000</option>
          <option value="over100000">Over 100.000</option>
        </select>
        <button type="Submit">Go</button>
      </form>
    </>
  );
}

export default FilterForm;
