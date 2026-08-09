import type { CourseCatalogItem } from "./course-types"

/** Special / partner programmes that sit alongside the A-Z catalog. */
export const specialCourseIds = ["ahep-plastic-pollution", "ahep-pollution-plastique"] as const

export const specialCourseCatalog: CourseCatalogItem[] = [
  {
    id: "ahep-plastic-pollution",
    letter: "A",
    certificateTitle: "AHEP Plastic Pollution Leadership (English)",
    diplomaTitle: "AHEP Certified Plastic Pollution Leadership Program",
    category: "agriculture",
    icon: "Leaf",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "ahep-pollution-plastique",
    letter: "A",
    certificateTitle: "AHEP Pollution Plastique - Leadership (Francais)",
    diplomaTitle: "Programme de Leadership Certifie AHEP sur la Pollution Plastique",
    category: "agriculture",
    icon: "Leaf",
    color: "from-teal-500 to-green-500",
  },
]

export function isSpecialCourse(id: string): boolean {
  return (specialCourseIds as readonly string[]).includes(id)
}
