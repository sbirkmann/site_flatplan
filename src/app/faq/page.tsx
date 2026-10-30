import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SheetHead from "@/components/plan/SheetHead";

export const metadata: Metadata = pageMetadata({
  title: "FAQ zum Wohnungsfinder",
  description:
    "Fragen zum Wohnungsfinder für den Neubau-Vorverkauf: Technik, Einrichtung, Anfragen, Dashboard, CRM-Anbindung, Datenschutz und Messung ohne Cookie-Banner.",
  path: "/faq",
});

type Faq = { q: string; a: string };
type FaqGroup = { blatt: string; title: string; items: Faq[] };

const groups: FaqGroup[] = [
  {
    blatt: "Q-01",
    title: "Technik.",
    items: [
      {
        q: "Was ist der Wohnungsfinder?",
        a: "Die Ansicht für Ihr Bauvorhaben: Fassade, Grundriss, 360°-Rundgang, Preis und Status frei, reserviert oder verkauft — für jede Wohneinheit. Daneben das Dashboard mit Editor, Einstellungen und Auswertung. Läuft im Browser, ohne App. Jedes Projekt hat seinen eigenen Finder.",
      },
      {
        q: "Brauchen Besucher eine App?",
        a: "Nein. Desktop, Tablet, Handy — ein Link genügt. Optional lässt sich der Finder als PWA auf dem Homescreen ablegen, etwa auf dem Tablet im Verkaufsbüro.",
      },
      {
        q: "Was kann die Ansicht zeigen?",
        a: "Fassade mit anklickbaren Wohnungen, Etage mit Pins, 360° mit verbundenen Standpunkten, Sonnenstands-Simulation, Galerie, Umgebung mit Gehminuten, Baufortschritt und Video.",
      },
      {
        q: "Eigene Domain?",
        a: "Ja. Eigene Domain oder Subdomain, etwa wohnen-am-park.de — oder als Einbettung in Ihre bestehende Projektseite. Beides ist derselbe Finder, derselbe Datenstand.",
      },
      {
        q: "Mehrsprachig?",
        a: "Ja. Unter anderem Englisch, wenn Kapitalanleger oder internationale Käufer zur Zielgruppe gehören. Status und Fachbegriffe bleiben eindeutig, die Texte pflegen Sie je Sprache.",
      },
    ],
  },
  {
    blatt: "Q-02",
    title: "Einrichtung.",
    items: [
      {
        q: "Wie schnell ist ein Projekt online?",
        a: "Sobald Modell, Bilder, Grundrisse und Wohnungsliste stehen: wenige Tage. Modelle und Renderings erstellen wir von Immowoo selbst, fehlende Grundrisse ebenfalls. Vorhandenes Material — Pläne, CAD, Fotos — bereiten wir auf.",
      },
      {
        q: "Welche Unterlagen braucht es?",
        a: "Zum Start die Wohnungsliste: Fläche, Zimmer, Preis, Ausstattung, Energie. Den Rest erstellen wir oder Sie schicken vorhandenes Material. Exposé-PDF je Wohnung, wenn vorhanden.",
      },
      {
        q: "Wer pflegt den Finder danach?",
        a: "Sie, im Dashboard: Status, Preise, Bilder, Texte. Rollen je Projekt, Änderungsprotokoll, tägliche Sicherung. Wir bleiben erreichbar, aber Sie warten auf niemanden.",
      },
    ],
  },
  {
    blatt: "Q-03",
    title: "Anfragen.",
    items: [
      {
        q: "Brauchen wir ein CRM?",
        a: "Nein. Anfragen liegen im Dashboard, jede mit Wohnungsnummer. onOffice, Propstack oder Flowfact schließen wir an, wenn Sie eines nutzen. Daneben gibt es Webhook, eine lesende REST-API und den OpenImmo-XML-Export.",
      },
      {
        q: "Woher kommt die Anfrage?",
        a: "Aus der Wohnung selbst: Formular mit Merkliste, Exposé-Gate, Suchagent, Preis-Alarm, Warteliste. Immer mit der Einheit, nie als generisches „Interesse am Projekt“.",
      },
      {
        q: "Was macht der Vertrieb danach?",
        a: "Das Board im Dashboard: neu, in Arbeit, erledigt — mit A/B/C-Klasse, Wiedervorlage und iCal-Export für Besichtigungen. Oder Ihr CRM, falls angebunden; die Anfrage landet dann dort mit allen Angaben.",
      },
    ],
  },
  {
    blatt: "Q-04",
    title: "Recht und Datenschutz.",
    items: [
      {
        q: "Cookie-Banner?",
        a: "Die eingebaute Messung speichert weder Cookie noch IP-Adresse — dafür braucht es keinen Banner. UTM-Auswertung bis zur Anfrage bleibt trotzdem möglich.",
      },
      {
        q: "Einwilligung und Löschung?",
        a: "Double-Opt-in mit Nachweis, Löschfristen, Papierkorb statt sofortigem Entfernen, Export für Auskunftsanfragen. Server stehen in Deutschland.",
      },
      {
        q: "Wie ist der Zugang abgesichert?",
        a: "Zwei-Faktor-Anmeldung (TOTP), Einladung statt geteiltem Passwort, Rollen pro Projekt, Login-Protokoll. Jede Preis- und Statusänderung steht im Änderungsprotokoll.",
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

      <PageHero
        eyebrow="FAQ"
        blatt="Q-00"
        title="Was vor dem ersten Projekt geklärt sein will."
        lead="Technik, Unterlagen, Dashboard und Datenschutz — die Fragen, die im ersten Gespräch kommen, hier beantwortet. Für alles andere: dreißig Minuten Demo an einem echten Projekt."
        measure="Vier Abschnitte · 15 Antworten"
      />

      {groups.map((group, i) => (
        <section
          key={group.title}
          className={`section ${i < groups.length - 1 ? "border-b" : ""} ${i % 2 === 1 ? "bg-soft" : ""}`}
        >
          <div className="container max-w-3xl">
            <SheetHead blatt={group.blatt} titel={group.title.replace(".", "")} />
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

      <section className="section border-t">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <h2>Weiterlesen.</h2>
          <p className="lead">
            <Link href="/wissen/glossar" style={{ fontWeight: 700 }}>Glossar</Link>
            {" · "}
            <Link href="/features" style={{ fontWeight: 700 }}>Funktionen</Link>
            {" · "}
            <Link href="/preise" style={{ fontWeight: 700 }}>Preise</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Noch eine Frage?" lead="Wir zeigen den Finder an einem echten Projekt. Bildschirm, keine Folien." />
    </main>
  );
}
