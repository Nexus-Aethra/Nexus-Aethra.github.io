import Reveal from "./Reveal";
import Logo from "./Logo";
import { useT } from "@/i18n/useT";

/** Manifesto：巨型分行语句+品牌大logo */
export default function Manifesto() {
  const { t } = useT();
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[20vw] leading-none tracking-ultra text-bone/[0.04]"
        aria-hidden="true"
      >
        {t.manifesto.bgWord}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="up">
          <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-bone-mute">
            <span className="text-neon-magenta">/05</span>
            <span className="divider-dotted h-px w-16" />
            <span>{t.manifesto.tag}</span>
          </div>
        </Reveal>

        <Reveal variant="blur">
          <h2 className="font-display text-[10vw] leading-[0.9] tracking-ultra text-bone md:text-[8vw]">
            {t.manifesto.line1Lead}
            <span className="italic text-neon-magenta">
              {t.manifesto.line1Accent}
            </span>
          </h2>
        </Reveal>
        <Reveal variant="blur" delay={120}>
          <h2 className="font-display text-[10vw] leading-[0.9] tracking-ultra text-bone md:text-[8vw]">
            {t.manifesto.line2Lead}
            <span className="text-stroke">{t.manifesto.line2Stroke}</span>{" "}
            <span className="text-neon-cyan">{t.manifesto.line2Accent}</span>
            {t.manifesto.line2Tail}
          </h2>
        </Reveal>
        <Reveal variant="blur" delay={240}>
          <h2 className="font-display text-[10vw] leading-[0.9] tracking-ultra text-bone md:text-[8vw]">
            <span className="font-serif italic">{t.manifesto.line3}</span>
          </h2>
        </Reveal>

        <Reveal variant="up" delay={420}>
          <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-bone/15 pt-8 md:flex-row md:items-center">
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-bone-dim md:text-2xl">
              {t.manifesto.body}
            </p>
            <Logo size={96} orbit className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
