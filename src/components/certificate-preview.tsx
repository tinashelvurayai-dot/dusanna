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
 * Each overlay is a SOLID parchment-coloured block that fully covers the
 * underlying `{{placeholder}}` text in the skeleton image. The block is sized
 * to the placeholder area (NOT to the inserted text length) so the original
 * template text is never visible alongside the user data. Positions and
 * sizes are percentage based so the layout scales with the container.
 */
export function CertificatePreview({ data }: { data: CertificateData }) {
  const isDiploma = data.level === "diploma";
  const bg = isDiploma ? diplomaSkeleton.url : certificateSkeleton.url;
  const paper = isDiploma ? "#F4EFF1" : "#FAF4F2";
  const studentName = data.studentName || "Student Name";
  const courseName = data.courseName || "Course Name";
  const certId = data.certificateId || "EDU-XXXX-XXXX";
  const skills = (data.skills ?? []).slice(0, 6).join(" • ");

  // Solid mask rectangle that hides the placeholder beneath. Sized by the
  // wrapper; the inner text is centred inside it.
  const slot: React.CSSProperties = {
    position: "absolute",
    background: paper,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "0.2cqw",
  };

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

        {/* Student name — covers the wide {{student_name}} band */}
        <div
          style={{
            ...slot,
            left: "18%",
            right: "18%",
            top: "37.5%",
            height: "8.5%",
          }}
        >
          <span
            className="font-serif font-black text-[#15103a] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontSize: "2.6cqw", padding: "0 1cqw" }}
          >
            {studentName}
          </span>
        </div>

        {/* Course name */}
        <div
          style={{
            ...slot,
            left: "14%",
            right: "14%",
            top: "51.5%",
            height: "7.5%",
          }}
        >
          <span
            className="font-serif italic text-[#3a1f6b] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontSize: "2.2cqw", padding: "0 1cqw" }}
          >
            {courseName}
          </span>
        </div>

        {/* Skills list (diploma only) — covers {{skills_list}} */}
        {isDiploma && (
          <div
            style={{
              ...slot,
              left: "22%",
              right: "22%",
              top: "64%",
              height: "5.5%",
            }}
          >
            <span
              className="text-[#4a2f7a] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ fontSize: "1.4cqw", padding: "0 1cqw" }}
            >
              {skills || "—"}
            </span>
          </div>
        )}

        {/* Certificate ID value — sits to the right of the printed
            "Certificate ID:" label and masks {{certificate_id}}. */}
        <div
          style={{
            ...slot,
            justifyContent: "flex-start",
            left: "49%",
            right: "23%",
            top: isDiploma ? "73.2%" : "65.4%",
            height: "5%",
          }}
        >
          <span
            className="font-serif text-[#15103a] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontSize: "1.5cqw", padding: "0 0.6cqw" }}
          >
            {certId}
          </span>
        </div>

        {/* Completion date — left-aligned exactly over {{completion_date}}
            above the "Issued" plinth in the bottom-left of the certificate. */}
        <div
          style={{
            ...slot,
            justifyContent: "flex-start",
            left: "18%",
            right: "60%",
            top: isDiploma ? "90.3%" : "86.5%",
            height: "5%",
          }}
        >
          <span
            className="font-serif italic text-[#15103a] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontSize: "1.5cqw", padding: "0 0.6cqw" }}
          >
            {data.date}
          </span>
        </div>
      </div>
    </div>
  );
}
