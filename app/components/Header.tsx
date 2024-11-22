import { Stack, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import styles from "./css/Header.module.css";
export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/sweep1.svg" alt="logo" width={100} height={100} />
        <Typography variant="h4">Naiomi Cleans</Typography>
      </div>
      <div className={styles.button}>
        <Button variant="contained">Call Now</Button>
      </div>
      <div className={styles.menu}>
        <Typography>Test</Typography>
      </div>
    </div>
  );
}
