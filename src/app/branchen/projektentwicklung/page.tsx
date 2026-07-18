import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Map, Users, LineChart, Target, Globe2,
  CalendarClock, Layers, ShieldCheck,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Projektentwickler – Quartiere digital vermarkten",
  description:
    "Quartiere digital vermarkten: Multi-Projekt-Verwaltung mit Rollen, Statistik-Links für Investoren, Vertriebsziel-Tracking und eigene Domain je Projekt.",
  path: "/branchen/projektentwicklung",
});

export default function ProjektentwicklungPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Branchen", path: "/branchen/projektentwicklung" },
          { name: "Projektentwicklung", path: "/branchen/projektentwicklung" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Branchenlösung Projektentwicklung</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Ganze Quartiere. Ein Vertriebssystem.
          </h1>
          <p className="lead">
            Mehrere Häuser, Bauabschnitte und hunderte Einheiten – und
            Investoren, die belastbare Zahlen erwarten. flatplan.de bildet Ihr
            Quartier als interaktiven Wohnungsfinder ab und gibt Ihnen die
            Multi-Projekt-Steuerung, das Controlling und das Reporting, das
            Projektentwicklung im Maßstab braucht.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/referenzen" className="btn btn-outline btn-lg">
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* QUARTIERE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Map size={26} /></span>
            <h2>Quartiere mit mehreren Häusern – sauber strukturiert.</h2>
            <p className="lead mb-8">
              Ein Areal ist mehr als eine Fassade. Der Wohnungsfinder gliedert
              Ihr Quartier in mehrere Bereiche und Ansichten: von der
              Vogelperspektive über das einzelne Haus bis zum Etagen-Grundriss.
              Interessenten navigieren intuitiv durch das gesamte Projekt –
              Haus für Haus, Etage für Etage, Einheit für Einheit.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Mehrere Häuser und Bereiche mit eigener Navigation je Haus</li>
              <li><Check size={20} /> Baufortschritt je Haus – ideal für abschnittsweise Vermarktung</li>
              <li><Check size={20} /> Umgebungs-POIs mit Gehminuten verkaufen die Lage gleich mit</li>
              <li><Check size={20} /> Wohnen und Gewerbe parallel: eigene Filter-Felder je Einheitstyp</li>
            </ul>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Projektansicht im Detail <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-3d.png"
                alt="Quartiersvermarktung: drehbare Arealansicht mit mehreren Häusern"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-PROJEKT & TEAM */}
      <section className="section bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Steuerung im Maßstab</span>
          <h2>Mehrere Projekte, klare Verantwortlichkeiten</h2>
          <p className="lead">
            Projektentwicklung heißt Parallelität: mehrere Vorhaben, externe
            Vertriebspartner, wechselnde Teams. flatplan.de ist dafür gebaut.
          </p>
        </div>
        <div className="container grid grid-3">
          <div className="card">
            <span className="icon-wrapper"><Layers size={26} /></span>
            <h3>Multi-Projekt-Verwaltung</h3>
            <p>
              Alle Vorhaben in einem Konto, jedes Projekt mit eigener
              Konfiguration und eigener Domain. Neue Projekte starten Sie per
              Duplizierung eines bewährten Setups – inklusive täglicher
              Auto-Sicherung als ZIP-Backup.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><Users size={26} /></span>
            <h3>Rollen je Projekt</h3>
            <p>
              VIEWER, EDITOR, MANAGER – Rechte vergeben Sie pro Projekt. Der
              externe Vertrieb pflegt Status und Anfragen im Projekt A, ohne
              Projekt B überhaupt zu sehen. 2FA, Einladungs-Links und
              Login-Protokoll inklusive.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><Globe2 size={26} /></span>
            <h3>Eigene Domain je Projekt</h3>
            <p>
              Jedes Vorhaben bekommt seinen eigenen Markenauftritt unter
              eigener Domain – mehrsprachig und als PWA installierbar. Ihre
              Projektmarke steht im Vordergrund, nicht das Werkzeug dahinter.
            </p>
          </div>
        </div>
      </section>

      {/* CONTROLLING-BAND */}
      <section className="bg-dark" style={{ padding: "5rem 0" }}>
        <div className="container grid grid-3 text-center">
          {[
            {
              icon: <LineChart size={28} />,
              big: "Live",
              label: "Statistik-Link für Stakeholder",
              sub: "Read-only-Zugriff für Banken, Investoren und Partner – ohne Login, ohne Schulung",
            },
            {
              icon: <Target size={28} />,
              big: "Soll/Ist",
              label: "Vertriebsziel-Tracking",
              sub: "Verkaufsziele definieren und den Abverkauf gegen den Plan verfolgen",
            },
            {
              icon: <CalendarClock size={28} />,
              big: "Wöchentlich",
              label: "Berichte per Mail",
              sub: "Wochen- und Monatsberichte landen automatisch bei Geschäftsführung und Investoren",
            },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ color: "var(--accent-on-dark)", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>{m.icon}</div>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{m.big}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff" }}>{m.label}</div>
              <p style={{ marginTop: "0.375rem", fontSize: "0.9rem", marginBottom: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REPORTING / INVESTOREN */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/flatfinder_features_expose.png"
                alt="Vertriebscontrolling: Statistiken und Berichte für Projektentwickler"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div>
            <span className="icon-wrapper"><ShieldCheck size={26} /></span>
            <h2>Zahlen, denen Investoren vertrauen.</h2>
            <p className="lead mb-8">
              Das cookiefreie Tracking erfasst Besuche, Wohnungs-Öffnungen,
              Favoriten und Conversion je Kampagnenquelle – ohne Cookie-Banner
              und ohne IP-Speicherung. Den externen Statistik-Link geben Sie
              direkt an Bank und Investoren weiter: Stakeholder sehen den
              Vermarktungsstand live, statt auf Ihre nächste Präsentation zu
              warten.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Conversion je UTM-Quelle: Welche Kampagne bringt Käufer?</li>
              <li><Check size={20} /> CSV/Excel-Exporte für Ihr eigenes Berichtswesen</li>
              <li><Check size={20} /> Webhooks und Read-only-API für BI- und Bestandssysteme</li>
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link href="/funktionen/integrationen" className="btn btn-outline">
                Integrationen <ArrowRight size={18} />
              </Link>
              <Link href="/use-cases/neubauvertrieb" className="btn btn-outline">
                Use Case Neubauvertrieb <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ihr nächstes Quartier verdient ein Vertriebssystem.
          </h2>
          <p className="lead mb-8">
            In einer kostenlosen Live-Demo zeigen wir Ihnen, wie Ihr Areal als
            interaktiver Wohnungsfinder aussieht – inklusive Rollenkonzept,
            Controlling und Investoren-Reporting.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Jetzt Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
