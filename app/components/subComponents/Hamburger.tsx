"use client";
import { useState } from "react";
import styles from "./css/Hamburger.module.css";

interface HamburgerProps {
  onToggle?: (isOpen: boolean) => void;
}

const Hamburger = ({ onToggle }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <div className={styles.hamburgerContainer}>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.menuActive : ""}`}>
        <ul className={styles.menuList}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
