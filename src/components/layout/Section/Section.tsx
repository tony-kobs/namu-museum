import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionSpacing = "default" | "compact" | "flush";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  spacing?: SectionSpacing;
};

export function Section({
  children,
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  const spacingClass =
    spacing === "flush"
      ? styles.flush
      : spacing === "compact"
        ? styles.compact
        : styles.default;

  return (
    <section
      className={[styles.section, spacingClass, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
