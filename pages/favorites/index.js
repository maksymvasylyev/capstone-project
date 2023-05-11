import StyledList from "@/components/CarsList/StyledList";
import Favorites from "@/components/Favorites/Favorites";
import { StyledLikeButton } from "@/components/FilterForm/FilteredCarsList";
import Image from "next/image";
import Link from "next/link";

function FavoritePage({ cars, handleToggleFavorite }) {
  return (
    <>
      <Favorites cars={cars} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}

export default FavoritePage;
