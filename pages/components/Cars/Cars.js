import React from "react";
import useSWR from "swr";

function Cars() {
  //fetch data from local db
  const { data, error, isLoading } = useSWR(`data.json`);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <h1>{data[0].name}</h1>
    </div>
  );
}

export default Cars;
