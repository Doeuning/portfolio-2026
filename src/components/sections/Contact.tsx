import { contactData } from "@/data/contact";
import Section from "@/components/layouts/Section";
import styles from "./Contact.module.scss";

export default function Contact({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <h2>함께 일하실 분 연락주세요.</h2>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.tit}>이메일</div>
              <div className={styles.txt}>doeuning@gmail.com</div>
            </li>
            <li className={styles.item}>
              <div className={styles.tit}>github</div>
              <div className={styles.txt}>https://github.com/Doeuning</div>
            </li>
            <li className={styles.item}>
              <div className={styles.tit}>연락처</div>
              <div className={styles.txt}>010-6541-1552</div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
