import { useRef, useState, useEffect } from "react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { useT } from "@/i18n/useT";

type Module = {
  code: string;
  name: string;
  role: string;
  description: string;
  statusKey: "live" | "beta" | "soon";
  features: string[];
  glyph: React.ReactNode;
};

const glyphs: Record<string, React.ReactNode> = {
  core: <GlyphCore />,
  loom: <GlyphLoom />,
  portal: <GlyphPortal />,
  terrain: <GlyphTerrain />,
  compile: <GlyphCompile />,
  db: <GlyphDB />,
};

const codes = ["/NEXUS", "/STORY-LOOM", "/PORTAL", "/TERRAIN", "/COMPILE", "/NEXUSDB"];
const statusKeys: Module["statusKey"][] = ["live", "live", "live", "beta", "beta", "live"];

function StatusDot({
  status,
  labels,
}: {
  status: Module["statusKey"];
  labels: Record<Module["statusKey"], string>;
}) {
  const map: Record<Module["statusKey"], string> = {
    live: "bg-neon-lime",
    beta: "bg-neon-cyan",
    soon: "bg-neon-magenta",
  };
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inset-0 animate-ping rounded-full ${map[status]} opacity-60`}
        />
        <span className={`relative h-1.5 w-1.5 rounded-full ${map[status]}`} />
      </span>
      {labels[status]}
    </span>
  );
}

function GlyphCore() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="84" cy="50" r="3" fill="currentColor" />
      <circle cx="16" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}
function GlyphLoom() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <path d="M10 20 Q50 5 90 20 L90 30 Q50 15 10 30 Z" fill="currentColor" opacity="0.2" />
      <path d="M10 50 Q50 35 90 50 L90 60 Q50 45 10 60 Z" fill="currentColor" opacity="0.4" />
      <path d="M10 80 Q50 65 90 80 L90 90 Q50 75 10 90 Z" fill="currentColor" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
function GlyphPortal() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect x="15" y="20" width="70" height="60" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="9" fill="currentColor" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="40" y1="32" x2="40" y2="68" stroke="currentColor" strokeWidth="1.5" />
      <line x1="60" y1="32" x2="60" y2="68" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GlyphTerrain() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <path d="M5 80 L20 60 L35 70 L55 40 L75 65 L95 50 L95 95 L5 95 Z" fill="currentColor" opacity="0.6" />
      <path d="M5 85 L25 70 L45 80 L65 65 L85 75 L95 70 L95 95 L5 95 Z" fill="currentColor" />
      <circle cx="78" cy="25" r="4" fill="currentColor" />
    </svg>
  );
}
function GlyphCompile() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="48"
        fontFamily="JetBrains Mono, monospace"
        fill="currentColor"
      >
        {"{ }"}
      </text>
    </svg>
  );
}
function GlyphDB() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <ellipse cx="50" cy="22" rx="30" ry="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M20 22 L20 74 C20 80 34 86 50 86 C66 86 80 80 80 74 L80 22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 48 C20 54 34 60 50 60 C66 60 80 54 80 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="78" cy="18" r="8" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

function ModuleCard({
  module: m,
  features,
  index,
  total,
  statusLabels,
}: {
  module: Module;
  features: string[];
  index: number;
  total: number;
  statusLabels: Record<Module["statusKey"], string>;
}) {
  const [, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const move = (e: MouseEvent) => {
      const r = node.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: py * -6, y: px * 6 });
    };
    node.addEventListener("mousemove", move);
    return () => node.removeEventListener("mousemove", move);
  }, []);

  const isPlaceholder = m.name === "—";

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
        transition: "transform 0.4s cubic-bezier(.2,.7,.2,1)",
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-bone/10 bg-ink-100 p-8 transition-colors md:p-10 ${
        isPlaceholder ? "opacity-70" : ""
      }`}
      data-cursor="hover"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f4f1ea 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-magenta">
          {m.code}
        </div>
        <StatusDot status={m.statusKey} labels={statusLabels} />
      </div>

      <div className="my-10 grid h-24 w-24 place-items-center rounded-2xl border border-bone/10 bg-bone/[0.03] text-neon-magenta transition-all group-hover:rotate-[18deg] group-hover:text-neon-cyan">
        {m.glyph}
      </div>

      <h3 className="font-display text-3xl uppercase leading-none tracking-ultra text-bone md:text-4xl">
        {m.name}
      </h3>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
        {m.role}
      </div>

      <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-bone-dim">
        {m.description}
      </p>

      <div className="mt-auto pt-8">
        <div className="flex flex-wrap gap-2">
          {features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-bone/15 bg-bone/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
        0{index + 1} / 0{total}
      </div>
    </div>
  );
}

export default function Ecosystem() {
  const { t } = useT();
  const statusLabels = t.ecosystem.modules[0].status;

  const modules: Module[] = t.ecosystem.modules.map((m, i) => ({
    code: codes[i] ?? "",
    name: m.name,
    role: m.role,
    description: m.description,
    statusKey: statusKeys[i] ?? "live",
    features: [],
    glyph:
      glyphs[
        i === 0
          ? "core"
          : i === 1
            ? "loom"
            : i === 2
              ? "portal"
              : i === 3
                ? "terrain"
                : i === 4
                  ? "compile"
                  : "db"
      ]!,
  }));

  return (
    <section id="ecosystem" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="up">
          <div className="mb-16 flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-bone-mute">
            <div className="flex items-center gap-4">
              <span className="text-neon-magenta">/02</span>
              <span className="divider-dotted h-px w-16" />
              <span>{t.ecosystem.tag}</span>
            </div>
            <span className="hidden md:block">{t.ecosystem.count}</span>
          </div>
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal variant="up" delay={80} className="md:col-span-7">
            <h2 className="font-display text-5xl leading-[0.9] tracking-ultra text-bone md:text-7xl">
              {t.ecosystem.titleLead}
              <span className="text-neon-magenta">{t.ecosystem.titleAccent}</span>
              {t.ecosystem.titleTail}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={180} className="md:col-span-5 md:pt-4">
            <p className="font-serif text-lg leading-relaxed text-bone-dim md:text-xl">
              {t.ecosystem.body}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
              <Logo size={18} />
              <span>{t.ecosystem.coreChain}</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal
              key={m.code}
              variant="up"
              delay={i * 90}
              className="h-full"
            >
              <ModuleCard
                module={m}
                features={t.ecosystem.modules[i]?.features?.[0] ?? []}
                index={i}
                total={modules.length}
                statusLabels={statusLabels}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
