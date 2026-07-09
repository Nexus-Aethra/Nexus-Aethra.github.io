import Reveal from "./Reveal";
import { useT } from "@/i18n/useT";

/** Vision / Manifesto：大字号品牌陈述 + 三条支柱 */
export default function Vision() {
  const { t } = useT();
  return (
    <section id="vision" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* 章节编号 */}
        <Reveal variant="up">
          <div className="mb-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-bone-mute">
            <span className="text-neon-magenta">/01</span>
            <span className="divider-dotted h-px w-16" />
            <span>{t.vision.tag}</span>
          </div>
        </Reveal>

        {/* 大引用 */}
        <Reveal variant="blur">
          <p className="font-serif text-3xl leading-tight text-bone md:text-6xl md:leading-[1.1]">
            <span className="text-neon-magenta">“</span>
            {t.vision.quote}
            <span className="text-neon-magenta">”</span>
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/5 md:grid-cols-3">
          {t.vision.pillars.map((p, i) => (
            <Reveal
              key={p.tag}
              variant="up"
              delay={i * 120}
              className="group relative bg-ink p-8 transition-colors hover:bg-ink-200 md:p-12"
            >
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">
                {p.tag}
              </div>
              <h3 className="mt-6 font-display text-2xl uppercase leading-tight tracking-ultra text-bone md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-xs font-serif text-lg leading-relaxed text-bone-dim">
                {p.body}
              </p>
              <div className="mt-8 h-px w-12 bg-bone/20 transition-all duration-500 group-hover:w-full group-hover:bg-neon-magenta" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
