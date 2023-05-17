import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ cars, onAddCar, onDeleteCar, onToggleCompared }) {
  return (
    <AddCarForm
      cars={cars}
      onAddCar={onAddCar}
      onDeleteCar={onDeleteCar}
      onToggleCompared={onToggleCompared}
    />
  );
}

export default MyGaragePage;
