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
        lead="Die monatliche Lizenz richtet sich nach der Zahl der Wohneinheiten und der Ansichten. Modelle, Renderings und bei Bedarf die Grundrisse gehören zum einmaligen Setup. Updates sind in der Lizenz enthalten, eine CRM-Anbindung ist optional."
        tone="sonne"
        illustration={<FacadeFinder showLegend={false} />}
        measure="Kalkulation nach WE, nicht nach Klicks"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="plan-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`plan${plan.featured ? " plan--featured" : ""}`}>
                <p className="eyebrow">{plan.tag}</p>
                <h3>{plan.name}</h3>
                <p className="plan-meta">{plan.meta}</p>
                <ul className="plan-items">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/kontakt" className="link-arrow plan-cta">
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container max-w-3xl">
          <span className="eyebrow">Lizenz</span>
          <h2 className="mb-8">Woraus sich der Preis zusammensetzt.</h2>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p className="mt-8" style={{ fontSize: "0.9375rem" }}>
            Mehr in den <Link href="/faq" className="link-arrow">FAQ</Link>.
          </p>
        </div>
      </section>

      <CtaBand
        title="Angebot nach der Demo."
        lead="Wir sehen uns Einheiten und Ansichten an, klären die CRM-Frage — und nennen Ihnen danach eine Zahl."
        cta="Demo anfragen"
        tone="tinte"
      />
    </main>
  );
}
