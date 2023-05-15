import Compare from "@/components/Compare/Compare";

function ComparePage({
  cars,
  onToggleFavorite,
  onToggleCompared,
  clearComparedList,
}) {
  return (
    <>
      <Compare
        cars={cars}
        onToggleFavorite={onToggleFavorite}
        onToggleCompared={onToggleCompared}
        clearComparedList={clearComparedList}
      />
    </>
  );
}

export default ComparePage;
