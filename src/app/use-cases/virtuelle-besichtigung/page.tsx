import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "360°-Rundgang vor der Fertigstellung",
  description:
    "Virtuelle Besichtigung im Neubau: 360°-Panoramen aus dem 3D-Modell, verbundene Räume, Sprung zur Wohnung im Wohnungsfinder. Im Browser, ohne App — die Besichtigung, solange die Musterwohnung fehlt.",
  path: "/use-cases/virtuelle-besichtigung",
});

export default function VirtuelleBesichtigungPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "360°-Rundgang", path: "/use-cases/virtuelle-besichtigung" },
        ])}
      />
      <PageHero
        eyebrow="360°-Rundgang"
        blatt="A-10"
        title="Die Wohnung begehen, bevor sie gebaut ist."
        lead="Wer auf der Fassade eine Wohnung wählt, geht weiter: Wohnen, Küche, Loggia. Die Panoramen kommen aus unserem Modell, solange der Rohbau fehlt — und hängen an der Wohnungsnummer, nicht als separates Video irgendwo im Netz."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="A-11" titel="Standpunkt Wohnen" />
          <div className="overlap-interior" style={{ padding: 0 }}>
            <figure className="photo-frame overlap-interior-main">
              <img
                src="/photos/neubau-wohnen.jpg"
                alt="Wohnzimmer mit Blick auf die Süd-Loggia — Standpunkt im 360°-Rundgang"
                width={1536}
                height={1024}
              />
              <figcaption>
                <span>WE 2.03 · Wohnen</span>
                <span>360° · Standpunkt 1 von 4</span>
              </figcaption>
            </figure>
            <div className="overlap-plate">
              <h2>Raum für Raum, dieselbe Wohnungsnummer.</h2>
              <p className="lead">
                Standpunkt Wohnen, nächster Klick Küche, Blick zur Loggia. Im
                Finder hängt der Rundgang an der Einheit: Wer sich Wohnung 2.03
                ansieht und danach anfragt, kommt als Anfrage für 2.03 an.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="A-12" titel="So entsteht der Rundgang" />
          <div className="walk">
            {[
              { room: "Quelle", title: "Modell oder Fotografie", copy: "Neubau: Panorama aus unserem 3D-Modell, in derselben Qualität wie die Fassaden-Renderings. Bestand: Fotografie vor Ort. Vorhandenes Material bereiten wir auf." },
              { room: "Weg", title: "Verbundene Standpunkte", copy: "Wohnen, Küche, Bad, Loggia — die Räume sind verbunden, der Sprung zurück zur Etage oder zur Wohnung eingebaut. Kein Sackgassen-Panorama." },
              { room: "Gerät", title: "Browser, Desktop und Handy", copy: "Keine App, kein Plugin. Der Rundgang läuft überall dort, wo der Finder läuft — auch auf dem Tablet im Verkaufsbüro." },
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
      <CtaBand />
    </main>
  );
}
