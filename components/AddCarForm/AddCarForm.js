import React, { useState } from "react";
import StyledForm, { StyledSubmitButton } from "../FilterForm/StyledForm";
import styled from "styled-components";
import AddCarList from "./AddCarList";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import data from "../../data.json";
import {
  StyledAddCarButton,
  StyledHeader,
  StyledNewCarInput,
  StyledNewCarLabel,
  StyledNewCarSelect,
} from "./StyledAddCarForm";
import Image from "next/image";

function AddCarForm({
  onDeleteCar,
  onToggleCompared,
  cars,
  hideAddCarForm,
  showForm,
}) {
  // const [showForm, setShowForm] = useState(true);
  const [image, setImage] = useState(null);

  // const [cars, setCars] = useLocalStorageState("list", {
  //   defaultValue: data,
  // });

  const [newCars, setNewCars] = useLocalStorageState("list", {
    defaultValue: cars,
  });

  const [imageValue, setImageValue] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
    setImageValue(event.target.value);
  }

  async function handleAddCar(newMyCar) {
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

      const json = await response.json();
      setUploadedImages((uploadedImages) => [json, ...uploadedImages]);
      setNewCars([
        {
          id: uid(),
          imageSource: json.secure_url,
          isCompared: false,
          isFavorite: null,
          section: "myGarage",

          ...newMyCar,
        },
        ...newCars,
      ]);
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

    handleAddCar(newCarData);
    event.target.reset();
    hideAddCarForm();
  }
  return (
    <>
      <StyledHeader>Add Your Own Car</StyledHeader>
      {showForm ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledNewCarLabel htmlFor="avatar">
            Choose an image of your car, if you have
          </StyledNewCarLabel>
          <StyledNewCarInput
            type="file"
            id="avatar"
            onChange={handleFileChange}
            value={imageValue}
          />
          {image && (
            <Image
              src={URL.createObjectURL(image)}
              width={150}
              height={150}
              alt="Preview of the image to upload"
              style={{ objectFit: "cover" }}
            />
          )}
          <StyledNewCarLabel htmlFor="name">Name:</StyledNewCarLabel>
          <StyledNewCarInput name="name" id="name" />

          <StyledNewCarLabel htmlFor="model">Model:</StyledNewCarLabel>
          <StyledNewCarInput name="model" id="model" />

          <StyledNewCarLabel htmlFor="bodyType">Body Type:</StyledNewCarLabel>
          <StyledNewCarSelect name="bodyType" id="bodyType">
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

          <StyledSubmitButton type="Submit" disabled={!image}>
            {isUploading ? "Uploading …" : "Upload"}
          </StyledSubmitButton>
        </StyledForm>
      ) : (
        <StyledAddCarButton type="button" onClick={() => hideAddCarForm()}>
          Add New Car
        </StyledAddCarButton>
      )}
      <AddCarList
        newCars={newCars}
        onDeleteCar={onDeleteCar}
        onToggleCompared={onToggleCompared}
      />
    </>
  );
}

export default AddCarForm;
