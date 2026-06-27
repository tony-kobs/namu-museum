import { SCHEDULE } from "@/constants/schedule";
import type { ScheduleDay } from "@/types";
import styles from "./ScheduleList.module.css";

type ScheduleListVariant = "menu" | "footer";

type ScheduleListProps = {
  variant?: ScheduleListVariant;
  title?: string;
  days?: readonly ScheduleDay[];
  daysOff?: { label: string; value: string };
  note?: string;
  className?: string;
};

export function ScheduleList({
  variant = "footer",
  title = SCHEDULE.title,
  days = SCHEDULE.days,
  daysOff = SCHEDULE.daysOff,
  note = SCHEDULE.note,
  className,
}: ScheduleListProps) {
  const classNames = [
    styles.schedule,
    variant === "menu" ? styles.menu : styles.footer,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {days.map((item) => (
          <li key={`${item.time}-${item.day}`} className={styles.item}>
            <span className={styles.time}>{item.time}</span>
            <span className={styles.day}>{item.day}</span>
          </li>
        ))}
      </ul>
      <p className={styles.daysOff}>
        <span className={styles.daysOffLabel}>{daysOff.label}</span>{" "}
        {daysOff.value}
      </p>
      <p className={styles.note}>{note}</p>
    </div>
  );
}
