import { useEffect, useState } from "react";

/** 自定义光标：默认 8px 圆点 + 悬停可交互对象时 48px 圆环 + 中心点 */
export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [data-cursor='hover'], input, label");
      setHovering(Boolean(isInteractive));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-magenta mix-blend-difference transition-[width,height,opacity] duration-200"
        style={{
          width: hovering ? 36 : 8,
          height: hovering ? 36 : 8,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: hovering ? 0.6 : 1,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-magenta mix-blend-difference"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
