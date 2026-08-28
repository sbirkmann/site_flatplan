import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Makler",
  description:
    "Neubau als Mandat: Ansicht, Anfrage mit WE, Übergabe ins CRM. Was das Büro dem Bauträger vorlegt.",
  path: "/branchen/immobilienmakler",
});

export default function ImmobilienmaklerPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Makler", path: "/branchen/immobilienmakler" },
        ])}
      />
      <PageHero
        eyebrow="Makler"
        title="Das Mandat ist die Ansicht, nicht die Mappe."
        lead="Bauträger vergleichen, wer den Vorverkauf führen kann. Der Finder ist die Fläche, die Sie mitbringen."
        tone="himmel"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />

      <section className="overlap-stage bg-white border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <img src="/photos/neubau-wohnen.jpg" alt="Unmöbliertes Wohnzimmer, Blick auf die Süd-Loggia" width={1536} height={1024} />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Mandat</span>
            <h2>Dieselbe Ansicht am Tisch und am Zaun.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Marke des Bauträgers oder des Büros. Domain je Objekt. Anfrage mit WE.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Mandat", title: "Ein Objekt, ein Finder", copy: "Marke des Bauträgers oder des Büros. Domain je Projekt." },
            { room: "Anfrage", title: "WE im Datensatz", copy: "Merkliste, Gate, onOffice, Propstack oder Flowfact." },
            { room: "Büro", title: "Wenige Leute, klares Gerät", copy: "Kein zweites Portal. Dieselbe Ansicht am Tisch und am Bauzaun." },
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
