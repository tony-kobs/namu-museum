"use client";

import { useState } from "react";
import { SliderDots } from "@/components/ui";
import styles from "./page.module.css";

export function UiKitInteractive() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Slider Dots</h2>
      <SliderDots total={4} activeIndex={activeDot} onSelect={setActiveDot} />
    </section>
  );
}
