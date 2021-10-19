import React from 'react';
import styles from '../../../styles/02. Index/07. Get Started/GetStarted.module.css';

const GetStarted: React.FC = () => {

  const contact = () => {
    window.open('mailto:sejmoto@gmail.com')
  }
  return (
    <div className={styles.container}>
      <div className={styles.subDiv}>
        <div className={styles.leftCol}>
          <div className={styles.title}>Looking for a Frontend Software Engineer?</div>
          <div className={styles.subtitle}>Look no further. Seiji Matsumoto is the perfect fit for this role.</div>
        </div>
        <div className={styles.rightCol}>
          <button aria-label='link to contact Seiji' className={styles.btn} onClick={contact}>Contact Seiji</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;