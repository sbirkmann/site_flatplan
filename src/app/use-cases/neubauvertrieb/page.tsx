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
    "Wohnungsfinder im Vorverkauf, Schritt für Schritt: Modell und Rendering, Finder auf der Projektseite, Anfragen im Dashboard. CRM-Anbindung optional.",
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
        title="Vom Modell bis zur Anfrage."
        lead="Wir bauen Modell und Renderings, bei Bedarf die Grundrisse. Daraus wird der Wohnungsfinder für dieses Bauvorhaben. Anfragen liegen im Dashboard. CRM ist optional."
        tone="licht"
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
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
            <h2>Material, Finder, Dashboard.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Wohnungen auf der Fassade. Anfrage mit Wohnungsnummer. Status und Zahlen im Dashboard.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Material", title: "Modell, Rendering, Grundriss", copy: "Von uns, oder aus Ihrem Bestand — dann bereiten wir es auf." },
            { room: "Start", title: "Warteliste, falls der Start später liegt", copy: "Countdown, Double-Opt-in. Mail am Launch-Tag." },
            { room: "Kanal", title: "UTM, QR, Inserat", copy: "Dieselbe Wohnung, egal woher der Klick kommt." },
            { room: "Anfrage", title: "Bezug zur Wohnung", copy: "Merkliste, Gate, Board im Dashboard. CRM nur auf Wunsch." },
            { room: "Zahl", title: "Auswertung", copy: "Aufrufe, geöffnete Wohnungen, Conversion je UTM. Im Dashboard, ohne Cookie." },
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
