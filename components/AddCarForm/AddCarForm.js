import React, { useState } from "react";
import StyledForm, {
  StyledFormDiv,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledSubmitButton,
} from "../FilterForm/Form.styled";
import AddCarList from "./AddCarList";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledAddCarButton,
  StyledHeader,
  StyledNewCarLabel,
} from "./AddCarForm.styled";
import Image from "next/image";
import { StyledCompareButton } from "../Favorites/Favorites.styled";

function AddCarForm({
  onDeleteCar,
  onToggleCompared,
  cars,
  toggleVisibilityOfAddCarForm,
  isFormShown,
}) {
  const [image, setImage] = useState(null);

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
          imageSource: image ? json.secure_url : "/myCarPicture.jpeg",
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
    toggleVisibilityOfAddCarForm();
  }
  console.log(newCars.filter((car) => car.section === "myGarage").length);
  return (
    <StyledFormDiv>
      <StyledHeader>Add Your Own Car</StyledHeader>

      {isFormShown ? (
        <>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="avatar">
              Choose an image of your car, if you have
            </StyledLabel>
            <StyledInput
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
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput name="name" id="name" />

            <StyledLabel htmlFor="model">Model:</StyledLabel>
            <StyledInput name="model" id="model" />

            <StyledLabel htmlFor="bodyType">Body Type:</StyledLabel>
            <StyledSelect name="bodyType" id="bodyType">
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
            <StyledSelect name="wheelsDrive" id="wheelsDrive">
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
            />

            <StyledLabel htmlFor="Fuel">Fuel:</StyledLabel>
            <StyledSelect name="Fuel" id="Fuel">
              <option defaultValue value="">
                --Make a choice--
              </option>
              <option value="Benzin">Benzin</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electro">Electro</option>
            </StyledSelect>

            <StyledLabel htmlFor="FuelEconomy">
              Fuel Economy (l/100km):
            </StyledLabel>
            <StyledInput
              type="number"
              min={0}
              name="FuelEconomy"
              id="FuelEconomy"
            />

            <StyledLabel htmlFor="TopSpeed">Top Speed (km/h):</StyledLabel>
            <StyledInput type="number" min={0} name="TopSpeed" id="TopSpeed" />

            <StyledLabel htmlFor="Engine">Engine (L):</StyledLabel>
            <StyledInput type="number" min={0} name="Engine" id="Engine" />

            <StyledLabel htmlFor="Power">Power (HP):</StyledLabel>
            <StyledInput type="number" min={0} name="Power" id="Power" />

            <StyledLabel htmlFor="CountryOfManufacture">
              Country of Manufacture:
            </StyledLabel>
            <StyledInput
              name="CountryOfManufacture"
              id="CountryOfManufacture"
            />

            <StyledLabel htmlFor="price">Approx. Price (Euro):</StyledLabel>
            <StyledInput
              type="number"
              name="price"
              id="price"
              min={1}
              max={900000000}
            />

            <StyledSubmitButton
              style={{ left: "0px", marginBottom: "100px" }}
              type="Submit"
            >
              {isUploading ? "Uploading …" : "Upload"}
            </StyledSubmitButton>
          </StyledForm>
          <StyledAddCarButton onClick={() => toggleVisibilityOfAddCarForm()}>
            Hide Form
          </StyledAddCarButton>
        </>
      ) : (
        <StyledAddCarButton
          type="button"
          onClick={() => toggleVisibilityOfAddCarForm()}
        >
          Add New Car
        </StyledAddCarButton>
      )}
      <AddCarList
        newCars={newCars}
        onDeleteCar={onDeleteCar}
        onToggleCompared={onToggleCompared}
      />
    </StyledFormDiv>
  );
}

export default AddCarForm;
