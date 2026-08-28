import React from "react";
import Section from "@/components/layouts/Section";

export default function About({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div>
        <ul>
          <li>7년차</li>
          <li>신규구축</li>
          <li>유지보수</li>
          <li>부분 리뉴얼</li>
        </ul>
        <div>
          사용자의 관점에서 고민하고, 서비스의 목적에 맞는 웹을 구현합니다.
          <br />
          HTML, CSS, JavaScript를 기반으로 다양한 웹 서비스를 구축해왔으며,
          React와 Vue를 활용한 컴포넌트 기반 개발에도 익숙합니다.
          <br />
          단순히 화면을 구현하는 것에 그치지 않고, 유지보수하기 좋은 구조와
          일관된 사용자 경험을 함께 고민합니다.
        </div>
      </div>
    </Section>
  );
}
