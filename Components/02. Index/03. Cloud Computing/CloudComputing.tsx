import React from "react";
import styles from "../../../styles/02. Index/03. Cloud Computing/CloudComputing.module.css";

const CloudComputing: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subCont}>
        <div className={styles.title}>
          Cloud computing with simplicity at its core
        </div>
        <div className={styles.paragraphs}>
          <div className={styles.desc}>
            <div className={styles.text}>
              Build robust applications using a comprehensive portfolio of
              compute, storage, database and networking products.
            </div>
            <div className={styles.link}>Explore our products {">"}</div>
          </div>
          <div className={styles.desc2}>
            <div className={styles.text}>
              Our simple UI, CLI, API, and docs enable you to spend time on your
              business while we focus on the infrastructure.
            </div>
            <div className={styles.link}>Read the docs {">"}</div>
          </div>
        </div>
        <video autoPlay loop className={styles.video}>
          <source src="/control-panel-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CloudComputing;
