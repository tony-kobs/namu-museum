// Типи
export type Event = {
  id: string;
  variant: "default" | "featured";
  category: string;
  date: string;
  title: string;
  description: string;
  image: {
    src: string;
    src2x?: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type GalleryItem = {
  id: string;
  src: string;
  src2x?: string;
  alt: string;
  width: number;
  height: number;
};

// Сайт
export const SITE = {
  name: "NAMU",
  title: "NAMU — Художній музей",
  description:
    "Національний художній музей України — актуальні виставки, події та галерея.",
  copyright: "Copyright © 2019. All Rights Reserved.",
  designer: "Designed by Zhyriada Marina",
};

export const HERO = {
  title: "ХУДОЖНІЙ МУЗЕЙ",
  ctaLabel: "КВИТКИ",
  scrollLabel: "scroll",
};

export const SUBSCRIPTION = {
  title: "Підписка",
  description: "Бути в курсі всіх актуальних подій та останніх новин.",
  placeholder: "E-mail",
};

// Навігація (anchor-посилання по сторінці)
export const NAV_LINKS = [
  { id: "gallery", label: "Галерея", href: "#gallery" },
  { id: "events", label: "Виставки та події", href: "#events" },
  { id: "about", label: "Про Нас", href: "#about" },
  { id: "contacts", label: "Контакти", href: "#contacts" },
];

// Контакти та графік
export const CONTACTS = {
  title: "Контакти",
  address: "вул. М. Грушевського, 6; Київ, 01001",
  phones: ["+38 (044) 278-13-57", "278-74-54"],
  email: "info@namu.kiev.ua",
};

export const SCHEDULE = {
  title: "Графік роботи",
  days: [
    { time: "12:00 — 20:00", day: "середа" },
    { time: "12:00 — 20:00", day: "четвер" },
    { time: "12:00 — 20:00", day: "пʼятниця" },
    { time: "11:00 — 19:00", day: "субота" },
    { time: "11:00 — 19:00", day: "неділя" },
  ],
  daysOff: { label: "Вихідні:", value: "понеділок, вівторок" },
  note: "Каса припиняє роботу за 1 годину до закриття музею",
};

export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/namu.museum",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/namu.museum",
  },
];

// Події та галерея — дані з mockAPI (див. src/services/)
