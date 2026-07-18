import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  Clock,
  Rotate3d,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Vorteile – Warum ein interaktiver Wohnungsfinder mehr verkauft",
  description:
    "24/7-Besichtigung, Vorverkauf ab dem ersten Rendering, qualifizierte Leads statt Portal-Anfragen, automatisierter Vertrieb und cookiefreies Controlling: die Vorteile von flatplan.de.",
  path: "/vorteile",
});

const benefits = [
  {
    icon: <Clock size={26} />,
    title: "Ihr Projekt hat immer geöffnet",
    text: "Interessenten besichtigen abends auf dem Sofa und sonntags auf dem Tablet: drehbare Projektansicht, Etagen-Grundrisse, 360°-Rundgänge und Sonnenstand-Simulation – rund um die Uhr, ohne Termin, ohne App.",
  },
  {
    icon: <Rotate3d size={26} />,
    title: "Vorverkauf ab dem ersten Rendering",
    text: "Sie brauchen keine fertige Baustelle. Sobald die 3D-Renderings Ihres Visualisierers vorliegen, geht der Wohnungsfinder live – mit Warteliste und Countdown sammeln Sie sogar schon vor dem Launch Interessenten.",
  },
  {
    icon: <Users size={26} />,
    title: "Qualifizierte Leads statt Portal-Rauschen",
    text: "Jede Anfrage kommt mit konkretem Wohnungsbezug, Merkliste und den Pflichtfeldern, die Sie definieren. Das Exposé-Gate macht aus jedem PDF-Download einen Kontakt mit bestätigter E-Mail-Adresse.",
  },
  {
    icon: <BellRing size={26} />,
    title: "Der Vertrieb, der nachts weiterarbeitet",
    text: "Suchagenten melden neue Treffer, Preis- und Wieder-frei-Alarme reaktivieren Interessenten, Auto-Antworten bestätigen jede Anfrage sofort. Ihr Team steigt erst ein, wenn es um den Abschluss geht.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Controlling statt Bauchgefühl",
    text: "Cookiefreies Analytics zeigt Besuche, Wohnungs-Öffnungen, Favoriten, Rundgang-Verweildauer und Conversion je UTM-Quelle. Wochenberichte per Mail und ein Read-only-Statistik-Link halten Stakeholder auf dem Laufenden.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "DSGVO ohne Cookie-Banner",
    text: "Das eingebaute Tracking kommt ohne Cookies aus und speichert keine IP-Adressen. Double-Opt-in, Einwilligungsnachweise und Aufbewahrungsfristen mit Auto-Löschung sind Standard – kein Banner, kein Risiko.",
  },
];

const comparison: { aspect: string; classic: string; flatplan: string }[] = [
  {
    aspect: "Erster Eindruck",
    classic: "PDF-Exposé und Preisliste per E-Mail",
    flatplan: "Drehbare Projektansicht, anklickbare Wohnungen, 360°-Rundgänge",
  },
  {
    aspect: "Besichtigung",
    classic: "Termin vor Ort, oft erst nach Rohbau",
    flatplan: "24/7 im Browser – ab dem ersten Rendering",
  },
  {
    aspect: "Verfügbarkeit",
    classic: "Preisliste veraltet, Rückfragen per Telefon",
    flatplan: "Live-Status frei / reserviert / verkauft, farbcodiert im Projekt",
  },
  {
    aspect: "Anfragen",
    classic: "Portal-Leads ohne Kontext, viele Karteileichen",
    flatplan: "Anfragen mit Wohnungsbezug, Merkliste und Pflichtfeldern",
  },
  {
    aspect: "Nachfassen",
    classic: "Manuelle Wiedervorlage-Listen in Excel",
    flatplan: "Suchagenten, Preis-Alarme und Auto-Antworten laufen automatisch",
  },
  {
    aspect: "CRM-Pflege",
    classic: "Copy & Paste aus E-Mails ins CRM",
    flatplan: "Automatische Übergabe an onOffice, Propstack oder Flowfact",
  },
  {
    aspect: "Erfolgskontrolle",
    classic: "Bauchgefühl und Portal-Statistiken",
    flatplan: "Cookiefreies Analytics mit Conversion je Kampagne",
  },
];

