import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles["project"]}>
      <div>
        <h3 className={styles["title"]}>{props.title}</h3>
        <a href={props.link}>
          <svg
            className={styles["link-icon"]}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <p className={styles["technologies"]}>{props.technologies}</p>
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

export default Project;
