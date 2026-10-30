import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Anfragen im Wohnungsfinder: Exposé-Gate, Suchagent, Board",
  description:
    "Lead-Generierung im Neubauvertrieb: Exposé nach bestätigter Mail, Suchagent, Preis-Alarm, Warteliste. Jede Anfrage mit Wohnungsnummer im Dashboard. CRM-Anbindung optional (onOffice, Propstack, Flowfact).",
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
        blatt="F-20"
        title="Die Mail kommt mit der Wohnungsnummer."
        lead="Kein Portalformular ohne Bezug mehr: Wer anfragt, hat eine konkrete Wohnung offen — und genau die steht im Datensatz. Gate vor dem Exposé, Suchagent für Vergebene, Board im Dashboard. Ein CRM schließen wir an, wenn Sie eines nutzen."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-21" titel="Vier Wege zur Anfrage" />
          <div className="walk">
            {[
              { room: "Merkliste", title: "Wohnungen merken vor der Anfrage", copy: "Interessenten sammeln Favoriten bei vollem Status. Die Merkliste kommt mit dem Datensatz — Sie sehen, wogegen Ihre Einheit konkurriert." },
              { room: "Gate", title: "Exposé gegen bestätigte Mail", copy: "Das Exposé geht erst nach Double-Opt-in raus: Pflichtfelder, Nachweis, saubere Einwilligung. Wer das PDF will, wird ein echter Kontakt." },
              { room: "Agent", title: "Treffer, Preis, wieder frei", copy: "Der Suchagent schreibt, wenn eine passende Wohnung frei wird oder der Preis sich bewegt. Aus „leider vergeben“ wird die Warteliste fürs nächste Haus." },
              { room: "Board", title: "A/B/C, Wiedervorlage, iCal", copy: "Im Dashboard: neu, in Arbeit, erledigt. Besichtigungstermine mit Kapazität und Kalenderdatei. CRM wie onOffice, Propstack oder Flowfact nur auf Wunsch." },
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

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="F-22" titel="Posteingang Vertrieb" />
          <div className="plan-split">
            <LeadInboxMock />
            <div>
              <h2>So sieht eine Anfrage aus.</h2>
              <p className="lead">
                Wohnungsnummer, Merkliste, Kanal und bestätigte Adresse — der
                Vertrieb ruft zurück und weiß, wovon die andere Seite spricht.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                UTM-Parameter laufen bis zur Anfrage mit: Bauzaun, Anzeige,
                Newsletter oder Portal — jedes Board lässt sich nach Kanal
                auswerten, ohne dass ein Cookie nötig wäre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
