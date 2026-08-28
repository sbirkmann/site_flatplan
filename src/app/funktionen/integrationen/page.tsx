import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard und CRM-Anbindung",
  description:
    "Dashboard zum Wohnungsfinder: Editor, Einstellungen, Auswertung. CRM wie onOffice, Propstack oder Flowfact ist optional. Webhooks, REST, OpenImmo.",
  path: "/funktionen/integrationen",
});

export default function Integrationen() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "CRM", path: "/funktionen/integrationen" },
        ])}
      />
      <PageHero
        eyebrow="Dashboard"
        title="Editor, Einstellungen, Auswertung."
        lead="Wohnungen pflegen, den Finder einstellen, Zahlen lesen — im eigenen Dashboard. onOffice, Propstack oder Flowfact schließen wir an, wenn Sie es wollen. Es ist kein Pflichtteil."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <IconArrow size={18} /></Link>
        }
      />
      <section className="section bg-dark border-b">
        <div className="container overlap-leads">
          <div>
            <span className="eyebrow">Betrieb</span>
            <h2>Das Dashboard reicht für den Alltag.</h2>
            <p className="lead" style={{ margin: 0 }}>
              Anfragen mit Wohnungsnummer, Status, Auswertung. CRM nur, wenn das Büro eines hat.
            </p>
          </div>
          <figure className="overlap-frame" style={{ margin: 0, padding: "0.55rem", background: "var(--papier)" }}>
            <img src="/photos/neubau-loggien.jpg" alt="Loggien der Südfassade" width={1536} height={1024} />
          </figure>
        </div>
      </section>
      <section className="section bg-white border-b">
        <div className="container walk">
          {[
            { room: "Editor", title: "Wohnungen und Inhalte", copy: "Einheiten anlegen, Status, Preise, Texte, Bilder. Rollen, wer darf." },
            { room: "Konfig", title: "Finder einstellen", copy: "Ansichten, Domain, Gate, Texte. Pro Bauvorhaben ein Finder." },
            { room: "Zahlen", title: "Statistiken und Berichte", copy: "Aufrufe, geöffnete Wohnungen, UTM. Ohne Cookie, ohne IP." },
            { room: "CRM", title: "Anbindung optional", copy: "onOffice, Propstack, Flowfact. Sonst Webhook, REST, OpenImmo." },
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
