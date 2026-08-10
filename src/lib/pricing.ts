import { isSpecialCourse } from "./special-courses";

export type PriceLevel = "certificate" | "diploma";

/** Standard catalog prices (actual charges). */
export const STANDARD_PRICES: Record<PriceLevel, number> = { certificate: 12, diploma: 18 };

/** Global AHEP diploma programmes are priced separately. */
export const GLOBAL_AHEP_PRICE = 40;

/** Real amount charged for a given course + level. */
export function getCoursePrice(courseId: string, level: PriceLevel): number {
  if (isSpecialCourse(courseId)) return GLOBAL_AHEP_PRICE;
  return STANDARD_PRICES[level];
}
