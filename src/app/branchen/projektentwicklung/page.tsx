import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für die Projektentwicklung",
  description:
    "Quartier, Bauabschnitte, mehrere Häuser. Eine Datenpflege, mehrere Ansichten. OpenImmo und CRM.",
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
        title="Quartier, Abschnitte, eine Pflege."
        lead="Mehrere Häuser, mehrere Blickwinkel. Status und Preis an einer Stelle. Export nach OpenImmo."
        tone="blatt"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />

      <section className="overlap-licht border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht"
          width={1536}
          height={1024}
        />
        <div className="overlap-plate">
          <p className="measure">Quartier · Abschnitte</p>
          <h2>Mehrere Häuser, eine Pflege.</h2>
          <p className="lead" style={{ margin: 0 }}>
            Vogel, Straße, Hof. Dieselben WE, andere Kamera.
          </p>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Areal", title: "Häuser und Ansichten", copy: "Vogel, Straße, Hof. Dieselben WE, andere Kamera." },
            { room: "Abschnitt", title: "Nächster Baukörper", copy: "Projekt duplizieren. Preise und Status neu, Struktur bleibt." },
            { room: "Akte", title: "Bank und Vertrieb", copy: "Preisliste, OpenImmo, Anfrage ins CRM." },
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
