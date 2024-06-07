import Header from "./_components/Header";
import Sidbar from "./_components/Sidbar";
import TopCards from "./_components/TopCards";
export default function Home() {
  return (
    <main className="min-h-screen text-black bg-gray-100">
      <Sidbar/>
      <Header />
      <TopCards/>
    </main>
  );
}
