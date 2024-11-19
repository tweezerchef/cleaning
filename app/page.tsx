import Image from "next/image";
import styles from "./page.module.css";
import { SweepingWoman } from "./components/SweepingWoman";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <SweepingWoman />
      </main>
    </div>
  );
}
