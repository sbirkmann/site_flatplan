import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/icons";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder: Fassade, Etage, 360°",
  description:
    "Drehbare Ansicht aus der Rendering-Sequenz, Hotspots je WE, Etagengrundriss, 360°, Sonnenstand. Browser, ohne App.",
  path: "/funktionen/3d-grundrisse",
});

const faqs = [
  {
    q: "Welche Unterlagen braucht die Einrichtung?",
    a: "Für die drehbare Ansicht: Renderings, idealerweise als Rundum-Sequenz. Für die Etage: Grundriss je Geschoss und die Wohnungsliste (Fläche, Zimmer, Preis). Hotspots und Statusfarben richten wir ein.",
  },
  {
    q: "Geht es ohne Rendering?",
    a: "Ohne Bild keine Rundumansicht. Etage, Details, Merkliste und Anfragen laufen auch nur mit Grundrissen. Die 360°-Ansicht kommt nach, sobald die Sequenz da ist.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Liegen Sequenz, Grundrisse und Liste vor: wenige Tage, abhängig von WE und Ansichten. Preise und Status pflegen Sie danach selbst. Nächster Abschnitt: Projekt duplizieren.",
  },
  {
    q: "Läuft der Finder auf dem Handy?",
    a: "Im Browser, ohne App. Bilder in Desktop- und Mobilvariante. Optional PWA auf dem Homescreen. Touch für Drehen und Rundgang.",
  },
  {
    q: "Mehrere Ansichten desselben Hauses?",
    a: "Ja. Vogel, Straße, Hof, Abschnitte. Wechsel per Klick. Hotspots bleiben.",
  },
  {
    q: "Wie aktuell sind Status und Preis?",
    a: "Sofort. Reserviert oder verkauft ändert die Farbe in Fassade und Etage. Preis, Aktion, „auf Anfrage“ zentral.",
  },
  {
    q: "Woher kommen die 360°-Panoramen?",
    a: "Bestand: Fotografie. Neubau: Panorama aus dem Studio. Standpunkte verbunden, POI zur WE oder Galerie.",
  },
  {
    q: "Einbindung in die eigene Seite?",
    a: "Link, Einbettung oder eigene Domain. QR je Projekt und je WE. Widget zur Zahl der freien Einheiten. Siehe CRM und Schnittstellen.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WohnungsfinderPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Wohnungsfinder", path: "/funktionen/3d-grundrisse" },
        ])}
      />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Wohnungsfinder"
        title="Fassade, Etage, Rundgang."
        lead="Sequenz des Studios wird zur Ansicht. Klick auf die Loggia öffnet die WE. Browser, ohne App."
        tone="licht"
        illustration={<FacadeFinder />}
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 650, textDecoration: "underline", textUnderlineOffset: 4 }}>Laufendes Objekt</a>
          </>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Fassade", title: "Hotspot auf dem Rendering", copy: "Polygon je WE. Farbe frei, reserviert, verkauft. Zoom in die Ansicht." },
            { room: "Etage", title: "Grundriss statt PDF-Stapel", copy: "Pins je Geschoss. Fläche, Anrechnung Balkon, Energie, Fertigstellung." },
            { room: "360°", title: "Standpunkt in der WE", copy: "WebGL-Panorama, verbundene Räume, POI. Blickstatistik, wenn gewünscht." },
            { room: "Licht", title: "Sonnenstand mit Nordwinkel", copy: "Regler über den Tag. Schatten auf Fassade und Loggia." },
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
        <div className="container max-w-3xl">
          <span className="eyebrow">Fragen</span>
          <h2 className="mb-8">Einrichtung und Betrieb.</h2>
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
