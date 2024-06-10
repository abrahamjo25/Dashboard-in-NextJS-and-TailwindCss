import DataTable from "./_components/DataTable";
import Graph from "./_components/Graph";
import Header from "./_components/Header";
import Sidbar from "./_components/Sidbar";
import TopCards from "./_components/TopCards";
export default function Home() {
  const person = {
    name: "Abraham",
    age: 27,
  };

  return (
    <main className="min-h-screen text-black bg-gray-100">
      <Sidbar />
      <Header />
      <TopCards />
      <Graph />
      <DataTable />
    </main>
  );
}
