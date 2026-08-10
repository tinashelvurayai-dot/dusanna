// Curated cover images per category. Every course inside a category gets a
// stable image from that category's pool, so the same course always shows the
// same picture while neighbouring courses look different.
import type { CourseCatalogItem } from "./course-types";
import { courseCatalog } from "./course-catalog";

export const categoryImagePools: Record<string, string[]> = {
  health: [
    "/courses/medical1.webp",
    "/courses/medical2.webp",
    "/courses/medical3.webp",
    "/courses/medical4.webp",
    "/courses/medical5.webp",
    "/courses/wellness-a.webp",
    "/courses/wellnes-b.webp",
    "/courses/well-c.webp",
    "/courses/well-d.webp",
    "/courses/well-f.webp",
    "/courses/well-g.webp",
    "/courses/wellh.webp",
    "/courses/well-i.webp",
    "/courses/well-j.webp",
    "/courses/well-k.webp",
    "/courses/well-m.webp",
    "/courses/well-o.webp",
  ],
  business: [
    "/courses/business1.webp",
    "/courses/business2.webp",
    "/courses/business3.webp",
    "/courses/business4.webp",
    "/courses/business5.webp",
    "/courses/busi-a.webp",
    "/courses/busi-b.webp",
    "/courses/busi-c.webp",
    "/courses/busid.webp",
    "/courses/busi-d.webp",
    "/courses/busi-e.webp",
    "/courses/busi-f.webp",
    "/courses/busi-g.webp",
    "/courses/busi-h.webp",
    "/courses/busi-i.webp",
    "/courses/busi-j.webp",
    "/courses/busi-k.webp",
    "/courses/busi-l.webp",
    "/courses/busi-m.webp",
    "/courses/busi-n.webp",
    "/courses/busi-o.webp",
    "/courses/busi-p.webp",
    "/courses/busi-r.webp",
    "/courses/busi-t.webp",
    "/courses/busi-u.webp",
    "/courses/busi-w.webp",
    "/courses/busi-z.webp",
    "/courses/busi-y.webp",
  ],
  technology: [
    "/courses/it1.webp",
    "/courses/it2.webp",
    "/courses/it3.webp",
    "/courses/it4.webp",
    "/courses/it-a.webp",
    "/courses/it-b.webp",
    "/courses/it-c.webp",
    "/courses/it-d.webp",
    "/courses/it-e.webp",
    "/courses/it-f.webp",
    "/courses/it-g.webp",
    "/courses/it-h.webp",
    "/courses/it-i.webp",
    "/courses/it-j.webp",
    "/courses/it-k.webp",
    "/courses/it-l.webp",
    "/courses/it-m.webp",
    "/courses/it-n.webp",
    "/courses/it-o.webp",
    "/courses/it-p.webp",
    "/courses/it-q.webp",
    "/courses/it-r.webp",
    "/courses/it-s.webp",
    "/courses/it-t.webp",
    "/courses/it-swweet-1.webp",
    "/courses/it-swwt-2.webp",
    "/courses/it-sweet-3.webp",
    "/courses/it-swwt-4.webp",
    "/courses/it-swt-5.webp",
  ],
  creative: [
    "/courses/art1.webp",
    "/courses/art1a.webp",
    "/courses/art2a.webp",
    "/courses/art3.webp",
    "/courses/art4.webp",
    "/courses/art-a.webp",
    "/courses/art-b.webp",
    "/courses/art-c.webp",
    "/courses/art-d.webp",
    "/courses/art-f.webp",
    "/courses/art-i.webp",
    "/courses/art-j.webp",
    "/courses/art-k.webp",
    "/courses/art-l.webp",
    "/courses/art-m.webp",
    "/courses/edu-c.webp",
    "/courses/edu-f.webp",
    "/courses/edu-h.webp",
    "/courses/edu-sweet.webp",
    "/courses/edu-swt.webp",
    "/courses/edu-sweeet.webp",
  ],
  agriculture: [
    "/courses/agric1a.webp",
    "/courses/agric2.webp",
    "/courses/agric3.webp",
    "/courses/agric2a.webp",
    "/courses/agr-a.webp",
    "/courses/agr-b.webp",
    "/courses/agr-c.webp",
    "/courses/agr-d.webp",
    "/courses/agr-e.webp",
    "/courses/agr-f.webp",
    "/courses/agr-g.webp",
    "/courses/agr-h.webp",
    "/courses/agr-i.webp",
    "/courses/agr-j.webp",
    "/courses/agr-k.webp",
    "/courses/agr-sweet.webp",
  ],
  finance: [
    "/courses/fin1a.webp",
    "/courses/finance2.webp",
    "/courses/fin2a.webp",
    "/courses/fin4.webp",
    "/courses/fin3.webp",
    "/courses/fin5.webp",
    "/courses/fin6.webp",
    "/courses/fin-a.webp",
    "/courses/fin-b.webp",
    "/courses/fin-c.webp",
    "/courses/fin-d.webp",
    "/courses/fin-e.webp",
    "/courses/fin-g.webp",
    "/courses/fin-f.webp",
    "/courses/fin-h.webp",
  ],
  legal: [
    "/courses/legal1a.webp",
    "/courses/legal2.webp",
    "/courses/legal2a.webp",
    "/courses/legal3.webp",
    "/courses/legal4.webp",
    "/courses/legal5.webp",
    "/courses/leg-a.webp",
    "/courses/leg-b.webp",
    "/courses/leg-c.webp",
    "/courses/leg-d.webp",
    "/courses/leg-f.webp",
    "/courses/leg-g.webp",
    "/courses/leg-h.webp",
    "/courses/leg-i.webp",
    "/courses/leg-j.webp",
  ],
  hospitality: [
    "/courses/hosp1a.webp",
    "/courses/hospitality2.webp",
    "/courses/hosp2a.webp",
    "/courses/hosp3.webp",
    "/courses/hosp4.webp",
    "/courses/hosp-a.webp",
    "/courses/hosp-b.webp",
    "/courses/hosp-c.webp",
    "/courses/hosp-d.webp",
    "/courses/hosp-e.webp",
    "/courses/hosp-f.webp",
    "/courses/hosp-g.webp",
    "/courses/hosp-h.webp",
    "/courses/hosp-i.webp",
    "/courses/hosp-k.webp",
    "/courses/hosp-l.webp",
  ],
  education: [
    "/courses/edu1a.webp",
    "/courses/edu2a.webp",
    "/courses/edu3.webp",
    "/courses/edu4.webp",
  ],
  trades: [
    "/courses/tra1.webp",
    "/courses/tra2.webp",
    "/courses/tra3.webp",
    "/courses/tra4.webp",
    "/courses/tra5.webp",
    "/courses/tra6.webp",
    "/courses/trade-a.webp",
    "/courses/trade-b.webp",
    "/courses/trade-c.webp",
    "/courses/trade-d.webp",
  ],
};

