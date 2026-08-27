import React from "react";
import Section from "@/components/layouts/Section";
import styles from "./Experience.module.scss";

export default function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <h2>Experience</h2>
        <h3>6년 5개월</h3>
        <table className={styles.table}>
          <caption className="hidden">경력사항</caption>
          <thead>
            <tr>
              <th scope="col">기간</th>
              <th scope="col">회사</th>
              <th scope="col">직급</th>
              <th scope="col">직책</th>
              <th scope="col">직무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025. 04 ~ 2026. 06</td>
              <td>주식회사 유젠</td>
              <td>선임연구원</td>
              <td>개발 1팀</td>
              <td>프론트엔드개발자</td>
            </tr>
            <tr>
              <td>2020. 06 ~ 2023. 03</td>
              <td>이모션글로벌</td>
              <td>대리</td>
              <td>CT2본부 팀원</td>
              <td>웹퍼블리셔, 프론트엔드개발자</td>
            </tr>
            <tr>
              <td>2017. 11 ~ 2019. 11</td>
              <td>뉴리버</td>
              <td>사원</td>
              <td>개발팀 팀원</td>
              <td>웹퍼블리셔</td>
            </tr>
            <tr>
              <td>2017. 03 ~ 2017. 07</td>
              <td>비스톤스</td>
              <td>사원</td>
              <td>개발팀 팀원</td>
              <td>웹퍼블리셔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}
