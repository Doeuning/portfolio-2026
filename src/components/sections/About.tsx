import React from "react";
import Section from "@/components/layouts/Section";
import styles from "./About.module.scss";

const skills = [
  "신규구축",
  "유지보수",
  "부분 리뉴얼",
  "반응형",
  "적응형",
  "하이브리드앱",
];

export default function About({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>ABOUT ME</span>
          <h2>
            사용자와 서비스 사이를
            <br />더 나은 웹으로 연결합니다.
          </h2>
        </div>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.years}>
              <strong>6+</strong>
              <span>YEARS</span>
            </li>

            {skills.map((skill) => (
              <li key={skill}>
                <strong>{skill}</strong>
              </li>
            ))}
          </ul>

          <div className={styles.description}>
            <p>
              튼튼한 기본기를 바탕으로, 사용자의 관점에서 고민하고 서비스의
              목적에 맞는 웹을 구현합니다.
            </p>
            <p>
              HTML, CSS, JavaScript를 기반으로 다양한 웹 서비스를 구축해왔으며,
              React와 Vue를 활용한 컴포넌트 기반 개발에도 익숙합니다.
            </p>
            <p>
              단순히 화면을 구현하는 것에 그치지 않고, 유지보수하기 좋은 구조와
              일관된 사용자 경험을 함께 고민합니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
