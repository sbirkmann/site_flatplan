import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "FAQ zum Wohnungsfinder",
  description:
    "Fragen zum Wohnungsfinder: Technik, Einrichtung, Anfragen, Datenschutz. Dashboard, Rendering, CRM optional, Exposé-Gate, Cookie.",
  path: "/faq",
});

type Faq = { q: string; a: string };
type FaqGroup = { title: string; items: Faq[] };

const groups: FaqGroup[] = [
  {
    title: "Technik.",
    items: [
      {
        q: "Was ist der Wohnungsfinder?",
        a: "Die Ansicht für ein Bauvorhaben: Fassade, Grundriss, 360°, Preis, Status frei, reserviert oder verkauft. Daneben das Dashboard mit Editor, Einstellungen und Auswertung. Läuft im Browser, ohne App. Jedes Projekt hat seinen eigenen Finder.",
      },
      {
        q: "Brauchen Besucher eine App?",
        a: "Nein. Desktop, Tablet, Handy. Optional PWA auf dem Homescreen, etwa im Verkaufsbüro.",
      },
      {
        q: "Was kann die Ansicht zeigen?",
        a: "Fassade mit Wohnungen, Etage mit Pins, 360° mit verbundenen Standpunkten, Sonnenstand, Galerie, POI mit Gehminuten, Baufortschritt, Video.",
      },
      {
        q: "Eigene Domain?",
        a: "Ja. Domain oder Subdomain, etwa wohnen-am-park.de. Oder Einbettung in die bestehende Projektseite.",
      },
      {
        q: "Mehrsprachig?",
        a: "Ja. Unter anderem Englisch, wenn Kapitalanleger oder internationale Käufer dazugehören.",
      },
    ],
  },
  {
    title: "Einrichtung.",
    items: [
      {
        q: "Wie schnell ist ein Projekt online?",
        a: "Sobald Modell, Bilder, Grundrisse und Wohnungsliste stehen: wenige Tage. Modelle und Renderings machen wir. Grundrisse auch, wenn sie fehlen. Vorhandenes Material bereiten wir auf.",
      },
      {
        q: "Welche Unterlagen?",
        a: "Zum Start die Wohnungsliste (Fläche, Zimmer, Preis, Ausstattung, Energie). Den Rest erstellen wir, oder Sie schicken vorhandenes Material. Exposé-PDF je Wohnung, wenn vorhanden.",
      },
      {
        q: "Wer pflegt danach?",
        a: "Sie, im Dashboard. Status, Preise, Bilder, Texte. Rollen je Projekt, Protokoll, tägliche Sicherung.",
      },
    ],
  },
  {
    title: "Anfragen.",
    items: [
      {
        q: "Brauchen wir ein CRM?",
        a: "Nein. Anfragen liegen im Dashboard, mit Wohnungsnummer. onOffice, Propstack oder Flowfact schließen wir an, wenn Sie es wollen. Daneben Webhook, lesende REST-API, OpenImmo-XML.",
      },
      {
        q: "Woher kommt die Anfrage?",
        a: "Formular mit Merkliste, Exposé-Gate, Suchagent, Preis-Alarm, Warteliste. Immer mit der Wohnung.",
      },
      {
        q: "Was macht der Vertrieb danach?",
        a: "Board im Dashboard: Neu / in Arbeit / erledigt. A/B/C, Wiedervorlage, iCal. Oder das CRM, falls angebunden.",
      },
    ],
  },
  {
    title: "Recht.",
    items: [
      {
        q: "Cookie-Banner?",
        a: "Die eingebaute Messung speichert kein Cookie und keine IP. Banner dafür nicht nötig. UTM bis zur Anfrage bleibt.",
      },
      {
        q: "Einwilligung und Löschung?",
        a: "Double-Opt-in, Nachweis, Frist, Papierkorb, Export für Auskunft.",
      },
      {
        q: "Zugang?",
        a: "2FA (TOTP), Einladung statt geteiltem Passwort, Rollen, Login-Protokoll. Jede Preis- und Statusänderung im Protokoll.",
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
        title="Was vor dem ersten Projekt geklärt sein will."
        lead="Technik, Unterlagen, Dashboard, Cookie. Die Fragen, die am Telefon fallen."
        tone="licht"
        measure="Vier Abschnitte"
      />

      {groups.map((group, i) => (
        <section
          key={group.title}
          className={`section border-b ${i % 2 === 0 ? "bg-white" : "bg-soft"}`}
        >
          <div className="container max-w-3xl">
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

      <section className="section bg-white border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Weiter</span>
          <h2>Glossar, Funktionen, Preise.</h2>
          <p className="lead">
            <Link href="/wissen/glossar" style={{ fontWeight: 700, textDecoration: "underline" }}>Glossar</Link>
            {" · "}
            <Link href="/features" style={{ fontWeight: 700, textDecoration: "underline" }}>Funktionen</Link>
            {" · "}
            <Link href="/preise" style={{ fontWeight: 700, textDecoration: "underline" }}>Preise</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Noch eine Frage?" lead="Wir zeigen den Finder an einem echten Projekt. Bildschirm, keine Folien." />
    </main>
  );
}
