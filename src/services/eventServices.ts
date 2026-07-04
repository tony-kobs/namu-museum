import axios from "axios";
import type { Event } from "@/data";

const BASE_URL = "https://6a450e04aab3faec3f6952a2.mockapi.io/namu";

type ApiEvent = {
  id: string;
  image: string;
  image2x: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  type: string;
};

function normalizeImagePath(path: string): string {
  if (path.startsWith("/events/")) {
    return `/images${path}`;
  }

  return path;
}

function mapApiEvent(apiEvent: ApiEvent, index: number, total: number): Event {
  const isFeatured = index === total - 1;

  return {
    id: apiEvent.id,
    variant: isFeatured ? "featured" : "default",
    category: apiEvent.type.toUpperCase(),
    date: apiEvent.date,
    title: apiEvent.title,
    description: apiEvent.description,
    image: {
      src: normalizeImagePath(apiEvent.image),
      src2x: normalizeImagePath(apiEvent.image2x),
      alt: apiEvent.alt,
      width: isFeatured ? 1280 : 640,
      height: isFeatured ? 646 : 420,
    },
  };
}

export async function fetchEvents(): Promise<Event[]> {
  const response = await axios.get<ApiEvent[]>(`${BASE_URL}/events`);
  const items = response.data;

  return items.map((item, index) => mapApiEvent(item, index, items.length));
}
