import React from "react";
import styles from "./Education.module.css";

import arrow from "../UI/arrow.svg";

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
      <p className={styles["location"]}>
        {props.location}
      </p>

      <div className={styles["content"]}>
        <p className={styles["gpa"]}>
          <span className={styles["gpa-key"]}>{"GPA: "}</span>
          <span className={styles["gpa-value"]}>{props.gpa}</span>
        </p>
        <div className={styles["coursework"]}>
          <p className={styles["coursework-key"]}>{"Coursework"}</p>
          <p className={styles["coursework-value"]}>{props.course_work.join(", ")}</p>
        </div>

        <div className={styles["position"]}>
          {props.positions?.map((position) => (
            <div className={styles["position-item"]} key={position.title}>
              <p className={styles["position-title"]}>
                {position.title}
              </p>
              <p className={styles["range"]}>
                {position.from} - {position.to}
              </p>
              <div className={styles["position-description"]}>
                <ul className={styles["position-description-list"]}>
                  {position.description.map((point) => (
                    <li className={styles["position-description-list-item"]} key={point}>
                      <div>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                      <div className={styles["point"]}>{point}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Education;
