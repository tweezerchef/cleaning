"use client";
import React from "react";
import styles from "./css/Button.module.css";

const Button = () => {
  const onClick = () => {
    console.log("Button clicked");
  };
  return (
    <button className={styles.button} onClick={onClick}>
      Call Now
    </button>
  );
};

export default Button;
