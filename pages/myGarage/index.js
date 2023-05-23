import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({
  onDeleteCar,
  onToggleCompared,
  cars,
  hideAddCarForm,
  showForm,
}) {
  return (
    <AddCarForm
      onDeleteCar={onDeleteCar}
      onToggleCompared={onToggleCompared}
      cars={cars}
      hideAddCarForm={hideAddCarForm}
      showForm={showForm}
    />
  );
}

export default MyGaragePage;
