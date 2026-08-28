import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Ablauf im Neubauvertrieb",
  description:
    "Rendering, Warteliste, Ansicht, Anfrage, CRM, Auswertung. Der Finder im Vorverkauf, Schritt für Schritt.",
  path: "/use-cases/neubauvertrieb",
});

export default function NeubauvertriebPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Neubauvertrieb", path: "/use-cases/neubauvertrieb" },
        ])}
      />
      <PageHero
        eyebrow="Ablauf"
        title="Vom Rendering bis zur Akte."
        lead="Ansicht aus der Sequenz. Anfrage mit WE. Übergabe nach onOffice, Propstack oder Flowfact."
        tone="licht"
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
            <Link href="/features" className="btn btn-outline btn-lg">Überblick</Link>
          </>
        }
      />
      <section className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder showLegend={false} />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Ablauf</span>
            <h2>Rendering, Liste, Ansicht.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Hotspots auf der Fassade. Anfrage mit WE. Dann das CRM.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Unterlage", title: "Sequenz und Wohnungsliste", copy: "Hotspots auf der Fassade. Etage, Preis, Status aus Ihrer Liste." },
            { room: "Start", title: "Warteliste, falls der Start später liegt", copy: "Countdown, Double-Opt-in. Mail am Launch-Tag." },
            { room: "Kanal", title: "UTM, QR, Inserat", copy: "Dieselbe WE, egal woher der Klick kommt." },
            { room: "Anfrage", title: "Bezug zur Wohnung", copy: "Merkliste, Gate, Board. Dann CRM." },
            { room: "Zahl", title: "Auswertung", copy: "Aufrufe, geöffnete WE, Conversion je UTM. Ohne Cookie." },
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
