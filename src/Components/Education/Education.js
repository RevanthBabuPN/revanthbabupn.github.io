import React from "react";
import styles from "./Education.module.css";

const Education = (props) => {
  return (
    <div className={styles["education"]}>
      <h3 className={styles["degree"]}>
        {props.degree}{" "}
        <span className={styles["university-name"]}>@ {props.university}</span>
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

export default Education;
