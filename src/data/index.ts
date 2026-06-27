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
    alt: string;
    width: number;
    height: number;
  };
};

export type GalleryItem = {
  id: string;
  src: string;
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

// Події та галерея
export const EVENTS: Event[] = [
  {
    id: "event-1",
    variant: "default",
    category: "ВИСТАВКА",
    date: "26.08–01.12.2019",
    title: "Йду і повертаюсь",
    description:
      "Досліджуйте взаємозвʼязок людини та природи через живопис, графіку та скульптуру.",
    image: {
      src: "/images/events/event-1.jpg",
      alt: "Картина «Йду і повертаюсь»",
      width: 640,
      height: 420,
    },
  },
  {
    id: "event-2",
    variant: "default",
    category: "ВИСТАВКА",
    date: "26.08–01.12.2019",
    title: "Timeless",
    description:
      "Виставка, що поєднує класичне та сучасне мистецтво в одному просторі.",
    image: {
      src: "/images/events/event-2.jpg",
      alt: "Картина «Timeless»",
      width: 640,
      height: 420,
    },
  },
  {
    id: "event-3",
    variant: "featured",
    category: "ЛЕКЦІЯ",
    date: "15/02/2021, 13:00",
    title: "Від класицизму до романтизму",
    description: "",
    image: {
      src: "/images/events/event-3.jpg",
      alt: "Лекція «Від класицизму до романтизму»",
      width: 1280,
      height: 646,
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "/images/gallery/gallery-1.jpg",
    alt: "Портрет у галереї",
    width: 400,
    height: 600,
  },
  {
    id: "gallery-2",
    src: "/images/gallery/gallery-2.jpg",
    alt: "Пейзаж у галереї",
    width: 640,
    height: 420,
  },
  {
    id: "gallery-3",
    src: "/images/gallery/gallery-3.jpg",
    alt: "Натюрморт у галереї",
    width: 640,
    height: 360,
  },
  {
    id: "gallery-4",
    src: "/images/gallery/gallery-4.jpg",
    alt: "Картина у галереї",
    width: 320,
    height: 320,
  },
];
