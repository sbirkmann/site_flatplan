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
    "Wohnungsfinder für Makler im Neubauvertrieb. Argument für den Alleinauftrag: Fassade, Grundriss, Anfrage mit Wohnungsnummer. Dashboard, optional onOffice. Marke des Bauträgers oder des Büros.",
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
        title="Was Sie dem Bauträger im Pitch vorlegen."
        lead="Bauträger vergleichen, wer den Vorverkauf führen kann. Sie bringen den Wohnungsfinder mit — auf der Projektseite oder unter eigener Domain, in seiner Marke oder in Ihrer."
        tone="himmel"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
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
              Jedes Projekt hat seinen eigenen Finder. Die Anfrage kommt mit Wohnungsnummer ins Dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Mandat", title: "Ein Projekt, ein Finder", copy: "Marke des Bauträgers oder des Büros. Eigene Domain je Projekt, wenn gewünscht." },
            { room: "Anfrage", title: "Wohnung im Datensatz", copy: "Merkliste, Gate, Board im Dashboard. CRM nur, wenn das Büro eines nutzt." },
            { room: "Büro", title: "Kein zweites Portal", copy: "Dieselbe Ansicht am Tisch und am Bauzaun. Wenige Leute, ein Gerät." },
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
