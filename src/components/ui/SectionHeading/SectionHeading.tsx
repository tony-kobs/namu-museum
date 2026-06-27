import type { HTMLAttributes } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={[styles.heading, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
