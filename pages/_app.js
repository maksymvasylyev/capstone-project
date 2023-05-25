import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import data from "../data.json";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isFormShown, setIsFormShown] = useState(true);
  const [cars, setCars] = useLocalStorageState("list", {
    defaultValue: data,
  });

  const router = useRouter();
  function handleToggleFavorite(id) {
    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, isFavorite: !car.isFavorite };
      } else return car;
    });
    setCars(updatedCars);
  }

  function toggleVisibilityOfAddCarForm() {
    setIsFormShown(!isFormShown);
  }

  function handleToggleCompared(id) {
    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, isCompared: !car.isCompared };
      } else return car;
    });
    setCars(updatedCars);
  }

  function clearComparedList() {
    const clearComparedCars = cars.map((car) => {
      if (car.isCompared) {
        return { ...car, isCompared: !car.isCompared };
      } else return car;
    });
    setCars(clearComparedCars);
    router.push("/filter-form");
  }

  function handleDeleteCar(id) {
    if (confirm("Are you sure you want to delete this car?")) {
      setCars(cars.filter((car) => car.id !== id));
    }
  }

  function handleEditCar(updatedCar, id) {
    const updatedMyCars = cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          ...updatedCar,
        };
      } else return car;
    });
    setCars(updatedMyCars);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        cars={cars}
        onToggleFavorite={handleToggleFavorite}
        onToggleCompared={handleToggleCompared}
        clearComparedList={clearComparedList}
        onDeleteCar={handleDeleteCar}
        onEditCar={handleEditCar}
        toggleVisibilityOfAddCarForm={toggleVisibilityOfAddCarForm}
        isFormShown={isFormShown}
      />
    </Layout>
  );
}
