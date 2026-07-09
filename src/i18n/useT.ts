import { useLangStore, type Locale } from "./store";
import { dict, type Dict } from "./dict";

/** 在组件中取当前语言 + 字典。 */
export function useT(): { locale: Locale; t: Dict } {
  const locale = useLangStore((s) => s.locale);
  return { locale, t: dict[locale] };
}

/** 仅取当前 locale（适合不需要全文案的场景） */
export function useLocale(): Locale {
  return useLangStore((s) => s.locale);
}
