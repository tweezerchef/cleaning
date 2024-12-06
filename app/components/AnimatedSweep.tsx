"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./css/About.module.css";

export function AnimatedSweep() {
  const [isSweepVisible, setSweepVisible] = useState(false);
  const sweepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSweepVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    if (sweepRef.current) {
      observer.observe(sweepRef.current);
    }

    return () => {
      if (sweepRef.current) {
        observer.unobserve(sweepRef.current);
      }
    };
  }, []);

  return (
    <Image
      src="/sweep2.svg"
      width={180}
      height={180}
      alt="Decorative sweeping brush"
      className={`${styles.sweepAnimation} ${
        isSweepVisible ? styles.visible : ""
      }`}
      ref={sweepRef}
    />
  );
}
