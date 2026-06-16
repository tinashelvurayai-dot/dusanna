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
 * into the open gaps of the official Edusanna skeleton artwork. The skeletons
 * already provide all decorative text and dividers, so we only overlay the
 * dynamic fields - no masking, no background blocks.
 *
 * All text uses Cormorant Garamond. Positions are percentage based against
 * the 1492x1054 skeleton so the layout scales with the container.
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

  const slot: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontFamily: cormorant,
    color: "#15103a",
    lineHeight: 1,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  return (
    <div className="cert-print-area">
      <div
        className="relative mx-auto w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: "1492 / 1054", containerType: "inline-size" }}
      >
        <img
          src={bg}
          alt={isDiploma ? "Edusanna Diploma" : "Edusanna Certificate"}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {/* Student name - in the gap below "This Certifies That" */}
        <div
          style={{
            ...slot,
            left: "18%",
            right: "18%",
            top: "41.5%",
            height: "5.5%",
            fontWeight: 600,
            fontSize: "2.2cqw",
          }}
        >
          <span style={{ padding: "0 1cqw", overflow: "hidden", textOverflow: "ellipsis" }}>
            {studentName}
          </span>
        </div>

        {/* Course name - in the gap below "Has Successfully Completed" */}
        <div
          style={{
            ...slot,
            left: "16%",
            right: "16%",
            top: "55%",
            height: "5.5%",
            fontStyle: "italic",
            fontWeight: 600,
            color: "#3a1f6b",
            fontSize: "2cqw",
          }}
        >
          <span style={{ padding: "0 1cqw", overflow: "hidden", textOverflow: "ellipsis" }}>
            {courseName}
          </span>
        </div>

        {/* Skills (diploma only) - in the gap below "In Recognition..." */}
        {isDiploma && skills && (
          <div
            style={{
              ...slot,
              left: "18%",
              right: "18%",
              top: "68%",
              height: "4%",
              color: "#4a2f7a",
              fontSize: "1.3cqw",
            }}
          >
            <span style={{ padding: "0 1cqw", overflow: "hidden", textOverflow: "ellipsis" }}>
              {skills}
            </span>
          </div>
        )}

        {/* Completion date - next to the "Issued" plinth, bottom-left */}
        <div
          style={{
            ...slot,
            justifyContent: "flex-start",
            left: "20%",
            right: "55%",
            top: "85.5%",
            height: "4.5%",
            fontStyle: "italic",
            fontSize: "1.4cqw",
          }}
        >
          <span style={{ padding: "0 0.6cqw" }}>{data.date}</span>
        </div>

        {/* Certificate ID - small, centered under the footer text */}
        <div
          style={{
            ...slot,
            left: "20%",
            right: "20%",
            top: "78.5%",
            height: "3.2%",
            color: "#4a2f7a",
            fontSize: "1.05cqw",
            letterSpacing: "0.04em",
          }}
        >
          <span style={{ padding: "0 0.6cqw" }}>ID: {certId}</span>
        </div>
      </div>
    </div>
  );
}
