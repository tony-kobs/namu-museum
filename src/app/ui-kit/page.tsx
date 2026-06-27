import {
  Button,
  ContactInfo,
  Divider,
  Icon,
  IconButton,
  Input,
  Logo,
  NavLink,
  ScheduleList,
  ScrollIndicator,
  SectionHeading,
  SocialLinks,
} from "@/components/ui";
import { NAV_LINKS } from "@/constants/navigation";
import { SUBSCRIPTION } from "@/constants/site";
import styles from "./page.module.css";
import { UiKitInteractive } from "./UiKitInteractive";

export const metadata = {
  title: "UI Kit — NAMU",
  robots: { index: false, follow: false },
};

export default function UiKitPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeading as="h1">UI Kit — NAMU</SectionHeading>
        <p className={styles.note}>
          Dev-only preview. Компоненти для командної розробки.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Logo</h2>
          <Logo />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.row}>
            <Button>КВИТКИ</Button>
            <Button variant="submit" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Input + Submit</h2>
          <div className={styles.inputGroup}>
            <Input
              type="email"
              placeholder={SUBSCRIPTION.placeholder}
              aria-label="Email"
            />
            <Button variant="submit" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Icons</h2>
          <div className={styles.row}>
            <Icon name="burger" />
            <Icon name="red-square" />
            <Icon name="facebook" />
            <Icon name="instagram" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Icon Buttons</h2>
          <div className={styles.row}>
            <IconButton icon="burger" ariaLabel="Відкрити меню" />
            <div className={styles.menuPreview}>
              <IconButton icon="close" variant="close" ariaLabel="Закрити" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Section Heading</h2>
          <SectionHeading>Актуальні події</SectionHeading>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nav Links</h2>
          <div className={styles.navPreview}>
            {NAV_LINKS.slice(0, 2).map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                label={link.label}
                variant="menu"
              />
            ))}
          </div>
          <div className={styles.row}>
            {NAV_LINKS.slice(0, 2).map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                label={link.label}
                variant="footer"
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Divider</h2>
          <Divider />
          <div className={styles.dividerRow}>
            <span>Left</span>
            <Divider orientation="vertical" />
            <span>Right</span>
          </div>
        </section>

        <UiKitInteractive />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Scroll Indicator</h2>
          <ScrollIndicator />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Schedule List</h2>
          <div className={styles.scheduleGrid}>
            <ScheduleList variant="footer" />
            <div className={styles.menuPreview}>
              <ScheduleList variant="menu" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Info</h2>
          <ContactInfo />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Social Links</h2>
          <SocialLinks />
        </section>
      </div>
    </main>
  );
}
