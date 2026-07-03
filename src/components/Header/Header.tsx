"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/data";
import { IconButton, Logo, NavLink, ScheduleList } from "@/components/ui";
import { Container } from "@/components/Container/Container";
import styles from "./Header.module.css";

const MENU_LINK_ORDER = ["gallery", "about", "events", "contacts"];
const MENU_LINKS = MENU_LINK_ORDER.map((id) =>
  NAV_LINKS.find((link) => link.id === id),
).filter((link): link is (typeof NAV_LINKS)[number] => Boolean(link));

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <IconButton
          icon="burger"
          variant="default"
          ariaLabel="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="header-menu"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
        />
        <Logo className={styles.logo} />
      </Container>

      {isMenuOpen && (
        <>
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id="header-menu"
            className={styles.menu}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Container className={styles.menuInner}>
              <IconButton
                icon="close"
                variant="close"
                ariaLabel="Close menu"
                className={styles.closeButton}
                onClick={closeMenu}
              />

              <div className={styles.menuBody}>
                <nav className={styles.nav} aria-label="Main navigation">
                  <ul className={styles.navList}>
                    {MENU_LINKS.map((link) => (
                      <li key={link.id}>
                        <NavLink
                          href={link.href}
                          label={link.label}
                          variant="menu"
                          onClick={closeMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className={styles.divider} />

              <ScheduleList variant="menu" className={styles.schedule} />
            </Container>
          </div>
        </>
      )}
    </header>
  );
}
