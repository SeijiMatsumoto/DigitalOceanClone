import React from "react";
import styles from "../../../styles/02. Index/01. Main/Main.module.css";
import Image from "next/image";

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.text}>
          <div className={styles.topText}>The cloud is complex.</div>
          <div className={styles.topText}>We make it simple. </div>
          <div className={styles.bottomText}>
            The cloud computing services you need, with the predictable pricing,
            developer-friendly features, and scalability you’ll love.
          </div>
        </div>
        <div className={styles.signup}>
          <div className={styles.formDiv}>
            <div className={styles.title}>
              Welcome to DigitalOcean. Sign up to get started!
            </div>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="First name"
              />
              <input className={styles.input} type="text" placeholder="Email" />
              <input
                className={styles.input}
                type="text"
                placeholder="Password"
              />
              <span className={styles.buttons}>
                <div className={styles.left}>
                  <div className={styles.deployBtn}>Deploy in seconds</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.btn}>
                    <Image
                      src="/images/google.png"
                      alt="google"
                      height={40}
                      width={40}
                    ></Image>
                  </div>
                  <div className={styles.btn}>
                    <Image
                      src="/images/github.png"
                      alt="github"
                      height={30}
                      width={30}
                    ></Image>
                  </div>
                </div>
              </span>
            </form>
            <div className={styles.agreement}>
              By signing up you agree to the
              <div className={styles.terms}>Terms of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
