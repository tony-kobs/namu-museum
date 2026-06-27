"use client";

import type { ButtonHTMLAttributes } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./IconButton.module.css";

type IconButtonVariant = "default" | "menu" | "close";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  variant?: IconButtonVariant;
  size?: number;
  ariaLabel: string;
};

export function IconButton({
  icon,
  variant = "default",
  size = 24,
  ariaLabel,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  const classNames = [
    styles.iconButton,
    variant === "menu" && styles.variantMenu,
    variant === "close" && styles.variantClose,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  );
}
