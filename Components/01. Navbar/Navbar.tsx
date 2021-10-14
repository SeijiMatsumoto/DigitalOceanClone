import React, { useState } from "react";
import styles from "../../styles/01. Navbar/Navbar.module.css";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  // const [showSeiji, setShowSeiji] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.navComputer}>
        <TopNav />
        <BottomNav />
        {/* {showSeiji ? <div className={styles.dropDown}>hello</div> : null} */}

      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
