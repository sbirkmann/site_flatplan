import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder im Neubauvertrieb",
  description:
    "Was der Wohnungsfinder im Vorverkauf ändert: statt PDF-Versand Fassade mit Live-Status, Anfrage mit Wohnungsnummer, Dashboard statt Excel. CRM optional. Messung ohne Cookie.",
  path: "/vorteile",
});

export default function VorteilePage() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Im Vertrieb", path: "/vorteile" }])} />
      <PageHero
        eyebrow="Im Vertrieb"
        title="Der Vertrieb arbeitet mit Live-Daten statt mit PDF."
        lead="Heute geht das PDF per Mail raus, und die Preisliste ist eine Woche alt. Mit dem Wohnungsfinder steht der aktuelle Stand auf der Projektseite, und Status, Anfragen und Zahlen liegen im Dashboard."
        tone="licht"
      />

      <section className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Ansicht</span>
            <h2>Frei, reserviert, verkauft — direkt auf der Fassade.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Die Anfrage enthält die Wohnungsnummer. Pflege und Auswertung im Dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Ansicht", title: "Online, sobald Modell und Bilder da sind", copy: "Keine Musterwohnung nötig. Modelle und Renderings machen wir. Grundrisse auch, wenn sie fehlen." },
            { room: "Anfrage", title: "Wohnung, Merkliste, bestätigte Mail", copy: "Gate vor dem Exposé. Pflichtfelder, die Sie setzen. Suchagent und Preis-Alarm." },
            { room: "Dashboard", title: "Editor und Auswertung", copy: "Wohnungen pflegen, Einstellungen, Zahlen. CRM wie onOffice nur, wenn Sie es anbinden." },
            { room: "Messung", title: "Ohne Cookie, ohne IP", copy: "Aufrufe, geöffnete Wohnungen, UTM bis zur Anfrage. Wochenbericht." },
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
        <div className="container" style={{ maxWidth: "58rem" }}>
          <span className="eyebrow">Vergleich</span>
          <h2>Was der Finder ersetzt.</h2>
          <div className="walk">
            {[
              { room: "Eindruck", title: "Heute oft PDF per Mail", copy: "Mit Finder: Fassade, Wohnung, 360°." },
              { room: "Besichtigung", title: "Termin nach Rohbau", copy: "Mit Finder: Browser, ab dem Rendering." },
              { room: "Status", title: "Liste von letzter Woche", copy: "Mit Finder: frei, reserviert, verkauft in der Ansicht." },
              { room: "Nachfassen", title: "Excel-Wiedervorlage", copy: "Mit Finder: Suchagent, Alarm, Board im Dashboard." },
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
