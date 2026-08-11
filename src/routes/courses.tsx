import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, Clock, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { courseCatalog, courseCategories, searchCourses } from "@/lib/courses";
import { getCourseIcon } from "@/lib/course-icons";
import { getCourseImage } from "@/lib/course-images";
import { PriceTag } from "@/components/price-tag";
import { GLOBAL_AHEP, isSpecialCourse } from "@/lib/special-courses";
import { GLOBAL_AHEP_PRICE } from "@/lib/pricing";
import { pageHead } from "@/lib/site";

const PAGE_SIZE = 18;

export const Route = createFileRoute("/courses")({
  head: () =>
    pageHead({
      title: "All Courses A-Z | Edusanna Online Learning",
      description:
        "Browse 200+ free Edusanna courses from A to Z across technology, business, health, finance, agriculture and more. Earn a certificate or diploma.",
      path: "/courses",
    }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(
    () => searchCourses(query, category).filter((c) => !isSpecialCourse(c.id)),
    [query, category],
  );

  // Reset paging whenever the filters change.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, category]);

  const page = useMemo(() => results.slice(0, visible), [results, visible]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof courseCatalog>();
    for (const c of page) {
      const arr = map.get(c.letter) ?? [];
      arr.push(c);
      map.set(c.letter, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [page]);

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Explore All Courses</span>
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-3">
            200+ courses A-Z. Learn free, then earn a credential.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <PriceTag level="certificate" size="md" showLabel />
            <PriceTag level="diploma" size="md" showLabel />
          </div>

          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" aria-hidden="true" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              aria-label="Search courses"
              className="pl-12 h-12 rounded-xl border-blue-200 bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${!category ? "bg-blue-600 text-white" : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"}`}
            >
              All
            </button>
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${category === cat.id ? "bg-blue-600 text-white" : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Global AHEP shell - the special diploma-only programmes live here */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/global-ahep"
            className="glass-card-light p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-blue-900">{GLOBAL_AHEP.name}</h2>
                <p className="text-sm text-blue-600">
                  {GLOBAL_AHEP.tagline} - English &amp; Francais, diploma only.
                </p>
              </div>
            </div>
            <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-green-50 text-green-700 self-start sm:self-auto">
              ${GLOBAL_AHEP_PRICE} USD
            </span>
          </Link>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {grouped.length === 0 && (
            <p className="text-center text-blue-600 py-16">No courses match your search.</p>
          )}
          {grouped.map(([letter, courses]) => (
            <div key={letter} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-black flex items-center justify-center">
                  {letter}
                </span>
                <div className="h-px flex-1 bg-blue-100" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => {
                  const image = getCourseImage(course);
                  const Icon = getCourseIcon(course.icon);
                  return (
                    <Link
                      key={course.id}
                      to="/course/$id"
                      params={{ id: course.id }}
                      className="course-card p-6 block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      {image ? (
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 bg-blue-50">
                          <img
                            src={image}
                            alt={`${course.certificateTitle} course cover`}
                            loading="lazy"
                            decoding="async"
                            width={640}
                            height={360}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-blue-900 mb-1">{course.certificateTitle}</h3>
                      <p className="text-sm text-blue-500 mb-3">Diploma: {course.diplomaTitle}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700"><Clock className="w-3 h-3" aria-hidden="true" /> 3hrs</span>
                        <PriceTag level="certificate" size="sm" />
                        <PriceTag level="diploma" size="sm" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {visible < results.length && (
            <div className="text-center mt-4">
              <p className="text-sm text-blue-600 mb-3">
                Showing {page.length} of {results.length} courses
              </p>
              <Button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="premium-button px-8 py-3"
              >
                Load more courses
              </Button>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
