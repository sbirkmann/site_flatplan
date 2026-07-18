import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Rotate3d, Orbit, Layers, SunMedium, Users, Workflow,
  BarChart3, ShieldCheck, FileText, QrCode, Globe2, Languages, Bot, Database,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Alle Funktionen des interaktiven Wohnungsfinders",
  description:
    "Alle Funktionen im Überblick: drehbare Projektansicht, 360°-Rundgänge, Grundriss-Navigation, Lead-Engine, CRM-Sync, OpenImmo-Export, cookiefreies Analytics und mehr.",
  path: "/features",
});

const featureBlocks = [
  {
    id: "erlebnis",
    eyebrow: "Erlebnis",
    title: "Ein Projekt, das man anfassen kann",
    lead: "Fotorealistische 3D-Renderings werden zur drehbaren, klickbaren Projektbühne – Interessenten erkunden Lage, Gebäude und jede einzelne Wohnung selbst.",
    href: "/funktionen/3d-grundrisse",
    linkLabel: "Wohnungsfinder & 360° im Detail",
    items: [
      { icon: <Rotate3d size={22} />, title: "Drehbare Projektansicht", desc: "360°-Rundumsicht mit anklickbaren Wohnungsflächen direkt in der Fassade." },
      { icon: <Layers size={22} />, title: "Etagen & Grundrisse", desc: "Grundriss-Navigation mit Pins, Flächen und Live-Status je Einheit." },
      { icon: <Orbit size={22} />, title: "360°-Rundgänge", desc: "Begehbare Panorama-Touren mit verbundenen Standpunkten und Info-Punkten." },
      { icon: <SunMedium size={22} />, title: "Sonnenstand & Kompass", desc: "Licht- und Schattenverlauf im Tagesverlauf simulieren." },
      { icon: <Languages size={22} />, title: "Mehrsprachig & PWA", desc: "Viewer u. a. auf Englisch, als App installierbar – ohne App Store." },
      { icon: <Globe2 size={22} />, title: "Eigene Domain", desc: "Jedes Projekt läuft auf Wunsch unter Ihrer eigenen Projekt-Domain." },
    ],
  },
  {
    id: "leads",
    eyebrow: "Vertrieb",
    title: "Aus Besuchern werden qualifizierte Anfragen",
    lead: "Exposé-Gate, Suchagenten, Preis-Alarme und Wartelisten sammeln Leads rund um die Uhr – das Anfragen-Board hält Ihr Team auf Kurs.",
    href: "/funktionen/lead-generierung",
    linkLabel: "Lead-Generierung im Detail",
    items: [
      { icon: <Users size={22} />, title: "Anfragen mit Merkliste", desc: "Interessenten senden ihre Favoriten mit – inklusive Rückruf- und Besichtigungswunsch." },
      { icon: <FileText size={22} />, title: "Exposé-Gate", desc: "Exposé-Download erst nach E-Mail-Eingabe: Jeder Download ist ein Lead." },
      { icon: <Check size={22} />, title: "Suchagenten & Alarme", desc: "Automatische Mails bei neuen Treffern, Preissenkungen oder wieder freien Einheiten." },
      { icon: <BarChart3 size={22} />, title: "Anfragen-Board", desc: "Status, Zuweisung, Lead-Bewertung A/B/C, Wiedervorlagen und Aufgaben." },
      { icon: <QrCode size={22} />, title: "QR-Codes & Kampagnen", desc: "QR-Codes je Projekt und Wohnung, UTM-Kurzlinks mit Klickzähler." },
      { icon: <ShieldCheck size={22} />, title: "DSGVO eingebaut", desc: "Double-Opt-in, Einwilligungsnachweise und Auto-Antworten außerhalb der Geschäftszeiten." },
    ],
  },
  {
    id: "integrationen",
    eyebrow: "Integrationen",
    title: "Nahtlos in Ihre Systemlandschaft",
    lead: "Anfragen landen automatisch im CRM, Wohnungsdaten fließen per Branchenstandard – und per KI-Anbindung steuern Sie die Plattform sogar im Chat.",
    href: "/funktionen/integrationen",
    linkLabel: "CRM & Schnittstellen im Detail",
    items: [
      { icon: <Workflow size={22} />, title: "CRM-Sync", desc: "Native Anbindung an onOffice, Propstack und Flowfact – inklusive Übergabe-Protokoll." },
      { icon: <Database size={22} />, title: "OpenImmo-Export", desc: "Wohnungsdaten im Branchenstandard-XML für Portale und Drittsysteme." },
      { icon: <ArrowRight size={22} />, title: "Webhooks & API", desc: "Neue Anfragen als JSON an Ihre Systeme (Slack-kompatibel), Read-only-REST-API mit API-Keys." },
      { icon: <Bot size={22} />, title: "KI-Anbindung (MCP)", desc: "Rund 30 Werkzeuge für KI-Assistenten wie Claude: Status setzen, Anfragen lesen, Texte generieren." },
      { icon: <FileText size={22} />, title: "Import & Export", desc: "Projekt-Import aus ZIP, tägliche Auto-Backups, CSV/Excel-Exporte für alles." },
      { icon: <ShieldCheck size={22} />, title: "Rollen & 2FA", desc: "Projektbezogene Rollen, Zwei-Faktor-Authentifizierung, Login-Protokoll." },
    ],
  },
  {
    id: "analytics",
    eyebrow: "Controlling",
    title: "Wissen, was Ihre Interessenten wollen",
    lead: "Das eingebaute Analytics arbeitet komplett ohne Cookies – und zeigt Ihnen trotzdem, welche Wohnungen gefragt sind und welche Kampagne liefert.",
    href: "/funktionen/lead-generierung",
    linkLabel: "Mehr zu Leads & Controlling",
    items: [
      { icon: <BarChart3 size={22} />, title: "Cookiefreies Tracking", desc: "Besuche, Klicks, Favoriten, Verweildauer – ohne Cookie-Banner, ohne IP-Speicherung." },
      { icon: <Users size={22} />, title: "Live-Besucher", desc: "Sehen Sie, wie viele Interessenten gerade im Projekt unterwegs sind." },
      { icon: <Globe2 size={22} />, title: "Conversion je Quelle", desc: "UTM-Auswertung zeigt, welcher Kanal Anfragen bringt – nicht nur Klicks." },
      { icon: <FileText size={22} />, title: "Berichte & Stakeholder-Link", desc: "Wochen-/Monatsbericht per Mail, Read-only-Statistik-Link für Investoren." },
    ],
  },
];

