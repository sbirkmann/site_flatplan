import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Was der Finder im Vertrieb ersetzt",
  description:
    "Ansicht statt PDF. Anfrage mit WE statt Portalformular. Übergabe nach onOffice, Propstack oder Flowfact. Messung ohne Cookie.",
  path: "/vorteile",
});

export default function VorteilePage() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Im Vertrieb", path: "/vorteile" }])} />
      <PageHero
        eyebrow="Im Vertrieb"
        title="Was der Finder ersetzt."
        lead="PDF-Versand, veraltete Preisliste, Copy-Paste ins CRM. Der Finder hängt die WE in die Ansicht."
        tone="licht"
      />

      <section className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Ansicht</span>
            <h2>Fassade, nicht PDF.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Statusfarbe in der Loggia. Anfrage mit der WE, nicht mit Formulartext.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Ansicht", title: "Rendering, sobald es da ist", copy: "Keine Musterwohnung nötig. Sequenz, Hotspots, Statusfarbe. Warteliste vor dem Start, wenn gewünscht." },
            { room: "Anfrage", title: "WE, Merkliste, bestätigte Mail", copy: "Gate vor dem Exposé. Pflichtfelder, die Sie setzen. Suchagent und Preis-Alarm." },
            { room: "CRM", title: "Übergabe ohne Abtippen", copy: "onOffice, Propstack, Flowfact. Webhook und OpenImmo, wo kein natives CRM." },
            { room: "Messung", title: "Ohne Cookie, ohne IP", copy: "Aufrufe, geöffnete WE, UTM bis zur Anfrage. Wochenbericht." },
          ].map((row) => (
            <div key={row.room} className="walk-row">
              <p className="room">{row.room}</p>
              <h3>{row.title}</h3>
              <p>{row.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "42rem" }}>
          <span className="eyebrow">Vergleich</span>
          <h2>Preisliste und Finder.</h2>
          <div className="walk">
            {[
              { room: "Eindruck", title: "PDF per Mail", copy: "Finder: Fassade, Hotspot, 360°." },
              { room: "Besichtigung", title: "Termin nach Rohbau", copy: "Finder: Browser, ab dem Rendering." },
              { room: "Status", title: "Liste von letzter Woche", copy: "Finder: frei, reserviert, verkauft in der Ansicht." },
              { room: "Nachfassen", title: "Excel-Wiedervorlage", copy: "Finder: Suchagent, Alarm, Auto-Antwort." },
            ].map((row) => (
              <div key={row.room} className="walk-row">
                <p className="room">{row.room}</p>
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/funktionen/lead-generierung" style={{ fontWeight: 700, textDecoration: "underline" }}>Anfragen und Gate</Link>
            {" · "}
            <Link href="/faq" style={{ fontWeight: 700, textDecoration: "underline" }}>FAQ</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
