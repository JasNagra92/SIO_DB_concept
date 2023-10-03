import dynamic from "next/dynamic";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

const DashboardPage = dynamic(() => import("../components/DashboardPage"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [displayedTables, setDisplayedTables] = useState([]);

  useEffect(() => {
    setDisplayedTables(["BCWS", "Regional", "DriveBC"]);
  }, []);

  const toggleTable = (table) => {
    if (displayedTables.includes(table)) {
      setDisplayedTables(displayedTables.filter((t) => t !== table));
    } else {
      setDisplayedTables([...displayedTables, table]);
    }
  };

  return (
    <Layout toggleTable={toggleTable} displayedTables={displayedTables}>
      {!DashboardPage.isFallback && (
        <DashboardPage displayedTables={displayedTables} />
      )}
    </Layout>
  );
}
