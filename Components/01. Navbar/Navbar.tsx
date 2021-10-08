import React from "react";
import styles from "../../styles/01.Navbar/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topNav}>
        <div className={styles.topText}>
          Get expert guidance and resources to confidently migrate your
          workloads to DigitalOcean {">"}
        </div>
        <div className={styles.topLinks}>
          <div className={styles.topLink}>We{"'"}re Hiring</div>
          <div className={styles.topLink}>Blog</div>
          <div className={styles.topLink}>Docs</div>
          <div className={styles.topLink}>Get Support</div>
          <div className={styles.topLink}>Sales</div>
        </div>
      </div>
      <div className={styles.bottomNav}>Bottom</div>
    </div>
  );
};

export default Navbar;
