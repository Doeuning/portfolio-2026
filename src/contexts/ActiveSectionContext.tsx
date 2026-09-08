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
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

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

  const waitForScrollEnd = (onDone: () => void) => {
    let lastY = window.scrollY;
    let stableFrames = 0;

    const check = () => {
      const currentY = window.scrollY;

      if (currentY === lastY) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
        lastY = currentY;
      }

      // 약 6프레임(약 100ms) 동안 위치 변화 없으면 완료로 간주
      if (stableFrames >= 6) {
        onDone();
        return;
      }

      rafId.current = requestAnimationFrame(check);
    };

    rafId.current = requestAnimationFrame(check);
  };

  const goToSection = (id: string) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isProgrammaticScroll.current = true;
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const top = target.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    waitForScrollEnd(() => {
      isProgrammaticScroll.current = false;
    });
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
