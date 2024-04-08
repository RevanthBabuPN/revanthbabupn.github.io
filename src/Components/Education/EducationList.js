import React from "react";
import Education from "./Education";

import styles from "./Education.module.css";

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science (Honors)",
    university: "University of Southern California",
    from: "Aug 2022",
    to: "May 2024",
    location: "Los Angeles, CA",
    gpa: "4.0/4.0",
    course_work: ["Analysis of Algorithms", "Database Systems", "Operating Systems", "Web Technologies", "Information Retrieval and Web Search Engines"],
    positions: [
      {
        title: "Graduate Teaching Assistant",
        from: "Aug 2023",
        to: "Dec 2023",
        description: [
          "Teaching assistant for CSCI 170: Discrete Methods in Computer Science",
          "Worked with Prof. Shawn Shamsian to assist students in understanding the course material and assignments",
        ],
      }
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "PES University",
    from: "Aug 2018",
    to: "May 2022",
    location: "Bangalore, India",
    gpa: "9.81/10",
    course_work: ["Data Structures and Algorithms", "Operating System", "Software Engineering", "Cloud Computing", "Machine Learning", "Design Patterns", "Performance Engineering"],
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
            location={x.location}
            gpa={x.gpa}
            course_work={x.course_work}
            positions={x.positions}
            description={x.description}
            key={(x.university, x.degree)}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
