import { useRouter } from "next/router";
import data from "../../data.json";
import CarDetails from "@/components/CarsDetails/CarDetails";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const currentCar = data.find((car) => car.id === parseInt(id));

  if (!currentCar) {
    console.log("No data");
    return <h1>{"No details are available"}</h1>;
  }

  return <CarDetails car={currentCar} />;
}

export default DetailPage;
