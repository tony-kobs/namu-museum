import axios from "axios";
import type { GalleryItem } from "@/data";

const BASE_URL = "https://6a450e04aab3faec3f6952a2.mockapi.io/namu";

type ApiGalleryItem = {
  id: string;
  image: string;
  image2x: string;
  alt: string;
};

const GALLERY_SIZES = [
  { width: 400, height: 600 },
  { width: 640, height: 420 },
  { width: 640, height: 360 },
  { width: 320, height: 320 },
];

function normalizeImagePath(path: string): string {
  if (path.startsWith("/gallery/")) {
    return `/images${path}`;
  }

  return path;
}

function mapApiGalleryItem(item: ApiGalleryItem, index: number): GalleryItem {
  const size = GALLERY_SIZES[index] ?? GALLERY_SIZES[0];

  return {
    id: item.id,
    src: normalizeImagePath(item.image),
    src2x: normalizeImagePath(item.image2x),
    alt: item.alt,
    width: size.width,
    height: size.height,
  };
}

export async function fetchGallery(): Promise<GalleryItem[]> {
  const response = await axios.get<ApiGalleryItem[]>(`${BASE_URL}/gallery`);

  return response.data.map(mapApiGalleryItem);
}
