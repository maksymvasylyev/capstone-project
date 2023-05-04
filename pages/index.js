import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";

export default function HomePage() {
  return <CarsList data={data} />;
}
