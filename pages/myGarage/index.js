import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ onDeleteCar, onToggleCompared }) {
  return (
    <AddCarForm onDeleteCar={onDeleteCar} onToggleCompared={onToggleCompared} />
  );
}

export default MyGaragePage;
