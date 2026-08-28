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
    "Vorverkauf ab dem Rendering. Status frei, reserviert, verkauft. Warteliste, Gate, OpenImmo. Quote für die Bank.",
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
        title="Vorverkauf, sobald die Renderings da sind."
        lead="Die Bank will Quote. Käufer wollen die WE sehen. Der Finder hängt Status und Preis in die Fassade."
        tone="licht"
        illustration={<FacadeFinder showLegend={false} />}
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Quote", title: "30–50 % vor dem Baustart", copy: "Übliche Bankvorgabe. Jede Woche ohne Ansicht verlängert die Zwischenfinanzierung." },
            { room: "Status", title: "Frei, demnächst, reserviert, verkauft", copy: "Farbe in der Fassade und auf der Etage. Keine telefonische Klärung einer schon gehaltenen WE." },
            { room: "Start", title: "Warteliste vor dem Launch", copy: "Seite mit Countdown, Double-Opt-in. Am Starttag die bestätigte Liste." },
            { room: "Export", title: "Preisliste und OpenImmo", copy: "CSV, Excel, OpenImmo-XML. Dieselben Daten wie in der Ansicht." },
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
