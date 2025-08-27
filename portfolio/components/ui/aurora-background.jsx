"use client";
import React from "react";
import styles from "./AuroraBackground.module.css";

export default function AuroraBackground({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aurora}>
        <div className={`${styles.layer} ${styles.layer1}`}></div>
        <div className={`${styles.layer} ${styles.layer2}`}></div>
        <div className={`${styles.layer} ${styles.layer3}`}></div>
        <div className={`${styles.layer} ${styles.layer4}`}></div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
