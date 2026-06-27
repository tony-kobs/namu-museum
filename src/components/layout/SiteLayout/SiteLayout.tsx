import type { ReactNode } from "react";
import styles from "./SiteLayout.module.css";

type SiteLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function SiteLayout({
  children,
  header,
  footer,
  className,
}: SiteLayoutProps) {
  return (
    <div className={[styles.layout, className].filter(Boolean).join(" ")}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
}
