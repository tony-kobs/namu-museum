"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { NavMenu } from "@/components/layout/NavMenu";
import { IconButton, Logo } from "@/components/ui";
import styles from "./Header.module.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <IconButton
          icon="burger"
          ariaLabel="Відкрити меню"
          onClick={openMenu}
        />
        <Logo className={styles.logo} />
      </Container>

      {isMenuOpen && <NavMenu onClose={closeMenu} />}
    </header>
  );
}
