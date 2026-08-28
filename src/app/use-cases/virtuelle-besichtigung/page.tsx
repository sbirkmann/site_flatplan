import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "360°-Rundgang vor der Fertigstellung",
  description:
    "Virtuelle Besichtigung im Neubau: 360°-Panoramen aus dem Modell, verbundene Räume, Sprung zur Wohnung im Wohnungsfinder. Im Browser, ohne App.",
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
        title="360° in der Wohnung — ohne Musterwohnung."
        lead="Wer auf der Fassade eine Wohnung wählt, geht weiter: Wohnen, Küche, Loggia. Die Panoramen kommen aus unserem Modell, solange der Rohbau fehlt."
        tone="himmel"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
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
            <h2>Raum für Raum, dieselbe Wohnungsnummer.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Standpunkt Wohnen, nächster Klick Küche, Blick zur Loggia. Im Finder hängt der Rundgang an der WE, nicht als separates Video.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Quelle", title: "Modell oder Fotografie", copy: "Neubau: Panorama aus unserem Modell. Bestand: Aufnahme vor Ort. Vorhandenes Material bereiten wir auf." },
            { room: "Weg", title: "Verbundene Standpunkte", copy: "Wohnen, Küche, Bad, Loggia. Sprung zur Etage oder zur Wohnung." },
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
