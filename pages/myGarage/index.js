import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({
  onDeleteCar,
  onToggleCompared,
  cars,
  toggleVisibilityOfAddCarForm,
  isFormShown,
}) {
  return (
    <AddCarForm
      onDeleteCar={onDeleteCar}
      onToggleCompared={onToggleCompared}
      cars={cars}
      toggleVisibilityOfAddCarForm={toggleVisibilityOfAddCarForm}
      isFormShown={isFormShown}
    />
  );
}

export default MyGaragePage;
