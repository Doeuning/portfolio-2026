import React from "react";
import Section from "@/components/layouts/Section";

export default function About({ id }: { id: string }) {
  return (
    <Section id={id}>
      <h2>
        사용자 경험과 유지보수를 고민하는 <br />
        Frontend Developer, 김도은입니다.
      </h2>
    </Section>
  );
}
