import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import AblaufPlan from "@/components/plan/AblaufPlan";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Ablauf im Neubauvertrieb mit Wohnungsfinder",
  description:
    "Der Wohnungsfinder im Vorverkauf, Schritt für Schritt: 3D-Modell und Renderings, Finder auf der Projektseite oder eigener Domain, Anfragen mit Wohnungsnummer im Dashboard. CRM-Anbindung optional.",
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
        blatt="A-01"
        title="Vom Modell bis zur Anfrage."
        lead="Wir bauen 3D-Modell und Renderings, bei Bedarf die Grundrisse. Daraus wird der Wohnungsfinder für dieses Bauvorhaben — auf Ihrer Projektseite oder unter eigener Domain. Anfragen liegen im Dashboard, ein CRM ist optional."
        illustration={<PlanFinder />}
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
            <Link href="/features" className="link-arrow">Funktionsüberblick</Link>
          </>
        }
      />

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="A-02" titel="Ablaufplan" />
          <h2 className="mb-8">Drei Stationen, drei Wochen.</h2>
          <AblaufPlan />
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="A-03" titel="Der Weg einer Anfrage" />
          <div className="walk">
            {[
              { room: "Material", title: "Modell, Rendering, Grundriss", copy: "Von uns erstellt oder aus Ihrem Bestand aufbereitet. Pläne, CAD, Fotos — wir sagen Ihnen nach der ersten Sichtung ehrlich, was verwertbar ist." },
              { room: "Start", title: "Warteliste, falls der Start später liegt", copy: "Countdown und Double-Opt-in auf der Projektseite. Am Launch-Tag geht die Mail an eine bestätigte Liste, nicht in die Leere." },
              { room: "Kanal", title: "UTM, QR, Inserat", copy: "Bauzaun, Anzeige, Newsletter, Portal: Dieselbe Wohnung, egal woher der Klick kommt. Der Kanal steht an der Anfrage." },
              { room: "Anfrage", title: "Bezug zur Wohnung", copy: "Merkliste, Exposé-Gate, Board im Dashboard. Jede Anfrage trägt die Wohnungsnummer — CRM nur, wenn Sie eines anbinden." },
              { room: "Zahl", title: "Auswertung ohne Cookie", copy: "Aufrufe, geöffnete Wohnungen, Anfragen je UTM-Kanal. Im Dashboard, als Wochenbericht, ohne Banner und ohne IP-Speicherung." },
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
