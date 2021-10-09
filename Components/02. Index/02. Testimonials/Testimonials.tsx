import React from "react";
import styles from "../../../styles/02. Index/02. Testimonials/Testimonials.module.css";

const Testimonials: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
        <div className={styles.card}>a</div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
        <div className={styles.card}>b</div>
      </div>
    </div>
  );
};

export default Testimonials;
