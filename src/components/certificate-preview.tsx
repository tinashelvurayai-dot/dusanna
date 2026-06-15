import certificateSkeleton from "@/assets/certificate-skeleton.png.asset.json";
import diplomaSkeleton from "@/assets/diploma-skeleton.png.asset.json";

export interface CertificateData {
  studentName: string;
  courseName: string;
  level: "certificate" | "diploma";
  date: string;
  certificateId: string;
  skills?: string[];
}

/**
 * Renders the certificate / diploma by overlaying real student data on top of
 * the official Edusanna skeleton artwork (with the gold frame).
 *
 * Each overlay sits on a solid parchment-coloured background so the underlying
 * `{{placeholder}}` text in the skeleton image is fully masked (we previously
 * had both texts visible). Positions are percentage based so the layout scales
 * with the container.
 */
export function CertificatePreview({ data }: { data: CertificateData }) {
  const isDiploma = data.level === "diploma";
  const bg = isDiploma ? diplomaSkeleton.url : certificateSkeleton.url;
  const paper = isDiploma ? "#F7F3F5" : "#FCF7F6";
  const studentName = data.studentName || "Student Name";
  const courseName = data.courseName || "Course Name";
  const certId = data.certificateId || "EDU-XXXX-XXXX";
  const skills = (data.skills ?? []).slice(0, 6).join(" • ");

  // Reusable mask style — solid parchment swatch with a touch of horizontal
  // padding so it fully covers the placeholder beneath.
  const mask = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    background: paper,
    padding: "0.4cqw 1.2cqw",
    borderRadius: "0.3cqw",
    display: "inline-block",
    ...extra,
  });

  return (
    <div className="cert-print-area">
      <div
        className="relative mx-auto w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: "1536 / 1024", containerType: "inline-size" }}
      >
        <img
          src={bg}
          alt={isDiploma ? "Edusanna Diploma" : "Edusanna Certificate"}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {/* Student name — centred over {{student_name}} */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ top: "40%", width: "70%" }}
        >
          <span
            style={mask({
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            <span
              className="font-serif font-black text-[#15103a] leading-tight"
              style={{ fontSize: "2.8cqw" }}
            >
              {studentName}
            </span>
          </span>
        </div>

        {/* Course name — centred over {{course_name}} */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ top: "53.5%", width: "72%" }}
        >
          <span
            style={mask({
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            <span
              className="font-serif italic text-[#3a1f6b] leading-tight"
              style={{ fontSize: "2.4cqw" }}
            >
              {courseName}
            </span>
          </span>
        </div>

        {/* Skills list (diploma only) — masks {{skills_list}} */}
        {isDiploma && (
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{ top: "66%", width: "70%" }}
          >
            <span style={mask({ maxWidth: "100%" })}>
              <span
                className="text-[#4a2f7a]"
                style={{ fontSize: "1.4cqw" }}
              >
                {skills || "—"}
              </span>
            </span>
          </div>
        )}

        {/* Certificate ID — sits after the printed "Certificate ID:" label.
            The placeholder {{certificate_id}} starts roughly at 55% from the
            left edge for both layouts, so we anchor the mask there. */}
        <div
          className="absolute"
          style={{ left: "55%", top: isDiploma ? "75.2%" : "66%" }}
        >
          <span style={mask()}>
            <span
              className="font-serif text-[#15103a]"
              style={{ fontSize: "1.5cqw" }}
            >
              {certId}
            </span>
          </span>
        </div>

        {/* Completion date — anchored exactly where {{completion_date}} starts
            on the bottom-left "Issued" plinth. */}
        <div
          className="absolute"
          style={{ left: "19%", top: isDiploma ? "90.5%" : "86.5%" }}
        >
          <span style={mask()}>
            <span
              className="font-serif italic text-[#15103a]"
              style={{ fontSize: "1.5cqw" }}
            >
              {data.date}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
