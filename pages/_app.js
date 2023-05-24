import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import data from "../data.json";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(true);
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

  function hideAddCarForm() {
    setShowForm(!showForm);
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
    router.push("/favorites");
  }

  function handleDeleteCar(id) {
    alert("Are you sure you want to delete?");
    setCars(cars.filter((car) => car.id !== id));
  }

  function handleEditCar(updatedCar, id) {
    console.log(id);
    const updatedMyCars = cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          ...updatedCar,
        };
      } else return car;
    });
    setCars(updatedMyCars);
    console.log(cars);
  }

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          cars={cars}
          onToggleFavorite={handleToggleFavorite}
          onToggleCompared={handleToggleCompared}
          clearComparedList={clearComparedList}
          onDeleteCar={handleDeleteCar}
          onEditCar={handleEditCar}
          hideAddCarForm={hideAddCarForm}
          showForm={showForm}
        />
      </SWRConfig>
    </Layout>
  );
}
