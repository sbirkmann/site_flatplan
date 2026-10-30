import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import PlanFinder from "@/components/plan/PlanFinder";
import Datenfluss from "@/components/plan/Datenfluss";
import StatusKreislauf from "@/components/plan/StatusKreislauf";
import SheetHead from "@/components/plan/SheetHead";
import ShotSlot from "@/components/plan/ShotSlot";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Funktionen des Wohnungsfinders",
  description:
    "Interaktiver Wohnungsfinder: Fassade mit Live-Status, 3D-Grundriss, 360°-Rundgang und Sonnenstands-Simulation. Dashboard mit Editor, Statistik ohne Cookie-Banner, CRM-Anbindung optional. Modelle und Renderings von Immowoo.",
  path: "/features",
});

export default function Features() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Funktionen", path: "/features" }])} />
      <PageHero
        eyebrow="Funktionen"
        blatt="F-00"
        title="Was der Wohnungsfinder im Vorverkauf leistet."
        lead="Auf Ihrer Projektseite oder unter eigener Domain: die Fassade als klickbarer Plan, jede Wohnung mit Grundriss, Preis und Live-Status. Im Dashboard pflegen Sie Wohnungen, Preise und Auswertungen — onOffice, Propstack oder Flowfact schließen wir an, wenn Sie ein CRM nutzen."
        measure="Haus A · 48 WE · Dashboard inklusive"
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={16} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">Live-Projekt öffnen</a>
          </>
        }
      />

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-01" titel="Fassade und Grundriss" />
          <div className="overlap-fassade" style={{ padding: 0 }}>
            <PlanFinder caption="Beispiel · Haus am Park · 20 WE" />
            <div className="overlap-plate">
              <h2>Wohnungen auf der Fassade auswählen.</h2>
              <p className="lead">
                Die Ansicht ist der Plan: Jede Loggia trägt eine anklickbare
                Einheit. Ein Klick öffnet Grundriss, Fläche, Kaufpreis, den
                360°-Rundgang und den Sonnenstand dieser Wohnung.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Modelle und Renderings erstellen wir von Immowoo selbst;
                vorhandenes Material — Pläne, Bilder, CAD — bereiten wir auf.
                Etagengrundrisse ergänzen die Fassade für Einheiten, die sich
                nicht in der Ansicht zeigen lassen.
              </p>
              <Link href="/funktionen/3d-grundrisse" className="link-arrow">
                Zum Wohnungsfinder <IconArrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht — die Sonnenstands-Simulation zeigt Schattenwurf je Uhrzeit und Jahreszeit"
          width={1536}
          height={1024}
        />
        <div className="container section-sm">
          <SheetHead blatt="F-02" titel="Sonnenstands-Simulation" />
          <div style={{ maxWidth: "42rem" }}>
            <h2>Wie viel Sonne die Loggia bekommt — für jeden Tag im Jahr.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Ein Regler führt durch den Tagesverlauf, ein zweiter durch das
              Jahr. Der Schattenwurf steht auf der Fassade, bevor draußen mehr
              als die Baugrube liegt. Die Frage „Süd oder West?“ beantwortet
              sich im Verkaufsgespräch von selbst.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-03" titel="Anfragen mit Wohnungsnummer" />
          <div className="overlap-leads" style={{ padding: 0 }}>
            <div className="overlap-plate">
              <h2>Die Anfrage enthält die Wohnungsnummer.</h2>
              <p className="lead">
                Exposé-Gate mit Double-Opt-in, Suchagent für vergebene
                Wunschwohnungen, Preis-Alarm bei Änderungen — und ein Board im
                Dashboard, auf dem jede Anfrage ihrer Einheit zugeordnet ist.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Der QR-Code am Bauzaun führt in dieselbe Wohnung. UTM-Parameter
                verraten Ihnen später, welcher Kanal — Zaun, Anzeige,
                Newsletter — die Anfrage geliefert hat.
              </p>
              <Link href="/funktionen/lead-generierung" className="link-arrow">
                Anfragen und Exposé <IconArrow size={14} />
              </Link>
            </div>
            <LeadInboxMock />
          </div>
        </div>
      </section>

      <section className="section bg-soft border-b">
        <div className="container">
          <SheetHead blatt="F-04" titel="Dashboard" />
          <div className="overlap-interior" style={{ padding: 0 }}>
            <div className="overlap-plate">
              <h2>Editor, Einstellungen, Auswertung.</h2>
              <p className="lead">
                Wohnungen anlegen, Status setzen, Texte und Bilder pflegen,
                Rollen für das Team. Statistiken laufen ohne Cookie und ohne
                IP-Adresse — es gibt nichts, wofür man einen Banner bräuchte.
              </p>
              <Link href="/funktionen/integrationen" className="link-arrow">
                Dashboard und CRM <IconArrow size={14} />
              </Link>
            </div>
            <ShotSlot label="Dashboard · Editor" note="Screenshot folgt — Platzhalter" />
          </div>
        </div>
      </section>

      <section className="section border-b">
        <div className="container">
          <SheetHead blatt="F-05" titel="Statuslogik" />
          <div className="plan-split">
            <div>
              <h2>Drei Zustände, ein Klick.</h2>
              <p className="lead">
                Frei, reserviert, verkauft — mit Rückweg bei Storno. Der Stand
                gilt sofort auf Fassade, Etagenplan, Preisliste, Exposé und im
                OpenImmo-Export an die Portale.
              </p>
              <div className="stat-line" style={{ marginTop: "2rem", marginBottom: 0 }}>
                <div><strong>0</strong><br /><span>Cookies</span></div>
                <div><strong>UTM</strong><br /><span>bis zur Anfrage</span></div>
                <div><strong>Live</strong><br /><span>alle Kanäle</span></div>
              </div>
            </div>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <StatusKreislauf />
              <Datenfluss />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
