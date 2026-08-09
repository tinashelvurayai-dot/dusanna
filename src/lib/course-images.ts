// Curated cover images per category. Every course inside a category gets a
// stable image from that category's pool, so the same course always shows the
// same picture while neighbouring courses look different.
import type { CourseCatalogItem } from "./course-types";
import { courseCatalog } from "./course-catalog";

const P = "https://i.postimg.cc";

export const categoryImagePools: Record<string, string[]> = {
  health: [
    `${P}/jjSMvdR0/medical1.png`,
    `${P}/Yqy0jdjS/medical2.png`,
    `${P}/05V2HVYc/medical3.png`,
    `${P}/ZYs4LCZ5/medical4.png`,
    `${P}/sxMFL4zH/medical5.png`,
    `${P}/jjvnV2sS/wellness-a.png`,
    `${P}/T2B9N77k/wellnes-b.png`,
    `${P}/Bn0C48GK/well-c.png`,
    `${P}/Dzfd4t07/well-d.png`,
    `${P}/j5LHZPzT/well-f.png`,
    `${P}/j2fzrT3K/well-g.png`,
    `${P}/VkgXwDgf/wellh.png`,
    `${P}/hvV75rhJ/well-i.png`,
    `${P}/pLs54yVf/well-j.png`,
    `${P}/G3v8rX37/well-k.png`,
    `${P}/kGygShB9/well-m.png`,
    `${P}/FH6s0Ssq/well-o.png`,
  ],
  business: [
    `${P}/NfTGfQh4/business1.png`,
    `${P}/d1dNZNqV/business2.png`,
    `${P}/9QKBPPgD/business3.png`,
    `${P}/GmWkTL9G/business4.png`,
    `${P}/15TFbmGM/business5.png`,
    `${P}/0jp1K6X7/busi-a.png`,
    `${P}/XqKt7RXm/busi-b.png`,
    `${P}/kMW0cbwy/busi-c.png`,
    `${P}/pXxg1L6d/busid.png`,
    `${P}/QddvhnDJ/busi-d.png`,
    `${P}/QdYwtkNw/busi-e.png`,
    `${P}/3wy6D4d4/busi-f.png`,
    `${P}/NMmzp38t/busi-g.png`,
    `${P}/rF8PNYDL/busi-h.png`,
    `${P}/XYP13jQC/busi-i.png`,
    `${P}/T1TCQpYm/busi-j.png`,
    `${P}/SQGZR7Dd/busi-k.png`,
    `${P}/dtH4mQMd/busi-l.png`,
    `${P}/k58smxVP/busi-m.png`,
    `${P}/90xtpbkW/busi-n.png`,
    `${P}/4NSQH8tP/busi-o.png`,
    `${P}/GpkFNdf7/busi-p.png`,
    `${P}/RF47x25f/busi-r.png`,
    `${P}/jq8zB88s/busi-t.png`,
    `${P}/zX6TGyYY/busi-u.png`,
    `${P}/B6SKVDHj/busi-w.png`,
    `${P}/6qS4qmS6/busi-z.png`,
    `${P}/J4DBvRDd/busi-y.png`,
  ],
  technology: [
    `${P}/SNX26BB6/it1.png`,
    `${P}/br4vVv7H/it2.png`,
    `${P}/JhRz2v2p/it3.png`,
    `${P}/rwNrs1Xy/it4.png`,
    `${P}/W1KVKPZZ/it-a.png`,
    `${P}/W4kVcf62/it-b.png`,
    `${P}/3RjHd4cZ/it-c.png`,
    `${P}/brzfbYXd/it-d.png`,
    `${P}/8kHSGvWD/it-e.png`,
    `${P}/X716G0Q1/it-f.png`,
    `${P}/1XRbXWFb/it-g.png`,
    `${P}/rFP7yNpy/it-h.png`,
    `${P}/C1SQrvcQ/it-i.png`,
    `${P}/gjBtJGmw/it-j.png`,
    `${P}/jdmkYq8w/it-k.png`,
    `${P}/hGqyhyRq/it-l.png`,
    `${P}/xdysmv9c/it-m.png`,
    `${P}/cHFX9dgS/it-n.png`,
    `${P}/brMLPL91/it-o.png`,
    `${P}/3Js9bSRy/it-p.png`,
    `${P}/fbZCMVYW/it-q.png`,
    `${P}/C1rsCJXV/it-r.png`,
    `${P}/J0ycpZCv/it-s.png`,
    `${P}/GhyxYFjg/it-t.png`,
    `${P}/rp81vvLS/it-swweet-1.png`,
    `${P}/Y0mY67Qf/it-swwt-2.png`,
    `${P}/52JK2KMK/it-sweet-3.png`,
    `${P}/pr8k2zG4/it-swwt-4.png`,
    `${P}/PqRMY2Bd/it-swt-5.png`,
  ],
  creative: [
    `${P}/d1b143P4/art1.png`,
    `${P}/kXPbFJmY/art1a.png`,
    `${P}/xTQXN6vW/art2a.png`,
    `${P}/1RGtSDkr/art3.png`,
    `${P}/brpqrF7b/art4.png`,
    `${P}/VLK4zfDt/art-a.png`,
    `${P}/MGQY0yx1/art-b.png`,
    `${P}/ydCyLk8K/art-c.png`,
    `${P}/prqQVCQ1/art-d.png`,
    `${P}/02XGLtyQ/art-f.png`,
    `${P}/25h4LrF2/art-i.png`,
    `${P}/gJK84s7G/art-j.png`,
    `${P}/x8THZHry/art-k.png`,
    `${P}/SRT8bskR/art-l.png`,
    `${P}/gkj8qvHv/art-m.png`,
    `${P}/q7VKTWV1/edu-c.png`,
    `${P}/Kcqgz1Sw/edu-f.png`,
    `${P}/zv6BkRqD/edu-h.png`,
    `${P}/HkGnc5ZT/edu-sweet.png`,
    `${P}/k4hXnt6p/edu-swt.png`,
    `${P}/3R6YM5Vc/edu-sweeet.png`,
  ],
  agriculture: [
    `${P}/k4hyXk6H/agric1a.png`,
    `${P}/Y0xHYCpp/agric2.png`,
    `${P}/jSrBb7rX/agric3.png`,
    `${P}/FHmCqXjY/agric2a.png`,
    `${P}/rFpxCvLH/agr-a.png`,
    `${P}/k5WbgCWj/agr-b.png`,
    `${P}/ydP30Tp4/agr-c.png`,
    `${P}/qMg6Cy8L/agr-d.png`,
    `${P}/RZH3gmp0/agr-e.png`,
    `${P}/N08Kw4cL/agr-f.png`,
    `${P}/HnNxtvQw/agr-g.png`,
    `${P}/xTkqdY2t/agr-h.png`,
    `${P}/bNKrDMYr/agr-i.png`,
    `${P}/KYbYQMgH/agr-j.png`,
    `${P}/XJ7Y66Lw/agr-k.png`,
    `${P}/vTCYngsX/agr-sweet.png`,
  ],
  finance: [
    `${P}/hPR2zR3n/fin1a.png`,
    `${P}/wTTKnHqG/finance2.png`,
    `${P}/RVTLW6HV/fin2a.png`,
    `${P}/85WhNjGB/fin4.png`,
    `${P}/8z0WvhPf/fin3.png`,
    `${P}/GhMs0kDJ/fin5.png`,
    `${P}/jdjLhL1w/fin6.png`,
    `${P}/0QM2y0gr/fin-a.png`,
    `${P}/NGXjhDkY/fin-b.png`,
    `${P}/gkqcj07s/fin-c.png`,
    `${P}/HLjT69kf/fin-d.png`,
    `${P}/d1ywYQd4/fin-e.png`,
    `${P}/BQssr0v5/fin-g.png`,
    `${P}/8zXSffmr/fin-f.png`,
    `${P}/KjbShPxH/fin-h.png`,
  ],
  legal: [
    `${P}/kgbMj8vJ/legal1a.png`,
    `${P}/rp5YKYyd/legal2.png`,
    `${P}/ZK14ynzT/legal2a.png`,
    `${P}/pTGtVXJq/legal3.png`,
    `${P}/x1DV1ZMw/legal4.png`,
    `${P}/MZnGchf3/legal5.png`,
    `${P}/85BXWqVN/leg-a.png`,
    `${P}/zD7PfZjh/leg-b.png`,
    `${P}/VkxKhYY4/leg-c.png`,
    `${P}/Qts0X0KT/leg-d.png`,
    `${P}/d1BnDr8s/leg-f.png`,
    `${P}/BQyp8q1t/leg-g.png`,
    `${P}/5tWm3n3R/leg-h.png`,
    `${P}/rpGNYxZr/leg-i.png`,
    `${P}/mD8NTRsF/leg-j.png`,
  ],
  hospitality: [
    `${P}/3NG7LQgQ/hosp1a.png`,
    `${P}/qRjw3PPk/hospitality2.png`,
    `${P}/XYsMkYTf/hosp2a.png`,
    `${P}/TYcBTP2g/hosp3.png`,
    `${P}/rskYLBBz/hosp4.png`,
    `${P}/KvXrF9X5/hosp-a.png`,
    `${P}/cJJfT235/hosp-b.png`,
    `${P}/bJ7byv5h/hosp-c.png`,
    `${P}/X70FtpF8/hosp-d.png`,
    `${P}/0ykS2FVn/hosp-e.png`,
    `${P}/XvhBLJ4q/hosp-f.png`,
    `${P}/DwpSfZWj/hosp-g.png`,
    `${P}/JhyGsLZj/hosp-h.png`,
    `${P}/yxKdp35B/hosp-i.png`,
    `${P}/zXJvnWKs/hosp-k.png`,
    `${P}/htvGYBCT/hosp-l.png`,
  ],
  education: [
    `${P}/nztJSPc5/edu1a.png`,
    `${P}/rwt76NbX/edu2a.png`,
    `${P}/dVdNNtkT/edu3.png`,
    `${P}/ryPh8t5r/edu4.png`,
  ],
  trades: [
    `${P}/sgN62Qkn/tra1.png`,
    `${P}/15RJcrPL/tra2.png`,
    `${P}/4yWvFjZp/tra3.png`,
    `${P}/jSpH9HVk/tra4.png`,
    `${P}/8PrsYq1G/tra5.png`,
    `${P}/0y0StLf0/tra6.png`,
    `${P}/9fPst4GS/trade-a.png`,
    `${P}/TwCSFZNV/trade-b.png`,
    `${P}/KjWWvt2j/trade-c.png`,
    `${P}/tC1fvv3g/trade-d.png`,
  ],
};

/** Dedicated cover art for special / partner courses. */
export const specialCourseImages: Record<string, string> = {
  "ahep-plastic-pollution": `${P}/k4WJ3XPX/Chat-GPT-Image-Aug-9-2026-03-14-26-PM.png`,
  "ahep-pollution-plastique": `${P}/k4WJ3XPX/Chat-GPT-Image-Aug-9-2026-03-14-26-PM.png`,
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
