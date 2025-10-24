import React from "react";
import styles from "./Bubble.module.css";

export default function Bubble({ children, side = "left", variant = "primary" }) {
  // side: "left" | "right"
  // variant: "primary" | "secondary"
  const cls = `${styles.bubble} ${side === "right" ? styles.right : styles.left} ${styles[variant]}`;
  return (
        <div className={styles.balloonBottomLeft}>
            ・・・
        </div>
  );
}
