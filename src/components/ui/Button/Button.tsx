import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "submit";

export type ButtonProps = {
  variant?: ButtonVariant;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  ariaLabel,
  className,
  children,
  href,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  if (variant === "submit") {
    return (
      <button
        type={type}
        className={[styles.button, styles.submit, className]
          .filter(Boolean)
          .join(" ")}
        aria-label={ariaLabel ?? "Надіслати"}
        disabled={disabled}
        {...props}
      >
        <Icon name="arrow-right" size={20} className={styles.submitIcon} />
      </button>
    );
  }

  const label = children ?? "КВИТКИ";
  const content = (
    <>
      <span className={styles.primaryLabel}>{label}</span>
      <span className={styles.primaryIconBox}>
        <Icon name="arrow-right" size={20} className={styles.primaryIcon} />
      </span>
    </>
  );

  const primaryClassName = [styles.button, styles.primary, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={primaryClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={primaryClassName}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
