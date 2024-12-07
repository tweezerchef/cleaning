"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./css/AboutDivider.module.css";

const AboutDivider = () => {
  const { scrollYProgress } = useScroll();
  const xPosition = useTransform(
    scrollYProgress,
    [0, 0.5], // Input range (scroll progress)
    ["-100%", "0%"] // Output range (x position)
  );

  const sweepPatterns = [
    "/sweep1.svg",
    "/sweep2.svg",
    "/sweep3.svg",
    "/sweep4.svg",
  ];

  return (
    <div className={styles.dividerContainer}>
      <motion.div className={styles.iconRow} style={{ x: xPosition }}>
        {[...Array(12)].map((_, index) => (
          <Image
            key={index}
            src={sweepPatterns[index % 4]}
            alt="decorative cleaning icon"
            width={35}
            height={35}
            className={styles.icon}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AboutDivider;
