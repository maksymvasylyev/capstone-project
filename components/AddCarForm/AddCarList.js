function AddCarList({ myCars }) {
  console.log(myCars);
  return (
    <ul>
      {myCars.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </ul>
  );
}

export default AddCarList;
