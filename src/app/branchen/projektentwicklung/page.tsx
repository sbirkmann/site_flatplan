import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für die Projektentwicklung",
  description:
    "Wohnungsfinder für Quartiere und Bauabschnitte: mehrere Häuser in einem Finder, Status und Preise an einer Stelle gepflegt. OpenImmo für die Portale, Dashboard für Editor und Auswertung.",
  path: "/branchen/projektentwicklung",
});

export default function ProjektentwicklungPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Projektentwicklung", path: "/branchen/projektentwicklung" },
        ])}
      />
      <PageHero
        eyebrow="Projektentwicklung"
        blatt="B-20"
        title="Mehrere Häuser, mehrere Abschnitte — an einer Stelle gepflegt."
        lead="Ein Quartier hat mehrere Häuser und mehrere Bauabschnitte. Status und Preise pflegen Sie trotzdem nur an einer Stelle, jeder Abschnitt bekommt seine Ansichten. Für die Portale liefern wir OpenImmo-XML."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Quartier im Abendlicht — mehrere Häuser, ein Finder"
          width={1536}
          height={1024}
        />
        <div className="container section-sm">
          <SheetHead blatt="B-21" titel="Quartiersansicht" />
          <div style={{ maxWidth: "42rem" }}>
            <h2>Ein Quartier, mehrere Kamerapositionen.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Vogel, Straße, Hof: dieselben Wohnungen, andere Kamera. Ein
              Finder für das ganze Bauvorhaben — oder getrennte Finder je
              Abschnitt, wenn Sie so verkaufen.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="B-22" titel="Struktur für Quartiere" />
          <div className="walk">
            {[
              { room: "Areal", title: "Häuser und Ansichten", copy: "Jedes Haus bekommt seine Ansichten — Vogelperspektive, Straßenraum, Hofseite. Die Wohnungen bleiben dieselben Datensätze, egal aus welcher Kamera man sie öffnet." },
              { room: "Abschnitt", title: "Der nächste Baukörper", copy: "Struktur übernehmen, Preise und Status neu setzen. Getrennte Finder, wenn Abschnitte getrennt vermarktet werden — eine Verwaltung bleibt es trotzdem." },
              { room: "Akte", title: "Bank und Vertrieb im Blick", copy: "Preisliste, Auswertung und OpenImmo-Export aus dem Dashboard. Die Vorverkaufsquote je Abschnitt lesen Sie ab, statt sie zusammenzusuchen." },
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
        <div className="container max-w-3xl">
          <SheetHead blatt="B-23" titel="Rollen im Team" />
          <h2>Wer darf was — je Haus, je Abschnitt.</h2>
          <p className="lead">
            Entwicklung, Vertrieb, externe Makler: Über Rollen steuern Sie, wer
            Preise ändert, wer nur Anfragen sieht und wer liest. Jede Änderung
            steht im Protokoll — bei 500 Einheiten über drei Abschnitte ist das
            kein Luxus, sondern die Voraussetzung.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
