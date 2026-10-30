import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Makler im Neubauvertrieb",
  description:
    "Wohnungsfinder für Immobilienmakler: das Argument für den Alleinauftrag im Neubau. Fassade, Grundriss, Anfrage mit Wohnungsnummer. Dashboard, optional onOffice. Marke des Bauträgers oder Ihres Büros.",
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
        blatt="B-10"
        title="Was Sie dem Bauträger im Pitch vorlegen."
        lead="Bauträger vergleichen, wer den Vorverkauf führen kann. Sie bringen den Wohnungsfinder mit — auf der Projektseite oder unter eigener Domain, in der Marke des Bauträgers oder in Ihrer. Damit ist das Mandat kein Versprechen mehr, sondern eine Ansicht."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="B-11" titel="Mandat und Betrieb" />
          <div className="overlap-fassade" style={{ padding: 0 }}>
            <figure className="photo-frame">
              <img src="/photos/neubau-wohnen.jpg" alt="Wohnzimmer im Neubau mit Blick auf die Süd-Loggia" width={1536} height={1024} />
              <figcaption>
                <span>WE 2.03 · Wohnen</span>
                <span>Ansicht aus dem Finder</span>
              </figcaption>
            </figure>
            <div className="overlap-plate">
              <h2>Dieselbe Ansicht am Tisch und am Zaun.</h2>
              <p className="lead">
                Jedes Mandat hat seinen eigenen Finder. Im Verkaufsgespräch
                öffnen Sie die Wohnung auf dem Tablet, der Interessent am
                Bauzaun scannt denselben Stand auf dem Handy.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Die Anfrage kommt mit Wohnungsnummer ins Dashboard — Sie
                rufen zurück und wissen, welche Einheit, welche Etage, welcher
                Preis. Kein „Interesse am Objekt“, kein Rätselraten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="B-12" titel="Drei Gründe für das Büro" />
          <div className="walk">
            {[
              { room: "Mandat", title: "Ein Projekt, ein Finder", copy: "Marke des Bauträgers oder des Büros, eigene Domain je Projekt, wenn gewünscht. Der Finder ist Ihr Nachweis, dass Sie Neubau können." },
              { room: "Anfrage", title: "Die Wohnung im Datensatz", copy: "Merkliste, Exposé-Gate, Board im Dashboard. onOffice, Propstack oder Flowfact binden wir an, wenn das Büro eines nutzt — Pflicht ist es nicht." },
              { room: "Büro", title: "Kein zweites Portal", copy: "Dieselbe Ansicht am Tisch, am Bauzaun und auf dem Handy. Wenige Leute, ein Gerät, kein Medienbruch zwischen Pitch und Besichtigung." },
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
