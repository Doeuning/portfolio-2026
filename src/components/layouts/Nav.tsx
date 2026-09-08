"use client";

import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import styles from "./Nav.module.scss";
import Image from "next/image";

export default function Nav() {
  const { activeId, goToSection } = useActiveSection();

  return (
    <nav className={styles.nav}>
      <Image
        className={`${styles.img} ${activeId === "contact" ? styles.active : ""}`}
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
              className={`${styles.button} ${activeId === item.id ? styles.active : ""}`}
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
