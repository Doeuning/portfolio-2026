import styles from "./page.module.scss";
import Nav from "@/components/layouts/Nav";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

export default function Page() {
  return (
    <div className={styles.page}>
      <ActiveSectionProvider>
        <Nav />
        <main className={styles.main}>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
      </ActiveSectionProvider>
    </div>
  );
}
