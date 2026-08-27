import React from "react";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import styles from "./Skills.module.scss";

export default function Skills({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.desc}>제가 사용 가능한 기술 스택입니다.</p>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-html.svg"
              alt="HTML"
              width={100}
              height={100}
            />
            <span className="hidden">HTML</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-css.svg"
              alt="CSS"
              width={100}
              height={100}
            />
            <span className="hidden">CSS</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-scss.svg"
              alt="SCSS"
              width={100}
              height={100}
            />
            <span className="hidden">SCSS</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-javascript.svg"
              alt="JavaScript"
              width={100}
              height={100}
            />
            <span className="hidden">JavaScript</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-typescript.svg"
              alt="TypeScript"
              width={100}
              height={100}
            />
            <span className="hidden">TypeScript</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-jquery.svg"
              alt="jQuery"
              width={100}
              height={100}
            />
            <span className="hidden">jQuery</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-react.svg"
              alt="React"
              width={100}
              height={100}
            />
            <span className="hidden">React</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-vue.svg"
              alt="Vue3"
              width={100}
              height={100}
            />
            <span className="hidden">Vue3</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-nuxtjs.svg"
              alt="Next.js"
              width={100}
              height={100}
            />
            <span className="hidden">Nuxtjs</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-gsap.png"
              alt="GSAP"
              width={100}
              height={100}
              className={styles.logo}
            />
            <span className="hidden">GSAP</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
