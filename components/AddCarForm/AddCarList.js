function AddCarList({ cars }) {
  return (
    <ul>
      {cars
        .filter((car) => car.section == "myGarage")
        .map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
    </ul>
  );
}

export default AddCarList;
