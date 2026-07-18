import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, FileText, Lock, Printer, FolderArchive, QrCode, Table2, Megaphone,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Exposés, Preislisten & Vermarktungsmaterial",
  description:
    "Exposé-Verwaltung mit Lead-Gate, druckoptimierte Wohnungs-Exposés, Preislisten als CSV/Excel, QR-Codes je Projekt und Wohnung sowie ein einbettbares Verfügbarkeits-Widget.",
  path: "/funktionen/pdf-expose",
});

const marketingTools = [
  { icon: <Lock size={22} />, title: "Exposé-Gate", desc: "Der Download startet erst nach E-Mail-Eingabe – mit konfigurierbaren Feldern und Einwilligungsnachweis. Jedes Exposé wird zum Lead." },
  { icon: <Printer size={22} />, title: "Druckoptimierte Exposés", desc: "Jede Wohnung hat eine druckfertige Exposé-Ansicht – als Papier-Handout im Beratungsgespräch oder als PDF über den Browser-Druck." },
  { icon: <FolderArchive size={22} />, title: "Sammel-Downloads", desc: "Mehrere Exposés als ZIP in einem Rutsch – praktisch für Banken, Vertriebspartner und Interessenten mit Merkliste." },
  { icon: <Table2 size={22} />, title: "Preislisten-Export", desc: "Aktuelle Preisliste als CSV oder Excel auf Knopfdruck – immer synchron mit dem Live-Status im Wohnungsfinder." },
  { icon: <QrCode size={22} />, title: "QR-Codes", desc: "QR-Code je Projekt und je Wohnung als SVG – vom Bauzaun-Banner direkt in die richtige Wohnung im Finder." },
  { icon: <Megaphone size={22} />, title: "Verfügbarkeits-Widget", desc: "Ein einbettbares iframe-Widget zeigt „X von Y frei“ auf Ihrer Website – ohne Preise oder Personendaten preiszugeben." },
];

export default function PdfExpose() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Exposés & Vermarktung", path: "/funktionen/pdf-expose" },
        ])}
      />

      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Exposés & Vermarktung</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Ihr Vermarktungsmaterial. Immer aktuell, nie verschenkt.
          </h1>
          <p className="lead">
            Exposés, Preislisten, QR-Codes und Widgets kommen direkt aus dem
            Wohnungsfinder – mit dem gleichen Datenstand wie Ihr Vertrieb. Und
            jedes heruntergeladene Exposé bringt Ihnen einen Kontakt.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg mt-8">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* EXPOSÉ-GATE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><FileText size={26} /></span>
            <h2>Exposés, die für Sie arbeiten</h2>
            <p className="lead mb-8">
              Hinterlegen Sie je Wohnung Ihr gestaltetes Exposé-PDF – oder
              nutzen Sie die automatisch druckoptimierte Wohnungsansicht.
              Mit dem Exposé-Gate geben Sie beides nur gegen eine verifizierte
              E-Mail-Adresse heraus.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Eigene Exposé-PDFs je Wohnung, unverändert ausgeliefert</li>
              <li><Check size={20} /> Pflichtfelder frei konfigurierbar (Name, Telefon, …)</li>
              <li><Check size={20} /> Double-Opt-in und dokumentierte Einwilligung</li>
              <li><Check size={20} /> Jeder Download erscheint als Lead im Anfragen-Board</li>
            </ul>
          </div>
          <div className="device-frame" style={{ padding: "1.5rem", color: "white" }}>
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem", marginBottom: "1.25rem", fontWeight: 600 }}>
              Exposé-Download · WE 2.04
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "0.75rem 1rem", fontSize: "0.875rem" }}>E-Mail-Adresse *</div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "0.75rem 1rem", fontSize: "0.875rem" }}>Name *</div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
                <Check size={16} style={{ color: "#ff7a33", flexShrink: 0 }} />
                Einwilligung zur Kontaktaufnahme (DSGVO)
              </div>
              <div style={{ background: "var(--accent-primary)", borderRadius: "8px", padding: "0.75rem 1rem", fontSize: "0.875rem", fontWeight: 700, textAlign: "center" }}>
                Exposé herunterladen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="section bg-soft border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Werkzeuge</span>
            <h2>Vermarktung aus einer Quelle</h2>
            <p className="lead">
              Schluss mit veralteten PDFs im Umlauf: Alle Materialien ziehen
              ihre Daten live aus dem Projekt.
            </p>
          </div>
          <div className="grid grid-3">
            {marketingTools.map((tool) => (
              <div key={tool.title} className="card" style={{ padding: "1.75rem" }}>
                <div className="icon-wrapper" style={{ width: "2.75rem", height: "2.75rem" }}>{tool.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{tool.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9375rem" }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHRLICHKEIT + WORKFLOW */}
      <section className="section bg-white border-b">
        <div className="container max-w-3xl mx-auto prose">
          <h2>So läuft die Exposé-Vermarktung in der Praxis</h2>
          <p>
            Ihr Gestaltungsbüro liefert die Exposé-PDFs im gewohnten Corporate
            Design – flatplan.de übernimmt Verteilung, Zugriffsschutz und
            Lead-Erfassung. Für den schnellen Alltag gibt es zusätzlich die
            druckoptimierte Wohnungsansicht direkt aus den Live-Daten: Preis,
            Räume, Flächen, Energiewerte und Grundriss, formatiert für den
            Ausdruck oder das Speichern als PDF im Browser.
          </p>
          <p>
            Preisänderungen pflegen Sie an einer Stelle: im Projekt. Preisliste,
            Wohnungsfinder, Widget und OpenImmo-Export bleiben automatisch
            synchron – niemand arbeitet mehr mit einer veralteten Excel-Liste
            aus dem letzten Quartal. Und wenn eine Einheit reserviert wird,
            zeigt das auch der QR-Code am Bauzaun in Echtzeit.
          </p>
          <p>
            Wie die erfassten Kontakte weiterverarbeitet werden, lesen Sie
            unter <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>{" "}
            – und wie sie automatisch in onOffice, Propstack oder Flowfact
            landen, unter{" "}
            <Link href="/funktionen/integrationen">CRM & Schnittstellen</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-dark text-center">
        <div className="container max-w-3xl mx-auto">
          <h2>Materialschlacht war gestern.</h2>
          <p className="lead mb-8">
            Sehen Sie in der Live-Demo, wie Exposé-Gate, Preislisten und
            QR-Codes zusammenspielen.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kostenlose Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
