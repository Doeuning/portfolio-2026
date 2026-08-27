"use client";

import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  const { activeId } = useActiveSection();

  return (
    <section id={id} className={`section ${activeId === id ? "active" : ""}`}>
      {children}
    </section>
  );
}
