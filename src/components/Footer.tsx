import Logo from "./Logo";
import Marquee from "./Marquee";
import { useT } from "@/i18n/useT";

const linkKeys: Record<string, string[]> = {
  Project: ["vision", "ecosystem", "roadmap", "manifesto"],
  Modules: ["core", "loom", "portal", "terrain"],
  Community: ["github", "discord", "contributing", "contact"],
};

const navHash: Record<string, string> = {
  vision: "#vision",
  ecosystem: "#ecosystem",
  roadmap: "#roadmap",
  manifesto: "#manifesto",
  core: "#ecosystem",
  loom: "#ecosystem",
  portal: "#ecosystem",
  terrain: "#ecosystem",
};

export default function Footer() {
  const { t } = useT();
  const columnsData = linkKeys;
  const columns = t.footer.columns.map((c) => {
    const keys = columnsData[c.title] ?? [];
    return {
      title: c.title,
      links: keys.map((k, i) => ({
        label: c.links[i] ?? k,
        href:
          navHash[k] ??
          (k === "github"
            ? "https://github.com/Nexus-Aethra"
            : k === "contact"
              ? "mailto:hi@nexus.local"
              : "#"),
      })),
    };
  });

  return (
    <footer className="relative border-t border-bone/10 bg-ink">
      {/* 底部跑马灯 */}
      <div className="border-y border-bone/10 py-4">
        <Marquee speed="fast">
          {t.footer.marquee.map((item, i) => (
            <span
              key={i}
              className="font-display text-3xl uppercase tracking-ultra text-bone md:text-5xl"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <div>
                <div className="font-display text-xl tracking-[0.3em] text-bone">
                  NEXUS
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
                  {t.nav.brandSubtitle}
                </div>
              </div>
            </div>
            <p className="mt-6 font-serif text-lg leading-relaxed text-bone-dim">
              {t.footer.blurb}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-magenta">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-bone-dim transition-colors hover:text-bone"
                        data-cursor="hover"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
            © {new Date().getFullYear()} Nexus Team · {t.footer.license}
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-lime" />
              {t.footer.statusOk}
            </span>
            <span>·</span>
            <span>
              {import.meta.env.MODE === "production"
                ? "build prod"
                : `build ${import.meta.env.MODE}`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
