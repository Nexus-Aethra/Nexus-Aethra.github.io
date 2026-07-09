import { useEffect, useState } from "react";

type Theme = "dark" | "light";

/**
 * 站点主题：默认深色（与品牌视觉一致）。
 * 用户切换时写入 localStorage，刷新后保留。
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
