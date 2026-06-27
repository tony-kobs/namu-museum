import { HERO } from "@/constants/site";
import styles from "./ScrollIndicator.module.css";

type ScrollIndicatorProps = {
  label?: string;
  className?: string;
};

export function ScrollIndicator({
  label = HERO.scrollLabel,
  className,
}: ScrollIndicatorProps) {
  return (
    <div
      className={[styles.indicator, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <span className={styles.line} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
