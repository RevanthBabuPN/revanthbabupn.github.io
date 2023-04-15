import React from "react";
import styles from "./Skills.module.css";

const SKILLS = [
  { name: "Python" },
  { name: "C / C++" },
  { name: "HTML, CSS" },
  { name: "JavaScript / TypeScript" },
  { name: "SQL" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Flask" },
  { name: "Git" },
  { name: "AWS" },
  { name: "Azure" },
];

const Skills = () => {
  return (
    <section id="skills" className={styles["skills"]}>
      <h2 className={"section-heading"}>My Skills</h2>
      <ul className={styles["skill-list"]}>
        {SKILLS.map((item) => {
          return (
            <li className={styles["skill-item"]} key={item.name}>
              <div className={styles["arrow"]}>
                <svg
                  className={styles["arrow-svg"]}
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <div>{item.name}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
