import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>sid12g's portfolio</p>
        <div>
          <a href="mailto:sid12g@naver.com">
            <h2>sid12g@naver.com</h2>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>이 페이지는 준비중입니다.</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/sid12g"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>Explore My Github</p>
        </a>

        <a
          href="https://sid12g.dev"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Profile <span>-&gt;</span>
          </h2>
          <p>Learn about me</p>
        </a>

        <a
          href="https://blog.sid12g.dev"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Explore My blog</p>
        </a>

        <a
          href="https://github.com/sid12g/portfolio.sid12g.dev"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            This Page <span>-&gt;</span>
          </h2>
          <p>This page's code</p>
        </a>
      </div>
    </main>
  );
}
