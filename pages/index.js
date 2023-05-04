import CarsList from "./components/CarsList/CarsList";
import useSWR from "swr";

export default function HomePage() {
  //fetch data from local db
  const { data, error, isLoading } = useSWR(`data.json`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  return (
    <div>
      <CarsList data={data} />
    </div>
  );
}
