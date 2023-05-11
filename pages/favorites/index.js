import Favorites from "@/components/Favorites/Favorites";
import { useState } from "react";

function FavoritePage({ cars, onToggleFavorite }) {
  const [filteredCars, setFilteredCars] = useState(cars);

  function handleToggleFavorite(id) {
    const updatedFavCars = filteredCars.map((car) => {
      if (car.id === id) {
        return { ...car, isFavorite: !car.isFavorite };
      } else return car;
    });
    setFilteredCars(updatedFavCars);
    onToggleFavorite(id);
  }
  return (
    <>
      <Favorites cars={cars} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}

export default FavoritePage;
