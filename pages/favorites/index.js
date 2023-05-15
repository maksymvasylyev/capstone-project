import Favorites from "@/components/Favorites/Favorites";

function FavoritePage({ cars, onToggleFavorite }) {
  return (
    <>
      <Favorites cars={cars} onToggleFavorite={onToggleFavorite} />
    </>
  );
}

export default FavoritePage;
