import React from 'react';
import styles from '../../../styles/02. Index/07. Get Started/GetStarted.module.css';

const GetStarted: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subDiv}>
        <div className={styles.leftCol}>
          <div className={styles.title}>Looking to migrate to DigitalOcean?</div>
          <div className={styles.subtitle}>Leverage free infrastructure credits, robust training, and technical support to ensure a worry-free migration</div>
        </div>
        <div className={styles.rightCol}>
          <button className={styles.btn}>Get started now</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;