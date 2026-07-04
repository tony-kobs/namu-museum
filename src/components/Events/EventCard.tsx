import Image from "next/image";
import { Icon } from "@/components/ui";
import type { Event } from "@/data";
import styles from "./EventCard.module.css";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  if (event.variant === "featured") {
    return (
      <article className={styles.featured}>
        <div className={styles.featuredImageWrap}>
          <Image
            src={event.image.src}
            alt={event.image.alt}
            width={event.image.width}
            height={event.image.height}
            className={styles.featuredImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.featuredOverlay}>
          <time className={styles.featuredDate} dateTime={event.date}>
            {event.date}
          </time>
          <div className={styles.featuredCard}>
            <span className={styles.featuredCategory}>{event.category}</span>
            <h3 className={styles.featuredTitle}>{event.title}</h3>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.default}>
      <div className={styles.defaultImageWrap}>
        <Image
          src={event.image.src}
          alt={event.image.alt}
          width={event.image.width}
          height={event.image.height}
          className={styles.defaultImage}
          sizes="(min-width: 1280px) 50vw, 100vw"
        />
      </div>
      <div className={styles.defaultContent}>
        <div className={styles.meta}>
          <span className={styles.category}>{event.category}</span>
          <time className={styles.date} dateTime={event.date}>
            {event.date}
          </time>
        </div>
        <h3 className={styles.defaultTitle}>
          {event.title}
          <Icon name="red-square" className={styles.marker} />
        </h3>
        <p className={styles.description}>{event.description}</p>
      </div>
    </article>
  );
}
