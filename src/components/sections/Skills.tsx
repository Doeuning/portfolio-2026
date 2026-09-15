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
            <div className={styles.tit}>Skills</div>
            <dl className={styles.dl}>
              <dt className={styles.dt}>컴포넌트 기반 개발</dt>
              <dd className={styles.dd}>
                재사용 가능한 컴포넌트 기반 설계 및 개발로, 논리적이고 효율적인
                작업을 추구
              </dd>
              <dt className={styles.dt}>반응형 / 적응형 / 하이브리드앱</dt>
              <dd className={styles.dd}>
                다양한 디바이스 환경을 고려한 반응형웹 / 적응형웹 / 하이브리드앱
                구현 경력
              </dd>
              <dt className={styles.dt}>
                사용자의 편의성을 고려한 UI / UX 구현
              </dt>
              <dd className={styles.dd}>
                협업자들과의 원활한 의사소통으로 기획과 디자인을 정확하게
                분석하여 사용자 경험을 고려한 UI 구현
              </dd>
              <dt className={styles.dt}>웹 성능 최적화</dt>
              <dd className={styles.dd}>
                css, js, 이미지 등 렌더링 성능 및 웹 리소스 최적화를 통한 서비스
                성능 개선
              </dd>
              <dt className={styles.dt}>웹표준 / 웹 접근성</dt>
              <dd className={styles.dd}>
                시맨틱 마크업과 웹 접근성을 고려한 웹 페이지 구현
              </dd>
              <dt className={styles.dt}>크로스 브라우징</dt>
              <dd className={styles.dd}>
                웹, 태블릿, 모바일 등의 다양한 기기와 OS 및 브라우저 환경에서
                안정적으로 동작하는 웹 구현
              </dd>
              <dt className={styles.dt}>형상관리</dt>
              <dd className={styles.dd}>
                Git, svn등의 형상관리 시스템 기반의 협업 경험
              </dd>
              <dt className={styles.dt}>효율적인 작업방식 추구</dt>
              <dd className={styles.dd}>
                팀원들과 생산적인 토론으로 신속성, 정확성, 효율성을 최대화한
                작업 방식을 추구
              </dd>
            </dl>
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-html.svg"
              alt="HTML"
              width={80}
              height={80}
            />
            <span className={styles.txt}>HTML5</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-css.svg"
              alt="CSS"
              width={80}
              height={80}
            />
            <span className={styles.txt}>CSS3</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-scss.svg"
              alt="SCSS"
              width={80}
              height={80}
            />
            <span className={styles.txt}>SCSS</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-javascript.svg"
              alt="JavaScript"
              width={80}
              height={80}
            />
            <span className={styles.txt}>JavaScript</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-typescript.svg"
              alt="TypeScript"
              width={80}
              height={80}
            />
            <span className={styles.txt}>TypeScript</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-jquery.svg"
              alt="jQuery"
              width={80}
              height={80}
            />
            <span className={styles.txt}>jQuery</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-nodejs.svg"
              alt="Nodejs"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Nodejs</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-npm.svg"
              alt="npm"
              width={80}
              height={80}
            />
            <span className={styles.txt}>npm</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-git.svg"
              alt="git"
              width={80}
              height={80}
            />
            <span className={styles.txt}>git</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-react.svg"
              alt="React"
              width={80}
              height={80}
            />
            <span className={styles.txt}>React</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-vue.svg"
              alt="Vue3"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Vue3</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-nuxtjs.svg"
              alt="Next.js"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Nuxtjs</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-photoshop.svg"
              alt="Photoshop"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Photoshop</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-zeplin.svg"
              alt="Zeplin"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Zeplin</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/images/skills/skills-figma.svg"
              alt="Figma"
              width={80}
              height={80}
            />
            <span className={styles.txt}>Figma</span>
          </li>
          {/* <li className={styles.item}>
            <Image
              src="/images/skills/skills-gsap.png"
              alt="GSAP"
              width={80}
              height={80}
              className={styles.logo}
            />
            <span className={styles.txt}>GSAP</span>
          </li> */}
        </ul>
      </div>
    </Section>
  );
}
