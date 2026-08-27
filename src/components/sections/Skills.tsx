import React from "react";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import styles from "./Skills.module.scss";

export default function Skills({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <div>
          <div className={styles.info}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>Responsive Web Development</dt>
              <dd className={styles.dd}>
                다양한 디바이스 환경을 고려한 반응형 웹 구현
              </dd>
              <dt className={styles.dt}>Component-Based Development</dt>
              <dd className={styles.dd}>
                React, Vue 기반의 재사용 가능한 컴포넌트 설계 및 개발
              </dd>
              <dt className={styles.dt}>UI Implementation</dt>
              <dd className={styles.dd}>
                디자인 시안을 정확하게 분석하고 사용자 경험을 고려한 UI 구현
              </dd>
              <dt className={styles.dt}>Web Performance Optimization</dt>
              <dd className={styles.dd}>
                렌더링 성능 및 웹 리소스 최적화를 통한 서비스 성능 개선
              </dd>
              <dt className={styles.dt}>Web Accessibility</dt>
              <dd className={styles.dd}>
                시맨틱 마크업과 웹 접근성을 고려한 웹 페이지 구현
              </dd>
              <dt className={styles.dt}>Cross-Browser Compatibility</dt>
              <dd className={styles.dd}>
                다양한 브라우저 및 환경에서 안정적으로 동작하는 웹 구현
              </dd>
              <dt className={styles.dt}>Git</dt>
              <dd className={styles.dd}>
                Git, svn등의 형상관리 시스템 기반의 협업
              </dd>
            </dl>
          </div>
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
              src="/images/skills/skills-nodejs.svg"
              alt="Nodejs"
              width={100}
              height={100}
            />
            <span className="hidden">Nodejs</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-npm.svg"
              alt="npm"
              width={100}
              height={100}
            />
            <span className="hidden">npm</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-git.svg"
              alt="git"
              width={100}
              height={100}
            />
            <span className="hidden">git</span>
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
          {/* <li className={styles.item}>
            <Image
              src="/images/skills/skills-gsap.png"
              alt="GSAP"
              width={100}
              height={100}
              className={styles.logo}
            />
            <span className="hidden">GSAP</span>
          </li> */}
        </ul>
      </div>
    </Section>
  );
}
