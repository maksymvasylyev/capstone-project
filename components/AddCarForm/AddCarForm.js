import React, { useState } from "react";
import StyledForm, { StyledSubmitButton } from "../FilterForm/StyledForm";
import styled from "styled-components";
import AddCarList from "./AddCarList";
import Image from "next/image";

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

const StyledAddCarButton = styled.button`
  display: flex;
  position: relative;
  top: -10px;
  right: -70px;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  color: white;
  background: black;
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em red;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
`;

function AddCarForm({ cars, onAddCar, onDeleteCar, onToggleCompared }) {
  const [showForm, setShowForm] = useState(true);
  const [image, setImage] = useState(null);

  const [imageValue, setImageValue] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  function handleFileChange(event) {
    // Get the selected file from the event target
    const file = event.target.files[0];
    // Set the image state variable to the file
    setImage(file);

    setImageValue(event.target.value);
  }

  async function handleFileUpload() {
    setIsUploading(true);

    const formData = new FormData();

    formData.append("file", image);

    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      // Parse the response as JSON and add the image to the uploadedImages array
      const json = await response.json();
      setUploadedImages((uploadedImages) => [json, ...uploadedImages]);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setImage(null);
      setImageValue("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCarData = Object.fromEntries(formData);

    onAddCar(newCarData);
    handleFileUpload();
    event.target.reset();
    setShowForm(false);
  }
  return (
    <>
      <StyledHeader>Add Your Own Car</StyledHeader>
      {showForm ? (
        <StyledForm onSubmit={handleSubmit}>
          <p>
            <label htmlFor="avatar">Please choose an image</label>
          </p>
          <input
            type="file"
            id="avatar"
            onChange={handleFileChange}
            value={imageValue}
          />

          <StyledNewCarLabel htmlFor="name">Name:</StyledNewCarLabel>
          <StyledNewCarInput name="name" id="name" />

          <StyledNewCarLabel htmlFor="model">Model:</StyledNewCarLabel>
          <StyledNewCarInput name="model" id="model" />

          <StyledNewCarLabel htmlFor="bodyType">Body Type:</StyledNewCarLabel>
          <StyledNewCarSelect name="bodyType" id="bodyType" required>
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
          <StyledNewCarSelect name="wheelsDrive" id="wheelsDrive" required>
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
          <StyledNewCarSelect name="Fuel" id="Fuel" required>
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

          <StyledSubmitButton type="Submit" disabled={!image}>
            {isUploading ? "Uploading …" : "Upload"}
          </StyledSubmitButton>
        </StyledForm>
      ) : (
        <StyledAddCarButton type="button" onClick={() => setShowForm(true)}>
          Add New Car
        </StyledAddCarButton>
      )}
      <section>
        {uploadedImages &&
          uploadedImages.map((image) => (
            <Image
              key={image.public_id}
              src={image.secure_url}
              width={150}
              height={150}
              alt={image.public_id}
              style={{ objectFit: "cover" }}
            />
          ))}
      </section>
      <AddCarList
        cars={cars}
        onDeleteCar={onDeleteCar}
        onToggleCompared={onToggleCompared}
      />
    </>
  );
}

export default AddCarForm;
