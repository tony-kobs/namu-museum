import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name ?? "input";

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className="sr-only" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[styles.input, className].filter(Boolean).join(" ")}
        {...props}
      />
    </div>
  );
}
