import { useEffect, useState } from "react";
import { useLangStore } from "@/i18n/store";
import { cn } from "@/lib/utils";

/**
 * 紧凑型语言切换：胶囊 + EN / 中 标记。
 * 设计要求：始终可见、与 nav 等高、不抢主标题关注。
 */
export default function LangSwitcher({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const locale = useLangStore((s) => s.locale);
  const toggle = useLangStore((s) => s.toggle);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      data-cursor="hover"
      className={cn(
        "group relative inline-flex select-none items-center overflow-hidden rounded-full border border-bone/20 bg-bone/5 backdrop-blur",
        compact ? "h-8 text-[10px]" : "h-9 text-xs",
        className
      )}
    >
      {/* 滑动指示 */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-0 left-0 w-1/2 transform bg-bone transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]",
          locale === "zh" ? "translate-x-full" : "translate-x-0",
          // SSR/hydration 时保持稳定，不闪烁
          !mounted && "translate-x-0"
        )}
      />
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-1/2 items-center justify-center font-mono uppercase tracking-[0.2em] transition-colors duration-500",
          locale === "en" ? "text-ink" : "text-bone-dim"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-1/2 items-center justify-center font-mono tracking-[0.2em] transition-colors duration-500",
          locale === "zh" ? "text-ink" : "text-bone-dim",
          compact ? "text-[10px]" : "text-xs"
        )}
      >
        中
      </span>
    </button>
  );
}
