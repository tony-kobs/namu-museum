"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";

type NavLinkVariant = "menu" | "footer";

type NavLinkProps = {
  href: string;
  label: string;
  variant?: NavLinkVariant;
  className?: string;
  onClick?: () => void;
};

export function NavLink({
  href,
  label,
  variant = "footer",
  className,
  onClick,
}: NavLinkProps) {
  const classNames = [
    styles.navLink,
    variant === "menu" ? styles.menu : styles.footer,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classNames} onClick={onClick}>
      {label}
    </Link>
  );
}
