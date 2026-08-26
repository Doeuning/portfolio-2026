import React from "react";
import styles from "./Home.module.scss";
import Section from "@/components/layouts/Section";
import Image from "next/image";

export default function Home({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <h2 className={styles.tit}>
          사용자 경험과 유지보수를 고민하는 <br />
          유연한 Frontend Developer, <strong>김도은</strong>입니다.
        </h2>
        <Image
          className={styles.img}
          src="/home.png"
          alt="Description"
          width={500}
          height={500}
        />
      </div>
    </Section>
  );
}
