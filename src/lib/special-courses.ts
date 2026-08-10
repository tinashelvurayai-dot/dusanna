import type { CourseCatalogItem } from "./course-types"

/** Special / partner programmes grouped under the Global AHEP diploma shell. */
export const specialCourseIds = ["ahep-plastic-pollution", "ahep-pollution-plastique"] as const

/** The unique diploma shell that hosts the AHEP programmes. */
export const GLOBAL_AHEP = {
  slug: "global-ahep",
  name: "Global AHEP",
  tagline: "Certified Plastic Pollution Leadership Program",
  description:
    "Global AHEP is Edusanna's flagship international diploma shell, delivered with the African Health & Environment Programme. It is offered in English and French, is diploma-only, and carries its own credential fee of $40 USD.",
} as const

export const specialCourseCatalog: CourseCatalogItem[] = [
  {
    id: "ahep-plastic-pollution",
    letter: "A",
    certificateTitle: "Global AHEP - Plastic Pollution Leadership (English)",
    diplomaTitle: "Global AHEP Certified Plastic Pollution Leadership Program",
    category: "agriculture",
    icon: "Leaf",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "ahep-pollution-plastique",
    letter: "A",
    certificateTitle: "Global AHEP - Pollution Plastique, Leadership (Francais)",
    diplomaTitle: "Programme de Leadership Certifie Global AHEP sur la Pollution Plastique",
    category: "agriculture",
    icon: "Leaf",
    color: "from-teal-500 to-green-500",
  },
]

/** Language label for each Global AHEP programme. */
export const specialCourseLanguage: Record<string, string> = {
  "ahep-plastic-pollution": "English",
  "ahep-pollution-plastique": "Francais",
}

export function isSpecialCourse(id: string): boolean {
  return (specialCourseIds as readonly string[]).includes(id)
}
