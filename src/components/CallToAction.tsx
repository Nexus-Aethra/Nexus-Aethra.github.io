import Reveal from "./Reveal";
import { ArrowUpRight, Github, BookOpen } from "lucide-react";
import { useT } from "@/i18n/useT";

export default function CallToAction() {
  const { t } = useT();
  return (
    <section id="cta" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="clip">
          <div className="relative overflow-hidden rounded-3xl border border-bone/10 bg-gradient-to-br from-ink-200 via-ink to-ink-300 p-10 md:p-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,62,165,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(92,242,255,0.35), transparent 50%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #f4f1ea 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">
                /06 · {t.cta.tag}
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-ultra text-bone md:text-7xl">
                {t.cta.titleLead}
                <span className="text-neon-magenta">{t.cta.titleAccent}</span>.
              </h2>
              <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-bone-dim md:text-xl">
                {t.cta.body}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Nexus-Aethra"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-neon-magenta"
                  data-cursor="hover"
                >
                  <Github className="h-4 w-4" />
                  {t.cta.primary}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-bone transition-all hover:border-neon-cyan hover:text-neon-cyan"
                  data-cursor="hover"
                >
                  <BookOpen className="h-4 w-4" />
                  {t.cta.secondary}
                  <span className="text-bone-mute transition-colors group-hover:text-neon-cyan">
                    {t.cta.secondaryBadge}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
