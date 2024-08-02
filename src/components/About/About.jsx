import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={} alt=""/> */}
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm Frontend developer with experience in building responsive and optimized
                sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            {/* <img src={} alt=""/> */}
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm Backend developer with experience in developing fast and optimized backend system API's.
                sites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
