"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { navItems } from "@/data/navigation";

interface ActiveSectionContextType {
  activeId: string;
  goToSection: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return; // 클릭 스크롤 중이면 무시

        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((prev, cur) =>
            cur.intersectionRatio > prev.intersectionRatio ? cur : prev,
          );
          setActiveId(mostVisible.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id: string) => {
    isProgrammaticScroll.current = true;
    setActiveId(id);

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });

    const handleScrollEnd = () => {
      isProgrammaticScroll.current = false;
      window.removeEventListener("scrollend", handleScrollEnd);
    };
    window.addEventListener("scrollend", handleScrollEnd);

    // scrollend 미지원 브라우저 대비 안전장치
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };

  return (
    <ActiveSectionContext.Provider value={{ activeId, goToSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection은 ActiveSectionProvider 안에서만 사용 가능합니다",
    );
  }
  return context;
}
