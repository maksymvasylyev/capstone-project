import { useRouter } from "next/router";
import data from "../../data.json";
import CarDetails from "@/components/CarsDetails/CarDetails";

function DetailPage() {
  return <CarDetails car={currentCar} />;
}

export default DetailPage;
