import { useEffect, useState } from "react";

/** 监听鼠标位置（归一化到 [0,1]），用于视差和光标跟随 */
export function useMouse() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5, rawX: 0, rawY: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setPos({ x, y, rawX: e.clientX, rawY: e.clientY });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}

/** 监听滚动进度 [0,1]，用于粘性动画 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}
