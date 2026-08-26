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
      </div>
    </Section>
  );
}
