"use client";

import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  const { activeId } = useActiveSection();

  return (
    <section
      id={id}
      className={`${styles.section} ${activeId === id ? styles.active : ""}`}
    >
      {children}
    </section>
  );
}
