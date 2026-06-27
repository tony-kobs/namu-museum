export const ANCHORS = {
  gallery: "gallery",
  events: "events",
  about: "about",
  contacts: "contacts",
} as const;

export type AnchorId = (typeof ANCHORS)[keyof typeof ANCHORS];
