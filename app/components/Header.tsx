import { Button } from "@/components/ui/button";
import Button2 from "./subComponents/Button";
import Image from "next/image";
import Hamburger from "./subComponents/Hamburger";
import styles from "./css/Header.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/sweep1.svg" alt="logo" width={100} height={100} />
        <h1 className={styles.title}>Naiomi Cleans</h1>
      </div>
      <div className={styles.middle}>
        <Button variant="default" color="error" className={styles.button}>
          Call Now
        </Button>
        {/* <Button2 /> */}
      </div>
      <div className={styles.menu}>
        <Hamburger />
      </div>
    </div>
  );
}
