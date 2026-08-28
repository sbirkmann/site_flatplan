import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/icons";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder: Fassade, Grundriss, 360°",
  description:
    "3D-Wohnungsfinder für den Vorverkauf: Fassade mit Wohnungen, Etagengrundriss, 360°-Rundgang, Sonnenstand. Modelle, Renderings und bei Bedarf Grundrisse von Immowoo. Im Browser, ohne App.",
  path: "/funktionen/3d-grundrisse",
});

const faqs = [
  {
    q: "Welche Unterlagen braucht die Einrichtung?",
    a: "Zum Start reicht die Wohnungsliste (Fläche, Zimmer, Preis). Modelle und Renderings erstellen wir. Grundrisse machen wir bei Bedarf. Haben Sie schon Pläne oder Bilder, schicken Sie sie uns — oft müssen wir sie aufbereiten.",
  },
  {
    q: "Geht es ohne Rendering?",
    a: "Für die Fassadenansicht brauchen wir Bilder. Die machen wir, oder wir bereiten Ihre auf. Etage, Details, Merkliste und Anfragen laufen auch mit Grundrissen; den Rundgang hängen wir an, sobald die Bilder da sind.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Sobald Modell, Bilder, Grundrisse und Liste stehen: wenige Tage, abhängig von WE und Ansichten. Preise und Status pflegen Sie danach selbst.",
  },
  {
    q: "Läuft der Finder auf dem Handy?",
    a: "Im Browser, ohne App. Bilder in Desktop- und Mobilvariante. Optional als PWA auf dem Homescreen.",
  },
  {
    q: "Mehrere Ansichten desselben Hauses?",
    a: "Ja. Vogel, Straße, Hof, Abschnitte. Wechsel per Klick. Die Wohnungen bleiben dieselben. Es bleibt ein Finder für dieses Bauvorhaben.",
  },
  {
    q: "Wie aktuell sind Status und Preis?",
    a: "Sofort. Reserviert oder verkauft ändert die Farbe in Fassade und Etage. Preis, Aktion und „auf Anfrage“ zentral.",
  },
  {
    q: "Woher kommen die 360°-Panoramen?",
    a: "Neubau: aus unserem Modell. Bestand: Fotografie vor Ort. Standpunkte verbunden, Sprung zur Wohnung oder Galerie.",
  },
  {
    q: "Einbindung in die eigene Seite?",
    a: "Einbettung, Link oder eigene Domain. QR je Projekt und je Wohnung. Auf der Projektseite kann die Zahl der freien Einheiten stehen, ohne Preise.",
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
        lead="Klick auf die Loggia öffnet die Wohnung: Grundriss, Preis, frei oder verkauft. Modelle und Renderings machen wir; vorhandenes Material bereiten wir auf. Grundrisse auch, wenn sie fehlen."
        tone="licht"
        illustration={<FacadeFinder />}
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 650, textDecoration: "underline", textUnderlineOffset: 4 }}>Projekt ansehen</a>
          </>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Fassade", title: "Wohnung auf dem Rendering", copy: "Fläche je WE. Farbe frei, reserviert, verkauft. Zoom in die Ansicht." },
            { room: "Etage", title: "Grundriss je Geschoss", copy: "Pins je Wohnung. Fläche, Anrechnung Balkon, Energie, Fertigstellung. Pläne von uns oder aus Ihrem Bestand." },
            { room: "360°", title: "Standpunkt in der Wohnung", copy: "Panorama, verbundene Räume. Blickstatistik, wenn gewünscht." },
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
