/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/02. Index/03. Cloud Computing/CloudComputing.module.css";
import Image from "next/image";
const UnderCloud: React.FC = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.col1}>
        <img
          className={styles.terminal}
          alt="terminal"
          src="/images/terminal.svg"
        />
      </div>
      <div className={styles.col2}>
        <img
          className={styles.droplet}
          alt="droplet"
          src="/images/droplet.svg"
        />
        <div className={styles.row}>
          <div className={styles.CEO}>
            “We were able to scale our application by almost 250% while keeping
            costs the same as what we spent at the beginning.” — Ravi Mittal,
            CEO, Vuukle
          </div>
          <div className={styles.icon}>
            <img src="/images/vuukle.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderCloud;
