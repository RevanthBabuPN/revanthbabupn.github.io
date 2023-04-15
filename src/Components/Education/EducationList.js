import React from "react";
import Education from "./Education";

import styles from "./Education.module.css";

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    university: "University of Southern California",
    from: "Aug 2022",
    to: "May 2024",
    description: [
      "GPA: 4.0/4.0",
      "Coursework: Analysis of Algorithms, Database Systems, Machine Learning for Data Science, Web Technologies",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "PES University",
    from: "Aug 2018",
    to: "May 2022",
    description: [
      "Graduated with a GPA of 9.81/10 (First class with Honors)",
      "Coursework: Data Structures and Algorithms, Operating System, Computer Networks, DBMS, Cloud Computing, Machine Learning, Design Patterns, Performance Engineering",
    ],
  },
];

const EducationList = () => {
  return (
    <section id="education" className={styles["education-list"]}>
      <h2 className={"section-heading"}>Education</h2>
      <div>
        {EDUCATION.map((x) => (
          <Education
            degree={x.degree}
            university={x.university}
            from={x.from}
            to={x.to}
            description={x.description}
            key={(x.university, x.degree)}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
