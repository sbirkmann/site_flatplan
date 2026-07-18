import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Glossar – Fachbegriffe des digitalen Neubauvertriebs erklärt",
  description:
    "Von 360°-Rundgang über Exposé-Gate und OpenImmo bis Vorverkaufsquote: 20 Fachbegriffe des digitalen Neubauvertriebs kompakt erklärt – für Bauträger, Makler und Projektentwickler.",
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
        def: "Ein virtueller Rundgang aus Panorama-Aufnahmen, bei dem Besucher sich an einem Standpunkt frei umsehen und zwischen verbundenen Standpunkten wechseln – etwa von der Küche ins Wohnzimmer der Musterwohnung. In flatplan.de laufen 360°-Rundgänge per WebGL direkt im Browser, ohne App oder Plugin.",
      },
    ],
  },
  {
    letter: "A",
    terms: [
      {
        term: "Aufteilerprojekt",
        def: "Ein Bestandsgebäude, das in einzelne Eigentumswohnungen aufgeteilt und wohnungsweise verkauft wird. Für Aufteiler gelten ähnliche Vertriebsanforderungen wie im Neubau: Einheitenübersicht, Live-Verfügbarkeit, Exposés und qualifizierte Anfragen je Wohnung.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Double-Opt-in",
        def: "Zweistufiges Einwilligungsverfahren: Nach dem Absenden einer Anfrage oder Newsletter-Anmeldung bestätigt der Interessent seine E-Mail-Adresse über einen Link. Das liefert einen dokumentierten Einwilligungsnachweis (DSGVO) und filtert Tippfehler- und Wegwerf-Adressen zuverlässig heraus.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "Exposé-Gate",
        def: "Ein Download-Mechanismus, bei dem das Exposé-PDF erst nach Angabe der E-Mail-Adresse bereitgestellt wird. Aus einem anonymen Download wird so ein Lead mit dokumentiertem Interesse an einer konkreten Wohneinheit.",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "Isochrone",
        def: "Die Fläche, die von einem Standort aus in einer bestimmten Zeit erreichbar ist – etwa alles, was in 10 Gehminuten liegt. Im Immobilienmarketing dient sie dazu, die Lagequalität greifbar zu machen; flatplan.de zeigt dazu Umgebungs-POIs mit Gehminuten-Angabe.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "Lead-Bewertung (A/B/C)",
        def: "Einfache Klassifizierung von Anfragen nach Abschlusswahrscheinlichkeit: A-Leads mit konkretem Kauf- oder Besichtigungswunsch werden priorisiert kontaktiert, B-Leads erhalten eine Wiedervorlage, C-Leads laufen über Suchagent oder Newsletter mit. Schafft Fokus im Anfragen-Board.",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "MCP (Model Context Protocol)",
        def: "Offener Standard, über den KI-Assistenten wie Claude externe Systeme steuern können. flatplan.de bringt einen MCP-Server mit OAuth 2.1 und rund 30 Tools mit – damit lassen sich z. B. Wohnungsstatus und Preise setzen, Anfragen lesen oder Exposé-Texte generieren, direkt aus dem KI-Assistenten.",
      },
      {
        term: "Merkliste",
        def: "Persönliche Favoritenliste eines Interessenten im Wohnungsfinder. Über einen Magic-Link kehrt er ohne Konto zu seiner Liste zurück; bei einer Anfrage wird die Merkliste mit übergeben und liefert dem Vertrieb wertvollen Kontext über Vergleichswohnungen.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        term: "OpenImmo",
        def: "Der deutschsprachige XML-Branchenstandard für den Austausch von Immobiliendaten zwischen Software-Systemen, Portalen und CRMs. flatplan.de exportiert Projektdaten als OpenImmo-XML, sodass kompatible Systeme sie ohne Doppelpflege übernehmen.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Polygon-Hotspot",
        def: "Eine exakt auf die Gebäudegeometrie gezeichnete, anklickbare Fläche in der Projektansicht – etwa der Umriss einer Wohnung in der Fassade. Ein Klick öffnet die Detailseite der Einheit; farbcodiert zeigt der Hotspot zugleich den Verfügbarkeitsstatus.",
      },
      {
        term: "PWA (Progressive Web App)",
        def: "Eine Website, die sich wie eine App auf dem Homescreen installieren lässt – ohne App-Store. Der flatplan.de-Viewer ist PWA-fähig, praktisch für Verkaufsbüro, Messe-Tablet oder den schnellen Zugriff von Interessenten.",
      },
    ],
  },
  {
    letter: "Q",
    terms: [
      {
        term: "QR-Code-Marketing",
        def: "Der Brückenschlag von Print zu digital: QR-Codes je Projekt und je Wohnung (als SVG) führen vom Bauzaun, Flyer oder Zeitungsinserat direkt in den Wohnungsfinder – bei Bedarf bis zur konkreten Einheit.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Sonnenstand-Simulation",
        def: "Interaktive Darstellung des Sonnenverlaufs am Projekt: Über einen Schieberegler mit Kompass sehen Interessenten, wie Licht und Ausrichtung zu verschiedenen Tageszeiten wirken – ein häufiges Kaufkriterium, das sich so ohne Vor-Ort-Termin beantworten lässt.",
      },
      {
        term: "Suchagent",
        def: "Ein gespeichertes Suchprofil eines Interessenten (z. B. 3 Zimmer, Südbalkon, Budget). Sobald eine passende Einheit verfügbar wird, verschickt das System automatisch eine E-Mail – so bleiben Kontakte warm, für die aktuell nichts Passendes frei ist.",
      },
    ],
  },
  {
    letter: "U",
    terms: [
      {
        term: "Umgebungs-POI",
        def: "Point of Interest in der Projektumgebung – Kita, Supermarkt, S-Bahn, Park – dargestellt mit Gehminuten-Angabe. Beantwortet die Lagefrage direkt im Wohnungsfinder, optional ergänzt um eine Karte.",
      },
      {
        term: "UTM-Tracking",
        def: "Kampagnen-Parameter in Links (utm_source, utm_medium, utm_campaign), mit denen sich nachvollziehen lässt, welche Anzeige oder Quelle Besucher und Anfragen bringt. flatplan.de bietet dafür UTM-Kurzlinks mit Klickzähler und wertet Conversions je Quelle cookiefrei aus.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "Vorverkaufsquote",
        def: "Der Anteil der verkauften bzw. reservierten Einheiten vor Baubeginn oder Fertigstellung. Sie ist oft Voraussetzung für die Baufinanzierung – und der wichtigste Grund, die Vermarktung schon ab dem ersten Rendering zu starten statt erst ab Rohbau.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "Warteliste",
        def: "Vor dem offiziellen Vermarktungsstart sammelt eine Warteliste-Seite mit Countdown bereits Interessenten. Zum Launch startet das Projekt so nicht bei null, sondern mit einem Pool bestätigter Kontakte.",
      },
      {
        term: "Webhook",
        def: "Automatische HTTP-Benachrichtigung an ein anderes System, sobald ein Ereignis eintritt – etwa eine neue Anfrage oder ein Statuswechsel. Die Webhooks von flatplan.de sind Slack-kompatibel und verbinden den Wohnungsfinder mit Ihren eigenen Tools.",
      },
      {
        term: "Widget (Verfügbarkeits-Widget)",
        def: "Ein per iframe einbettbares Element für Ihre bestehende Website, das live anzeigt, wie viele Einheiten noch frei sind („X von Y frei“) – und direkt in den Wohnungsfinder verlinkt.",
      },
      {
        term: "Wohnungsfinder",
        def: "Eine interaktive Anwendung zur Vermarktung von Neubauprojekten: drehbare Projektansicht aus fotorealistischen 3D-Renderings, anklickbare Wohnungen, Etagen-Grundrisse, Preise und Live-Verfügbarkeit – kombiniert mit Anfrageformular und Lead-Management. Auch Flatfinder genannt.",
      },
    ],
  },
];

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossar: Digitaler Neubauvertrieb",
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
            { name: "Wissen", path: "/wissen" },
            { name: "Glossar", path: "/wissen/glossar" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Wissen</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Das Glossar des digitalen Neubauvertriebs.
          </h1>
          <p className="lead">
            Von 360°-Rundgang bis Vorverkaufsquote: die wichtigsten
            Fachbegriffe rund um Wohnungsfinder, Lead-Generierung und
            Immobilienmarketing – kompakt und praxisnah erklärt.
          </p>
        </div>
      </section>

      {/* GLOSSAR */}
      <section className="section bg-white border-b">
        <div className="container max-w-3xl mx-auto">
          {groups.map((group) => (
            <div key={group.letter} className="mb-12">
              <h2
                style={{
                  fontSize: "1.25rem",
                  color: "var(--text-tertiary)",
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "0.75rem",
                }}
                className="mb-6"
              >
                {group.letter}
              </h2>
              <dl style={{ margin: 0 }}>
                {group.terms.map((t) => (
                  <div key={t.term} className="mb-8">
                    <dt style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem" }}>
                      {t.term}
                    </dt>
                    <dd style={{ margin: 0, color: "var(--text-secondary)" }}>
                      {t.def}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <div className="card-soft">
            <h3 className="mb-4">Begriffe in Aktion sehen</h3>
            <p className="mb-6">
              Wie Exposé-Gate, Suchagent und Polygon-Hotspot in der Praxis
              zusammenspielen, zeigen unsere <Link href="/features">Funktionsübersicht</Link>,
              die <Link href="/vorteile">Vorteile-Seite</Link> und die
              Fachartikel im <Link href="/blog">Blog</Link>. Antworten auf
              häufige Fragen finden Sie im <Link href="/faq">FAQ</Link>.
            </p>
            <Link href="/features" className="btn btn-outline">
              Alle Funktionen ansehen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
            Theorie gelesen. Praxis gefällig?
          </h2>
          <p className="lead mb-8">
            In einer kostenlosen Live-Demo erleben Sie den Wohnungsfinder an
            einem echten Projekt – inklusive Lead-Engine und CRM-Übergabe.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
