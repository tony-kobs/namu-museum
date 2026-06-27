import { Container } from "@/components/Container/Container";
import { SectionHeading } from "@/components/ui";
import styles from "./Gallery.module.css";

export function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <SectionHeading>Галерея</SectionHeading>
        {/* TODO: Dev — grid / slider (дані з @/data) */}
      </Container>
    </section>
  );
}
