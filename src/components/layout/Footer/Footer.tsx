import { ANCHORS } from "@/constants/anchors";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import {
  ContactInfo,
  Divider,
  Logo,
  NavLink,
  ScheduleList,
  SocialLinks,
} from "@/components/ui";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id={ANCHORS.contacts} className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo href="/" />
            <SocialLinks />
          </div>

          <ScheduleList variant="footer" />

          <ContactInfo />

          <div className={styles.nav}>
            <Divider orientation="vertical" className={styles.navDivider} />
            <nav aria-label="Footer navigation">
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      variant="footer"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Divider className={styles.bottomDivider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{SITE.copyright}</p>
          <p className={styles.designer}>{SITE.designer}</p>
        </div>
      </Container>
    </footer>
  );
}
