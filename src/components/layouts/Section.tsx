import React from "react";
import styles from "./Section.module.scss";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.section} id={id}>
      {children}
    </div>
  );
}
