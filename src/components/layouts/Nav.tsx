"use client";

import { navItems } from "@/data/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import Image from "next/image";

export default function Nav() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // 섹션이 50% 이상 보이면 활성화
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={styles.nav}>
      <Image
        className={`${styles.img} ${activeId !== "home" ? styles.active : ""}`}
        src="/home.png"
        alt="Description"
        width={100}
        height={100}
      />
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`${styles.button} ${
                activeId === item.id ? styles.active : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
