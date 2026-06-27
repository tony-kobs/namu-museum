import type { SVGProps } from "react";
import styles from "./Icon.module.css";

export type IconName =
  "burger" | "close" | "arrow-right" | "facebook" | "instagram" | "red-square";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const classNames = [styles.icon, className].filter(Boolean).join(" ");

  switch (name) {
    case "burger":
      return (
        <svg
          className={classNames}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          {...props}
        >
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "close":
      return (
        <svg
          className={classNames}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          {...props}
        >
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "arrow-right":
      return (
        <svg
          className={classNames}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          {...props}
        >
          <path
            d="M8 5l8 7-8 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg
          className={classNames}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          {...props}
        >
          <path d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9v-3h1.5V7.5C10.5 5 12 3.5 14.5 3.5H17v3h-2c-.8 0-1 .4-1 1v1.5z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          className={classNames}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          {...props}
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );

    case "red-square":
      return (
        <span
          className={[styles.redSquare, className].filter(Boolean).join(" ")}
          aria-hidden="true"
        />
      );

    default:
      return null;
  }
}
