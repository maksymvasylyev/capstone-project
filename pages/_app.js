import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import data from "../data.json";

export default function App({ Component, pageProps }) {
  const [cars, setCars] = useLocalStorageState("list", {
    defaultValue: data,
  });

  function handleToggleFavorite(id) {
    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, isFavorite: !car.isFavorite };
      } else return car;
    });
    setCars(updatedCars);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        cars={cars}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