export default function Features() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Funktionen", path: "/features" }])} />

      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Funktionen</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Eine Plattform für den kompletten Neubauvertrieb.
          </h1>
          <p className="lead">
            Vom interaktiven Erlebnis über die Lead-Engine bis zur
            CRM-Übergabe: Alles, was flatplan.de kann – im Detail.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">Live-Demo anfragen <ArrowRight size={20} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Demo-Projekt öffnen</a>
          </div>
        </div>
      </section>

      {featureBlocks.map((block, bi) => (
        <section key={block.id} id={block.id} className={`section ${bi % 2 === 0 ? "bg-white" : "bg-soft"} border-b`}>
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="eyebrow">{block.eyebrow}</span>
              <h2>{block.title}</h2>
              <p className="lead" style={{ marginBottom: 0 }}>{block.lead}</p>
            </div>
            <div className="grid grid-3">
              {block.items.map((item) => (
                <div key={item.title} className="card" style={{ padding: "1.75rem" }}>
                  <div className="icon-wrapper" style={{ width: "2.75rem", height: "2.75rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: "0.9375rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href={block.href} className="btn btn-outline">{block.linkLabel} <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-dark text-center">
        <div className="container max-w-3xl mx-auto">
          <h2>Überzeugen Sie sich am eigenen Projekt.</h2>
          <p className="lead mb-8">
            In der Live-Demo zeigen wir Ihnen jede dieser Funktionen an einem
            echten Bauvorhaben – und beantworten alle technischen Fragen.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kostenlose Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
