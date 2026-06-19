import { useEffect, useState } from "react";
import certificateSkeleton from "@/assets/certificate-skeleton.png.asset.json";
import diplomaSkeleton from "@/assets/diploma-skeleton.png.asset.json";

// Preload both skeleton artworks so switching between certificate and diploma
// previews doesn't flash the previously-cached background.
const preloadedSrcs = new Set<string>();
function preload(src: string) {
  if (typeof window === "undefined" || preloadedSrcs.has(src)) return;
  preloadedSrcs.add(src);
  const img = new Image();
  img.src = src;
}

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

  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    preload(certificateSkeleton.url);
    preload(diplomaSkeleton.url);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setLoadedSrc(bg);
    };
    img.src = bg;
    if (img.complete && img.naturalWidth > 0) setLoadedSrc(bg);
    return () => {
      cancelled = true;
    };
  }, [bg]);

  const ready = loadedSrc === bg;

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
          key={bg}
          src={bg}
          alt={isDiploma ? "Edusanna Diploma" : "Edusanna Certificate"}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />

        {ready && (<>


        {/* Student name — directly below "This Certifies That" and above the golden line */}
        <div
          style={{
            ...textBase,
            left: "10%",
            right: "10%",
            top: isDiploma ? "37.5%" : "36.5%",
            height: "6%",
            fontSize: "3.1cqw",
            fontWeight: 700,
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
            left: "10%",
            right: "10%",
            top: "50%",
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

        {/* Certificate ID — directly below "In Recognition Of An Outstanding Achievement" */}
        <div
          style={{
            ...textBase,
            justifyContent: "center",
            left: "10%",
            right: "10%",
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


        {isDiploma && skills && (
          <div
            style={{
              ...textBase,
              left: "10%",
              right: "10%",
              top: "67%",
              height: "3%",
              fontSize: "1.25cqw",
              color: "#000000",
              fontWeight: 600,
            }}
          >
            <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
              {skills}
            </span>
          </div>
        )}

        {/* Completion date — on the golden line above the "Issued" label */}
        <div
          style={{
            ...textBase,
            justifyContent: "center",
            left: "10%",
            right: "66%",
            top: "80%",
            height: "5%",
            fontSize: "2cqw",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#2f2450",
          }}
        >
          <span style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
            {data.date}
          </span>
        </div>
        </>)}

      </div>
    </div>
  );
}
