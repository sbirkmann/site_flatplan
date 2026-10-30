import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";

export const metadata: Metadata = pageMetadata({
  title: "Über uns: Immowoo Group GmbH, Grünwald",
  description:
    "Die Immowoo Group GmbH in Grünwald baut den Wohnungsfinder für den Neubau-Vorverkauf: 3D-Modelle, Renderings, Grundrisse, Software und Betrieb — Hosting in Deutschland.",
  path: "/ueber-uns",
});

export default function UeberUns() {
  return (
    <main>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "AboutPage", name: "Über uns | flatplan.de", url: `${site.url}/ueber-uns`, about: { "@id": `${site.url}/#organization` } },
          breadcrumbs([{ name: "Start", path: "/" }, { name: "Über uns", path: "/ueber-uns" }]),
        ]}
      />
      <PageHero
        eyebrow={`${site.company.brand} · Grünwald`}
        blatt="Ü-01"
        title="Software und Bilder für den Vorverkauf."
        lead="Immowoo Group GmbH, Grünwald bei München. Wir bauen die 3D-Modelle und Renderings, bei Bedarf die Grundrisse — und den Wohnungsfinder dazu. Entwicklung und Hosting in Deutschland."
        measure={`${site.company.street} · ${site.company.zip} ${site.company.city}`}
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="Ü-02" titel="Vier Gewerke aus einer Hand" />
          <div className="walk">
            {[
              { room: "Bild", title: "Modell und Rendering", copy: "Wir erstellen die 3D-Modelle und die Bilder. Haben Sie schon Material, schicken Sie es uns — oft müssen wir es aufbereiten. Grundrisse machen wir bei Bedarf." },
              { room: "Finder", title: "Ein Finder pro Projekt", copy: "Fassade, Panorama, Exposé-Gate. Einbettung oder eigene Domain. Kein zugekauftes White-Label — wir kennen jede Zeile." },
              { room: "Dashboard", title: "Editor und Auswertung", copy: "Wohnungen pflegen, Einstellungen, Zahlen. CRM-Anbindung, wenn Sie eines nutzen; Webhook, REST und OpenImmo ohnehin." },
              { room: "Betrieb", title: "Server in Deutschland", copy: "Messung ohne Cookie, Rollen, Zwei-Faktor-Anmeldung, Änderungsprotokoll, tägliche Sicherung." },
            ].map((v) => (
              <div key={v.room} className="walk-row">
                <p className="room">{v.room}</p>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <SheetHead blatt="Ü-03" titel="Auftrag" />
          <h2>Warum wir den Finder gebaut haben.</h2>
          <p className="lead">
            Der Vertrieb läuft oft über PDF und Preisliste, während das Haus
            noch Zeichnung ist. Wir kommen aus dem Rendering — und haben das
            Werkzeug gebaut, das die Wohnung in die Ansicht hängt.
          </p>
          <p>
            Projekte und Zahlen:{" "}
            <Link href="/referenzen" style={{ fontWeight: 700 }}>Referenzen</Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
