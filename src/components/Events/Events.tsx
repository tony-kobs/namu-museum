import { Container } from "@/components/Container/Container";
import { SectionHeading } from "@/components/ui";
import styles from "./Events.module.css";

export function Events() {
  return (
    <section id="events" className={styles.events}>
      <Container>
        <SectionHeading>Актуальні події</SectionHeading>
        {/* TODO: Dev — картки подій (дані з @/data) */}
      </Container>
    </section>
  );
}
