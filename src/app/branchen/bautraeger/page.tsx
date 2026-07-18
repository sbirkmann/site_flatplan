import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Landmark, TimerReset, ListChecks, FileDown,
  HardHat, FileSpreadsheet, BellRing, Building2,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Bauträger – Vorverkauf ab dem ersten Rendering",
  description:
    "Erreichen Sie die Vorverkaufsquote Ihrer Bank schneller: Wohnungsfinder für Bauträger mit Warteliste, Exposé-Gate, Statusverwaltung und OpenImmo-Export.",
  path: "/branchen/bautraeger",
});

export default function BautraegerPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Branchen", path: "/branchen/bautraeger" },
          { name: "Bauträger", path: "/branchen/bautraeger" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Branchenlösung Bauträger</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Vorverkauf ab dem ersten Rendering.
          </h1>
          <p className="lead">
            Ihre Bank will eine Vorverkaufsquote sehen, bevor die Finanzierung
            steht – und Ihre Käufer wollen sehen, was entsteht. Der interaktive
            Wohnungsfinder von flatplan.de macht aus fotorealistischen
            3D-Renderings ein Vertriebswerkzeug, das reserviert und verkauft,
            lange bevor der erste Spaten sticht.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/features" className="btn btn-outline btn-lg">
              Alle Funktionen
            </Link>
          </div>
        </div>
      </section>

      {/* VORVERKAUFSQUOTE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Landmark size={26} /></span>
            <h2>Die Vorverkaufsquote entscheidet über Ihren Baustart.</h2>
            <p className="lead mb-8">
              Finanzierende Banken verlangen üblicherweise 30–50 % verkaufte
              Einheiten, bevor sie die Baufinanzierung freigeben. Jede Woche,
              die Ihr Vorverkauf früher startet, senkt Zwischenfinanzierungs-
              kosten und Projektrisiko. Genau dafür ist der Wohnungsfinder
              gebaut: Er vermarktet Ihr Projekt, sobald die Renderings stehen –
              nicht erst, wenn der Rohbau fotografierbar ist.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Drehbare Projektansicht mit anklickbaren Wohnungen in der Fassade</li>
              <li><Check size={20} /> Etagen-Grundrisse, Preise, Räume und Ausstattung je Einheit</li>
              <li><Check size={20} /> Live-Verfügbarkeit statt veralteter Print-Preisliste</li>
            </ul>
            <Link href="/use-cases/neubauvertrieb" className="btn btn-outline">
              Use Case Neubauvertrieb <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-3d.png"
                alt="Interaktiver Wohnungsfinder für Bauträger: drehbare Projektansicht mit Verfügbarkeiten"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WERKZEUGE VOR & WÄHREND DES VERTRIEBS */}
      <section className="section bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Vom Teaser bis zur Schlüsselübergabe</span>
          <h2>Werkzeuge für jede Phase Ihres Projekts</h2>
          <p className="lead">
            Der Wohnungsfinder begleitet Ihr Bauvorhaben vom Vermarktungsstart
            bis zur letzten verkauften Einheit – mit Funktionen, die genau auf
            den Bauträger-Alltag zugeschnitten sind.
          </p>
        </div>
        <div className="container grid grid-3">
          <div className="card">
            <span className="icon-wrapper"><TimerReset size={26} /></span>
            <h3>Warteliste vor dem Launch</h3>
            <p>
              Sammeln Sie Interessenten, bevor die Vermarktung offiziell
              startet: Landingpage mit Countdown, Warteliste mit
              Double-Opt-in – am Starttag erreichen Sie hunderte
              vorregistrierte Kontakte auf einen Schlag.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><ListChecks size={26} /></span>
            <h3>Statusverwaltung in Echtzeit</h3>
            <p>
              FREI, DEMNÄCHST, RESERVIERT, VERKAUFT – jede Einheit trägt ihren
              farbcodierten Status, den Sie zentral pflegen. Käufer sehen
              sofort, was noch zu haben ist; Ihr Vertrieb telefoniert nie
              wieder über eine längst reservierte Wohnung.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><HardHat size={26} /></span>
            <h3>Baufortschritt je Haus</h3>
            <p>
              Zeigen Sie den Baufortschritt direkt im Wohnungsfinder – je Haus,
              mit Ankündigungs-Bannern für Meilensteine. Käufer und
              Reservierende bleiben informiert, ohne dass Ihr Team
              Rundmails schreibt.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><FileDown size={26} /></span>
            <h3>Exposé-Gate</h3>
            <p>
              Exposé-PDFs gibt es erst nach E-Mail-Bestätigung: Aus jedem
              Download wird ein nachvollziehbarer Lead mit dokumentierter
              Einwilligung – statt anonymer Klicks auf Ihrer Projektseite.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><FileSpreadsheet size={26} /></span>
            <h3>Preisliste & OpenImmo</h3>
            <p>
              Preislisten exportieren Sie jederzeit als CSV oder Excel – für
              Bank, Vertrieb und Notariat. Über den OpenImmo-XML-Export
              übergeben Sie Ihre Einheiten im Branchenstandard an
              nachgelagerte Systeme.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><BellRing size={26} /></span>
            <h3>Alarme, die zurückholen</h3>
            <p>
              Preis-Alarme und Wieder-frei-Alarme informieren Interessenten
              automatisch, wenn sich etwas ändert. Platzt eine Reservierung,
              steht der nächste Käufer schon bereit.
            </p>
          </div>
        </div>
      </section>

      {/* ZAHLEN-BAND */}
      <section className="bg-dark" style={{ padding: "5rem 0" }}>
        <div className="container grid grid-3 text-center">
          {[
            { big: "24/7", label: "Virtuelle Besichtigung", sub: "Ihr Musterhaus schläft nie – auch nicht vor Baubeginn" },
            { big: "4 Status", label: "Farbcodierte Verfügbarkeit", sub: "FREI, DEMNÄCHST, RESERVIERT, VERKAUFT – zentral gepflegt" },
            { big: "1 Export", label: "OpenImmo & Preislisten", sub: "CSV, Excel und OpenImmo-XML auf Knopfdruck" },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{m.big}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff" }}>{m.label}</div>
              <p style={{ marginTop: "0.375rem", fontSize: "0.9rem", marginBottom: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERTRIEBSSTEUERUNG */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/flatfinder_features_expose.png"
                alt="Anfragen-Board und Exposé-Verwaltung für Bauträger"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div>
            <span className="icon-wrapper"><Building2 size={26} /></span>
            <h2>Anfragen im Griff – mit oder ohne externes CRM.</h2>
            <p className="lead mb-8">
              Jede Anfrage landet im Anfragen-Board mit Lead-Bewertung,
              Zuweisung und Wiedervorlage. Arbeiten Sie mit onOffice, Propstack
              oder Flowfact, übergibt flatplan.de die Leads nativ – inklusive
              Wunscheinheit und Einwilligungsnachweis.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Cookiefreies Tracking: Besuche, Wohnungs-Öffnungen, Conversion je Kampagne</li>
              <li><Check size={20} /> Wochen- und Monatsbericht per Mail an Geschäftsführung und Vertrieb</li>
              <li><Check size={20} /> DSGVO eingebaut: Double-Opt-in, Aufbewahrungsfristen, Auto-Löschung</li>
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link href="/funktionen/lead-generierung" className="btn btn-outline">
                Lead-Generierung <ArrowRight size={18} />
              </Link>
              <Link href="/funktionen/integrationen" className="btn btn-outline">
                CRM-Anbindung <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Starten Sie den Vorverkauf, bevor die Baustelle steht.
          </h2>
          <p className="lead mb-8">
            Sehen Sie in einer kostenlosen Live-Demo, wie Ihr Bauvorhaben als
            interaktiver Wohnungsfinder aussieht – und wie Sie damit die
            Vorverkaufsquote Ihrer Bank schneller erreichen.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Jetzt Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/preise" className="btn btn-outline btn-lg">
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
