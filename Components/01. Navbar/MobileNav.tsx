import React from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <Image
        alt="logo"
        src="/images/do-logo.png"
        height={34}
        width={34}
      ></Image>
      <div>=</div>
    </div>
  );
};

export default MobileNav;
