import React from "react";
import { projectsData } from "@/data/projects";
import Section from "@/components/layouts/Section";
import styles from "./Projects.module.scss";
import Image from "next/image";

export default function Projects({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          <ul className={styles.list}>
            {projectsData.map((project) => (
              <li key={project.id} className={styles.item}>
                <div className={styles.img}>
                  {project.bgUrl && (
                    <Image
                      src={project.bgUrl}
                      alt={project.title}
                      width={100}
                      height={100}
                      className={styles.bg}
                    />
                  )}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.tit}>{project.title}</h3>
                  <p className={styles.desc}>{project.desc}</p>
                  <div className={styles.detail}>{project.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
