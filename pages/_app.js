import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {

  const [isFormShown, setIsFormShown] = useState(true);

  const [cars, setCars] = useLocalStorageState("list", {
    defaultValue: [],
  });

  async function fetchCars() {
    const response = await fetch("/api/products");
    const fetchedData = await response.json();
    setCars(fetchedData);
  }
  useEffect(() => {
    fetchCars();
  }, []);

  if (!cars) {
    return "Loading...";
  }

  console.log(cars);

  // const { data } = useSWR("/api/products");

  // if (!data) {
  //   return <h1>Loading...</h1>;
  // }

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
      {/* <SWRConfig value={{ fetcher }}> */}
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
      {/* </SWRConfig> */}
    </Layout>
  );
}
