"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/projects";
import styles from "./Modal.module.scss";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCloseComplete?: () => void;
  title?: string;
  data?: ProjectItem | null;
}

export default function Modal({
  isOpen,
  onClose,
  onCloseComplete,
  title,
  data,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles.dim} onClick={onClose} aria-hidden="true" />

      <div
        className={styles.wrap}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onTransitionEnd={(e) => {
          if (!isOpen && e.propertyName === "opacity") {
            onCloseComplete?.();
          }
        }}
      >
        <div className={styles.header}>
          {title && (
            <h2 id="modal-title" className={styles.title}>
              {title}
            </h2>
          )}

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.content}>
            <div className={`${styles.info}`}>
              <dl>
                <div className={styles.item}>
                  <dt>유형</dt>
                  <dd>{data?.type === "maintain" ? "유지보수" : "프로젝트"}</dd>
                </div>

                <div className={styles.item}>
                  <dt>플랫폼</dt>
                  <dd>{data?.isMobile ? "모바일" : "웹"}</dd>
                </div>

                <div className={styles.item}>
                  <dt>역할</dt>
                  <dd>{data?.role}</dd>
                </div>

                <div className={styles.item}>
                  <dt>참여도</dt>
                  <dd>{data?.percentage}</dd>
                </div>

                <div className={styles.item}>
                  <dt>기간</dt>
                  <dd>{data?.period}</dd>
                </div>

                <div className={styles.item}>
                  <dt>기술</dt>
                  <dd>
                    <div className={styles.tags}>
                      {data?.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </dd>
                </div>

                <div className={`${styles.item} ${styles.full}`}>
                  <dt>프로젝트 설명</dt>
                  <dd>{data?.desc}</dd>
                </div>

                <div className={`${styles.item} ${styles.full}`}>
                  <dt>담당 업무</dt>
                  <dd>{data?.detail}</dd>
                </div>

                {data?.detail2 && (
                  <div className={`${styles.item} ${styles.full}`}>
                    <dt>주요 업무</dt>
                    <dd>
                      <ul className={styles.detailList}>
                        {data.detail2.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {data?.bgUrl && (
              <div className={styles.img}>
                <Image
                  src={data?.bgUrl}
                  alt={data?.title}
                  width={1000}
                  height={800}
                  quality={100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
