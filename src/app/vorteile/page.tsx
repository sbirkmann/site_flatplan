import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import SheetHead from "@/components/plan/SheetHead";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder im Neubauvertrieb: die Vorteile",
  description:
    "Was der Wohnungsfinder im Vorverkauf ändert: statt PDF-Versand die Fassade mit Live-Status, Anfragen mit Wohnungsnummer, Dashboard statt Excel. CRM optional, Messung ohne Cookie-Banner.",
  path: "/vorteile",
});

export default function VorteilePage() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Im Vertrieb", path: "/vorteile" }])} />
      <PageHero
        eyebrow="Im Vertrieb"
        blatt="V-01"
        title="Der Vertrieb arbeitet mit Live-Daten statt mit PDF."
        lead="Heute geht das PDF per Mail raus, und die Preisliste ist eine Woche alt. Mit dem Wohnungsfinder steht der aktuelle Stand auf der Projektseite — und Status, Anfragen und Zahlen liegen im Dashboard."
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="V-02" titel="Ansicht statt Anhang" />
          <div className="overlap-fassade" style={{ padding: 0 }}>
            <PlanFinder caption="Live-Status · direkt auf der Ansicht" />
            <div className="overlap-plate">
              <h2>Frei, reserviert, verkauft — direkt auf der Fassade.</h2>
              <p className="lead">
                Die Anfrage enthält die Wohnungsnummer. Pflege und Auswertung
                liegen im Dashboard, der Stand gilt auf jedem Kanal sofort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="V-03" titel="Vier Unterschiede im Alltag" />
          <div className="walk">
            {[
              { room: "Ansicht", title: "Online, sobald Modell und Bilder da sind", copy: "Keine Musterwohnung nötig. Modelle und Renderings machen wir, Grundrisse auch, wenn sie fehlen. Der Verkauf startet mit dem Plan, nicht mit dem Rohbau." },
              { room: "Anfrage", title: "Wohnung, Merkliste, bestätigte Mail", copy: "Gate vor dem Exposé, Pflichtfelder nach Ihrer Vorgabe, Suchagent und Preis-Alarm für alle, deren Wunschwohnung vergeben ist." },
              { room: "Dashboard", title: "Editor und Auswertung", copy: "Wohnungen pflegen, Einstellungen, Zahlen. Ein CRM wie onOffice kommt dazu, wenn Sie es anbinden — nicht, weil es fehlt." },
              { room: "Messung", title: "Ohne Cookie, ohne IP", copy: "Aufrufe, geöffnete Wohnungen, UTM bis zur Anfrage, Wochenbericht. Kein Banner über der Fassade." },
            ].map((row) => (
              <div key={row.room} className="walk-row">
                <p className="room">{row.room}</p>
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container" style={{ maxWidth: "58rem" }}>
          <SheetHead blatt="V-04" titel="Vergleich" />
          <h2>Was der Finder ersetzt.</h2>
          <div className="walk" style={{ marginTop: "2rem" }}>
            {[
              { room: "Eindruck", title: "Heute: PDF per Mail", copy: "Mit Finder: Fassade, Wohnung, 360° — im Browser des Käufers." },
              { room: "Besichtigung", title: "Heute: Termin nach Rohbau", copy: "Mit Finder: Besichtigung ab dem Rendering, rund um die Uhr." },
              { room: "Status", title: "Heute: Liste von letzter Woche", copy: "Mit Finder: frei, reserviert, verkauft — in der Ansicht, im Exposé, am QR." },
              { room: "Nachfassen", title: "Heute: Excel-Wiedervorlage", copy: "Mit Finder: Suchagent, Preis-Alarm, Board im Dashboard." },
            ].map((row) => (
              <div key={row.room} className="walk-row">
                <p className="room">{row.room}</p>
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/funktionen/lead-generierung" style={{ fontWeight: 700 }}>Anfragen und Gate</Link>
            {" · "}
            <Link href="/faq" style={{ fontWeight: 700 }}>FAQ</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
