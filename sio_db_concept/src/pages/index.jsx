import dynamic from "next/dynamic";
import Sidebar from "../components/Sidebar";

const DashboardPage = dynamic(() => import("../components/DashboardPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <DashboardPage />
    </main>
  );
}
