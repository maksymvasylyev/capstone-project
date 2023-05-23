import { useRouter } from "next/router";
import UpdateCarForm from "@/components/UpdateCarForm/UpdateCarForm";

function UpdatePage({ cars }) {
  const router = useRouter();
  const { id } = router.query;

  const currentUpdatedCar = cars.find((car) => car.id === id);
  console.log(cars);
  console.log(currentUpdatedCar);
  if (!currentUpdatedCar) {
    return console.log("No data");
  }

  return <UpdateCarForm car={currentUpdatedCar} />;
}

export default UpdatePage;
