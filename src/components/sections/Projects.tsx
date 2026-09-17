"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { projectsData } from "@/data/projects";
import Section from "@/components/layouts/Section";
import Modal from "@/components/common/Modal";
import styles from "./Projects.module.scss";

type FilterType = "all" | "project" | "maintain";

const FILTER_TRANSITION_MS = 280;

export default function Projects({ id }: { id: string }) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [displayFilter, setDisplayFilter] = useState<FilterType>("all");
  const [isSwiperVisible, setIsSwiperVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[number] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const filterSwapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (filterSwapTimeout.current) clearTimeout(filterSwapTimeout.current);
    };
  }, []);

  const handleFilterChange = (next: FilterType) => {
    if (next === filter) return;
    setFilter(next);
    setIsSwiperVisible(false);

    if (filterSwapTimeout.current) clearTimeout(filterSwapTimeout.current);
    filterSwapTimeout.current = setTimeout(() => {
      setDisplayFilter(next);
      setIsSwiperVisible(true);
    }, FILTER_TRANSITION_MS);
  };

  const filteredProjects =
    displayFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.type === displayFilter);

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
        <div className={styles.filter}>
          {" "}
          <button
            type="button"
            className={filter === "all" ? styles.active : ""}
            onClick={() => handleFilterChange("all")}
          >
            {" "}
            ALL{" "}
          </button>{" "}
          <button
            type="button"
            className={filter === "project" ? styles.active : ""}
            onClick={() => handleFilterChange("project")}
          >
            {" "}
            PROJECT{" "}
          </button>{" "}
          <button
            type="button"
            className={filter === "maintain" ? styles.active : ""}
            onClick={() => handleFilterChange("maintain")}
          >
            {" "}
            MAINTENANCE{" "}
          </button>{" "}
        </div>
        <div
          className={`${styles.swiperWrap} ${
            isSwiperVisible ? "" : styles.swiperWrapHidden
          }`}
        >
          <Swiper
            key={displayFilter}
            className={styles.list}
            spaceBetween={24}
            slidesPerView={3}
            observer
            observeParents
            speed={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1079: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className={styles.item}>
                <div className={styles.img}>
                  {project.imgUrl ? (
                    <Image
                      src={project.imgUrl}
                      alt={project.title}
                      width={(project.width ?? 1) * 100}
                      height={100}
                      className={styles.bg}
                      quality={100}
                    />
                  ) : (
                    <div className={styles.noImage}>
                      <span>PROJECT</span>
                    </div>
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
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCloseComplete={handleCloseComplete}
        title={selectedProject?.title}
        data={selectedProject}
      ></Modal>
    </Section>
  );
}
