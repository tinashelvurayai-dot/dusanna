import { courseCatalog } from "./course-catalog";
import type { CourseCatalogItem } from "./course-types";

// Category-specific image sets supplied by the product team.
// Courses cycle through their category's images by their order within the catalog.
export const categoryImages: Record<string, string[]> = {
  health: [
    "https://i.postimg.cc/jjSMvdR0/medical1.png",
    "https://i.postimg.cc/Yqy0jdjS/medical2.png",
    "https://i.postimg.cc/05V2HVYc/medical3.png",
    "https://i.postimg.cc/ZYs4LCZ5/medical4.png",
    "https://i.postimg.cc/sxMFL4zH/medical5.png",
  ],
  business: [
    "https://i.postimg.cc/NfTGfQh4/business1.png",
    "https://i.postimg.cc/d1dNZNqV/business2.png",
    "https://i.postimg.cc/9QKBPPgD/business3.png",
    "https://i.postimg.cc/GmWkTL9G/business4.png",
    "https://i.postimg.cc/15TFbmGM/business5.png",
  ],
  technology: [
    "https://i.postimg.cc/SNX26BB6/it1.png",
    "https://i.postimg.cc/br4vVv7H/it2.png",
    "https://i.postimg.cc/JhRz2v2p/it3.png",
    "https://i.postimg.cc/rwNrs1Xy/it4.png",
  ],
  creative: [
    "https://i.postimg.cc/d1b143P4/art1.png",
    "https://i.postimg.cc/kXPbFJmY/art1a.png",
    "https://i.postimg.cc/xTQXN6vW/art2a.png",
    "https://i.postimg.cc/1RGtSDkr/art3.png",
    "https://i.postimg.cc/brpqrF7b/art4.png",
  ],
  agriculture: [
    "https://i.postimg.cc/k4hyXk6H/agric1a.png",
    "https://i.postimg.cc/Y0xHYCpp/agric2.png",
    "https://i.postimg.cc/jSrBb7rX/agric3.png",
    "https://i.postimg.cc/FHmCqXjY/agric2a.png",
  ],
  finance: [
    "https://i.postimg.cc/hPR2zR3n/fin1a.png",
    "https://i.postimg.cc/wTTKnHqG/finance2.png",
    "https://i.postimg.cc/RVTLW6HV/fin2a.png",
    "https://i.postimg.cc/85WhNjGB/fin4.png",
    "https://i.postimg.cc/8z0WvhPf/fin3.png",
    "https://i.postimg.cc/GhMs0kDJ/fin5.png",
    "https://i.postimg.cc/jdjLhL1w/fin6.png",
  ],
  legal: [
    "https://i.postimg.cc/kgbMj8vJ/legal1a.png",
    "https://i.postimg.cc/rp5YKYyd/legal2.png",
    "https://i.postimg.cc/ZK14ynzT/legal2a.png",
    "https://i.postimg.cc/pTGtVXJq/legal3.png",
    "https://i.postimg.cc/x1DV1ZMw/legal4.png",
    "https://i.postimg.cc/MZnGchf3/legal5.png",
  ],
  hospitality: [
    "https://i.postimg.cc/3NG7LQgQ/hosp1a.png",
    "https://i.postimg.cc/qRjw3PPk/hospitality2.png",
    "https://i.postimg.cc/XYsMkYTf/hosp2a.png",
    "https://i.postimg.cc/TYcBTP2g/hosp3.png",
    "https://i.postimg.cc/rskYLBBz/hosp4.png",
  ],
  education: [
    "https://i.postimg.cc/nztJSPc5/edu1a.png",
    "https://i.postimg.cc/rwt76NbX/edu2a.png",
    "https://i.postimg.cc/dVdNNtkT/edu3.png",
    "https://i.postimg.cc/ryPh8t5r/edu4.png",
  ],
  trades: [
    "https://i.postimg.cc/sgN62Qkn/tra1.png",
    "https://i.postimg.cc/15RJcrPL/tra2.png",
    "https://i.postimg.cc/4yWvFjZp/tra3.png",
    "https://i.postimg.cc/jSpH9HVk/tra4.png",
    "https://i.postimg.cc/8PrsYq1G/tra5.png",
    "https://i.postimg.cc/0y0StLf0/tra6.png",
  ],
};

// Precompute each course's stable index within its category so the assigned
// image is deterministic and consistent across pages.
const indexByCourseId = new Map<string, number>();
for (const cat of new Set(courseCatalog.map((c) => c.category))) {
  const list = courseCatalog.filter((c) => c.category === cat);
  list.forEach((c, i) => indexByCourseId.set(c.id, i));
}

export function getCourseImage(item: Pick<CourseCatalogItem, "id" | "category">): string | undefined {
  const images = categoryImages[item.category];
  if (!images || images.length === 0) return undefined;
  const idx = indexByCourseId.get(item.id) ?? 0;
  return images[idx % images.length];
}