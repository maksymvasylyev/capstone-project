import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ cars, onDeleteCar, onToggleCompared }) {
  return (
    <AddCarForm
      cars={cars}
      // onAddCar={onAddCar}
      onDeleteCar={onDeleteCar}
      onToggleCompared={onToggleCompared}
    />
  );
}

export default MyGaragePage;
