import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Workflow, Webhook, KeyRound, Database, Bot, FolderInput,
  ShieldCheck, FileSpreadsheet,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "CRM-Integration & Schnittstellen: onOffice, Propstack, Flowfact",
  description:
    "Anfragen automatisch ins CRM: native Anbindung an onOffice, Propstack und Flowfact, dazu Webhooks, Read-only-API, OpenImmo-Export und KI-Anbindung per MCP.",
  path: "/funktionen/integrationen",
});

const crmSystems = [
  { name: "onOffice", desc: "Marktführer im deutschen Maklergeschäft" },
  { name: "Propstack", desc: "Modernes Makler-CRM aus Deutschland" },
  { name: "Flowfact", desc: "Etablierte CRM-Lösung der Immobilienbranche" },
];

const interfaces = [
  { icon: <Webhook size={22} />, title: "Webhooks", desc: "Neue Anfragen und Statuswechsel als JSON an eine URL Ihrer Wahl – Slack-kompatibel. Der Vertriebskanal, der bei jeder Anfrage aufleuchtet." },
  { icon: <KeyRound size={22} />, title: "Read-only-REST-API", desc: "Wohnungsdaten per API-Key in Ihre eigenen Systeme lesen – für Dashboards, Auswertungen oder die eigene Website." },
  { icon: <Database size={22} />, title: "OpenImmo-Export", desc: "Objektdaten im Branchenstandard-XML (angelehnt an 1.2.7) – für Portale und alle Systeme, die OpenImmo verarbeiten." },
  { icon: <Bot size={22} />, title: "MCP / KI-Anbindung", desc: "OAuth-2.1-geschützter MCP-Server mit ~30 Tools: KI-Assistenten wie Claude lesen Anfragen, setzen Status und Preise, entwerfen Exposé-Texte." },
  { icon: <FolderInput size={22} />, title: "Import & Backup", desc: "Projekt-Import aus ZIP, tägliche automatische Sicherung, Projektstruktur als YAML exportier- und wieder importierbar." },
  { icon: <FileSpreadsheet size={22} />, title: "CSV & Excel", desc: "Wohnungen, Preislisten, Anfragen, Statistiken, Wartelisten – alles als CSV oder Excel exportierbar." },
];

export default function Integrationen() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "CRM & Schnittstellen", path: "/funktionen/integrationen" },
        ])}
      />

      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">CRM & Schnittstellen</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Ihre Systeme. Automatisch versorgt.
          </h1>
          <p className="lead">
            flatplan.de ist keine Insel: Anfragen fließen nativ in onOffice,
            Propstack oder Flowfact, Objektdaten per OpenImmo in Ihre
            Systemlandschaft – und per MCP-Anbindung steuern Sie die Plattform
            sogar über KI-Assistenten.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg mt-8">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CRM */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Workflow size={26} /></span>
            <h2>Native CRM-Anbindung</h2>
            <p className="lead mb-8">
              Einmal die API-Zugangsdaten hinterlegen – ab dann landet jede
              Anfrage strukturiert in Ihrem CRM: mit Kontaktdaten,
              Wunscheinheit, Merkliste und Besichtigungswunsch. Kein Abtippen,
              kein Postfach-Chaos.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Zugangsdaten verschlüsselt gespeichert (AES-256)</li>
              <li><Check size={20} /> Automatische Anfrage-Weiterleitung in Echtzeit</li>
              <li><Check size={20} /> Übergabe-Protokoll: jede Weiterleitung nachvollziehbar</li>
              <li><Check size={20} /> Wohnungs-Verknüpfung zwischen Finder und CRM</li>
            </ul>
            <p style={{ fontSize: "0.9375rem" }}>
              Praxisbeispiel gefällig? Unser Blog-Artikel{" "}
              <Link href="/blog/crm-integration-neubauvertrieb" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>
                CRM-Integration im Neubauvertrieb
              </Link>{" "}
              zeigt den kompletten Workflow.
            </p>
          </div>
          <div className="grid" style={{ gap: "1rem" }}>
            {crmSystems.map((crm) => (
              <div key={crm.name} className="card" style={{ padding: "1.5rem 1.75rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <div className="icon-wrapper" style={{ marginBottom: 0, width: "2.75rem", height: "2.75rem" }}>
                  <Workflow size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.125rem", marginBottom: "0.125rem" }}>{crm.name}</h3>
                  <p style={{ margin: 0, fontSize: "0.875rem" }}>{crm.desc}</p>
                </div>
                <span style={{ marginLeft: "auto", fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", background: "#f0fdf4", padding: "0.25rem 0.625rem", borderRadius: "999px", whiteSpace: "nowrap" }}>
                  Nativ
                </span>
              </div>
            ))}
            <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", margin: 0 }}>
              Andere Systeme erreichen Sie über Webhooks, REST-API oder
              OpenImmo – offen dokumentiert statt Vendor-Lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* SCHNITTSTELLEN */}
      <section className="section bg-soft border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Offene Schnittstellen</span>
            <h2>Für alles andere: offene Standards</h2>
          </div>
          <div className="grid grid-3">
            {interfaces.map((item) => (
              <div key={item.title} className="card" style={{ padding: "1.75rem" }}>
                <div className="icon-wrapper" style={{ width: "2.75rem", height: "2.75rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9375rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SICHERHEIT */}
      <section className="section bg-dark border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="eyebrow">Sicherheit & Team</span>
            <h2>Enterprise-Grundlagen inklusive</h2>
            <p className="lead">
              Schnittstellen sind Vertrauenssache. Deshalb kommt flatplan.de
              mit Sicherheits- und Team-Funktionen, die sonst Aufpreis kosten.
            </p>
          </div>
          <ul className="check-list" style={{ marginBottom: 0 }}>
            <li style={{ color: "#fff" }}><Check size={20} /> Zwei-Faktor-Authentifizierung (TOTP) mit Recovery-Codes</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Rollen je Projekt: Betrachter, Bearbeiter, Manager</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Sitzungsverwaltung mit Fern-Abmeldung & Login-Protokoll</li>
            <li style={{ color: "#fff" }}><Check size={20} /> DSGVO: Aufbewahrungsfristen, Auto-Anonymisierung, Datenexport</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Änderungsprotokoll über alle Aktionen</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto">
          <ShieldCheck size={40} style={{ color: "var(--accent-primary)", margin: "0 auto 1.5rem" }} />
          <h2>Passt flatplan.de in Ihre Systemlandschaft?</h2>
          <p className="lead mb-8">
            Bringen Sie Ihre CRM- und IT-Fragen mit in die Demo – wir zeigen
            die Anbindung live und beantworten alles Technische direkt.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kostenlose Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
