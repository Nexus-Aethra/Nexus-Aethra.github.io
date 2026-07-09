import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import SyncHtmlLang from "@/i18n/SyncHtmlLang";
import { useT } from "@/i18n/useT";

/**
 * 使用 HashRouter 以适配 GitHub Pages（无需配置 SPA fallback）。
 * 如果之后切到 Vercel / Netlify 可换回 BrowserRouter。
 */
export default function App() {
  return (
    <Router>
      <SyncHtmlLang />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router>
  );
}

function NotFound() {
  const { t } = useT();
  return (
    <div className="grid min-h-screen place-items-center bg-ink text-bone">
      <div className="text-center">
        <div className="font-display text-8xl text-neon-magenta">404</div>
        <div className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-bone-dim">
          {t.notFound.label}
        </div>
        <a
          href="/"
          className="mt-8 inline-block rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-bone hover:bg-neon-magenta hover:text-ink"
        >
          {t.notFound.back}
        </a>
      </div>
    </div>
  );
}
