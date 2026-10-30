import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "@/components/icons";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import SheetHead from "@/components/plan/SheetHead";
import ShotSlot from "@/components/plan/ShotSlot";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder: Fassade, 3D-Grundriss, 360°",
  description:
    "3D-Wohnungsfinder für den Neubau-Vorverkauf: Wohnungen auf der Fassade wählen, Etagengrundriss, 360°-Rundgang, Sonnenstands-Simulation. Modelle und Renderings von Immowoo. Im Browser, ohne App.",
  path: "/funktionen/3d-grundrisse",
});

const faqs = [
  {
    q: "Welche Unterlagen braucht die Einrichtung?",
    a: "Zum Start reicht die Wohnungsliste mit Fläche, Zimmer und Preis. Modelle und Renderings erstellen wir, Grundrisse machen wir bei Bedarf. Haben Sie schon Pläne oder Bilder, schicken Sie sie uns — oft müssen wir sie aufbereiten.",
  },
  {
    q: "Geht es ohne Rendering?",
    a: "Für die Fassadenansicht brauchen wir Bilder — die machen wir, oder wir bereiten Ihre auf. Etage, Details, Merkliste und Anfragen laufen auch mit Grundrissen; den Rundgang hängen wir an, sobald die Bilder da sind.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Sobald Modell, Bilder, Grundrisse und Liste stehen: wenige Tage, abhängig von Zahl der Einheiten und Ansichten. Preise und Status pflegen Sie danach selbst.",
  },
  {
    q: "Läuft der Finder auf dem Handy?",
    a: "Im Browser, ohne App. Bilder liegen in Desktop- und Mobilvariante vor. Optional als PWA auf dem Homescreen, etwa im Verkaufsbüro.",
  },
  {
    q: "Mehrere Ansichten desselben Hauses?",
    a: "Ja: Vogelperspektive, Straße, Hof, Bauabschnitte — Wechsel per Klick, die Wohnungen bleiben dieselben. Es bleibt ein Finder für das Bauvorhaben.",
  },
  {
    q: "Wie aktuell sind Status und Preis?",
    a: "Sofort. Reserviert oder verkauft ändert Farbe und Schraffur in Fassade und Etage. Preis, Aktion und „auf Anfrage“ steuern Sie zentral im Dashboard.",
  },
  {
    q: "Woher kommen die 360°-Panoramen?",
    a: "Im Neubau aus unserem Modell, im Bestand aus Fotografie vor Ort. Standpunkte sind verbunden, der Sprung zur Wohnung oder Galerie eingebaut.",
  },
  {
    q: "Einbindung in die eigene Seite?",
    a: "Einbettung per iframe, Link oder eigene Domain. QR-Codes je Projekt und je Wohnung. Auf Ihrer Projektseite kann auch nur die Zahl der freien Einheiten stehen, ganz ohne Preise.",
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
        blatt="F-10"
        title="Von der Fassade in die Wohnung, in zwei Klicks."
        lead="Der Klick auf die Loggia öffnet die Wohnung: Grundriss, Preis, frei oder verkauft. Modelle und Renderings machen wir; vorhandenes Material bereiten wir auf — Grundrisse auch, wenn sie fehlen."
        illustration={<PlanFinder />}
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">Live-Projekt öffnen</a>
          </>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-11" titel="Vier Ebenen der Ansicht" />
          <div className="walk">
            {[
              { room: "Fassade", title: "Die Wohnung auf dem Rendering", copy: "Eine Fläche je Einheit, Farbe und Schraffur für frei, reserviert, verkauft. Zoom in die Ansicht, Wechsel zwischen Süd, Hof und Vogelperspektive." },
              { room: "Etage", title: "Grundriss je Geschoss", copy: "Pins je Wohnung: Fläche, Balkon-Anrechnung, Energieklasse, Fertigstellung. Pläne von uns oder aus Ihrem Bestand, aufbereitet in einem Strichbild." },
              { room: "360°", title: "Standpunkt in der Wohnung", copy: "Panorama mit verbundenen Räumen, vom Wohnen auf die Loggia. Blickstatistik, wenn Sie wissen wollen, was Interessenten anschauen." },
              { room: "Licht", title: "Sonnenstand mit Nordwinkel", copy: "Regler über Tag und Jahr. Der Schatten liegt auf Fassade und Loggia, bevor der erste Stein steht." },
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

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="F-12" titel="Grundriss-Ansicht" />
          <div className="plan-split">
            <ShotSlot label="Wohnungsfinder · Etagenansicht" note="Screenshot folgt — Platzhalter" />
            <div>
              <h2>Die Etage für Einheiten, die man nicht sieht.</h2>
              <p className="lead">
                Innenliegende Wohnungen, Staffelgeschosse, das Dach: Was auf der
                Fassade keine Fläche hat, bekommt seinen Pin im Etagengrundriss.
                Gleiche Daten, gleicher Status, gleiche Anfrage — nur eine
                zweite Ansicht desselben Plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container max-w-3xl">
          <SheetHead blatt="F-13" titel="Einrichtung und Betrieb" />
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
