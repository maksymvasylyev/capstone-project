import CarsList from "@/components/CarsList/CarsList";
import data from "@/data.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href="/filter-form" style={{ position: "fixed" }}>
        Filter to get exactly what you need
      </Link>
      <CarsList data={data} />
    </>
  );
}
