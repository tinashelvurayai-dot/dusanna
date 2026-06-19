/**
 * Certificate / Diploma PDF export.
 *
 * - Renders the live CertificatePreview element to a high-DPI canvas via
 *   html2canvas-pro (supports Tailwind v4's oklch colors).
 * - Auto-detects orientation from the rendered aspect ratio.
 * - Places the image on a single A4 page, centered, filling the page while
 *   preserving aspect ratio with zero margins.
 * - Guards against duplicate concurrent invocations.
 */
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

const A4_MM = { w: 210, h: 297 };
let inflight: Promise<void> | null = null;

export async function downloadCertificatePdf(
  target: HTMLElement,
  filename: string,
): Promise<void> {
  if (inflight) return inflight;
  inflight = (async () => {
    // Wait for fonts and images to fully load to avoid blank renders.
    if (document.fonts?.ready) {
      try { await document.fonts.ready; } catch { /* ignore */ }
    }
    const imgs = Array.from(target.querySelectorAll("img"));
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise<void>((res) => {
              img.addEventListener("load", () => res(), { once: true });
              img.addEventListener("error", () => res(), { once: true });
            }),
      ),
    );

    const canvas = await html2canvas(target, {
      scale: Math.min(3, Math.max(2, window.devicePixelRatio || 2)),
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    });

    const isLandscape = canvas.width >= canvas.height;
    const pdf = new jsPDF({
      orientation: isLandscape ? "landscape" : "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pageW = isLandscape ? A4_MM.h : A4_MM.w;
    const pageH = isLandscape ? A4_MM.w : A4_MM.h;

    // Fit the image inside the page while preserving aspect ratio.
    const imgRatio = canvas.width / canvas.height;
    const pageRatio = pageW / pageH;
    let drawW = pageW;
    let drawH = pageH;
    if (imgRatio > pageRatio) {
      drawH = pageW / imgRatio;
    } else {
      drawW = pageH * imgRatio;
    }
    const x = (pageW - drawW) / 2;
    const y = (pageH - drawH) / 2;

    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    pdf.addImage(dataUrl, "JPEG", x, y, drawW, drawH, undefined, "FAST");
    pdf.save(filename);
  })();
  try {
    await inflight;
  } finally {
    inflight = null;
  }
}
