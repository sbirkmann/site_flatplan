import type { ReactNode } from "react";

type Tone = "licht" | "sonne" | "himmel" | "blatt" | "koralle" | "papier";

const toneClass: Record<Tone, string> = {
  licht: "bg-soft",
  sonne: "bg-sonne",
  himmel: "bg-himmel",
  blatt: "bg-blatt",
  koralle: "bg-koralle",
  papier: "bg-white",
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  illustration,
  tone = "licht",
  measure,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  actions?: ReactNode;
  illustration?: ReactNode;
  tone?: Tone;
  measure?: string;
}) {
  return (
    <section className={`page-hero border-b ${toneClass[tone]}`}>
      <div className={`container ${illustration ? "page-hero-split" : "max-w-3xl"}`}>
        <div className="page-hero-copy animate-up">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead" style={{ marginBottom: actions ? "1.75rem" : 0 }}>{lead}</p>
          {actions && <div className="flex gap-4 flex-wrap items-center">{actions}</div>}
          {measure && <p className="measure" style={{ marginTop: "1.35rem", marginBottom: 0 }}>{measure}</p>}
        </div>
        {illustration && (
          <div className="page-hero-visual overlap-frame animate-up delay-200">
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}
