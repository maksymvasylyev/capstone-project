import Favorites from "@/components/Favorites/Favorites";

function FavoritePage({ cars, onToggleFavorite, onToggleCompared }) {
  return (
    <>
      <Favorites
        cars={cars}
        onToggleFavorite={onToggleFavorite}
        onToggleCompared={onToggleCompared}
      />
    </>
  );
}

export default FavoritePage;
