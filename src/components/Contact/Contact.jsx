import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free To React Out!</p>
        </div>
        <ul className={styles.links}>
            <li  className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/><a href="mailto:rishabh.itdev@gmail.com">Email</a></li>
            <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/><a href="https://www.linkedin.com/in/rishabh-jaiswal-55a604178/">Linkedin</a></li>
            <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/><a href="https://github.com/rishabh-j18">Github</a></li>
        </ul>
    </footer>;
}