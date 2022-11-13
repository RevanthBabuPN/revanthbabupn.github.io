import React from "react";

import styles from "./About.module.css";

const About = (props) => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-info"]}>
        <h1 className={styles["name"]}>{props.name}</h1>
        <p className={styles["description"]}>{props.description}</p>
      </div>
      <div className={styles["about-image"]}>{/* <img src="" /> */}</div>
    </div>
  );
};

export default About;
