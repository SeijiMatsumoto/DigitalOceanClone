import React from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";

const TopNav: React.FC = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.width}>
        <a href='https://docs.digitalocean.com/products/kubernetes/how-to/create-ha-clusters' className={styles.topText}>
          New Control Plane now available for DigitalOcean Kubernetes with High Availability! {">"}
        </a>
        <div className={styles.topLinks}>
          <a href='https://www.digitalocean.com/careers/' className={styles.topLink}>We{"'"}re Hiring</a>
          <a href='https://www.digitalocean.com/blog/' className={styles.topLink}>Blog</a>
          <a href='https://docs.digitalocean.com/products/' className={styles.topLink}>Docs</a>
          <a href='https://www.digitalocean.com/support/' className={styles.topLink}>Get Support</a>
          <a href='https://www.digitalocean.com/company/contact/sales/' className={styles.topLink}>Sales</a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
