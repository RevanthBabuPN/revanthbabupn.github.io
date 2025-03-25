import React from "react";
import Experience from "./Experience";

import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Doordash Inc. ",
    from: "Oct 2024",
    to: "Present",
    skills: ["Kotlin, Cassandra, Kafka, Kubernetes, AWS"],
    description: [
      "Engineering the order-service platform to support product features at scale.",
    ],
  },
  {
    role: "Software Engineer - ML Platform",
    company: "Dragonfruit AI",
    from: "Jan 2023",
    to: "Oct 2024",
    skills: ["Python, Flask, elasticsearch, Qdrant,AWS, Docker"],
    description: [
      "Building a platform to review model performance and integrate it as an active learning pipleline in the ML platform.",
      "Tuned and integrated YOLOv5 model into self-checkout-loss prevention application, improving the performance 10x"
    ]
  },
  {
    role: "Software Engineer Intern - Distributed Systems Infra",
    company: "Cohesity",
    from: "June 2023",
    to: "August 2023",
    skills: ["Distributed Systems, Go, C++, Python"],
    description: [
      "Worked on global scheduler for a distributed system of services to optimize foreground and background resource consumption, reducing SLA misses.",
      "Modeled and implemented an extract, transform, predict pipeline in Go, achieving a remarkable 90% accuracy in predicting workload of various services running in the distributed cluster.",
      "Created a Go package of time series models as a wrapper around the open source Prophet model.",
    ],
  },
  {
    role: "Student Software Engineer - Full Stack Development",
    company: "University of Southern California",
    from: "Oct 2022",
    to: "May 2024",
    skills: [
      "Python, React, SQL, Airflow, Azure",
    ],
    description: [
      "Deployed scalable REST APIs to automatically publish 10k+ PhD candidates' theses to USC Digital Library.",
      "Streamlined the workflows using Azure DevOps CI/CD, reducing deployment time from 30 min to 5 min.",
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
      "Designed and developed multipathing in ESXi kernel to improve performance of NFS datastores.",
      "Improved IO performance by 3 to 4 times in cloud environments with connection level bandwidth limitation.",
      "Collaborated with various teams to resolve bugs and ensure seamless working of the features.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "DataCore Software",
    from: "Jun 2021",
    to: "Nov 2021",
    skills: ["Python", "OpenZFS", "Multithreading"],
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
