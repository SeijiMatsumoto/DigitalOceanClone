import React from "react";
import styles from "../../../styles/02. Index/04. Scale/Scale.module.css";

const Scale: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subCont}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.title}>Scale up with confidence</div>
            <div className={styles.description}>
              Keep costs in check even when you scale your apps with affordable,
              predictable pricing.
            </div>
            <div className={styles.description}>
              Expand your business using our 14 globally distributed data
              centers and a 99.99% uptime SLA.
            </div>
            <div className={styles.link}>View pricing {">"}</div>
          </div>
          <div className={styles.right}>Chart</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.stat}>
            <div className={styles.statCol}>
              <div className={styles.statTitle}>602k</div>
              <div className={styles.statDesc}>
                Customers building on DigitalOcean.
              </div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statCol}>
              <div className={styles.statTitle}>185</div>
              <div className={styles.statDesc}>
                Countries our customers are based in.
              </div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statCol}>
              <div className={styles.statTitle}>14</div>
              <div className={styles.statDesc}>
                Globally distributed datacenters.
              </div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statCol}>
              <div className={styles.statTitle}>99.99%</div>
              <div className={styles.statDesc}>
                Uptime SLA for Droplets and Block Storage.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomCont}>
        <div className={styles.iconDiv}>
          <img className={styles.icon} src="/images/icon.svg" />
        </div>
        <div className={styles.quote}>
          <div className={styles.quoteTop}>
            “We love the developer experience, we can accurately predict our
            costs, and can scale up or down as the traffic grows.”
          </div>
          <div className={styles.quoteBottom}>
            — Mahaboob Khan, Cofounder and CEO, Vidgyor
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
