import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Rocket, Users, ShieldCheck } from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "FAQ – Häufige Fragen zum interaktiven Wohnungsfinder",
  description:
    "Antworten auf häufige Fragen zu flatplan.de: Browser statt App, Einführung in wenigen Tagen, CRM-Anbindung an onOffice, Propstack und Flowfact, cookiefreies Tracking und DSGVO.",
  path: "/faq",
});

type Faq = { q: string; a: string };
type FaqGroup = { title: string; icon: React.ReactNode; items: Faq[] };

const groups: FaqGroup[] = [
  {
    title: "Produkt & Technik",
    icon: <Boxes size={26} />,
    items: [
      {
        q: "Was ist der flatplan.de Wohnungsfinder genau?",
        a: "Ein interaktiver Wohnungsfinder für Neubauprojekte: Interessenten drehen eine fotorealistische Projektansicht aus hochwertigen 3D-Renderings, klicken Wohnungen direkt in der Fassade an, navigieren durch Etagen-Grundrisse und starten echte 360°-Panorama-Rundgänge. Preise, Verfügbarkeit (frei, reserviert, verkauft), Ausstattung und Exposés sind je Wohnung hinterlegt – alles im Browser.",
      },
      {
        q: "Brauchen Besucher eine App oder ein Plugin?",
        a: "Nein. Der Wohnungsfinder läuft vollständig im Browser – auf Desktop, Tablet und Smartphone, ohne Download und ohne Installation. Wer möchte, kann ihn zusätzlich als PWA auf dem Homescreen installieren, etwa für den Einsatz im Verkaufsbüro oder auf Messen.",
      },
      {
        q: "Welche Inhalte kann der Wohnungsfinder darstellen?",
        a: "Drehbare Projekt-Rundumansichten mit anklickbaren Wohnungsflächen, Etagen-Grundrisse mit Pins, 360°-Rundgänge mit verbundenen Standpunkten, eine Sonnenstand-Simulation mit Schieberegler und Kompass, Bildergalerien und Foliensätze mit Video, Umgebungs-POIs mit Gehminuten, Baufortschritt je Haus sowie Wohnungs-Videos von YouTube, Vimeo oder als Datei.",
      },
      {
        q: "Läuft der Wohnungsfinder auf unserer eigenen Domain?",
        a: "Ja. Jedes Projekt kann unter einer eigenen Domain oder Subdomain laufen, zum Beispiel wohnen-am-park.de. Alternativ binden Sie den Finder per Link oder das Verfügbarkeits-Widget per iframe in Ihre bestehende Projektwebsite ein.",
      },
      {
        q: "Ist der Viewer mehrsprachig?",
        a: "Ja. Der Viewer steht mehrsprachig zur Verfügung, unter anderem auf Englisch – hilfreich für internationale Kaufinteressenten und Kapitalanleger.",
      },
    ],
  },
  {
    title: "Einführung & Aufwand",
    icon: <Rocket size={26} />,
    items: [
      {
        q: "Wie schnell ist ein Projekt online?",
        a: "Sobald Renderings, Grundrisse und Wohnungsdaten vorliegen, ist ein Projekt in wenigen Tagen live. Eine Launch-Checkliste führt durch alle Schritte, und mit der Warteliste samt Countdown sammeln Sie schon vor dem offiziellen Start erste Interessenten.",
      },
      {
        q: "Welche Unterlagen werden benötigt?",
        a: "Hochwertige 3D-Renderings Ihres Visualisierers (als Bildsequenz für die drehbare Ansicht), Etagen-Grundrisse sowie die Wohnungsdaten – Flächen, Zimmer, Preise, Ausstattung, Energieausweis. Exposé-PDFs je Wohnung laden Sie einfach hoch; Bilder werden automatisch für Desktop und Mobil optimiert.",
      },
      {
        q: "Können wir Projekte selbst pflegen?",
        a: "Ja. Status, Preise, Bilder, Rundgänge und Texte pflegen Sie selbst im Verwaltungsbereich – mit Rollen je Projekt (Viewer, Editor, Manager), Änderungsprotokoll, Kommentaren mit @-Erwähnung und Projekt-Aufgaben. Projekte lassen sich duplizieren, als ZIP exportieren und werden täglich automatisch gesichert.",
      },
    ],
  },
  {
    title: "Leads & CRM",
    icon: <Users size={26} />,
    items: [
      {
        q: "Welche CRM-Systeme werden unterstützt?",
        a: "Nativ angebunden sind onOffice, Propstack und Flowfact: Anfragen werden automatisch mit der angefragten Wohneinheit übergeben, die Zugangsdaten liegen verschlüsselt, jede Übergabe wird protokolliert. Zusätzlich gibt es Webhooks (Slack-kompatibel), eine Read-only-REST-API und den OpenImmo-XML-Export für weitere Systeme.",
      },
      {
        q: "Wie entstehen aus Besuchern qualifizierte Anfragen?",
        a: "Über mehrere Wege: das Anfrageformular mit Merkliste und konfigurierbaren Pflichtfeldern, das Exposé-Gate (PDF-Download erst nach E-Mail-Angabe), Suchagenten mit Mail bei neuen Treffern, Preis- und Wieder-frei-Alarme sowie die Warteliste vor dem Launch. Jede Anfrage enthält den konkreten Wohnungsbezug – Ihr Vertrieb weiß sofort, worum es geht.",
      },
      {
        q: "Wie arbeitet der Vertrieb mit den Anfragen weiter?",
        a: "Im Anfragen-Board mit den Stufen Neu, In Bearbeitung und Erledigt: Zuweisung an Teammitglieder, Lead-Bewertung A/B/C, Wiedervorlagen, Aufgaben, Textbausteine und vCard-Export. Besichtigungsslots mit iCal-Export und eine SLA-Ampel für Reaktionszeiten sind eingebaut.",
      },
    ],
  },
  {
    title: "Datenschutz & Sicherheit",
    icon: <ShieldCheck size={26} />,
    items: [
      {
        q: "Ist das Tracking DSGVO-konform – brauchen wir einen Cookie-Banner?",
        a: "Das eingebaute Analytics arbeitet cookiefrei und speichert keine IP-Adressen – ein Cookie-Banner ist dafür nicht nötig. Sie sehen trotzdem Besuche, Wohnungs-Öffnungen, Favoriten, Rundgang-Verweildauer und Conversions je UTM-Quelle.",
      },
      {
        q: "Wie werden Einwilligungen und Löschfristen gehandhabt?",
        a: "Anfragen laufen über eine DSGVO-Einwilligung mit Double-Opt-in, jeder Einwilligungsnachweis wird gespeichert. Aufbewahrungsfristen mit automatischer Löschung oder Anonymisierung, ein Papierkorb und der Datenexport für Auskunftsersuchen sind integriert.",
      },
      {
        q: "Wie ist der Zugang zum System abgesichert?",
        a: "Mit Zwei-Faktor-Authentifizierung (TOTP), Einladungs-Links statt geteilter Passwörter, Sitzungsverwaltung, Login-Protokoll und Rollen je Projekt. Jede Änderung an Wohnungen und Preisen wird im Änderungsprotokoll festgehalten.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) =>
    g.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd
        data={[
          faqSchema,
          breadcrumbs([
            { name: "Start", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Häufige Fragen</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Alles, was Sie vor dem Start wissen wollen.
          </h1>
          <p className="lead">
            Von der Technik über die Einführung bis zu CRM-Anbindung und
            Datenschutz: die häufigsten Fragen zu flatplan.de – klar und
            faktenbasiert beantwortet.
          </p>
        </div>
      </section>

      {/* GROUPS */}
      {groups.map((group, i) => (
        <section
          key={group.title}
          className={`section border-b ${i % 2 === 0 ? "bg-white" : "bg-soft"}`}
        >
          <div className="container max-w-3xl mx-auto">
            <span className="icon-wrapper">{group.icon}</span>
            <h2 className="mb-8">{group.title}</h2>
            {group.items.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* WEITERFÜHREND */}
      <section className="section bg-white border-b">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Noch tiefer einsteigen?</h2>
          <p className="lead mb-8">
            Alle Funktionen im Überblick, die Nutzenargumente für Ihr Projekt
            oder Fachbegriffe kurz erklärt:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/features" className="btn btn-outline">
              Alle Funktionen
            </Link>
            <Link href="/vorteile" className="btn btn-outline">
              Ihre Vorteile
            </Link>
            <Link href="/wissen/glossar" className="btn btn-outline">
              Glossar
            </Link>
            <Link href="/preise" className="btn btn-outline">
              Preise
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
            Ihre Frage war nicht dabei?
          </h2>
          <p className="lead mb-8">
            Am schnellsten klärt sich alles in einer Live-Demo: Wir zeigen den
            Wohnungsfinder an einem echten Projekt und beantworten Ihre Fragen
            direkt am Bildschirm.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
