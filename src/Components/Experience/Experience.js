import React from "react";
import styles from "./Experience.module.css";

const Experience = (props) => {
  return (
    <div className={styles["experience"]}>
      <h3 className={styles["role"]}>
        {props.role}{" "}
        <span className={styles["company-name"]}>@ {props.company}</span>
      </h3>
      <p className={styles["range"]}>
        {props.from} - {props.to}
      </p>
      <div className={styles["description"]}>
        <ul className={styles["description-list"]}>
          {props.description.map((point) => (
            <li className={styles["description-list-item"]} key={point}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
