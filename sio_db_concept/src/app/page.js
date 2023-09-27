import styles from "./page.module.css";
import DashboardPage from "./components/DashboardPage";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SIO Dashboard</h1>
      <DashboardPage />
    </main>
  );
}
