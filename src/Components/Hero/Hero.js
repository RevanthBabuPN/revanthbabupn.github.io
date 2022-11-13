import React from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["container"]}>
      <div className="left-container">
        <div>
          <h1>Hey there, I'm</h1>
        </div>
        <div>
          <h2 className={styles["big-heading"]}>Revanth Babu P N.</h2>
        </div>
        <div>
          <p>
            MS Computer Science @ University of Southern California
            <br /> Ex - VMware
          </p>
        </div>
        <div>
          <a className={styles["contact"]} href={"#Contact"}>
            Say Hi!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
