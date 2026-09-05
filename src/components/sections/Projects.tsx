"use client";

import { projectsData } from "@/data/projects";
import Section from "@/components/layouts/Section";
import styles from "./Projects.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Modal from "@/components/common/Modal";

export default function Projects({ id }: { id: string }) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[number] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: (typeof projectsData)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseComplete = () => {
    setSelectedProject(null);
  };
  return (
    <Section id={id}>
      <div className={`${styles.inner} projects-inner`}>
        <Swiper
          className={styles.list}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1079: {
              slidesPerView: 3,
            },
          }}
        >
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
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleOpenModal(project)}
                >
                  자세히 보기
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCloseComplete={handleCloseComplete}
        title={selectedProject?.title}
      >
        {selectedProject && <p>{selectedProject.desc}</p>}
      </Modal>
    </Section>
  );
}
