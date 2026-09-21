"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";

import { projectsData } from "@/data/projects";
import Section from "@/components/layouts/Section";
import Modal from "@/components/common/Modal";
import styles from "./Projects.module.scss";

type FilterType = "all" | "project" | "maintain";

const FILTER_TRANSITION_MS = 280;
const ARROW_SLIDE_MS = 300;

export default function Projects({ id }: { id: string }) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [displayFilter, setDisplayFilter] = useState<FilterType>("all");
  const [isSwiperVisible, setIsSwiperVisible] = useState(true);
  const [showOthers, setShowOthers] = useState(false);
  const [edge, setEdge] = useState({ isBeginning: true, isEnd: false });
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[number] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const filterSwapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

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
      ? otherProjects
      : otherProjects.filter((project) => project.type === displayFilter);

  const syncEdge = (swiper: SwiperInstance) => {
    setEdge({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
  };

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
        <div className={styles.featuredWrap}>
          <h3 className={styles.sectionTit}>핵심 프로젝트</h3>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.featuredCard}>
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
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => handleOpenModal(project)}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setShowOthers((prev) => !prev)}
            aria-expanded={showOthers}
          >
            <span>
              {showOthers
                ? "기타 프로젝트 접기 ▲"
                : `기타 프로젝트 보기 (${otherProjects.length}) ▼`}
            </span>
          </button>
        </div>

        <div
          className={`${styles.othersWrap} ${
            showOthers ? styles.othersOpen : ""
          }`}
        >
          <div className={styles.othersInner}>
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
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowPrev}`}
                onClick={() => swiperRef.current?.slidePrev(ARROW_SLIDE_MS)}
                disabled={edge.isBeginning}
                aria-label="이전 프로젝트"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowNext}`}
                onClick={() => swiperRef.current?.slideNext(ARROW_SLIDE_MS)}
                disabled={edge.isEnd}
                aria-label="다음 프로젝트"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <Swiper
                key={displayFilter}
                className={styles.list}
                spaceBetween={24}
                slidesPerView={3}
                observer
                observeParents
                speed={0}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  syncEdge(swiper);
                }}
                onSlideChange={syncEdge}
                onResize={syncEdge}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1199: {
                    slidesPerView: 5,
                  },
                }}
                freeMode
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id} className={styles.item}>
                    <div className={styles.img}>
                      {project.imgUrl ? (
                        <Image
                          src={project.imgUrl}
                          alt={project.title}
                          width={(project.width ?? 1) * 50}
                          height={50}
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
