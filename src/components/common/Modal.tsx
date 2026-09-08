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
            <div className={styles.info}>
              <table>
                <colgroup>
                  <col className={styles.labelCol} />
                  <col />
                  <col className={styles.labelCol} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>유형</th>
                    <td>
                      {data?.type === "maintain" ? "유지보수" : "프로젝트"}
                    </td>
                    <th>플랫폼</th>
                    <td>{data?.isMobile ? "모바일" : "웹"}</td>
                  </tr>

                  <tr>
                    <th>역할</th>
                    <td>{data?.role}</td>
                    <th>참여도</th>
                    <td>{data?.percentage}</td>
                  </tr>
                  <tr>
                    <th>기간</th>
                    <td>{data?.period}</td>
                    <th>기술</th>
                    <td>
                      <div className={styles.tags}>
                        {data?.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>프로젝트 설명</th>
                    <td colSpan={3}>{data?.desc}</td>
                  </tr>

                  <tr>
                    <th>담당 업무</th>
                    <td colSpan={3}>{data?.detail}</td>
                  </tr>

                  {data?.detail2 && (
                    <tr>
                      <th>주요 업무</th>
                      <td colSpan={3}>
                        <ul className={styles.detailList}>
                          {data.detail2.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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
