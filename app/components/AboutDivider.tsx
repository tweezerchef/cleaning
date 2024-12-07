import Image from "next/image";
import styles from "./css/AboutDivider.module.css";

const AboutDivider = () => {
  const sweepPatterns = [
    "/sweep1.svg",
    "/sweep2.svg",
    "/sweep3.svg",
    "/sweep4.svg",
  ];

  return (
    <div className={styles.dividerContainer}>
      <div className={styles.iconRow}>
        {[...Array(12)].map((_, index) => (
          <Image
            key={index}
            src={sweepPatterns[index % 4]} // This will cycle through the 4 patterns
            alt="decorative cleaning icon"
            width={35}
            height={35}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutDivider;
