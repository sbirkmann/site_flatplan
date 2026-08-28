import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Preise: Setup und Lizenz nach Einheiten",
  description:
    "Einmal Setup, monatliche Lizenz nach Zahl der WE. Haus, Quartier, mehrere Mandate. Updates in der Lizenz. Angebot nach Demo am Objekt.",
  path: "/preise",
});

const faqs = [
  {
    q: "Woraus setzen sich die Kosten zusammen?",
    a: "Einmal Setup: Renderings verknüpfen, Grundrisse legen, Einheiten anlegen. Danach eine monatliche Lizenz für Hosting, Betrieb und Updates. Die Höhe folgt der Zahl der WE, der Bereiche und der Ansichten.",
  },
  {
    q: "Was kostet ein Update extra?",
    a: "Software, Sicherheit, Betrieb: in der Lizenz. Ein neues Rendering-Set nach Umplanung rechnen wir gesondert.",
  },
  {
    q: "Was braucht es zum Start?",
    a: "Renderings für die Fassade, Grundrisse je Etage, die Wohnungsliste. Fehlen die Bilder, beginnt die Einrichtung bei den Grundrissen.",
  },
  {
    q: "Wer pflegt Status und Preise?",
    a: "Sie. Verfügbarkeit, Preise, Bilder, Dokumente in der Verwaltung. Rollen legen fest, wer darf.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const plans = [
  {
    name: "Haus",
    meta: "bis 30 WE",
    tag: "Objekt",
    featured: false,
    items: ["Fassade aus den Renderings", "Etagen mit Status", "Filter, Merkliste, Anfrage", "Exposé-Gate und QR", "Auswertung ohne Cookie"],
    cta: "Angebot Haus",
  },
  {
    name: "Quartier",
    meta: "30 bis 500+ WE",
    tag: "Areal",
    featured: true,
    items: ["wie Haus", "CRM: onOffice, Propstack, Flowfact", "360° und Sonnenstand", "mehrere Häuser und Ansichten", "Domain, OpenImmo, Webhooks"],
    cta: "Angebot Quartier",
  },
  {
    name: "Mandate",
    meta: "mehrere Projekte",
    tag: "Büro",
    featured: false,
    items: ["Hosting in Deutschland", "Marke je Mandant", "Read-only-API", "Rollen über Projekte"],
    cta: "Gespräch zu Mandaten",
  },
];

export default function Preise() {
  return (
    <main>
      <JsonLd data={[faqSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Preise", path: "/preise" }])]} />
      <PageHero
        eyebrow="Preise"
        title="Setup, dann Lizenz. Nach Zahl der WE."
        lead="Die Zahl folgt Einheiten, Ansichten und ob CRM dazugehört. Updates in der Lizenz."
        tone="sonne"
        illustration={<FacadeFinder showLegend={false} />}
        measure="Kalkulation nach WE · nicht nach Klicks"
      />

      <section className="border-b">
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: plan.featured ? "var(--tinte)" : "var(--papier)",
              color: plan.featured ? "#fff" : "var(--tinte)",
              borderBottom: "1px solid var(--tinte)",
            }}
          >
            <div className="container walk-row" style={{ borderTop: 0 }}>
              <p className="room" style={{ color: plan.featured ? "var(--sonne)" : undefined }}>{plan.tag}</p>
              <div>
                <h3 style={{ color: "inherit" }}>{plan.name}</h3>
                <p className="measure" style={{ color: plan.featured ? "var(--text-on-dark-muted)" : undefined, margin: "0.35rem 0 0" }}>{plan.meta}</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", marginBottom: "1.25rem", color: plan.featured ? "var(--text-on-dark-muted)" : undefined }}>
                  {plan.items.join("  ·  ")}
                </p>
                <Link href="/kontakt" className={plan.featured ? "btn btn-primary" : "btn btn-outline"}>
                  {plan.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section bg-white border-b">
        <div className="container max-w-3xl">
          <span className="eyebrow">Lizenz</span>
          <h2 className="mb-8">Vier Punkte vor der Zahl.</h2>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p className="mt-8" style={{ fontSize: "0.9375rem" }}>
            Mehr in den <Link href="/faq" style={{ color: "var(--blatt)", fontWeight: 650 }}>FAQ</Link>.
          </p>
        </div>
      </section>

      <CtaBand
        title="Angebot nach der Demo am Objekt."
        lead="Einheiten, Ansichten, ob CRM dazugehört. Dann eine Zahl."
        cta="Demo am Projekt"
        tone="tinte"
      />
    </main>
  );
}
