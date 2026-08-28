import { contactData } from "@/data/contact";
import Section from "@/components/layouts/Section";
import styles from "./Contact.module.scss";

export default function Contact({ id }: { id: string }) {
  return (
    <Section id={id}>
      <div className={styles.inner}>
        <h2 className={styles.tit}>
          함께 좋은 결과를 만들어가고 싶습니다. <br />
          새로운 프로젝트와 협업에 열려 있습니다.
          <br />
          아래 연락처로 편하게 연락해주세요.
        </h2>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="mailto:doeuning@gmail.com" className={styles.box}>
                <i className="icon-email">이메일</i>
                <span className={styles.txt}>doeuning@gmail.com</span>
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://github.com/Doeuning"
                target="_blank"
                className={styles.box}
              >
                <i className="icon-github">깃헙</i>
                <span className={styles.txt}>https://github.com/Doeuning</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="tel:010-6541-1552" className={styles.box}>
                <i className="icon-cell">연락처</i>
                <span className={styles.txt}>010-6541-1552</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