/** Dedicated cover art for special / partner courses. */
export const specialCourseImages: Record<string, string> = {
  "ahep-plastic-pollution": "/courses/Chat-GPT-Image-Aug-9-2026-03-14-26-PM.webp",
  "ahep-pollution-plastique": "/courses/Chat-GPT-Image-Aug-9-2026-03-14-26-PM.webp",
};

/** First image of each category - used as a lightweight fallback. */
export const categoryImages: Record<string, string> = Object.fromEntries(
  Object.entries(categoryImagePools).map(([k, v]) => [k, v[0]]),
);

// Stable per-course assignment: index of the course within its category.
const assignment: Record<string, string> = (() => {
  const positions: Record<string, number> = {};
  const map: Record<string, string> = {};
  for (const course of courseCatalog) {
    const pool = categoryImagePools[course.category];
    if (!pool?.length) continue;
    const i = positions[course.category] ?? 0;
    positions[course.category] = i + 1;
    map[course.id] = pool[i % pool.length];
  }
  return map;
})();

export function getCourseImage(item: Pick<CourseCatalogItem, "id" | "category">): string | undefined {
  return specialCourseImages[item.id] ?? assignment[item.id] ?? categoryImages[item.category];
}

/** Images worth preloading first (one per category) so covers appear instantly. */
export const preloadImages: string[] = Object.values(categoryImages);
