import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Über uns: Immowoo Group GmbH, Grünwald",
  description:
    "Immowoo in Grünwald baut den Wohnungsfinder für den Vorverkauf: Modelle, Renderings, bei Bedarf Grundrisse, Software und Betrieb in Deutschland.",
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
        title="Software und Bilder für den Vorverkauf."
        lead="Immowoo Group GmbH. Wir bauen Modelle und Renderings, bei Bedarf die Grundrisse, und den Wohnungsfinder dazu. Hosting in Deutschland."
        tone="blatt"
        illustration={<FacadeFinder showLegend={false} />}
        measure={`${site.company.street} · ${site.company.zip} ${site.company.city}`}
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Bild", title: "Modell und Rendering", copy: "Wir erstellen die Modelle und die Bilder. Haben Sie schon Material, schicken Sie es uns — oft müssen wir es aufbereiten. Grundrisse machen wir bei Bedarf." },
            { room: "Finder", title: "Ein Finder pro Projekt", copy: "Fassade, Panorama, Gate. Einbettung oder eigene Domain. Kein zugekauftes White-Label." },
            { room: "Dashboard", title: "Editor und Auswertung", copy: "Wohnungen pflegen, Einstellungen, Zahlen. CRM nur, wenn Sie eines anbinden." },
            { room: "Betrieb", title: "Server in Deutschland", copy: "Messung ohne Cookie. Rollen, 2FA, Protokoll." },
          ].map((v) => (
            <div key={v.room} className="walk-row">
              <p className="room">{v.room}</p>
              <h3>{v.title}</h3>
              <p>{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-himmel border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Auftrag</span>
          <h2>Warum der Finder existiert.</h2>
          <p className="lead">
            Der Vertrieb läuft oft über PDF und Preisliste, während das Haus
            noch Zeichnung ist. Der Wohnungsfinder hängt die Wohnung in die Ansicht.
          </p>
          <p>
            Projekte und Zahlen:{" "}
            <Link href="/referenzen" style={{ fontWeight: 700, textDecoration: "underline" }}>Referenzen</Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
