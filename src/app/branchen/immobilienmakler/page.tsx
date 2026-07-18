import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Handshake, KanbanSquare, Workflow, QrCode,
  Filter, MailCheck, Link2, Star,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Immobilienmakler – Alleinaufträge gewinnen",
  description:
    "Gewinnen Sie Alleinaufträge mit dem Wohnungsfinder: vorqualifizierte Leads, Anfragen-Board als CRM-light und native Anbindung an onOffice, Propstack, Flowfact.",
  path: "/branchen/immobilienmakler",
});

export default function ImmobilienmaklerPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Branchen", path: "/branchen/immobilienmakler" },
          { name: "Immobilienmakler", path: "/branchen/immobilienmakler" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Branchenlösung Immobilienmakler</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Das Argument, das Alleinaufträge gewinnt.
          </h1>
          <p className="lead">
            Wenn mehrere Makler um dasselbe Neubau-Mandat pitchen, gewinnt
            selten der mit den besten Kontakten – sondern der mit dem besten
            Konzept. Ein interaktiver Wohnungsfinder für das Projekt Ihres
            Bauträgers ist genau das: ein Alleinstellungsmerkmal, das man
            im Pitch zeigen kann statt versprechen zu müssen.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/funktionen/integrationen" className="btn btn-outline btn-lg">
              CRM-Anbindung ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* PITCH-ARGUMENT */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Handshake size={26} /></span>
            <h2>Im Pitch um den Alleinauftrag zählt der Mehrwert.</h2>
            <p className="lead mb-8">
              „Wir haben gute Kontakte“ sagt jeder. Sie sagen: „Wir stellen
              Ihr Projekt als drehbaren Wohnungsfinder mit 360°-Rundgängen
              online, qualifizieren jede Anfrage vor und liefern Ihnen
              wöchentlich belastbare Vertriebszahlen.“ Das ist ein Angebot,
              das ein Bauträger vergleichen kann – und bei dem Sie gewinnen.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Fotorealistische Projektpräsentation unter Ihrer Vermarktungsflagge</li>
              <li><Check size={20} /> Cookiefreie Statistik als Report für Ihren Auftraggeber</li>
              <li><Check size={20} /> Eigene Domain je Projekt für Kampagnen und Print</li>
            </ul>
            <Link href="/vorteile" className="btn btn-outline">
              Alle Vorteile im Überblick <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-detail.png"
                alt="Wohnungsfinder als Pitch-Argument für Immobilienmakler"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADS STATT PORTAL-MASSE */}
      <section className="section bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Lead-Qualität</span>
          <h2>Vorqualifizierte Anfragen statt Portal-Massenpost</h2>
          <p className="lead">
            Wer über den Wohnungsfinder anfragt, hat das Projekt gedreht,
            Grundrisse verglichen und eine konkrete Einheit auf der Merkliste.
            Solche Anfragen fühlen sich anders an als die 40. Portal-Mail –
            und sie konvertieren anders.
          </p>
        </div>
        <div className="container grid grid-3">
          <div className="card">
            <span className="icon-wrapper"><Filter size={26} /></span>
            <h3>Selbstqualifizierung im Finder</h3>
            <p>
              Interessenten filtern nach Zimmern, Etage und Preis, öffnen
              Grundrisse und legen Favoriten auf die Merkliste. Die Anfrage
              enthält die konkrete Wunscheinheit – kein Rätselraten am Telefon.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><MailCheck size={26} /></span>
            <h3>Saubere Kontakte</h3>
            <p>
              Konfigurierbare Pflichtfelder, DSGVO-Einwilligung und
              Double-Opt-in sorgen dafür, dass jede Adresse echt und
              dokumentiert ist – inklusive Rückruf- oder Besichtigungswunsch.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><Link2 size={26} /></span>
            <h3>Kampagnen, die messbar sind</h3>
            <p>
              UTM-Kurzlinks mit Klickzähler zeigen, welche Anzeige, welches
              Portal und welcher Newsletter tatsächlich Anfragen bringt.
              Budget fließt dorthin, wo es wirkt.
            </p>
          </div>
        </div>
      </section>

      {/* ANFRAGEN-BOARD ALS CRM-LIGHT */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/flatfinder_features_expose.png"
                alt="Anfragen-Board: Lead-Bewertung, Wiedervorlage und Aufgaben für Makler"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div>
            <span className="icon-wrapper"><KanbanSquare size={26} /></span>
            <h2>Das Anfragen-Board: Ihr CRM-light fürs Projekt.</h2>
            <p className="lead mb-8">
              Kein CRM im Einsatz? Kein Problem. Das eingebaute Anfragen-Board
              organisiert Leads in den Stufen Neu, In Bearbeitung und Erledigt –
              mit allem, was ein kleines Team für den Projektvertrieb braucht.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Lead-Bewertung A/B/C und Zuweisung an Teammitglieder</li>
              <li><Check size={20} /> Wiedervorlagen, Aufgaben und Textbausteine für schnelle Antworten</li>
              <li><Check size={20} /> SLA-Ampel zeigt, welche Anfrage zu lange unbeantwortet ist</li>
              <li><Check size={20} /> vCard-Export für Ihr Adressbuch und Ihr Telefon</li>
            </ul>
            <Link href="/funktionen/lead-generierung" className="btn btn-outline">
              Lead-Funktionen im Detail <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CRM + QR BAND */}
      <section className="bg-dark" style={{ padding: "5rem 0" }}>
        <div className="container grid grid-3 text-center">
          {[
            {
              icon: <Workflow size={28} />,
              big: "3 CRMs",
              label: "Nativ angebunden",
              sub: "onOffice, Propstack und Flowfact – Anfragen fließen automatisch in Ihre Pipeline, mit Protokoll",
            },
            {
              icon: <QrCode size={28} />,
              big: "1 Scan",
              label: "Vom Bauzaun ins Projekt",
              sub: "QR-Codes je Projekt und je Wohnung – für Bauzaunbanner, Print-Exposés und Anzeigen",
            },
            {
              icon: <Star size={28} />,
              big: "A/B/C",
              label: "Lead-Bewertung",
              sub: "Ihr Vertrieb ruft zuerst an, wo die Kaufwahrscheinlichkeit am höchsten ist",
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

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Werden Sie der Makler, den Bauträger exklusiv beauftragen.
          </h2>
          <p className="lead mb-8">
            Lassen Sie sich in einer kostenlosen Demo zeigen, wie Sie den
            Wohnungsfinder in Ihren nächsten Pitch einbauen – und wie Anfragen
            direkt in onOffice, Propstack oder Flowfact landen.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Jetzt Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
