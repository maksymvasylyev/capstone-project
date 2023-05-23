import { useRouter } from "next/router";
import UpdateCarForm from "@/components/UpdateCarForm/UpdateCarForm";

function UpdatePage({ cars, onEditCar }) {
  const router = useRouter();
  const { id } = router.query;

  const currentUpdatedCar = cars.find((car) => car.id === id);
  if (!currentUpdatedCar) {
    return console.log("No data");
  }

  return <UpdateCarForm car={currentUpdatedCar} onEditCar={onEditCar} />;
}

export default UpdatePage;
