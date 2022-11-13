import React from "react";
import Experience from "./Experience";

import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    role: "Student Programmer",
    company: "University of Southern California",
    from: "Oct 2022",
    to: "Present",
    description: [
      "Designed a REST Service for 10k+ PhD candidates' thesis to be automatically published to USC's Digital Library",
      "Migrating the existing on-prem services to Azure cloud",
    ],
  },
  {
    role: "Member of Technical Staff - Intern",
    company: "VMware",
    from: "Jan 2022",
    to: "Jul 2022",
    description: [
      "Played a major role in the NFS Development team of ESXi by designing and developing MConnect to improve performance of NFS datastores",
      "Increased IO performance by 3 to 4 times was seen in cloud environments with connection level bandwidth limitation",
      "Collaborated with different teams to resolve bugs and ensure seamless working of the feature",
    ],
  },
  {
    role: "Software Intern",
    company: "DataCore Software",
    from: "Jun 2021",
    to: "Nov 2021",
    description: [
      "Researched and analyzed data reduction techniques used in SANSymphony, a software defined storage solution",
      "Built a lightweight tool based on FastCDC - a fast and efficient content-defined chunking approach for data deduplication",
      "Multithreaded the space-savings estimation tool to saturate the reads from disk and maximize the throughput",
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
            description={x.description}
            key={(x.company, x.role)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
