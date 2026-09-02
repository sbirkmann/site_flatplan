import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Bauträger",
  description:
    "Vorverkauf mit Wohnungsfinder: Status frei, reserviert, verkauft auf der Fassade. Quote für die Bank, bevor der Rohbau steht. Dashboard, OpenImmo. Modelle und Renderings von Immowoo.",
  path: "/branchen/bautraeger",
});

export default function BautraegerPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Bauträger", path: "/branchen/bautraeger" },
        ])}
      />
      <PageHero
        eyebrow="Bauträger"
        title="Vorverkauf, bevor der Rohbau steht."
        lead="Die Bank verlangt eine Vorverkaufsquote, die Käufer wollen die Wohnung sehen — beides, bevor der erste Stein liegt. Modelle und Renderings erstellen wir, die Grundrisse ebenfalls, wenn sie fehlen. Jedes Bauvorhaben bekommt seinen eigenen Wohnungsfinder."
        tone="licht"
        illustration={<FacadeFinder showLegend={false} />}
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Quote", title: "30–50 % vor dem Baustart", copy: "Übliche Bankvorgabe. Jede Woche ohne Ansicht verlängert die Zwischenfinanzierung." },
            { room: "Status", title: "Frei, reserviert, verkauft", copy: "Farbe in der Fassade und auf der Etage. Im Dashboard setzen Sie den Stand selbst." },
            { room: "Start", title: "Warteliste vor dem Launch", copy: "Seite mit Countdown, Double-Opt-in. Am Starttag die bestätigte Liste." },
            { room: "Export", title: "Preisliste und OpenImmo", copy: "CSV, Excel, OpenImmo-XML. Dieselben Daten wie im Finder. CRM nur, wenn Sie eines anbinden." },
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
