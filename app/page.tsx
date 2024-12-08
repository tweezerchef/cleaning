import styles from "./css/page.module.css";
import { About } from "./components/About";
import AboutDivider from "./components/AboutDivider";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import MockSection from "./components/MockSection";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.halfCircle}></div>
      <main className={styles.main}>
        <div className={styles.star}></div>
        <About />
        <AboutDivider />
        <h2>Services</h2>
        <Services />

        <Testimonial />
        <MockSection />
      </main>
    </div>
  );
}
