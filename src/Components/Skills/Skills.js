import React from "react";
import styles from "./Skills.module.css";

const skills = [
  { name: "Python" },
  { name: "C/C++" },
  { name: "JavaScript" },
  { name: "HTML, CSS" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Flask" },
  { name: "Git" },
];

const Skills = () => {
  return (
    <section id="skills" className={styles["skills"]}>
      <h2 className={"section-heading"}>My Skills</h2>
      <ul className={styles["skill-list"]}>
        {skills.map((item) => {
          return (
            <li className={styles["skill-item"]} key={item.name}>
              <svg
                className={styles["arrow"]}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="inline-block mr-3 text-green-500 transform transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              {item.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
