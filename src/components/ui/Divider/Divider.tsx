import styles from "./Divider.module.css";

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "default" | "light";

type DividerProps = {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  className?: string;
};

export function Divider({
  orientation = "horizontal",
  variant = "default",
  className,
}: DividerProps) {
  const classNames = [
    styles.divider,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    variant === "light" ? styles.light : styles.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr className={classNames} aria-hidden="true" />;
}
