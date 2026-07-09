import Reveal from "./Reveal";
import { Check, CircleDashed, Loader } from "lucide-react";
import { useT } from "@/i18n/useT";

type State = "done" | "active" | "todo";

function StateBadge({
  state,
  labels,
}: {
  state: State;
  labels: { shipped: string; inProgress: string; planned: string };
}) {
  if (state === "done")
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-neon-lime/30 bg-neon-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime">
        <Check className="h-3 w-3" />
        {labels.shipped}
      </span>
    );
  if (state === "active")
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-neon-magenta">
        <Loader className="h-3 w-3 animate-spin" />
        {labels.inProgress}
      </span>
    );
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
      <CircleDashed className="h-3 w-3" />
      {labels.planned}
    </span>
  );
}

export default function Roadmap() {
  const { t } = useT();
  // Roadmap states map by index: 0..2 done, 3 active, 4..5 todo
  const states: State[] = ["done", "done", "done", "active", "todo", "todo"];

  return (
    <section id="roadmap" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="up">
          <div className="mb-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-bone-mute">
            <span className="text-neon-magenta">/04</span>
            <span className="divider-dotted h-px w-16" />
            <span>{t.roadmap.tag}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal variant="up" className="md:col-span-5">
            <h2 className="font-display text-5xl leading-[0.9] tracking-ultra text-bone md:text-7xl">
              {t.roadmap.titleLead}
              <span className="text-neon-magenta">{t.roadmap.titleAccent}</span>.
            </h2>
            <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-bone-dim md:text-xl">
              {t.roadmap.body}
            </p>
          </Reveal>

          <div className="md:col-span-7">
            <ol className="relative">
              <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-bone/30 via-bone/15 to-transparent md:left-[27px]" />
              {t.roadmap.items.map((it, i) => {
                const state = states[i] ?? "todo";
                return (
                  <Reveal
                    key={it.label}
                    variant="up"
                    delay={i * 80}
                    className="group relative flex items-start gap-6 py-6"
                  >
                    <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-bone/15 bg-ink md:h-14 md:w-14">
                      {state === "done" ? (
                        <Check className="h-4 w-4 text-neon-lime md:h-5 md:w-5" />
                      ) : state === "active" ? (
                        <span className="relative flex h-3 w-3 md:h-4 md:w-4">
                          <span className="absolute inset-0 animate-ping rounded-full bg-neon-magenta opacity-75" />
                          <span className="relative h-3 w-3 rounded-full bg-neon-magenta md:h-4 md:w-4" />
                        </span>
                      ) : (
                        <CircleDashed className="h-4 w-4 text-bone-mute md:h-5 md:w-5" />
                      )}
                    </div>
                    <div className="flex-1 border-b border-bone/10 pb-6">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon-magenta">
                          {it.date}
                        </span>
                        <StateBadge state={state} labels={t.roadmap.states} />
                      </div>
                      <h3 className="font-display text-2xl uppercase leading-tight tracking-ultra text-bone md:text-3xl">
                        {it.label}
                      </h3>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
