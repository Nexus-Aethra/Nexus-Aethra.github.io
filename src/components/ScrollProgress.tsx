import { useScrollProgress } from "@/hooks/useMouse";

/** 顶部 1px 进度条，跟着滚动走 */
export default function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-neon-magenta via-neon-violet to-neon-cyan"
        style={{
          width: `${p * 100}%`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
