import Compare from "@/components/Compare/Compare";

function ComparePage({ cars, onToggleFavorite }) {
  return (
    <>
      <Compare cars={cars} onToggleFavorite={onToggleFavorite} />
    </>
  );
}

export default ComparePage;
