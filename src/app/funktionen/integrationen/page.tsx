import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "CRM: onOffice, Propstack, Flowfact",
  description:
    "Native Übergabe der Anfrage. Webhooks, REST lesend, OpenImmo, MCP. Zugangsdaten AES-256.",
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
        eyebrow="CRM"
        title="onOffice, Propstack, Flowfact."
        lead="Anfrage mit WE, Merkliste, Besichtigungswunsch. Zugangsdaten verschlüsselt. Protokoll je Übergabe."
        tone="licht"
        actions={
          <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
        }
      />
      <section className="section bg-dark border-b">
        <div className="container overlap-leads">
          <div>
            <span className="eyebrow">Übergabe</span>
            <h2>Die WE steht im Datensatz.</h2>
            <p className="lead" style={{ margin: 0 }}>
              onOffice, Propstack, Flowfact. Sonst Webhook, REST, OpenImmo.
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
            { room: "Nativ", title: "Drei CRM", copy: "onOffice, Propstack, Flowfact. Verknüpfung der WE." },
            { room: "Offen", title: "Webhook, REST, OpenImmo", copy: "JSON an eine URL. Lesende API. XML 1.2.7-angelehnt." },
            { room: "Akte", title: "MCP, CSV, Sicherung", copy: "OAuth-MCP für den Chat. Export. Tägliches Backup." },
            { room: "Zugang", title: "2FA, Rollen, Protokoll", copy: "TOTP, Betrachter bis Manager, DSGVO-Fristen." },
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
