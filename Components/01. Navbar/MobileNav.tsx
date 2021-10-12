import React from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <Image
        alt="logo"
        src="/images/do-logo.png"
        height={41}
        width={41}
      ></Image>
      <div className={styles.menuBtn}>=</div>
    </div>
  );
};

export default MobileNav;
