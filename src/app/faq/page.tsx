import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "FAQ: Technik, Einrichtung, Anfragen, Recht",
  description:
    "Browser, Rendering, CRM, Gate, Cookie. Die Fragen, die vor der Einrichtung kommen.",
  path: "/faq",
});

type Faq = { q: string; a: string };
type FaqGroup = { title: string; items: Faq[] };

const groups: FaqGroup[] = [
  {
    title: "Technik.",
    items: [
      {
        q: "Was ist der Finder?",
        a: "Ansicht aus der Rendering-Sequenz. Klick auf die Loggia öffnet die WE: Grundriss, 360°, Preis, Status. Browser, ohne App.",
      },
      {
        q: "Brauchen Besucher eine App?",
        a: "Nein. Desktop, Tablet, Handy. Optional PWA auf dem Homescreen, etwa im Verkaufsbüro.",
      },
      {
        q: "Was kann die Ansicht zeigen?",
        a: "Fassade mit Hotspots, Etage mit Pins, 360° mit verbundenen Standpunkten, Sonnenstand, Galerie, POI mit Gehminuten, Baufortschritt, Video.",
      },
      {
        q: "Eigene Domain?",
        a: "Ja. Domain oder Subdomain, etwa wohnen-am-park.de. Oder Link und Widget in der bestehenden Seite.",
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
        q: "Wie schnell ist ein Objekt online?",
        a: "Liegen Sequenz, Grundrisse und Wohnungsliste vor: wenige Tage. Warteliste mit Countdown, falls der Start später liegt.",
      },
      {
        q: "Welche Unterlagen?",
        a: "Renderings als Sequenz, Grundriss je Geschoss, Wohnungsliste (Fläche, Zimmer, Preis, Ausstattung, Energie). Exposé-PDF je WE, wenn vorhanden.",
      },
      {
        q: "Wer pflegt danach?",
        a: "Sie. Status, Preise, Bilder, Texte. Rollen je Projekt, Protokoll, Duplizieren, tägliche Sicherung.",
      },
    ],
  },
  {
    title: "Anfragen.",
    items: [
      {
        q: "Welche CRM?",
        a: "onOffice, Propstack, Flowfact — nativ, mit WE-Nummer. Daneben Webhook, lesende REST-API, OpenImmo-XML.",
      },
      {
        q: "Woher kommt die Anfrage?",
        a: "Formular mit Merkliste, Exposé-Gate, Suchagent, Preis-Alarm, Warteliste. Immer mit der WE.",
      },
      {
        q: "Was macht der Vertrieb danach?",
        a: "Board Neu / in Arbeit / erledigt. A/B/C, Wiedervorlage, iCal, Textbaustein. Oder direkt das CRM.",
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
        eyebrow="Fragen aus dem Vorverkauf"
        title="Was vor dem ersten Rendering geklärt sein will."
        lead="Technik, Unterlagen, CRM, Cookie. Die Sätze, die am Telefon fallen."
        tone="licht"
        measure="Vier Räume"
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
          <h2>Begriff, Funktion, Zahl.</h2>
          <p className="lead">
            <Link href="/wissen/glossar" style={{ fontWeight: 700, textDecoration: "underline" }}>Glossar</Link>
            {" · "}
            <Link href="/features" style={{ fontWeight: 700, textDecoration: "underline" }}>Funktionen</Link>
            {" · "}
            <Link href="/preise" style={{ fontWeight: 700, textDecoration: "underline" }}>Preise</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Die fehlende Frage am Objekt." lead="Laufendes Haus, Bildschirm. Keine Folien." />
    </main>
  );
}
