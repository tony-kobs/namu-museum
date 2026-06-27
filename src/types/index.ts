export type { AnchorId } from "@/constants/anchors";
export type { Breakpoint } from "@/constants/breakpoints";

export type ImageMeta = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type ScheduleDay = {
  time: string;
  day: string;
};

export type EventVariant = "default" | "featured";

export type Event = {
  id: string;
  variant: EventVariant;
  category: string;
  date: string;
  title: string;
  description: string;
  image: ImageMeta;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ButtonVariant = "primary" | "submit" | "icon";

export type ButtonProps = {
  variant?: ButtonVariant;
  label?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
};
