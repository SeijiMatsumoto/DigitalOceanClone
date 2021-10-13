import React from 'react';
import styles from '../../../styles/02. Index/05. Community/Community.module.css';

const Community: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subDiv}>
        <div className={styles.textDiv}>
          <div className={styles.title}>Build alongside a robust and supportive community like you</div>
          <div className={styles.desc}>Quickly learn new tech concepts, programming languages, and get answers to your questions from a vibrant developer community.</div>
          <button className={styles.btn}>Explore the community</button>
        </div>
        <div className={styles.statsDiv}>
          <div className={styles.stat}>
            <div className={styles.statNum}>3K+</div>
            <div className={styles.statDesc}>In-depth technical tutorials for developers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>3.5M</div>
            <div className={styles.statDesc}>Visits per month to our community site</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>170K</div>
            <div className={styles.statDesc}>Participants in our 2020 hackathon</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>30K+</div>
            <div className={styles.statDesc}>Questions answered in our community</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;