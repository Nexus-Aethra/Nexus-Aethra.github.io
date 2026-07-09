import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** 速度：fast | slow */
  speed?: "fast" | "slow";
  /** 旋转方向 */
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

/** 无限滚动跑马灯（基于 transform 复制内容） */
export default function Marquee({
  children,
  speed = "slow",
  reverse = false,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 pr-12",
          speed === "slow" ? "animate-marquee" : "animate-marquee-fast",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center gap-12 pr-12",
          speed === "slow" ? "animate-marquee" : "animate-marquee-fast",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
