import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Preise für den Wohnungsfinder",
  description:
    "Wohnungsfinder-Preise: einmaliges Setup für Modell, Renderings und Grundrisse, danach monatliche Lizenz nach Zahl der Wohneinheiten. Tarife für Haus, Quartier und Maklermandate. Konkretes Angebot nach der Demo.",
  path: "/preise",
});

const faqs = [
  {
    q: "Woraus setzen sich die Kosten zusammen?",
    a: "Aus zwei Teilen: dem einmaligen Setup — 3D-Modell, Renderings und Grundrisse, von uns erstellt oder aus Ihrem vorhandenen Material aufbereitet — und einer monatlichen Lizenz für Hosting, Betrieb und Updates. Die Lizenz folgt der Zahl der Wohneinheiten, Häuser und Ansichten, nicht der Besucherzahl.",
  },
  {
    q: "Was kostet ein Update extra?",
    a: "Software, Sicherheit und Betrieb liegen in der Lizenz. Neu ist nur, was neu gezeichnet wird: ein neues Rendering-Set nach einer Umplanung rechnen wir gesondert.",
  },
  {
    q: "Was braucht es zum Start?",
    a: "Ihre Wohnungsliste mit Flächen, Zimmern und Preisen. Modelle, Renderings und Grundrisse erstellen wir. Haben Sie schon Material, schicken Sie es uns — meist müssen wir es aufbereiten, dann wird es Teil des Setups.",
  },
  {
    q: "Wer pflegt Status und Preise?",
    a: "Sie, im Dashboard: Verfügbarkeit, Preise, Bilder und Dokumente. Über Rollen legen Sie fest, wer darf. Statistiken und Auswertungen liegen dort ebenfalls.",
  },
  {
    q: "Wie lange läuft der Vertrag?",
    a: "So lange das Projekt läuft. Der Vorverkauf endet, wenn die letzte Einheit verkauft ist — dann archivieren wir den Finder oder Sie behalten ihn als Dokumentation. Es gibt keine automatische Verlängerung über das Projekt hinaus.",
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
    meta: "ein Finder · bis 30 WE",
    blatt: "T-01",
    featured: false,
    items: [
      "Fassade mit anklickbaren Wohnungen",
      "Etagenpläne mit Live-Status",
      "Dashboard: Editor und Auswertung",
      "Exposé-Gate, Suchagent, QR-Codes",
      "CRM-Anbindung optional",
    ],
    cta: "Angebot Haus",
  },
  {
    name: "Quartier",
    meta: "ein Finder · 30 bis 500+ WE",
    blatt: "T-02",
    featured: true,
    items: [
      "Alles aus Haus",
      "360°-Rundgänge und Sonnenstand",
      "Mehrere Häuser in einem Finder",
      "Eigene Domain, OpenImmo-Export",
      "CRM-Anbindung inklusive Einrichtung",
    ],
    cta: "Angebot Quartier",
  },
  {
    name: "Mandate",
    meta: "ein Finder je Mandat",
    blatt: "T-03",
    featured: false,
    items: [
      "Hosting in Deutschland",
      "Ihre Marke je Mandant",
      "Read-only-API für Ihre Systeme",
      "Rollen und Rechte über alle Projekte",
    ],
    cta: "Gespräch zu Mandaten",
  },
];

export default function Preise() {
  return (
    <main>
      <JsonLd data={[faqSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Preise", path: "/preise" }])]} />
      <PageHero
        eyebrow="Preise"
        blatt="T-00"
        title="Setup einmal, Lizenz nach Zahl der Wohnungen."
        lead="Die monatliche Lizenz richtet sich nach Wohneinheiten und Ansichten — nicht nach Klicks oder Anfragen. Modelle, Renderings und bei Bedarf die Grundrisse gehören zum einmaligen Setup. Updates sind enthalten, eine CRM-Anbindung ist optional."
        measure="Kalkulation nach WE, nicht nach Klicks"
      />

      <section className="section">
        <div className="container">
          <SheetHead blatt="T-01" titel="Tarifübersicht" />
          <div className="plan-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`plan${plan.featured ? " recommended" : ""}`}>
                <p className="plan-meta">{plan.blatt} · {plan.meta}</p>
                <h3 className="plan-name">{plan.name}</h3>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/kontakt" className={plan.featured ? "btn btn-primary plan-cta" : "btn plan-cta"}>
                  {plan.cta} <IconArrow size={14} />
                </Link>
              </div>
            ))}
          </div>
          <p className="mono" style={{ marginTop: "1.25rem" }}>
            Alle Tarife: Hosting in Deutschland · Messung ohne Cookie-Banner · Angebot nach der Demo
          </p>
        </div>
      </section>

      <section className="section bg-soft border-t border-b">
        <div className="container max-w-3xl">
          <SheetHead blatt="T-02" titel="Lizenzfragen" />
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
      />
    </main>
  );
}
