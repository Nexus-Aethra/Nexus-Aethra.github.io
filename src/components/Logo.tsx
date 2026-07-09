import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
  /** 添加 orbit 旋转动画的小球 */
  orbit?: boolean;
};

/**
 * Nexus 品牌标志：
 * 复刻 logo.png 风格——黑底米色圆环 + 米色小球。
 * 默认带轻微发光和反向自旋轨道；orbit=true 时小球会沿轨道公转。
 */
export default function Logo({ size = 56, className, orbit = false }: LogoProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
      aria-label="Nexus"
    >
      {/* 外层光晕 */}
      <div
        className="absolute inset-0 rounded-full bg-neon-magenta/20 blur-2xl animate-pulse-glow"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* 主圆环（轨道） */}
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#f4f1ea"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 公转小球 */}
        {orbit ? (
          <circle cx="50" cy="16" r="5" fill="#ff3ea5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        ) : (
          <circle cx="74" cy="20" r="5.2" fill="#f4f1ea" />
        )}

        {/* 中心点 */}
        <circle cx="50" cy="50" r="1.4" fill="#f4f1ea" opacity="0.4" />
      </svg>
    </div>
  );
}
