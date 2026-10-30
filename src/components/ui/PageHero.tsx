import type { ReactNode } from "react";

/** Seitenkopf im Planstil: Blatt-Streifen statt Eyebrow, optional Planfeld rechts. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  illustration,
  blatt,
  measure,
}: {
  /** Wird als Blatt-Metazeile gerendert, nicht als Kicker. */
  eyebrow: string;
  title: string;
  lead: ReactNode;
  actions?: ReactNode;
  illustration?: ReactNode;
  blatt?: string;
  measure?: string;
  tone?: string;
}) {
  return (
    <section className="page-hero border-b">
      <div className="container">
        <div className="sheet-head" aria-hidden="true">
          <span>flatplan.de — {eyebrow}</span>
          <span className="sheet-blatt">Blatt {blatt ?? "—"}</span>
        </div>
        <div className={illustration ? "page-hero-split" : undefined}>
          <div className="page-hero-copy">
            <h1>{title}</h1>
            <p className="lead" style={{ marginBottom: actions ? "1.75rem" : 0 }}>{lead}</p>
            {actions && <div className="flex gap-4 flex-wrap items-center">{actions}</div>}
            {measure && (
              <p className="mono" style={{ marginTop: "1.5rem", marginBottom: 0 }}>{measure}</p>
            )}
          </div>
          {illustration && <div className="plan-field">{illustration}</div>}
        </div>
      </div>
    </section>
  );
}
