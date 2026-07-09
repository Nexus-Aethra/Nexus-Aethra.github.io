import { useMouse } from "@/hooks/useMouse";

/** 鼠标视差网格 + 装饰场（用于页面背景层） */
export default function NoiseField() {
  const { x, y } = useMouse();
  const tx = (x - 0.5) * 24;
  const ty = (y - 0.5) * 24;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 基础暗色渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-300 via-ink to-ink" />

      {/* 网格（鼠标视差） */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.35]"
        style={{
          transform: `translate3d(${tx}px, ${ty}px, 0)`,
          transition: "transform 0.8s cubic-bezier(.2,.7,.2,1)",
        }}
      />

      {/* 顶部光晕 */}
      <div
        className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-60 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,62,165,0.45) 0%, rgba(155,92,255,0.18) 40%, transparent 70%)",
        }}
      />
      {/* 底部光晕 */}
      <div
        className="absolute -bottom-1/4 right-0 h-[60vh] w-[60vh] rounded-full opacity-50 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(92,242,255,0.3) 0%, transparent 70%)",
        }}
      />

      {/* 噪点 */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />
    </div>
  );
}
