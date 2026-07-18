export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO-Datum der Veröffentlichung */
  date: string;
  readingMinutes: number;
  /** Pfad unter /public, 1200×630 */
  image: string;
  imageAlt: string;
  tag: string;
};

/**
 * Zentrale Artikel-Registry — Quelle für Blog-Übersicht, Sitemap
 * und "Weiterlesen"-Verlinkung. Neue Artikel hier eintragen.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "ki-immobilienvertrieb-mcp",
    title: "KI im Immobilienvertrieb: Was eine MCP-Anbindung praktisch bringt",
    description: "Status setzen, Anfragen zusammenfassen, Exposé-Texte entwerfen – per Chat. Was die MCP-Schnittstelle von flatplan.de heute schon kann.",
    date: "2026-07-14",
    readingMinutes: 8,
    image: "/blog/ki-immobilienvertrieb-mcp.svg",
    imageAlt: "Illustration: KI-Assistent verbunden mit Wohnungsfinder-Daten",
    tag: "Technologie",
  },
  {
    slug: "vorverkaufsquote-steigern",
    title: "Vorverkaufsquote steigern: So erreichen Bauträger die Bankvorgabe schneller",
    description: "Warum die Vorverkaufsquote über den Baustart entscheidet – und wie digitale Vermarktung ab dem ersten Rendering die Quote schneller füllt.",
    date: "2026-07-02",
    readingMinutes: 9,
    image: "/blog/vorverkaufsquote-steigern.svg",
    imageAlt: "Illustration: steigende Verkaufskurve vor Gebäudesilhouette",
    tag: "Bauträger",
  },
  {
    slug: "crm-integration-neubauvertrieb",
    title: "CRM-Integration im Neubauvertrieb: Schluss mit Copy & Paste",
    description: "Wie Anfragen aus dem Wohnungsfinder automatisch in onOffice, Propstack oder Flowfact landen – native Anbindung, Webhooks, API und OpenImmo im Praxis-Workflow.",
    date: "2026-06-10",
    readingMinutes: 7,
    image: "/blog/crm-integration-neubauvertrieb.svg",
    imageAlt: "Illustration: Datenfluss vom Wohnungsfinder ins CRM-System",
    tag: "Integrationen",
  },
  {
    slug: "warteliste-launch-strategie",
    title: "Launch-Strategie: Mit Warteliste und Countdown in den Vermarktungsstart",
    description: "Der erste Vermarktungstag entscheidet über Momentum. So bauen Sie vor dem Start eine Warteliste auf und starten mit vollem Anfragen-Postfach.",
    date: "2026-06-24",
    readingMinutes: 8,
    image: "/blog/warteliste-launch-strategie.svg",
    imageAlt: "Illustration: Countdown und wachsende Interessentenliste",
    tag: "Vermarktung",
  },
  {
    slug: "lead-qualitaet-verdoppeln",
    title: "Lead-Qualität im Neubauvertrieb: weniger Anfragen, mehr Abschlüsse",
    description: "Exposé-Gate, Pflichtfelder, Double-Opt-in und Suchagenten: Wie aus anonymen Website-Besuchern qualifizierte Interessenten werden.",
    date: "2026-05-20",
    readingMinutes: 8,
    image: "/blog/lead-qualitaet-verdoppeln.svg",
    imageAlt: "Illustration: Trichter, der Besucher zu qualifizierten Leads filtert",
    tag: "Leads",
  },
  {
    slug: "virtueller-rundgang-neubau",
    title: "Virtuelle Rundgänge im Neubau: verkaufen, was noch nicht steht",
    description: "360°-Rundgänge machen unbebaute Projekte begehbar. Wann sich Panorama-Touren lohnen, was sie kosten und wie sie den Vertrieb entlasten.",
    date: "2026-05-06",
    readingMinutes: 9,
    image: "/blog/virtueller-rundgang-neubau.svg",
    imageAlt: "Illustration: 360-Grad-Panorama mit verbundenen Standpunkten",
    tag: "Produkt",
  },
  {
    slug: "digitaler-bauzaun-qr-marketing",
    title: "Der digitale Bauzaun: QR-Codes, die Passanten zu Interessenten machen",
    description: "Der Bauzaun ist Ihre günstigste Werbefläche. Mit QR-Codes je Projekt und Wohnung wird aus Laufkundschaft ein messbarer Vertriebskanal.",
    date: "2026-04-21",
    readingMinutes: 7,
    image: "/blog/digitaler-bauzaun-qr-marketing.svg",
    imageAlt: "Illustration: QR-Code auf Bauzaun vor Neubauprojekt",
    tag: "Vermarktung",
  },
  {
    slug: "dsgvo-immobilienmarketing",
    title: "DSGVO im Immobilienmarketing: Tracking ohne Cookie-Banner",
    description: "Besucher messen, ohne Einwilligungs-Banner und IP-Speicherung: Wie cookiefreies Analytics funktioniert und worauf Bauträger achten müssen.",
    date: "2026-04-08",
    readingMinutes: 8,
    image: "/blog/dsgvo-immobilienmarketing.svg",
    imageAlt: "Illustration: Schutzschild über Analytics-Diagrammen",
    tag: "Datenschutz",
  },
  {
    slug: "preisstrategie-neubau",
    title: "Preisstrategie im Neubau: Aktionspreise, Preis-Alarme und der richtige Zeitpunkt",
    description: "Preise sind Vertriebswerkzeuge: geplante Preisänderungen, Aktionszeiträume und Preis-Alarme, die kalte Leads automatisch zurückholen.",
    date: "2026-03-17",
    readingMinutes: 8,
    image: "/blog/preisstrategie-neubau.svg",
    imageAlt: "Illustration: Preisschild mit Kurve und Benachrichtigungsglocke",
    tag: "Vermarktung",
  },
  {
    slug: "openimmo-schnittstelle-erklaert",
    title: "OpenImmo einfach erklärt: Der Datenstandard der Immobilienbranche",
    description: "Was hinter dem OpenImmo-Format steckt, wofür Bauträger und Makler es brauchen und wie der Export aus dem Wohnungsfinder funktioniert.",
    date: "2026-02-25",
    readingMinutes: 7,
    image: "/blog/openimmo-schnittstelle-erklaert.svg",
    imageAlt: "Illustration: XML-Datenpaket zwischen Systemen",
    tag: "Integrationen",
  },
  {
    slug: "neubau-kampagnen-utm-tracking",
    title: "Neubau-Kampagnen messbar machen: UTM-Tracking von Klick bis Anfrage",
    description: "Welcher Kanal bringt Anfragen statt nur Klicks? Kampagnen-Kurzlinks, UTM-Parameter und Conversion-Auswertung für Neubauprojekte.",
    date: "2026-02-04",
    readingMinutes: 8,
    image: "/blog/neubau-kampagnen-utm-tracking.svg",
    imageAlt: "Illustration: Kampagnenkanäle mit Conversion-Messung",
    tag: "Marketing",
  },
  {
    slug: "besichtigung-digital-organisieren",
    title: "Besichtigungen digital organisieren: Slots, Erinnerungen, weniger No-Shows",
    description: "Terminfindung frisst Vertriebszeit. Wie buchbare Besichtigungsslots mit Kapazität, Bestätigung und iCal-Export den Prozess verschlanken.",
    date: "2026-01-15",
    readingMinutes: 7,
    image: "/blog/besichtigung-digital-organisieren.svg",
    imageAlt: "Illustration: Kalender mit gebuchten Besichtigungsterminen",
    tag: "Vertrieb",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
