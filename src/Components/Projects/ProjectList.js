import React from "react";
import Project from "./Project";

import styles from "./Project.module.css";

const PROJECTS = [
  {
    title:
      "Code-Viz: Data Structure Visualization and Animation Tool For User-Provided Code",
    technologies: "Python, GNU Debugger, PDB, React.js, JavaScript",
    description: [
      "A tool that generates an intuitive visualization of line-by-line execution of user-provided code by visualizing the changes in data structures used in the program after each step of execution",
      "Presented the paper at IEEE 2021 International Conference on Smart Generation Computing",
    ],
    link: "https://www.github.com/RevanthBabuPN",
  },
  {
    title: "Restaurant Recommender System",
    technologies: "Python, NLTK, scikit-learn, pandas, Flask, JavaScript",
    description: [
      "Developed a restaurant recommender application factoring user's cuisine preferences and review semantics",
      "The model is built using Zomato Bangalore Restaurants data and the recommendation factors the user's location",
    ],
    link: "https://github.com/RevanthBabuPN/Restaurant-Recommender",
  },
  {
    title: "PESU Web App",
    technologies: "Python, Flask, JavaScript, JQuery, MySQL",
    description: [
      "Developed a web application with features for course management, student and faculty management, feedback management, announcements",
    ],
  },
  {
    title: "FPL Analytics",
    technologies: "Python, Hadoop, PySpark, Streaming Spark, Spark MLLib",
    description: [
      "A big data project to analyze English Premier League data which included ingestion of data via Spark Streaming and analytics leveraging Spark Machine Learning Library",
    ],
  },
];

const ProjectList = () => {
  return (
    <section id="project" className={styles["project-list"]}>
      <h2 className={"section-heading"}>Projects</h2>
      <div>
        {PROJECTS.map((x) => (
          <Project
            title={x.title}
            technologies={x.technologies}
            description={x.description}
            link={x.link}
            key={x.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
