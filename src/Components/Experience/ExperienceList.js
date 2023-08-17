import React from "react";
import Experience from "./Experience";

import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "Cohesity",
    from: "June 2023",
    to: "Present",
    skills: ["Distributed Systems, Go, C++, Python"],
    description: [
      "Working on distributed systems software in the product infrastructure team.",
      "Modeled and implemented an extract, transform, predict pipeline in Go, achieving a remarkable 90% accuracy in predicting workload of various services running in the distributed cluster.",
      "Worked on global scheduler for a distributed system of services to optimize foreground and background resource consumption, reducing SLA misses.",
      "Created a Go package of time series models, built as a wrapper around the open source Prophet model.",
    ],
  },
  {
    role: "Student Programmer - Full Stack Development",
    company: "University of Southern California",
    from: "Oct 2022",
    to: "Present",
    skills: [
      "Python, C#, React, Node.js, SQL, Azure Data Factory, Azure DevOps, Airflow, Git",
    ],
    description: [
      "Designed and implemented scalable RESTful APIs, enabling 10k+ PhD candidates' theses to be automatically published to USC’s Digital Library.",
      "Streamlined the entire workflow using Azure Devops for CI/CD, reducing deployment time from 30 min to 5 min.",
      "Revamped the existing on-prem web application and deployed to Azure cloud using Azure App Service.",
    ],
  },
  {
    role: "Member of Technical Staff - Intern",
    company: "VMware",
    from: "Jan 2022",
    to: "Jul 2022",
    skills: ["C", "C++", "VMware ESXi", "vSphere", "Network File System"],
    description: [
      "Played a major role in the NFS Development team by designing and developing multipathing in ESXi kernel using C/C++ to improve performance of NFS datastores.",
      "Improved IO performance by 3 to 4 times in cloud environments with connection level bandwidth limitation.",
      "Collaborated with various teams to resolve bugs and ensure seamless working of the features.",
    ],
  },
  {
    role: "Software Intern",
    company: "DataCore Software",
    from: "Jun 2021",
    to: "Nov 2021",
    skills: ["Python", "OpenZFS", "Multithreading", "Git"],
    description: [
      "Worked on OpenZFS data reduction techniques for SANSymphony, a software defined storage solution.",
      "Built a lightweight tool in Python based on FastCDC, a fast and efficient approach, for data deduplication.",
      "Multithreaded the space-savings estimation tool to saturate reads from disk, increasing throughput by 30%.",
    ],
  },
];

const ExperienceList = () => {
  return (
    <section id="experience" className={styles["experience-list"]}>
      <h2 className={"section-heading"}>Experience</h2>
      <div>
        {EXPERIENCES.map((x) => (
          <Experience
            role={x.role}
            company={x.company}
            from={x.from}
            to={x.to}
            skills={x.skills}
            description={x.description}
            key={(x.company, x.role)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
