import React from "react";
import styles from "../../styles/01.Navbar/Navbar.module.css";
import Image from "next/image";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <TopNav />
      <BottomNav />
    </div>
  );
};

export default Navbar;
