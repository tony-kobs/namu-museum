import { ANCHORS } from "./anchors";

export const NAV_LINKS = [
  { id: "gallery", label: "Галерея", href: `#${ANCHORS.gallery}` },
  {
    id: "events",
    label: "Виставки та події",
    href: `#${ANCHORS.events}`,
  },
  { id: "about", label: "Про Нас", href: `#${ANCHORS.about}` },
  { id: "contacts", label: "Контакти", href: `#${ANCHORS.contacts}` },
] as const;
