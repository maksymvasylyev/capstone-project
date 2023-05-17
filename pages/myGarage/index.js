import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ cars, onAddCar }) {
  return <AddCarForm cars={cars} onAddCar={onAddCar} />;
}

export default MyGaragePage;
