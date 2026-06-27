"use client";

import { NAV_LINKS } from "@/constants/navigation";
import { Divider, IconButton, NavLink, ScheduleList } from "@/components/ui";
import styles from "./NavMenu.module.css";

type NavMenuProps = {
  onClose: () => void;
};

export function NavMenu({ onClose }: NavMenuProps) {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Меню"
    >
      <div className={styles.panel}>
        <IconButton
          icon="close"
          variant="close"
          ariaLabel="Закрити меню"
          className={styles.close}
          onClick={onClose}
        />

        <div className={styles.content}>
          <nav className={styles.nav} aria-label="Головна навігація">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    variant="menu"
                    onClick={onClose}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <Divider
            orientation="vertical"
            variant="light"
            className={styles.divider}
          />

          <ScheduleList variant="menu" className={styles.schedule} />
        </div>
      </div>
    </div>
  );
}
