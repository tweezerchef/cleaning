import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      </div>
      <div className={styles.menu}>
        <h1 className={styles.menuItem}>Test</h1>
      </div>
    </div>
  );
}
