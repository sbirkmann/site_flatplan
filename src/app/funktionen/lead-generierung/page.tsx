import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Anfragen: Gate, Suchagent, Board",
  description:
    "Exposé nach Mail, Suchagent, Preis-Alarm, Warteliste, Board A/B/C, Double-Opt-in. Übergabe nach onOffice, Propstack oder Flowfact.",
  path: "/funktionen/lead-generierung",
});

export default function LeadGenerierung() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Anfragen", path: "/funktionen/lead-generierung" },
        ])}
      />
      <PageHero
        eyebrow="Anfragen"
        title="Die Mail kommt mit der WE."
        lead="Kein Portalformular ohne Bezug. Gate, Suchagent, Board. Dann das CRM, das Sie schon haben."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Ansicht", title: "Merkliste in der Wohnung", copy: "Status live. Favoriten vor der Anfrage." },
            { room: "Gate", title: "Exposé gegen bestätigte Mail", copy: "Pflichtfelder, Double-Opt-in, Nachweis." },
            { room: "Agent", title: "Treffer, Preis, wieder frei", copy: "Mail, wenn die WE passt oder der Preis fällt." },
            { room: "Board", title: "A/B/C, Wiedervorlage, iCal", copy: "Oder direkt onOffice, Propstack, Flowfact." },
          ].map((row) => (
            <div key={row.room} className="walk-row">
              <p className="room">{row.room}</p>
              <h3>{row.title}</h3>
              <p>{row.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-dark border-b">
        <div className="container" style={{ maxWidth: "36rem" }}>
          <LeadInboxMock />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
