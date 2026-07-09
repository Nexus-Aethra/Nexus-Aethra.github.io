import { useEffect, useRef, useState, RefObject } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * 当元素进入视口时返回 true。
 * 用法：const ref = useReveal<HTMLDivElement>();
 *      <div ref={ref} className={`reveal-up ${inView ? 'is-in' : ''}`} />
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: Options = {}
): { ref: RefObject<T | null>; inView: boolean } {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
