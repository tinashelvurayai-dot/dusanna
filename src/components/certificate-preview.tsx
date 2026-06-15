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
        className="relative mx-auto w-full max-w-4xl aspect-[1.5/1] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          loading="eager"
          decoding="async"
        />
        {/* Overlay content positioned over the skeleton */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-[12%] pt-[20%]">
          <div className="w-full">
            <p className="font-serif italic text-[2.2%] sm:text-[1.6cqw] text-[#3a2a6b]" style={{ fontSize: "clamp(10px, 1.6cqw, 18px)" }}>
              {/* spacer kept by absolute layout */}
            </p>
          </div>

          <div className="mt-[2%] w-full">
            <p
              className="font-serif font-black text-[#1a1230] leading-none"
              style={{ fontSize: "clamp(18px, 3.6cqw, 44px)" }}
            >
              {studentName}
            </p>
          </div>

          <div className="mt-[6%] w-full">
            <p
              className="font-serif italic text-[#3a1f6b]"
              style={{ fontSize: "clamp(12px, 2.2cqw, 26px)" }}
            >
              {courseName}
            </p>
          </div>

          {isDiploma && skills && (
            <div className="mt-[3%] w-full">
              <p className="text-[#5a3a8a]" style={{ fontSize: "clamp(8px, 1.1cqw, 14px)" }}>
                {skills}
              </p>
            </div>
          )}
        </div>

        {/* Bottom-left date & bottom certificate id overlay */}
        <div className="absolute left-[8%] bottom-[8%]" style={{ fontSize: "clamp(8px, 1.1cqw, 13px)" }}>
          <span className="font-serif italic text-[#1a1230]">{data.date}</span>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: isDiploma ? "40%" : "32%",
            fontSize: "clamp(8px, 1.1cqw, 13px)",
          }}
        >
          <span className="font-serif text-[#1a1230]">ID: {certId}</span>
        </div>
      </div>
    </div>
  );
}
