"use client";

import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="다크 모드 전환"
      className={styles.toggle}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      <span className={styles.icon} data-icon="sun" aria-hidden="true">
        ☀
      </span>
      <span className={styles.icon} data-icon="moon" aria-hidden="true">
        ☾
      </span>
      <span className={styles.knob} />
    </button>
  );
}
