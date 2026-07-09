import { ReactNode, ElementType } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** 动效类型 */
  variant?: "up" | "blur" | "clip";
  /** 进入视口后额外延迟（毫秒） */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/** 通用入场动效包装：进入视口自动播放（避免分散的 useReveal 调用） */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const variantClass =
    variant === "up"
      ? "reveal-up"
      : variant === "blur"
        ? "reveal-blur"
        : "reveal-clip";
  const TagAny = Tag as ElementType;
  return (
    <TagAny
      ref={ref}
      className={cn(variantClass, inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </TagAny>
  );
}
