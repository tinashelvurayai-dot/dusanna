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
 * Renders the certificate / diploma by writing the student details directly
 * into the open gaps of the official Edusanna skeleton artwork.
 *
 * This component is reused for the sample preview, admin review, and future
 * generated learner credentials, so every placement change here applies
 * everywhere certificates and diplomas are rendered.
 */
export function CertificatePreview({ data }: { data: CertificateData }) {
  const isDiploma = data.level === "diploma";
  const bg = isDiploma ? diplomaSkeleton.url : certificateSkeleton.url;
  const studentName = data.studentName || "Student Name";
  const courseName = data.courseName || "Course Name";
  const certId = data.certificateId || "EDU-XXXX-XXXX";
  const skills = (data.skills ?? []).slice(0, 6).join(" • ");

  const cormorant =
    "'Cormorant Garamond', 'Cormorant', Garamond, 'Times New Roman', serif";

  const textBase: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 1,
    fontFamily: cormorant,
    color: "#15103a",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    pointerEvents: "none",
  };

  return (
    <div className="cert-print-area">
      <div
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
        style={{ aspectRatio: "1492 / 1054", containerType: "inline-size" }}
      >
        <img
          src={bg}
          alt={isDiploma ? "Edusanna Diploma" : "Edusanna Certificate"}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {/* Student name — directly below "This Certifies That" */}
        <div
          style={{
            ...textBase,
            left: "15%",
            right: "15%",
            top: "36%",
            height: "5%",
            fontSize: "2.4cqw",
            fontWeight: 600,
          }}
        >
          <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
            {studentName}
          </span>
        </div>

        {/* Course name — directly below "Has Successfully Completed" */}
        <div
          style={{
            ...textBase,
            left: "15%",
            right: isDiploma ? "22%" : "18%",
            top: "47%",
            height: "5%",
            fontSize: "2.4cqw",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#2a1d52",
          }}
        >
          <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
            {courseName}
          </span>
        </div>

        {isDiploma && skills && (
          <div
            style={{
              ...textBase,
              left: "18%",
              right: "27%",
              top: "55%",
              height: "3%",
              fontSize: "1.1cqw",
              color: "#4a2f7a",
            }}
          >
            <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
              {skills}
            </span>
          </div>
        )}

        {/* Certificate ID — directly below "In Recognition Of An Outstanding Achievement" */}
        <div
          style={{
            ...textBase,
            justifyContent: "center",
            left: "20%",
            right: "30%",
            top: "61.5%",
            height: "5%",
            fontSize: "2cqw",
            fontWeight: 600,
            color: "#2f2450",
            letterSpacing: "0.02em",
          }}
        >
          <span>ID: {certId}</span>
        </div>

        {/* Completion date — on the golden line above the "Issued" label */}
        <div
          style={{
            ...textBase,
            justifyContent: "center",
            left: "10%",
            right: "68%",
            top: "84%",
            height: "4%",
            fontSize: "1.6cqw",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#2f2450",
          }}
        >
          <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
            {data.date}
          </span>
        </div>
      </div>
    </div>
  );
}
