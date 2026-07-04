import { fetchEvents } from "@/services/eventServices";
import { Container } from "@/components/Container/Container";
import { SectionHeading } from "@/components/ui";
import { EventCard } from "./EventCard";
import styles from "./Events.module.css";

export async function Events() {
  const events = await fetchEvents();

  const defaultEvents = events.filter((event) => event.variant === "default");
  const featuredEvents = events.filter((event) => event.variant === "featured");

  return (
    <section id="events" className={styles.events}>
      <Container>
        <SectionHeading className={styles.heading}>
          Актуальні події
        </SectionHeading>

        <div className={styles.list}>
          {defaultEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {featuredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Container>
    </section>
  );
}
