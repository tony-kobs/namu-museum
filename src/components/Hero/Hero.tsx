import styles from "./Hero.module.css";
import { Icon } from "@/components/ui";

export function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.verticalLabel}>події</span>

      <div className={styles.imageWrapper}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ХУДОЖНІЙ
          <br />
          МУЗЕЙ
        </h1>
        <a href="#tickets" className={styles.button}>
          <span className={styles.buttonText}>Квитки</span>
          <span className={styles.buttonIcon}>
            <Icon name="arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
}
