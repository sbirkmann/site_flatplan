import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Exposé, Preisliste, QR am Bauzaun",
  description:
    "Exposé nach Gate, Druckansicht aus Live-Daten, CSV und Excel, QR-Code je Wohnung am Bauzaun. Dieselben Daten wie im Wohnungsfinder.",
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
        title="Exposé, Preisliste und QR aus denselben Daten."
        lead="Entweder Sie liefern das gestaltete PDF, oder wir erzeugen das Wohnungsblatt aus den Live-Daten. Davor liegt das Exposé-Gate. Der QR-Code am Bauzaun öffnet genau die Wohnung, vor der jemand steht."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
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
            <h2>QR-Code am Bauzaun, eine Wohnung pro Code.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Der Scan öffnet genau diese Wohnung. UTM am Link, damit Sie den Zaun zählen können.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Gate", title: "Download nach Mail", copy: "Felder, Double-Opt-in. Jeder Download ist eine Anfrage." },
            { room: "Druck", title: "Wohnungsblatt aus Live-Daten", copy: "Preis, Fläche, Energie, Grundriss. Oder Ihr PDF unverändert." },
            { room: "Liste", title: "CSV und Excel", copy: "Synchron mit Status im Finder." },
            { room: "Zaun", title: "QR je Projekt und je Wohnung", copy: "Als SVG. Auf der Seite: „x von y frei“, ohne Preise." },
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
