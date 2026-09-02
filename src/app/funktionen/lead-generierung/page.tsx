import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Anfragen im Wohnungsfinder: Gate, Suchagent, Board",
  description:
    "Exposé nach bestätigter Mail, Suchagent, Preis-Alarm, Warteliste. Anfragen mit Wohnungsnummer im Dashboard. CRM-Anbindung optional (onOffice, Propstack, Flowfact).",
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
        title="Die Mail kommt mit der Wohnungsnummer."
        lead="Kein Portalformular ohne Bezug. Gate vor dem Exposé, Suchagent, Board im Dashboard. Ein CRM schließen wir an, wenn Sie eines nutzen."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
        }
      />

      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Merkliste", title: "Wohnungen merken vor der Anfrage", copy: "Status live. Favoriten kommen mit dem Datensatz." },
            { room: "Gate", title: "Exposé gegen bestätigte Mail", copy: "Pflichtfelder, Double-Opt-in, Nachweis." },
            { room: "Agent", title: "Treffer, Preis, wieder frei", copy: "Mail, wenn die Wohnung passt oder der Preis fällt." },
            { room: "Board", title: "A/B/C, Wiedervorlage, iCal", copy: "Im Dashboard. CRM wie onOffice, Propstack oder Flowfact nur auf Wunsch." },
          ].map((row) => (
            <div key={row.room} className="walk-row">
              <p className="room">{row.room}</p>
              <h3>{row.title}</h3>
              <p>{row.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container" style={{ maxWidth: "36rem" }}>
          <LeadInboxMock />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
