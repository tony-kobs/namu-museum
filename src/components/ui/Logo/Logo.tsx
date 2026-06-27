import Link from "next/link";
import { SITE } from "@/data";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  const classNames = [styles.logo, className].filter(Boolean).join(" ");

  const content = (
    <>
      <span className={styles.desktop} aria-hidden="true">
        <span className={styles.letter}>N</span>
        <span className={styles.letter}>A</span>
        <span className={styles.letter}>M</span>
        <span className={styles.letter}>U</span>
      </span>
      <span className={styles.mobile} aria-hidden="true">
        <span className={styles.line}>NA</span>
        <span className={styles.line}>MU</span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classNames} aria-label={SITE.name}>
        {content}
      </Link>
    );
  }

  return <div className={classNames}>{content}</div>;
}
