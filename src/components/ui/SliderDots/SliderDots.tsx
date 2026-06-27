"use client";

import styles from "./SliderDots.module.css";

type SliderDotsProps = {
  total: number;
  activeIndex: number;
  onSelect?: (index: number) => void;
  className?: string;
  ariaLabel?: string;
};

export function SliderDots({
  total,
  activeIndex,
  onSelect,
  className,
  ariaLabel = "Навігація галереї",
}: SliderDotsProps) {
  return (
    <div
      className={[styles.dots, className].filter(Boolean).join(" ")}
      role="tablist"
      aria-label={ariaLabel}
    >
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type="button"
            role="tab"
            className={[styles.dot, isActive && styles.active]
              .filter(Boolean)
              .join(" ")}
            aria-selected={isActive}
            aria-label={`Слайд ${index + 1}`}
            onClick={() => onSelect?.(index)}
          />
        );
      })}
    </div>
  );
}
