import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Glossar: WE, Gate, OpenImmo",
  description:
    "Begriffe aus dem Vorverkauf. 360°, Gate, Quote, OpenImmo, UTM. Kurz, wie am Tisch.",
  path: "/wissen/glossar",
});

type Term = { term: string; def: string };
type Group = { letter: string; terms: Term[] };

const groups: Group[] = [
  {
    letter: "0–9",
    terms: [
      {
        term: "360°-Rundgang",
        def: "Standpunkt in der Wohnung. Panorama, nächster Raum, Blick zur Loggia. Browser, ohne App. Neubau oft aus dem Studio, Bestand aus der Fotografie.",
      },
    ],
  },
  {
    letter: "A",
    terms: [
      {
        term: "Aufteilerprojekt",
        def: "Bestand, wohnungsweise verkauft. Dieselbe Arbeit wie im Neubau: Liste, Status, Exposé, Anfrage je WE.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Double-Opt-in",
        def: "Nach der Anfrage bestätigt die Mail. Nachweis für die DSGVO. Tippfehler und Wegwerf-Adressen fallen raus.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "Exposé-Gate",
        def: "PDF erst nach der Mail. Aus dem anonymen Download wird eine Anfrage mit WE.",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "Isochrone",
        def: "Was in zehn Gehminuten liegt. Kita, S-Bahn, Park — als POI an der WE, nicht als Lage-Floskel.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "Lead-Bewertung (A/B/C)",
        def: "A will die WE sehen. B Wiedervorlage. C Suchagent. Reihenfolge im Board.",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "MCP",
        def: "Schnittstelle, über die ein Assistent Status setzen, Anfragen lesen, Exposé-Sätze schreiben kann. Über die Projektdaten.",
      },
      {
        term: "Merkliste",
        def: "Die WE, die jemand vergleicht. Kommt mit der Anfrage. Magic-Link, ohne Konto.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        term: "OpenImmo",
        def: "XML-Standard der Branche. Export aus dem Finder, dieselben WE wie in der Ansicht.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Polygon-Hotspot",
        def: "Die Fläche der WE auf dem Rendering. Klick öffnet die Einheit. Farbe: frei, reserviert, verkauft.",
      },
      {
        term: "PWA",
        def: "Die Seite auf dem Homescreen. Ohne Store. Verkaufsbüro, Messe, Tablet am Tisch.",
      },
    ],
  },
  {
    letter: "Q",
    terms: [
      {
        term: "QR am Brett",
        def: "Scan vom Zaun, Flyer, Inserat. In die Ansicht, bei Bedarf in die WE. SVG, UTM daran.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Sonnenstand",
        def: "Regler über den Tag, Nordwinkel. Schatten auf der Loggia. Für die Frage nach Süd, solange draußen Baugrube ist.",
      },
      {
        term: "Suchagent",
        def: "3 Zimmer, Süd, Budget. Mail, wenn eine WE passt oder der Preis fällt.",
      },
    ],
  },
  {
    letter: "U",
    terms: [
      {
        term: "Umgebungs-POI",
        def: "Kita, Markt, S-Bahn, Park. Mit Gehminuten, optional Karte.",
      },
      {
        term: "UTM",
        def: "Quelle am Link. Bauzaun, Anzeige, Newsletter — welche Anfrage von wo, mit welcher WE. Ohne Cookie.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "Vorverkaufsquote",
        def: "Anteil reserviert oder verkauft vor dem Baustart. Oft 30–50 Prozent für die Bank. Deshalb die Fassade, sobald die Renderings da sind.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "Warteliste",
        def: "Seite mit Countdown vor dem Launch. Double-Opt-in. Am Starttag die bestätigte Liste, nicht null.",
      },
      {
        term: "Webhook",
        def: "HTTP an eure URL, wenn eine Anfrage oder ein Status kommt. Slack-kompatibel.",
      },
      {
        term: "Widget",
        def: "iframe für die bestehende Seite. „x von y frei“, ohne Preise. Link in den Finder.",
      },
      {
        term: "Wohnungsfinder",
        def: "Fassade aus dem Rendering, Etage, 360°, Anfrage mit WE, Übergabe ins CRM. Auch Flatfinder genannt.",
      },
    ],
  },
];

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossar Vorverkauf",
  url: `${site.url}/wissen/glossar`,
  hasDefinedTerm: groups.flatMap((g) =>
    g.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      inDefinedTermSet: `${site.url}/wissen/glossar`,
    })),
  ),
};

export default function GlossarPage() {
  return (
    <main>
      <JsonLd
        data={[
          definedTermSet,
          breadcrumbs([
            { name: "Start", path: "/" },
            { name: "Glossar", path: "/wissen/glossar" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Glossar"
        title="WE, Gate, OpenImmo."
        lead="Begriffe aus dem Vorverkauf. Kurz, wie am Tisch."
        tone="licht"
        measure={`${groups.reduce((n, g) => n + g.terms.length, 0)} Einträge`}
      />

      <section className="section bg-white border-b">
        <div className="container max-w-3xl">
          {groups.map((group) => (
            <div key={group.letter} id={group.letter} style={{ marginBottom: "2.75rem" }}>
              <p className="plan-rule" style={{ marginBottom: "1.25rem" }}>{group.letter}</p>
              <dl style={{ margin: 0 }}>
                {group.terms.map((t) => (
                  <div key={t.term} style={{ borderTop: "1px solid var(--tinte)", padding: "1.2rem 0 1.35rem" }}>
                    <dt style={{ fontWeight: 650, letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>
                      {t.term}
                    </dt>
                    <dd style={{ margin: 0, fontFamily: "var(--font-serif)", color: "var(--graphit)", maxWidth: "40rem" }}>
                      {t.def}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="measure" style={{ margin: 0 }}>
            <Link href="/faq" style={{ textDecoration: "underline" }}>FAQ</Link>
            {" · "}
            <Link href="/features" style={{ textDecoration: "underline" }}>Funktionen</Link>
            {" · "}
            <Link href="/blog" style={{ textDecoration: "underline" }}>Artikel</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
