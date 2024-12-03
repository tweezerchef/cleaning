import Image from "next/image";
import styles from "./css/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.halfCircle}></div>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
