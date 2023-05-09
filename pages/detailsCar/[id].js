import { useRouter } from "next/router";
import data from "../../data.json";
import CarDetails from "@/components/CarsDetails/CarDetails";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const currentCar = data.find((car) => car.id === parseInt(id));
  if (!currentCar) {
    return console.log("No data");
  }

  //   const { name, model } = currentCar;

  console.log(currentCar);
  return (
    <>
      {/* <h1>{currentCar.name}</h1> */}
      <CarDetails car={currentCar} />
    </>
  );
}

export default DetailPage;
