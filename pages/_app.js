import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import data from "../data.json";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { uid } from "uid";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cars, setCars] = useLocalStorageState("list", {
    defaultValue: data,
  });
  const [myCars, setMyCars] = useLocalStorageState("carsList", {
    defaultValue: [],
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

  function handleAddCar(newCar) {
    setMyCars([...myCars, { id: uid(), ...newCar }]);
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
        onAddCar={handleAddCar}
        myCars={myCars}
      />
    </Layout>
  );
}