export default function VorteilePage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Vorteile", path: "/vorteile" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Ihre Vorteile</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Was ein Wohnungsfinder verändert – konkret.
          </h1>
          <p className="lead">
            Weniger PDF-Versand, weniger Karteileichen, weniger manuelle
            CRM-Pflege. Dafür ein Projekt, das rund um die Uhr besichtigt
            werden kann und Anfragen liefert, mit denen Ihr Vertrieb sofort
            arbeiten kann.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>Sechs Gründe für den Wechsel</h2>
            <p className="lead">
              Vom ersten Rendering bis zur letzten verkauften Einheit: An
              diesen Stellen macht flatplan.de den Unterschied.
            </p>
          </div>
          <div className="grid grid-3">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <span className="icon-wrapper">{b.icon}</span>
                <h3>{b.title}</h3>
                <p style={{ marginBottom: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERGLEICH */}
      <section className="section bg-soft border-b">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Klassisch vs. flatplan</span>
            <h2>Zwei Arten, ein Neubauprojekt zu vermarkten</h2>
            <p className="lead">
              Derselbe Vertriebsprozess, Schritt für Schritt verglichen.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", border: "1px solid var(--border-light)" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-light)", textAlign: "left" }}>
                  <th style={{ padding: "1rem 1.25rem" }}>Schritt</th>
                  <th style={{ padding: "1rem 1.25rem", color: "var(--text-tertiary)" }}>Klassischer Vertrieb</th>
                  <th style={{ padding: "1rem 1.25rem" }}>Mit flatplan.de</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.aspect} style={{ borderBottom: "1px solid var(--border-light)", verticalAlign: "top" }}>
                    <td style={{ padding: "1rem 1.25rem", fontWeight: 600, whiteSpace: "nowrap" }}>{row.aspect}</td>
                    <td style={{ padding: "1rem 1.25rem", color: "var(--text-secondary)" }}>
                      <span style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <X size={16} style={{ flexShrink: 0, marginTop: "4px", color: "var(--text-tertiary)" }} />
                        {row.classic}
                      </span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <span style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <Check size={16} style={{ flexShrink: 0, marginTop: "4px", color: "var(--accent-primary)" }} />
                        {row.flatplan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AUTOMATISIERUNG DETAIL */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><BellRing size={26} /></span>
            <h2>Weniger Vertriebsaufwand durch Automatisierung</h2>
            <p className="lead mb-8">
              Der größte Kostenblock im Neubauvertrieb ist manuelle Arbeit:
              Anfragen abtippen, Interessenten erinnern, Preislisten
              verschicken. Genau diese Schritte übernimmt der Wohnungsfinder.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Suchagenten informieren Interessenten automatisch bei passenden neuen Einheiten</li>
              <li><Check size={20} /> Preis-Alarme und Wieder-frei-Alarme holen abgesprungene Kontakte zurück</li>
              <li><Check size={20} /> Auto-Antworten und Textbausteine beschleunigen jede Reaktion</li>
              <li><Check size={20} /> Anfragen-Board mit A/B/C-Bewertung, Wiedervorlagen und Aufgaben</li>
              <li><Check size={20} /> Anfragen fließen automatisch in onOffice, Propstack oder Flowfact</li>
            </ul>
            <Link href="/funktionen/lead-generierung" className="btn btn-outline">
              Lead-Generierung im Detail <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft">
              <h3 className="mb-4">Rechenbeispiel Zeitersparnis</h3>
              <p>
                Bei 40 Anfragen im Monat und rund 10 Minuten manueller
                Erfassung, Bestätigung und CRM-Pflege pro Anfrage entstehen
                fast 7 Stunden reine Verwaltungsarbeit – Monat für Monat.
              </p>
              <p style={{ marginBottom: 0 }}>
                Mit automatischer CRM-Übergabe, Auto-Antwort und Exposé-Gate
                entfällt dieser Aufwand nahezu vollständig. Ihr Team nutzt die
                Zeit für Besichtigungen, Beratung und Abschlüsse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
            Sehen Sie den Unterschied an Ihrem eigenen Projekt.
          </h2>
          <p className="lead mb-8">
            In einer kostenlosen Live-Demo zeigen wir, wie Ihr Bauvorhaben als
            interaktiver Wohnungsfinder aussieht – und welche Anfragen daraus
            entstehen. Antworten auf typische Fragen finden Sie vorab im{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
