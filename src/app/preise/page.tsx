import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Preise für den Wohnungsfinder",
  description:
    "Wohnungsfinder: einmal Setup, monatliche Lizenz nach Zahl der Wohneinheiten. Haus, Quartier oder mehrere Projekte für Maklermandate. Angebot nach der Demo.",
  path: "/preise",
});

const faqs = [
  {
    q: "Woraus setzen sich die Kosten zusammen?",
    a: "Einmal Setup: Modell, Renderings und Grundrisse — von uns erstellt oder aus Ihrem Material aufbereitet. Danach eine monatliche Lizenz für Hosting, Betrieb und Updates. Die Höhe folgt der Zahl der Wohneinheiten, der Häuser und der Ansichten.",
  },
  {
    q: "Was kostet ein Update extra?",
    a: "Software, Sicherheit und Betrieb liegen in der Lizenz. Ein neues Rendering-Set nach einer Umplanung rechnen wir gesondert.",
  },
  {
    q: "Was braucht es zum Start?",
    a: "Die Wohnungsliste (Flächen, Zimmer, Preise). Modelle, Renderings und Grundrisse erstellen wir. Haben Sie schon Material, schicken Sie es uns; oft müssen wir es aufbereiten.",
  },
  {
    q: "Wer pflegt Status und Preise?",
    a: "Sie, im Dashboard. Verfügbarkeit, Preise, Bilder und Dokumente. Über Rollen legen Sie fest, wer darf. Statistiken und Auswertungen liegen dort ebenfalls.",
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
    meta: "ein Finder, bis 30 WE",
    tag: "Projekt",
    featured: false,
    items: ["Fassade mit Wohnungen", "Etagen mit Status", "Dashboard: Editor und Auswertung", "Exposé-Gate und QR", "CRM-Anbindung optional"],
    cta: "Angebot Haus",
  },
  {
    name: "Quartier",
    meta: "ein Finder, 30 bis 500+ WE",
    tag: "Bauvorhaben",
    featured: true,
    items: ["wie Haus", "Dashboard mit Editor und Auswertung", "360° und Sonnenstand", "mehrere Häuser in einem Finder", "CRM optional, Domain, OpenImmo"],
    cta: "Angebot Quartier",
  },
  {
    name: "Mandate",
    meta: "ein Finder je Mandat",
    tag: "Büro",
    featured: false,
    items: ["Hosting in Deutschland", "Marke je Mandant", "Read-only-API", "Rollen über die Projekte"],
    cta: "Gespräch zu Mandaten",
  },
];

export default function Preise() {
  return (
    <main>
      <JsonLd data={[faqSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Preise", path: "/preise" }])]} />
      <PageHero
        eyebrow="Preise"
        title="Setup einmal, Lizenz nach Zahl der Wohnungen."
        lead="Die Zahl folgt Einheiten und Ansichten. CRM ist optional. Updates liegen in der Lizenz. Modelle, Renderings und bei Bedarf Grundrisse gehören zum Setup."
        tone="sonne"
        illustration={<FacadeFinder showLegend={false} />}
        measure="Kalkulation nach WE, nicht nach Klicks"
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
        title="Angebot nach der Demo."
        lead="Einheiten, Ansichten. CRM nur, wenn Sie es anbinden wollen. Dann eine Zahl."
        cta="Demo anfragen"
        tone="tinte"
      />
    </main>
  );
}
