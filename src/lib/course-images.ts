// One curated category cover per discipline. Bundled locally so they always
// render — no external CDN dependency to break course images.
import type { CourseCatalogItem } from "./course-types";

import health from "@/assets/cat-health.jpg";
import business from "@/assets/cat-business.jpg";
import technology from "@/assets/cat-technology.jpg";
import creative from "@/assets/cat-creative.jpg";
import agriculture from "@/assets/cat-agriculture.jpg";
import finance from "@/assets/cat-finance.jpg";
import legal from "@/assets/cat-legal.jpg";
import hospitality from "@/assets/cat-hospitality.jpg";
import education from "@/assets/cat-education.jpg";
import trades from "@/assets/cat-trades.jpg";

export const categoryImages: Record<string, string> = {
  health,
  business,
  technology,
  creative,
  agriculture,
  finance,
  legal,
  hospitality,
  education,
  trades,
};

export function getCourseImage(item: Pick<CourseCatalogItem, "id" | "category">): string | undefined {
  return categoryImages[item.category];
}
