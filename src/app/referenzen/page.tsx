import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import SheetHead from "@/components/plan/SheetHead";

export const metadata: Metadata = pageMetadata({
  title: "Referenzen: Wohnungsfinder im Einsatz",
  description:
    "Wohnungsfinder-Referenzen: Zinn Architektur in München-Riem, Sparkasse Immobilien, HM Immobilien München. Vorverkauf mit Quote, Anfragen mit Wohnungsnummer, Exklusivmandate.",
  path: "/referenzen",
});

export default function Referenzen() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Referenzen", path: "/referenzen" }])} />
      <PageHero
        eyebrow="Referenzen"
        blatt="R-01"
        title="Drei Projekte, drei Wege in den Vorverkauf."
        lead="Ein Bauträger in München-Riem, ein Sparkassen-Vertrieb, ein Maklerbüro. Drei Projekte, wie sie im Alltag laufen — ohne Kampagnenbilder."
        measure="München-Riem · Sparkasse · München"
      />

      <section id="zinn" className="section border-b">
        <div className="container">
          <SheetHead blatt="R-02" titel="Zinn Architektur" />
          <div className="overlap-fassade" style={{ padding: 0 }}>
            <div className="overlap-plate">
              <h2>48 WE in Riem. Die Quote für die Bank in drei Wochen.</h2>
              <p className="lead">
                Das Quartier war Zeichnung. Fassade, Etage, Gate im Finder —
                der Vertrieb sprach mit Menschen, die ihre Wohnung schon
                kannten.
              </p>
              <div className="stat-line" style={{ marginBottom: 0 }}>
                <div><strong>48</strong><br /><span>WE</span></div>
                <div><strong>3 Wochen</strong><br /><span>Quote</span></div>
                <div><strong>Riem</strong><br /><span>München</span></div>
              </div>
            </div>
            <PlanFinder caption="Projekt in Riem · Beispielansicht" />
          </div>
        </div>
      </section>

      <section id="sparkasse" className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <SheetHead blatt="R-03" titel="Sparkasse Immobilien" />
          <h2>Anfrage mit Merkliste, optional nach onOffice.</h2>
          <p className="lead">
            Vorher: Portal-Landing, Formular, leere Termine. Seit der Finder in
            der Seite sitzt, kommt die Wohnung mit. Anfragen liegen im
            Dashboard; onOffice ist angebunden, weil das Büro es nutzt — nicht,
            weil es müsste.
          </p>
        </div>
      </section>

      <section className="section border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <SheetHead blatt="R-04" titel="HM Immobilien" />
          <h2>Vier Exklusivmandate in einem Jahr.</h2>
          <p className="lead">
            Markus H. legt Bauträgern den Finder vor. Vorher: ein Mandat in
            drei Jahren. Der Ablauf steht auf der Seite{" "}
            <Link href="/branchen/immobilienmakler" style={{ fontWeight: 700 }}>
              Makler
            </Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
