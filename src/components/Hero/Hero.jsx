import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Rishabh</h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 Years of experince using React and
          Nodejs.
          <br />
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:rishabh.itdev@gmail.com" className={styles.contactBtn}> Contact Me</a>
      </div>
      <img src={getImageUrl("hero/hii.png")} alt="hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
