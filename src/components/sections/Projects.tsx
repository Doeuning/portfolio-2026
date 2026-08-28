"use client";

import { projectsData } from "@/data/projects";
import Section from "@/components/layouts/Section";
import styles from "./Projects.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Projects({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <Swiper className={styles.list} spaceBetween={30} slidesPerView={3}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.id} className={styles.item}>
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
                {/* <div className={styles.detail}>{project.detail}</div> */}
                <button type="button" className={styles.btn}>
                  자세히 보기
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
