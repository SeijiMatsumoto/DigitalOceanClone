/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/02. Index/01. Main/Main.module.css";
import Image from "next/image";
import Stats from "./Stats";

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
                defaultValue="Seiji Matsumoto"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Email"
                defaultValue="sejmoto@gmail.com"
              />
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
                    <img
                      className={styles.img}
                      src="/images/google.png"
                      alt="google icon"
                    />
                  </div>
                  <div className={styles.btn}>
                    <img
                      className={styles.img}
                      src="/images/github.png"
                      alt="github icon"
                    />
                  </div>
                </div>
              </span>
            </form>
            <div className={styles.agreement}>
              By signing up you agree to the
              <u className={styles.terms}>Terms of Service</u>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Main;
