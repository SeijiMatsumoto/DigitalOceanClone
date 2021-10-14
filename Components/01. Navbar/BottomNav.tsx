import React, { useState } from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";
import Image from "next/image";
import * as RBS from 'react-bootstrap';

const BottomNav: React.FC = () => {

  return (
    <div className={styles.bottomNav}>
      <div className={styles.width}>
        <Image
          alt="logo"
          src="/images/do-logo.png"
          height={40}
          width={40}
        ></Image>
        <div className={styles.navRow}>
          <div className={styles.navLinks}>
            <RBS.Dropdown className={styles.dropDown}>
              <RBS.Dropdown.Toggle className={styles.toggle}>
                Seiji Matsumoto
              </RBS.Dropdown.Toggle>

              <RBS.Dropdown.Menu>
                <RBS.Dropdown.Item href="https://seijimatsumoto.me" target="_blank">Portfolio</RBS.Dropdown.Item>
                <RBS.Dropdown.Item href='https://linkedin.com/in/matsumoto-seiji' target="_blank">LinkedIn</RBS.Dropdown.Item>
                <RBS.Dropdown.Item href="https://github.com/SeijiMatsumoto" target="_blank">GitHub</RBS.Dropdown.Item>
                <RBS.Dropdown.Item href="mailto:sejmoto@gmail.com" target="_blank">Email</RBS.Dropdown.Item>
              </RBS.Dropdown.Menu>
            </RBS.Dropdown>
            <div className={styles.navLink}>
              <div className={styles.navText}>Products</div>
              <div className={styles.navArrow}>▼</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.navText}>Solutions</div>
              <div className={styles.navArrow}>▼</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.navText}>Marketplace</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.navText}>Community</div>
              <div className={styles.navArrow}>▼</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.navText}>Pricing</div>
            </div>
          </div>
          <div className={styles.auth}>
            <div className={styles.login}>Login</div>
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
