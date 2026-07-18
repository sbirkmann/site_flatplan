import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Users, BellRing, ListChecks, Timer, MailCheck, KanbanSquare,
  CalendarClock, BarChart3,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Lead-Generierung für den Neubauvertrieb",
  description:
    "Qualifizierte Leads statt Portal-Anfragen: Exposé-Gate, Suchagenten, Preis-Alarme, Wartelisten und ein Anfragen-Board mit A/B/C-Bewertung – DSGVO-konform mit Double-Opt-in.",
  path: "/funktionen/lead-generierung",
});

const funnelSteps = [
  {
    icon: <Users size={24} />,
    title: "1 · Interesse wecken",
    desc: "Interessenten erkunden das Projekt selbst, speichern Favoriten auf der Merkliste und sehen Live-Verfügbarkeit – 24/7, auch wenn Ihr Vertrieb schläft.",
  },
  {
    icon: <MailCheck size={24} />,
    title: "2 · Kontakt gewinnen",
    desc: "Exposé-Gate, Warteliste mit Countdown, Newsletter, Suchagent oder Preis-Alarm: Jede Funktion tauscht Mehrwert gegen eine verifizierte E-Mail-Adresse.",
  },
  {
    icon: <KanbanSquare size={24} />,
    title: "3 · Anfrage qualifizieren",
    desc: "Anfragen kommen mit Merkliste, Wunscheinheit, Rückruf- und Besichtigungswunsch – und landen im Board mit Lead-Bewertung A/B/C und Zuweisung.",
  },
  {
    icon: <ArrowRight size={24} />,
    title: "4 · Abschluss vorbereiten",
    desc: "Besichtigungsslots mit iCal-Export, Textbausteine für schnelle Antworten, Wiedervorlagen und Aufgaben – bis zur Übergabe an Ihr CRM.",
  },
];

const leadTools = [
  { icon: <ListChecks size={22} />, title: "Exposé-Gate", desc: "Exposé-Download erst nach E-Mail-Eingabe – mit konfigurierbaren Pflichtfeldern und Einwilligungsnachweis." },
  { icon: <BellRing size={22} />, title: "Suchagenten & Alarme", desc: "Mail bei neuen Treffern, Preissenkungen oder wieder freien Wohnungen – warme Leads, die von selbst zurückkommen." },
  { icon: <Timer size={22} />, title: "Warteliste & Countdown", desc: "Vor Vermarktungsstart sammelt eine Countdown-Seite Interessenten – am Launch-Tag starten Sie mit vollem Postfach." },
  { icon: <MailCheck size={22} />, title: "Double-Opt-in & Auto-Antwort", desc: "DSGVO-sauber ab Werk: Bestätigungs-Mails, Auto-Antworten außerhalb der Geschäftszeiten, Blockliste gegen Spam." },
  { icon: <CalendarClock size={22} />, title: "Besichtigungstermine", desc: "Buchbare Slots mit Kapazität, Bestätigung und iCal-Export für Ihren Kalender." },
  { icon: <BarChart3 size={22} />, title: "Kampagnen-Tracking", desc: "UTM-Kurzlinks mit Klickzähler und Conversion je Quelle – Sie sehen, welcher Kanal Anfragen bringt." },
];

export default function LeadGenerierung() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Lead-Generierung", path: "/funktionen/lead-generierung" },
        ])}
      />

      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Lead-Generierung</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Weniger anonyme Klicks. Mehr echte Interessenten.
          </h1>
          <p className="lead">
            Portale liefern Masse, flatplan.de liefert Kontext: Jede Anfrage
            kommt mit Wunscheinheit, Merkliste und bestätigter E-Mail – bereit
            für den Abschluss statt für die Ablage.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg mt-8">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FUNNEL */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Der Funnel</span>
            <h2>Vom Besucher zum qualifizierten Lead</h2>
          </div>
          <div className="grid grid-4">
            {funnelSteps.map((step) => (
              <div key={step.title} className="card" style={{ padding: "1.75rem" }}>
                <div className="icon-wrapper">{step.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9375rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section bg-soft border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Werkzeuge</span>
            <h2>Die Lead-Engine im Detail</h2>
          </div>
          <div className="grid grid-3">
            {leadTools.map((tool) => (
              <div key={tool.title} className="card" style={{ padding: "1.75rem" }}>
                <div className="icon-wrapper" style={{ width: "2.75rem", height: "2.75rem" }}>{tool.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{tool.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9375rem" }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><KanbanSquare size={26} /></span>
            <h2>Das Anfragen-Board: Ihr CRM-light</h2>
            <p className="lead mb-8">
              Jede Anfrage durchläuft einen klaren Prozess – neu, in
              Bearbeitung, erledigt. Mit Zuweisung an Teammitglieder,
              Lead-Bewertung, Verlauf und allem, was der Vertrieb täglich
              braucht.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Lead-Bewertung A/B/C und Finanzierungsstatus</li>
              <li><Check size={20} /> Wiedervorlagen mit automatischer Erinnerung</li>
              <li><Check size={20} /> Textbausteine, Antwort-Mails direkt aus dem Tool</li>
              <li><Check size={20} /> vCard-Export, Druckansicht, SLA-Ampel für Reaktionszeiten</li>
            </ul>
            <p style={{ fontSize: "0.9375rem" }}>
              Sie arbeiten bereits mit einem CRM? Dann übergibt flatplan.de
              jede Anfrage automatisch –{" "}
              <Link href="/funktionen/integrationen" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>
                mehr zu CRM & Schnittstellen
              </Link>.
            </p>
          </div>
          <div className="device-frame" style={{ padding: "1.5rem", color: "white" }}>
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem", marginBottom: "1rem", fontWeight: 600 }}>
              Anfragen-Board
            </div>
            {[
              { name: "Familie K.", detail: "WE 2.04 · Bewertung A · Besichtigung Sa 11:00", status: "In Bearbeitung" },
              { name: "M. Berger", detail: "WE 1.11 · Bewertung B · Wiedervorlage Fr", status: "Neu" },
              { name: "S. Vogel", detail: "Merkliste (3) · Finanzierung bestätigt", status: "In Bearbeitung" },
            ].map((lead) => (
              <div key={lead.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{lead.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{lead.detail}</div>
                </div>
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem", borderRadius: "999px", background: "rgba(255,90,0,0.15)", color: "#ff7a33", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-dark text-center">
        <div className="container max-w-3xl mx-auto">
          <h2>Machen Sie aus Ihrem Projekt eine Lead-Quelle.</h2>
          <p className="lead mb-8">
            In der Live-Demo zeigen wir Ihnen den kompletten Funnel – vom
            ersten Besuch bis zur Anfrage in Ihrem CRM.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kostenlose Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
