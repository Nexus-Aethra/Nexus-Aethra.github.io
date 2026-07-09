import { useEffect } from "react";
import { useLangStore } from "./store";

/** 把当前 locale 同步到 <html lang="...">，利于 SEO/浏览器字体/CJK 切换 */
export default function SyncHtmlLang() {
  const locale = useLangStore((s) => s.locale);
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);
  return null;
}
