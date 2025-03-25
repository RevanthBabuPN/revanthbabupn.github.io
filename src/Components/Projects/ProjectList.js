import React from "react";
import Project from "./Project";

import styles from "./Project.module.css";

const PROJECTS = [
  {
    title:
      "Code-Viz: Data Structure Visualization and Animation Tool For User-Provided Code",
    technologies: "Python, JavaScript, React.js, Flask, GNU Debugger, PDB",
    description: [
      "A tool that generates an intuitive visualization of line-by-line execution of user-provided code by visualizing the changes in data structures used in the program after each step of execution",
      "Presented the paper at IEEE 2021 International Conference on Smart Generation Computing",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/9645747",
  },
  {
    title: "Weenix Operating System",
    technologies: "C, GDB, QEMU, Unix",
    description: [
      "Built a Unix-like fully functional operating system as part of the Operating Systems course at University of Southern California.",
      "Implemented system calls, process/thread creation, virtual memory management, and virtual file system functionalities.",
      "More info at - Brown University's Weenix OS handout",
    ],
    link: "https://github.com/brown-cs1690/handout/wiki/Weenix-Operating-System"
  },
  {
    title: "Event Finder App",
    technologies: "Python, Node.js, React, Google Cloud Platform",
    description: [
      "Developed a responsive web application that allow users to search for nearby events by fetching information from TicketMaster.",
      "Devised and implemented REST APIs in Node.js and deployed it to Google Cloud Platform.",
      "Created a android mobile application with features to search and bookmark the events.",
    ],
    link: "https://eventsearch-app.wl.r.appspot.com/search",
  },
  {
    title: "Restaurant Recommender System",
    technologies: "Python, JavaScript, Flask, NLTK, scikit-learn, pandas",
    description: [
      "Developed a restaurant recommender application by factoring in user preferences and review semantics.",
      "Utilized Zomato Bangalore Restaurants data containing information on 12,000+ restaurants to build the model.The model is built using Zomato Bangalore Restaurants data and the recommendation factors the user's location",
      "Applied collaborative filtering and content-based filtering techniques to obtain optimal results.",
    ],
    link: "https://restaurant-recommender-webapp.herokuapp.com/",
  },
  {
    title: "English Premier League Prediction - Big Data",
    technologies:
      "Apache Spark, Spark MLLib, Hadoop Distributed File System (HDFS)",
    description: [
      "Analyzed English Premier League data and built a machine learning model using Spark MLLib that predicted the outcomes of EPL matches with a high degree of accuracy.",
      "Leveraged Spark-Streaming for data ingestion and Hadoop Distributed File System (HDFS) to store the data.",
    ],
  },
  {
    title: "PESU Web App",
    technologies: "Python, Flask, JavaScript, jQuery, MySQL",
    description: [
      "Developed a web application with features for course management, student and faculty management, feedback management, announcements",
    ],
    link: "https://github.com/RevanthBabuPN/PESU-APP#Readme",
  },
  {
    title: "Python Mini Compiler",
    technologies: "C, Lex, Yacc, Python",
    description: [
      "Mini Compiler for Python 3.x with support for for, while, function def constructs and other basic syntax",
      "Implemented compiler optimizations like constant folding and propagation, dead code elimination, loop invariant code motion, common subexpression elimination",
    ],
    link: "https://github.com/RevanthBabuPN/PESU-APP#Readme",
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
