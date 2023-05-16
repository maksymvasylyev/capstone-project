import AddCarForm from "@/components/AddCarForm/AddCarForm";

function MyGaragePage({ myCars, onAddCar }) {
  return <AddCarForm myCars={myCars} onAddCar={onAddCar} />;
}

export default MyGaragePage;
