import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ onDeleteCar, onToggleCompared, cars }) {
  return (
    <AddCarForm
      onDeleteCar={onDeleteCar}
      onToggleCompared={onToggleCompared}
      cars={cars}
    />
  );
}

export default MyGaragePage;
