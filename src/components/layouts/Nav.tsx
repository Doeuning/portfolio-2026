"use client";

import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import styles from "./Nav.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Nav() {
  const { activeId, goToSection } = useActiveSection();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const activeButton = listRef.current?.querySelector(
      `.${styles.active}`,
    ) as HTMLElement | null;

    if (!activeButton) return;

    const list = listRef.current;

    list.scrollTo({
      left: activeButton.offsetLeft,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav className={styles.nav}>
      <Image
        className={`${styles.img} ${activeId === "contact" ? styles.active : ""}`}
        src="/images/profile/contact.png"
        width={100}
        height={100}
        alt="연락주세요"
      />

      <ul ref={listRef} className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`${styles.button} ${
                activeId === item.id ? styles.active : ""
              }`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
