import styles from "../styles/index.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header";

const DashboardPage = dynamic(() => import("../components/DashboardPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <DashboardPage />
    </main>
  );
}
