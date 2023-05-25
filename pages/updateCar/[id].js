import { useRouter } from "next/router";
import UpdateCarForm from "@/components/UpdateCarForm/UpdateCarForm";

function UpdatePage({
  cars,
  onEditCar,
  toggleVisibilityOfAddCarForm,
  isFormShown,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentUpdatedCar = cars.find((car) => car.id === id);
  if (!currentUpdatedCar) {
    console.log("No data");
    return <h1>{"You cannot proceed"}</h1>;
  }

  return (
    <UpdateCarForm
      car={currentUpdatedCar}
      onEditCar={onEditCar}
      toggleVisibilityOfAddCarForm={toggleVisibilityOfAddCarForm}
      isFormShown={isFormShown}
    />
  );
}

export default UpdatePage;
