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
 * the official Edusanna skeleton artwork (with the gold frame). All positions
 * are percentage based so the layout scales with the container.
 */
export function CertificatePreview({ data }: { data: CertificateData }) {
  const isDiploma = data.level === "diploma";
  const bg = isDiploma ? diplomaSkeleton.url : certificateSkeleton.url;
  const studentName = data.studentName || "Student Name";
  const courseName = data.courseName || "Course Name";
  const certId = data.certificateId || "EDU-XXXX-XXXX";
  const skills = (data.skills ?? []).slice(0, 6).join(" • ");

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

        {/* Student name */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center w-[70%]"
          style={{ top: isDiploma ? "37%" : "39%" }}
        >
          <p
            className="font-serif font-black text-[#15103a] leading-tight truncate"
            style={{ fontSize: "4.2cqw" }}
          >
            {studentName}
          </p>
        </div>

        {/* Course name */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center w-[70%]"
          style={{ top: isDiploma ? "55%" : "53%" }}
        >
          <p
            className="font-serif italic text-[#3a1f6b] leading-tight truncate"
            style={{ fontSize: "3cqw" }}
          >
            {courseName}
          </p>
        </div>

        {/* Skills list (diploma only) */}
        {isDiploma && skills && (
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center w-[70%]"
            style={{ top: "70%" }}
          >
            <p
              className="text-[#4a2f7a]"
              style={{ fontSize: "1.4cqw" }}
            >
              {skills}
            </p>
          </div>
        )}

        {/* Certificate ID */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center w-[70%]"
          style={{ top: isDiploma ? "78%" : "65%" }}
        >
          <p
            className="font-serif text-[#15103a]"
            style={{ fontSize: "1.5cqw" }}
          >
            ID: {certId}
          </p>
        </div>

        {/* Completion date (bottom-left) */}
        <div
          className="absolute text-left"
          style={{ left: "10%", top: "86%" }}
        >
          <p
            className="font-serif italic text-[#15103a]"
            style={{ fontSize: "1.6cqw" }}
          >
            {data.date}
          </p>
        </div>
      </div>
    </div>
  );
}
