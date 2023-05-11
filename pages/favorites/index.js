import Favorites from "@/components/Favorites/Favorites";

function FavoritePage({ cars, handleToggleFavorite }) {
  return (
    <>
      <Favorites cars={cars} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}

export default FavoritePage;
