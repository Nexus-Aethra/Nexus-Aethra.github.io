import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Logo from "./Logo";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import { useT } from "@/i18n/useT";

/** Hero：超大显示体标题 + 浮动 logo + 跑马灯 + 滚动提示 */
export default function Hero() {
  const { t } = useT();
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const h = String(d.getUTCHours()).padStart(2, "0");
      const m = String(d.getUTCMinutes()).padStart(2, "0");
      const s = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-24"
    >
      {/* 大背景 logo（水印风格） */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="relative">
          <Logo size={520} />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bone/5" />
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bone/[0.03]" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col px-5 md:px-8">
        {/* 顶部状态条 */}
        <Reveal variant="up" delay={0}>
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute md:text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-neon-magenta opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-neon-magenta" />
              </span>
              <span>{t.hero.statusLeft}</span>
            </div>
            <div className="hidden md:block">{time} UTC</div>
            <div className="flex items-center gap-2">
              <span>{t.hero.scrollHint}</span>
              <ArrowDown className="h-3 w-3 animate-bounce" />
            </div>
          </div>
        </Reveal>

        {/* 中央标题块 */}
        <div className="my-auto py-20 md:py-28">
          <Reveal variant="up" delay={120}>
            <div className="mb-8 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim backdrop-blur">
                <Sparkles className="h-3 w-3 text-neon-magenta" />
                {t.hero.badge}
              </div>
            </div>
          </Reveal>

          <h1 className="font-display text-[18vw] leading-[0.85] tracking-ultra text-bone md:text-[14vw]">
            <Reveal variant="up" delay={200}>
              <span className="block">{t.hero.headline1}</span>
            </Reveal>
            <Reveal variant="up" delay={320}>
              <span className="block">
                {t.hero.headline2Pre}
                <span className="text-neon-magenta glow-magenta">
                  {t.hero.headline2Accent}
                </span>
                {t.hero.headline2Post}
              </span>
            </Reveal>
          </h1>

          <Reveal variant="up" delay={460}>
            <div className="mt-10 flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-bone-dim md:text-xl">
              <p>
                <span className="font-serif text-2xl italic text-bone md:text-3xl">
                  {t.meta.heroKicker}
                </span>{" "}
                {t.hero.body}
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={580}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-ink transition-all hover:bg-neon-magenta"
                data-cursor="hover"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#vision"
                className="group inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-bone transition-all hover:border-neon-cyan hover:text-neon-cyan"
                data-cursor="hover"
              >
                {t.hero.ctaSecondary}
                <span className="block h-px w-6 bg-current" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* 底部跑马灯 */}
        <Reveal variant="up" delay={720}>
          <div className="relative -mx-5 border-y border-bone/10 py-4 md:-mx-8">
            <Marquee speed="slow">
              {t.hero.marquee.map((item, i) => (
                <span
                  key={i}
                  className="font-display text-2xl uppercase tracking-ultra text-bone md:text-4xl"
                >
                  {item}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
