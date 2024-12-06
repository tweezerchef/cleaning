import styles from "./css/page.module.css";
import { About } from "./components/About";
import MockSection from "./components/MockSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.halfCircle}></div>
      <div className={styles.main}>
        <div className={styles.contentWrapper}>
          <About />
          <MockSection />
        </div>
      </div>
    </div>
  );
}
