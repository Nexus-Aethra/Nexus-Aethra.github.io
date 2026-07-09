import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Locale = "en" | "zh";

type LangState = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

/**
 * 全站语言存储：默认根据浏览器语言推断，刷新后保留用户选择。
 */
export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      locale: detectInitial(),
      setLocale: (locale) => set({ locale }),
      toggle: () =>
        set((s) => ({ locale: s.locale === "en" ? "zh" : "en" })),
    }),
    { name: "nexus.lang" }
  )
);

function detectInitial(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("nexus.lang");
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as { state?: { locale?: Locale } };
      if (parsed.state?.locale === "en" || parsed.state?.locale === "zh") {
        return parsed.state.locale;
      }
    } catch {
      /* ignore */
    }
  }
  const nav = navigator.language.toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}
