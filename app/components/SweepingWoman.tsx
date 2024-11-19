"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./css/SweepingWoman.module.css";

const images = ["/sweep1.svg", "/sweep2.svg", "/sweep3.svg", "/sweep4.svg"];

export const SweepingWoman: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);

  // Cycle through images every 250 milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 250); // Adjust the duration to control the speed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.container}
      animate={{ x: ["-150px", "100vw"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <img
        className={styles.sweepingWoman}
        src={images[imageIndex]}
        alt="Sweeping Woman"
      />
    </motion.div>
  );
};
