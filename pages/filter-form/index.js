import FilterForm from "@/components/FilterForm/FilterForm";

function FilterPage({ cars, onToggleFavorite }) {
  return <FilterForm cars={cars} onToggleFavorite={onToggleFavorite} />;
}

export default FilterPage;
