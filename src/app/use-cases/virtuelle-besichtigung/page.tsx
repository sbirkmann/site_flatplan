import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "360° im ungebauten Objekt",
  description:
    "Panorama-Standpunkte in der Wohnung, die noch nicht steht. Verbundene Räume, POI zur WE. Browser, ohne App.",
  path: "/use-cases/virtuelle-besichtigung",
});

export default function VirtuelleBesichtigungPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "360°", path: "/use-cases/virtuelle-besichtigung" },
        ])}
      />
      <PageHero
        eyebrow="360°"
        title="Standpunkt, solange der Estrich fehlt."
        lead="Gerenderte oder fotografierte Panoramen. Wechsel in den nächsten Raum. Sprung zur WE."
        tone="himmel"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />
      <section className="overlap-stage bg-white border-b">
        <div className="container overlap-interior">
          <figure className="photo-frame overlap-interior-main">
            <img
              src="/photos/neubau-wohnen.jpg"
              alt="Unmöbliertes Wohnzimmer, Blick auf die Süd-Loggia"
              width={1536}
              height={1024}
            />
            <figcaption>WE 2.03 · Wohnen</figcaption>
          </figure>
          <div className="overlap-plate">
            <span className="eyebrow">360°</span>
            <h2>Standpunkt, solange der Estrich fehlt.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Panorama, nächster Raum, Blick zur Loggia.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Quelle", title: "Studio oder Fotografie", copy: "Neubau: Panorama aus der Visualisierung. Bestand: Aufnahme vor Ort." },
            { room: "Weg", title: "Verbundene Standpunkte", copy: "Wohnen, Küche, Bad, Loggia. POI zur Etage oder zur WE." },
            { room: "Gerät", title: "Browser", copy: "Desktop und Handy. Keine App." },
          ].map((row) => (
            <div key={row.room} className="walk-row">
              <p className="room">{row.room}</p>
              <h3>{row.title}</h3>
              <p>{row.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
