import React from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navComputer}>
        <TopNav />
        <BottomNav />
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
