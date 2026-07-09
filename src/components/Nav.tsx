import { useEffect, useState } from "react";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n/useT";

export default function Nav() {
  const { t } = useT();
  const links = [
    { label: t.nav.links.vision, href: "#vision" },
    { label: t.nav.links.ecosystem, href: "#ecosystem" },
    { label: t.nav.links.features, href: "#features" },
    { label: t.nav.links.roadmap, href: "#roadmap" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-bone/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Logo size={36} className="transition-transform group-hover:rotate-12" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-[0.3em] text-bone">
              NEXUS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-xs uppercase tracking-[0.25em] text-bone-dim transition-colors hover:text-bone"
              data-cursor="hover"
            >
              <span className="mr-2 text-neon-magenta opacity-0 transition-opacity group-hover:opacity-100">
                0{i + 1}
              </span>
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-magenta transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#roadmap"
            className="group inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-all hover:bg-neon-magenta hover:text-ink hover:border-neon-magenta"
            data-cursor="hover"
          >
            {t.nav.trackProgress}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <LangSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitcher compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            data-cursor="hover"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* 移动端折叠菜单 */}
      <div
        className={`md:hidden ${open ? "max-h-[28rem]" : "max-h-0"} overflow-hidden border-b border-bone/10 bg-ink/95 backdrop-blur-2xl transition-[max-height] duration-500`}
      >
        <div className="space-y-2 px-6 py-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-bone/10 py-4 font-display text-2xl tracking-[0.2em] text-bone"
            >
              <span>
                <span className="mr-3 font-mono text-xs text-neon-magenta">
                  0{i + 1}
                </span>
                {l.label}
              </span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
