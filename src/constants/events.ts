import type { Event } from "@/types";

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
