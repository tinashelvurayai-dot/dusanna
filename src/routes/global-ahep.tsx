import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Leaf, Award, Clock } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { GLOBAL_AHEP, specialCourseCatalog, specialCourseLanguage } from "@/lib/special-courses";
import { getCourseImage } from "@/lib/course-images";
import { getCourseContent } from "@/lib/courses";
import { GLOBAL_AHEP_PRICE } from "@/lib/pricing";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/global-ahep")({
  head: () =>
    pageHead({
      title: "Global AHEP Diploma - Plastic Pollution Leadership | Edusanna",
      description:
        "Global AHEP is Edusanna's flagship diploma shell on plastic pollution leadership, available in English and French for $40 USD. Diploma only - no certificate version.",
      path: "/global-ahep",
    }),
  component: GlobalAhepPage,
});

function GlobalAhepPage() {
  return (
    <div className="min-h-screen">
      <SiteNavbar />

      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-3 py-1">
            <Globe className="w-3.5 h-3.5" aria-hidden="true" /> Special diploma shell
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4">
            <span className="gradient-text">{GLOBAL_AHEP.name}</span>
          </h1>
          <p className="text-lg text-blue-700 mt-2">{GLOBAL_AHEP.tagline}</p>
          <p className="text-blue-700 max-w-3xl mx-auto mt-4 leading-relaxed">{GLOBAL_AHEP.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
            <span className="inline-flex items-center gap-1 font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              <Award className="w-4 h-4" aria-hidden="true" /> Diploma only
            </span>
            <span className="inline-flex items-center gap-1 font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
              ${GLOBAL_AHEP_PRICE} USD credential fee
            </span>
            <span className="inline-flex items-center gap-1 font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700">
              Flexible payment options
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialCourseCatalog.map((course) => {
            const image = getCourseImage(course);
            const content = getCourseContent(course.id, "diploma");
            return (
              <Link
                key={course.id}
                to="/course/$id"
                params={{ id: course.id }}
                className="course-card p-6 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-2xl"
              >
                {image ? (
                  <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-blue-50">
                    <img
                      src={image}
                      alt={`${GLOBAL_AHEP.name} ${specialCourseLanguage[course.id]} diploma cover`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-4">
                    <Leaf className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                )}
                <span className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  {specialCourseLanguage[course.id]}
                </span>
                <h2 className="text-lg font-bold text-blue-900 mt-1">{course.diplomaTitle}</h2>
                {content?.description && (
                  <p className="text-sm text-blue-600 mt-2 line-clamp-4">{content.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                    <Clock className="w-3 h-3" aria-hidden="true" /> Self-paced
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                    ${GLOBAL_AHEP_PRICE} USD
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
