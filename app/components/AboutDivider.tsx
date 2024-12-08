"use client";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./css/AboutDivider.module.css";
import { useRef } from "react";

const AboutDivider = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xRange = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5, 0.6],
    ["-600%", "-200%", "-100%", "-50%", "0%"]
  );

  const x = useSpring(xRange, {
    stiffness: 50,
    damping: 20,
  });

  const sweepPatterns = [
    "/sweep1.svg",
    "/sweep2.svg",
    "/sweep3.svg",
    "/sweep4.svg",
  ];

  return (
    <div ref={ref} className={styles.dividerContainer}>
      <motion.div className={styles.iconRow} style={{ x }}>
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
