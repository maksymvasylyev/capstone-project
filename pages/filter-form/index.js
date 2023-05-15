import FilterForm from "@/components/FilterForm/FilterForm";

function FilterPage({ cars, onToggleFavorite, onToggleCompared }) {
  return (
    <FilterForm
      cars={cars}
      onToggleFavorite={onToggleFavorite}
      onToggleCompared={onToggleCompared}
    />
  );
}

export default FilterPage;
