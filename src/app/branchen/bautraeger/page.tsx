import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import SheetHead from "@/components/plan/SheetHead";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder für Bauträger",
  description:
    "Vorverkauf mit interaktivem Wohnungsfinder: Status frei, reserviert, verkauft direkt auf der Fassade. Die Vorverkaufsquote für die Bank, bevor der Rohbau steht. Dashboard, OpenImmo, Modelle von Immowoo.",
  path: "/branchen/bautraeger",
});

export default function BautraegerPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Bauträger", path: "/branchen/bautraeger" },
        ])}
      />
      <PageHero
        eyebrow="Bauträger"
        blatt="B-01"
        title="Vorverkauf, bevor der Rohbau steht."
        lead="Die Bank verlangt eine Vorverkaufsquote, die Käufer wollen die Wohnung sehen — beides, bevor der erste Stein liegt. Der Wohnungsfinder zeigt jede Einheit auf der Fassade mit Grundriss, Preis und Live-Status. Modelle und Renderings erstellen wir, die Grundrisse ebenfalls, wenn sie fehlen."
        illustration={<PlanFinder />}
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="B-02" titel="Was sich im Vorverkauf ändert" />
          <div className="walk">
            {[
              { room: "Quote", title: "30–50 % vor dem Baustart", copy: "Die übliche Bankvorgabe für die Finanzierung. Jede Woche ohne begehbare Ansicht verlängert die Zwischenfinanzierung — der Finder startet den Verkauf, sobald die Pläne stehen, nicht erst die Musterwohnung." },
              { room: "Status", title: "Frei, reserviert, verkauft — ohne Rückfrage", copy: "Farbe und Schraffur auf Fassade und Etage. Sie setzen den Stand selbst im Dashboard; Käufer, Makler und Portale sehen denselben." },
              { room: "Start", title: "Warteliste vor dem Launch", copy: "Projektseite mit Countdown und Double-Opt-in. Am Starttag steht die bestätigte Liste — der erste Anruf geht an Menschen, die schon eine Wohnung gemerkt haben." },
              { room: "Export", title: "Preisliste und OpenImmo", copy: "CSV, Excel, OpenImmo-XML für die Portale — dieselben Daten wie im Finder. Ein CRM wie onOffice binden wir an, wenn Sie eines nutzen." },
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
        <div className="container max-w-3xl">
          <SheetHead blatt="B-03" titel="Rechenbeispiel" />
          <h2>Was eine Woche früher kostet — und bringt.</h2>
          <p className="lead">
            Zwischenfinanzierung, Vertriebszeit, Preisverhandlungen: Der
            Vorverkauf ist die Phase, in der ein Projekt seine Marge sichert.
            Wer die Wohnung zeigen kann, verkauft ohne Abschlag — wer nur eine
            PDF hat, diskutiert über Vorstellungskraft.
          </p>
          <p style={{ color: "var(--tinte-70)" }}>
            Der Finder kostet einen Bruchteil einer Woche Bauzinsen und läuft
            vom ersten Vermarktungstag an: Bauzaun-QR, Portale, Ihre
            Projektseite. Die Auswertung im Dashboard zeigt, welche Einheiten
            angesehen und welche angefragt werden — ein frühes Signal für die
            Preisgestaltung der nächsten Abschnitte.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
