import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Exposé, Preisliste und QR-Code am Bauzaun",
  description:
    "Exposé-Generator nach Gate, Druckansicht und Preisliste aus Live-Daten, CSV- und Excel-Export, QR-Code je Wohnung am Bauzaun. Dieselben Daten wie im Wohnungsfinder — ein Stand für Papier und Bildschirm.",
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
        blatt="F-30"
        title="Exposé, Preisliste und QR aus denselben Daten."
        lead="Entweder Sie liefern das gestaltete PDF, oder wir erzeugen das Wohnungsblatt aus den Live-Daten. Davor liegt das Exposé-Gate. Der QR-Code am Bauzaun öffnet genau die Wohnung, vor der jemand steht."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="border-b">
        <img
          className="overlap-fence-bleed"
          src="/photos/neubau-bauzaun.jpg"
          alt="Bauzaun vor dem Neubau, Projekttafel mit QR-Code"
          width={1536}
          height={1024}
        />
        <div className="container section-sm">
          <SheetHead blatt="F-31" titel="Digitaler Bauzaun" />
          <div style={{ maxWidth: "42rem" }}>
            <h2>QR-Code am Bauzaun, eine Wohnung pro Code.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Der Scan öffnet genau diese Wohnung — nicht die Projektseite, aus
              der man sich wieder verabschiedet. UTM am Link, damit Sie am Ende
              zählen können, was der Zaun gebracht hat.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-32" titel="Vier Ausgaben, ein Stand" />
          <div className="walk">
            {[
              { room: "Gate", title: "Download nach bestätigter Mail", copy: "Pflichtfelder, Double-Opt-in, Nachweis. Jeder Download ist eine Anfrage mit Wohnungsnummer — das Papier arbeitet für den Vertrieb." },
              { room: "Druck", title: "Wohnungsblatt aus Live-Daten", copy: "Preis, Fläche, Energie, Grundriss — erzeugt aus dem aktuellen Stand. Oder Ihr gestaltetes PDF, unverändert hinterlegt." },
              { room: "Liste", title: "Preisliste als CSV und Excel", copy: "Synchron mit dem Status im Finder. Wer die Liste druckt, druckt den heutigen Stand, nicht den von letzter Woche." },
              { room: "Zaun", title: "QR je Projekt und je Wohnung", copy: "Als SVG in beliebiger Größe, druckfest. Auf der Seite steht „x von y frei“ — ganz ohne Preise, wenn Sie das so wollen." },
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
