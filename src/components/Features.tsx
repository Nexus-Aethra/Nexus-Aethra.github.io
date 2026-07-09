import Reveal from "./Reveal";
import { Brain, GitBranch, ShieldCheck, Code2, Sparkles, Repeat } from "lucide-react";
import { useT } from "@/i18n/useT";

const iconMap = {
  Brain,
  GitBranch,
  ShieldCheck,
  Code2,
  Sparkles,
  Repeat,
} as const;

export default function Features() {
  const { t } = useT();

  return (
    <section id="features" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <div className="relative h-[120vh] w-[120vh] animate-spin-slow">
          <div className="absolute inset-0 rounded-full border border-bone/30" />
          <div className="absolute inset-12 rounded-full border border-bone/30" />
          <div className="absolute inset-24 rounded-full border border-bone/30" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="up">
          <div className="mb-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-bone-mute">
            <span className="text-neon-magenta">/03</span>
            <span className="divider-dotted h-px w-16" />
            <span>{t.features.tag}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal variant="up" className="md:col-span-5">
            <h2 className="font-display text-5xl leading-[0.9] tracking-ultra text-bone md:text-7xl">
              {t.features.titleLead}
              <span className="font-serif italic text-neon-magenta">
                {t.features.titleItalic}
              </span>
              {t.features.titleTail}
            </h2>
          </Reveal>

          <div className="md:col-span-7 md:pt-4">
            <div className="grid grid-cols-1 gap-px bg-bone/10 sm:grid-cols-2">
              {t.features.items.map((f, i) => {
                const Icon =
                  iconMap[f.icon as keyof typeof iconMap] ?? Sparkles;
                return (
                  <Reveal
                    key={f.title}
                    variant="up"
                    delay={i * 80}
                    className="group flex flex-col gap-4 bg-ink p-8 transition-colors hover:bg-ink-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-neon-magenta transition-colors group-hover:text-neon-cyan">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl uppercase leading-tight tracking-ultra text-bone">
                      {f.title}
                    </h3>
                    <p className="font-serif text-base leading-relaxed text-bone-dim">
                      {f.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
