import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Exposé, Preisliste, QR",
  description:
    "Exposé nach Gate, Druckansicht aus Live-Daten, CSV/Excel, QR je WE, Verfügbarkeits-Widget.",
  path: "/funktionen/pdf-expose",
});

export default function PdfExpose() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Exposé und QR", path: "/funktionen/pdf-expose" },
        ])}
      />
      <PageHero
        eyebrow="Unterlagen"
        title="Dieselben Daten wie in der Ansicht."
        lead="PDF des Gestaltungsbüros oder Druck aus dem Finder. Gate davor. QR am Zaun in die WE."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />

      <section className="overlap-fence border-b">
        <img
          className="overlap-fence-bleed"
          src="/photos/neubau-bauzaun.jpg"
          alt="Bauzaun vor dem Neubau, Projekttafel am Brett"
          width={1536}
          height={1024}
        />
        <div className="container">
          <div className="overlap-plate">
            <span className="eyebrow">Baustelle</span>
            <h2>QR je Wohnung, am Brett.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Scan öffnet die WE. UTM am Zaun.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Gate", title: "Download nach Mail", copy: "Felder, Double-Opt-in. Jeder Download eine Anfrage." },
            { room: "Druck", title: "WE-Blatt aus Live-Daten", copy: "Preis, Fläche, Energie, Grundriss. Oder Ihr PDF unverändert." },
            { room: "Liste", title: "CSV und Excel", copy: "Synchron mit Status im Finder." },
            { room: "Zaun", title: "QR je Projekt und je WE", copy: "SVG. Widget „x von y frei“ ohne Preise." },
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
