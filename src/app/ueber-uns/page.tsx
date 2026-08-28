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
    "Immowoo in Grünwald. Wohnungsfinder für den Neubauvertrieb. Software und Betrieb in Deutschland.",
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
        title="Software für den Vorverkauf. Kein Portal."
        lead="Immowoo Group GmbH. Viewer, Anfragen, Schnittstellen. Hosting in Deutschland."
        tone="blatt"
        illustration={<FacadeFinder showLegend={false} />}
        measure={`${site.company.street} · ${site.company.zip} ${site.company.city}`}
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Software", title: "Viewer und Schnittstellen", copy: "Fassade, Panorama, Gate, CRM. Kein zugekauftes White-Label." },
            { room: "Bild", title: "Ihre Renderings", copy: "Das Visualisierungsstudio liefert die Sequenz. Wir legen Hotspots und Etagen." },
            { room: "Vertrieb", title: "Ablauf aus dem Büro", copy: "Status, Preis, Anfrage. Was Bauträger und Makler täglich brauchen." },
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
            Der Vertrieb läuft oft über PDF und Preisliste, während das Objekt
            noch Zeichnung ist. Der Finder hängt die WE in die Ansicht.
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
