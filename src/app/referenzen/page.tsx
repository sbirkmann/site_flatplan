import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";

export const metadata: Metadata = pageMetadata({
  title: "Referenzen: Riem, Sparkasse, Maklerbüro",
  description:
    "Wohnungsfinder im Einsatz: Zinn Architektur in München-Riem, Sparkasse Immobilien, HM Immobilien München. Vorverkauf, Anfragen mit Wohnungsnummer, Mandate.",
  path: "/referenzen",
});

export default function Referenzen() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Referenzen", path: "/referenzen" }])} />
      <PageHero
        eyebrow="Referenzen"
        title="Drei Projekte, drei Wege in den Vorverkauf."
        lead="Ein Bauträger in München-Riem, ein Sparkassen-Vertrieb, ein Maklerbüro. Drei Projekte, wie sie im Alltag laufen — ohne Kampagnenbilder."
        tone="blatt"
        illustration={<FacadeFinder showLegend={false} />}
        measure="München-Riem · Sparkasse · München"
      />

      <section id="zinn" className="section bg-himmel border-b">
        <div className="container overlap-fassade" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div>
            <span className="eyebrow">Zinn Architektur</span>
            <h2>48 WE in Riem. Quote für die Bank in drei Wochen.</h2>
            <p className="lead">
              Das Quartier war Zeichnung. Fassade, Etage, Gate im Finder. Der
              Vertrieb hat mit Leuten gesprochen, die eine Wohnung kannten.
            </p>
            <div className="stat-line">
              <div><strong>48</strong><br /><span>WE</span></div>
              <div><strong>3 Wochen</strong><br /><span>Quote</span></div>
              <div><strong>Riem</strong><br /><span>München</span></div>
            </div>
          </div>
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
        </div>
      </section>

      <section id="sparkasse" className="section bg-white border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Sparkasse Immobilien</span>
          <h2>Anfrage mit Merkliste, optional nach onOffice.</h2>
          <p className="lead">
            Vorher: Portal-Landing, Formular, leere Termine. Seit der Finder in
            der Seite sitzt, kommt die Wohnung mit. Anfragen liegen im Dashboard;
            onOffice ist angebunden, weil das Büro es nutzt.
          </p>
        </div>
      </section>

      <section className="section bg-himmel border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">HM Immobilien</span>
          <h2>Vier Exklusivmandate in einem Jahr.</h2>
          <p className="lead" style={{ color: "var(--tinte)" }}>
            Markus H. legt Bauträgern den Finder vor. Vorher ein Mandat in drei
            Jahren. Ablauf auf der Seite{" "}
            <Link href="/branchen/immobilienmakler" style={{ fontWeight: 700, textDecoration: "underline" }}>
              Makler
            </Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
