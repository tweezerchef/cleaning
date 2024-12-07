import styles from "./css/page.module.css";
import { About } from "./components/About";
import AboutDivider from "./components/AboutDivider";
import { Services } from "./components/Services";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.halfCircle}></div>
      <main className={styles.main}>
        <About />
        <AboutDivider />
        <h2>Services</h2>
        <Services />
      </main>
    </div>
  );
}
