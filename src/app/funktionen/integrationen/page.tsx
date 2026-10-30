import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";
import Datenfluss from "@/components/plan/Datenfluss";
import ShotSlot from "@/components/plan/ShotSlot";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard und CRM-Anbindung",
  description:
    "Dashboard zum Wohnungsfinder: Editor für Wohnungen und Preise, Rollen, Auswertung ohne Cookie. CRM wie onOffice, Propstack oder Flowfact optional angebunden — Webhook, REST-API, OpenImmo-Export.",
  path: "/funktionen/integrationen",
});

export default function Integrationen() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Dashboard und CRM", path: "/funktionen/integrationen" },
        ])}
      />
      <PageHero
        eyebrow="Dashboard"
        blatt="F-40"
        title="Ein Dashboard für Wohnungen, Anfragen und Zahlen."
        lead="Wohnungen pflegen, den Finder einstellen, Zahlen lesen — an einer Stelle. onOffice, Propstack oder Flowfact schließen wir an, wenn Sie es wollen. Ein Pflichtteil ist das CRM nicht."
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="F-41" titel="Ein Stand, alle Kanäle" />
          <div className="plan-split">
            <div>
              <h2>Das Dashboard reicht für den Alltag.</h2>
              <p className="lead">
                Anfragen mit Wohnungsnummer, Statusänderungen, Auswertung. Ein
                CRM kommt hinzu, wenn das Büro eines hat — nicht, weil der
                Finder es bräuchte.
              </p>
            </div>
            <Datenfluss />
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-42" titel="Vier Arbeitsbereiche" />
          <div className="walk">
            {[
              { room: "Editor", title: "Wohnungen und Inhalte", copy: "Einheiten anlegen, Status und Preise setzen, Texte und Bilder pflegen. Rollen legen fest, wer darf — jede Änderung steht im Protokoll." },
              { room: "Konfig", title: "Den Finder einstellen", copy: "Ansichten, Domain, Exposé-Gate, Texte. Pro Bauvorhaben ein Finder, pro Finder Ihre Einstellungen." },
              { room: "Zahlen", title: "Statistiken und Berichte", copy: "Aufrufe, geöffnete Wohnungen, UTM-Kanäle bis zur Anfrage. Ohne Cookie, ohne IP — der Wochenbericht geht auch als Link an die Geschäftsführung." },
              { room: "CRM", title: "Anbindung optional", copy: "onOffice, Propstack, Flowfact — Anfragen landen dort mit allen Angaben. Alternativ Webhook, lesende REST-API und OpenImmo-XML für die Portale." },
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
          <SheetHead blatt="F-43" titel="Auswertung" />
          <div className="plan-split">
            <ShotSlot label="Dashboard · Statistik" note="Screenshot folgt — Platzhalter" />
            <div>
              <h2>Welche Wohnung angesehen wird, sehen Sie.</h2>
              <p className="lead">
                Aufrufe je Einheit, Merklisten, Anfragen nach Kanal. Wenn WE 2.03
                dreihundert Mal geöffnet und nie angefragt wird, ist das ein
                Preissignal — kein Bauchgefühl mehr.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
