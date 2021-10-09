import React from "react";
import styles from "../../../styles/02. Index/01. Main/Stats.module.css";
import Image from "next/image";

const Stats: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <Image src="/images/stat1.svg" alt="logo" width={80} height={80} />
        <div className={styles.statCol}>
          <div className={styles.title}>602k</div>
          <div>Customers worldwide.</div>
        </div>
      </div>
      <div className={styles.stat}>
        <Image src="/images/stat2.svg" alt="logo" width={80} height={80} />
        <div className={styles.statCol}>
          <div className={styles.title}>185</div>
          <div>Countries we serve.</div>
        </div>
      </div>
      <div className={styles.stat}>
        <Image src="/images/stat3.svg" alt="logo" width={80} height={80} />
        <div className={styles.statCol}>
          <div className={styles.title}>99.99%</div>
          <div>Uptime SLA for VMs {"&"} Block Storage.</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
