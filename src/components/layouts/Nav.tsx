"use client";

import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import styles from "./Nav.module.scss";
import Image from "next/image";
import { useEffect } from "react";

export default function Nav() {
  const { activeId, goToSection } = useActiveSection();

  useEffect(() => {
    if (window.innerWidth > 767) return;

    const list = document.querySelector(
      `.${styles.list}`,
    ) as HTMLElement | null;

    const activeButton = document.querySelector(
      `[data-nav-id="${activeId}"]`,
    ) as HTMLElement | null;

    if (!list || !activeButton) return;

    const listRect = list.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    if (buttonRect.left < listRect.left) {
      list.scrollTo({
        left: list.scrollLeft + buttonRect.left - listRect.left,
        behavior: "smooth",
      });
    } else if (buttonRect.right > listRect.right) {
      list.scrollTo({
        left: list.scrollLeft + buttonRect.right - listRect.right,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <nav className={styles.nav}>
      <Image
        className={`${styles.img} ${
          activeId === "contact" ? styles.active : ""
        }`}
        src="/images/profile/contact.png"
        width={100}
        height={100}
        alt="연락주세요"
      />

      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              data-nav-id={item.id}
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
