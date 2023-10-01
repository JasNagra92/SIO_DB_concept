import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.main}>
      <h1>SIO Dashboard</h1>
      <nav>
        <Link href="/">Home</Link>

        <Link href="/helpful-links">Helpful Links</Link>
      </nav>
    </header>
  );
}
