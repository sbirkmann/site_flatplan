import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Check } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Preise & Pakete für den interaktiven Wohnungsfinder",
  description:
    "Transparente Preisstruktur nach Projektgröße: einmaliges Setup plus monatliche Lizenz – vom Einzelgebäude bis zum Quartier mit 500 Einheiten und White-Label für Agenturen.",
  path: "/preise",
});

const faqs = [
  {
    q: "Wie setzen sich die Kosten zusammen?",
    a: "Die Kosten bestehen aus einem einmaligen Setup-Honorar (Einrichtung des Projekts, Verknüpfung Ihrer Renderings und Grundrisse, Anlage aller Einheiten) und einer monatlichen Lizenz für Hosting, Betrieb und Updates. Die Höhe richtet sich nach Anzahl der Einheiten, Bereiche und Ansichten.",
  },
  {
    q: "Gibt es versteckte Gebühren für Updates?",
    a: "Nein. Laufende Software-Updates, Sicherheits-Patches und der Betrieb sind vollständig durch die Lizenz abgedeckt. Nur größere inhaltliche Umbauten – etwa ein komplett neues Rendering-Set nach einer Umplanung – kalkulieren wir separat.",
  },
  {
    q: "Was brauchen wir, um zu starten?",
    a: "Fotorealistische Renderings Ihres Visualisierungsstudios (für die drehbare Projektansicht), Grundrisse je Etage und Ihre Wohnungsliste mit Flächen, Zimmern und Preisen. Fehlen die Renderings noch, starten viele Projekte zunächst mit interaktiven Grundrissen.",
  },
  {
    q: "Können wir Statuswechsel und Preise selbst pflegen?",
    a: "Ja. Nach der Einrichtung pflegen Sie Verfügbarkeit, Preise, Aktionspreise, Bilder und Dokumente selbst in der Verwaltung – ohne Agentur und ohne Wartezeit. Rollen und Rechte regeln, wer im Team was ändern darf.",
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

export default function Preise() {
  return (
    <main>
      <JsonLd data={[faqSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Preise", path: "/preise" }])]} />

      <section className="page-hero bg-white border-b">
        <div className="container max-w-3xl mx-auto text-center animate-up">
          <span className="eyebrow">Preise</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Fair kalkuliert. Keine versteckten Gebühren.
          </h1>
          <p className="lead">
            Einmaliges Setup plus monatliche Lizenz – gestaffelt nach
            Einheiten und Projektkomplexität. Der Wohnungsfinder rechnet sich
            typischerweise schon durch den beschleunigten Abverkauf der ersten
            Einheiten.
          </p>
        </div>
      </section>

      {/* PLÄNE */}
      <section className="section bg-soft border-b">
        <div className="container grid grid-3" style={{ alignItems: "stretch" }}>
          {/* PLAN 1 */}
          <div className="card animate-up" style={{ display: "flex", flexDirection: "column", padding: "2.5rem" }}>
            <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1.75rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Objekt & Wohnanlage</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>Für Einzelgebäude und Wohnanlagen bis 30 Einheiten.</p>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "1.875rem", fontWeight: 800, color: "var(--text-primary)" }}>Mittelstand</span>
              <span style={{ display: "block", color: "var(--text-tertiary)", fontSize: "0.9375rem", marginTop: "0.375rem" }}>Einmaliges Setup + monatliche Lizenz</span>
            </div>
            <ul className="check-list" style={{ flex: 1, marginBottom: "2rem" }}>
              <li><Check size={20} /> Drehbare Projektansicht aus Ihren Renderings</li>
              <li><Check size={20} /> Etagen-Grundrisse mit Live-Status</li>
              <li><Check size={20} /> Filter, Merkliste & Anfrageformular</li>
              <li><Check size={20} /> Exposé-Gate & QR-Codes</li>
              <li><Check size={20} /> Cookiefreies Analytics</li>
            </ul>
            <Link href="/kontakt" className="btn btn-outline" style={{ width: "100%" }}>Angebot anfordern</Link>
          </div>

          {/* PLAN 2 */}
          <div className="animate-up delay-100" style={{ background: "var(--bg-dark)", color: "white", border: "2px solid var(--accent-primary)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", position: "relative", boxShadow: "var(--shadow-xl)", padding: "2.5rem" }}>
            <div style={{ position: "absolute", top: "-1px", right: "1.5rem", background: "var(--accent-primary)", color: "white", fontSize: "0.75rem", fontWeight: 800, padding: "0.5rem 1rem", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: "0 0 8px 8px", display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <Award size={14} /> Beliebteste Lösung
            </div>
            <div style={{ marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "1.75rem", marginTop: "1rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "white" }}>Quartier & Areal</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--text-on-dark-muted)" }}>Für Projekte und Quartiere von 30 bis 500+ Einheiten.</p>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "1.875rem", fontWeight: 800, color: "white" }}>Enterprise</span>
              <span style={{ display: "block", color: "var(--text-on-dark-muted)", fontSize: "0.9375rem", marginTop: "0.375rem" }}>Nach Gebäude- und Einheitenzahl</span>
            </div>
            <ul className="check-list" style={{ flex: 1, marginBottom: "2rem" }}>
              <li style={{ color: "white" }}><Check size={20} /> Alles aus Objekt & Wohnanlage</li>
              <li style={{ color: "white" }}><Check size={20} /> CRM-Integration: onOffice, Propstack, Flowfact</li>
              <li style={{ color: "white" }}><Check size={20} /> 360°-Rundgänge & Sonnenstand-Simulation</li>
              <li style={{ color: "white" }}><Check size={20} /> Mehrere Bereiche, Bauabschnitte & Ansichten</li>
              <li style={{ color: "white" }}><Check size={20} /> Eigene Domain, OpenImmo-Export, Webhooks</li>
            </ul>
            <Link href="/kontakt" className="btn btn-primary" style={{ width: "100%" }}>Angebot anfordern</Link>
          </div>

          {/* PLAN 3 */}
          <div className="card animate-up delay-200" style={{ display: "flex", flexDirection: "column", padding: "2.5rem" }}>
            <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1.75rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Agentur & White-Label</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>Für Immobilienmarketing-Agenturen und PropTechs.</p>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "1.875rem", fontWeight: 800, color: "var(--text-primary)" }}>Partner</span>
              <span style={{ display: "block", color: "var(--text-tertiary)", fontSize: "0.9375rem", marginTop: "0.375rem" }}>Multi-Projekt-fähig</span>
            </div>
            <ul className="check-list" style={{ flex: 1, marginBottom: "2rem" }}>
              <li><Check size={20} /> Hosting in Deutschland</li>
              <li><Check size={20} /> Branding & Akzentfarbe je Endkunde</li>
              <li><Check size={20} /> Read-only-API für Ihre Systeme</li>
              <li><Check size={20} /> Multi-Projekt-Verwaltung mit Rollen</li>
            </ul>
            <Link href="/kontakt" className="btn btn-outline" style={{ width: "100%" }}>Partnerschaft anfragen</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white border-b">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Lizenzierung</span>
            <h2>Häufige Fragen zu den Kosten</h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={f.q} className="faq-item" open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8" style={{ fontSize: "0.9375rem" }}>
            Mehr Antworten in den <Link href="/faq" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>FAQ</Link> –
            oder direkt im Gespräch.
          </p>
        </div>
      </section>

      <Testimonials variant="light" />

      {/* CTA */}
      <section className="section bg-dark text-center">
        <div className="container max-w-3xl mx-auto">
          <h2>Lassen Sie sich ein unverbindliches Angebot erstellen.</h2>
          <p className="lead mb-8">
            Wir kalkulieren transparent auf Basis Ihrer Projektgröße – und
            zeigen Ihnen vorab in der Live-Demo, was Sie bekommen.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Jetzt Angebot anfordern <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
