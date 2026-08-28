export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO-Datum der Veröffentlichung */
  date: string;
  readingMinutes: number;
  /** Pfad unter /public, 16∶10 */
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
    title: "Status per Chat setzen",
    description:
      "WE 2.03 auf reserviert. Anfragen lesen. Satz fürs Exposé. Über die Projektdaten im Dashboard.",
    date: "2026-07-14",
    readingMinutes: 6,
    image: "/blog/ki-immobilienvertrieb-mcp.jpg",
    imageAlt: "Abendlicher Schreibtisch mit Laptop, Fassadenplan und Notizen",
    tag: "Technik",
  },
  {
    slug: "vorverkaufsquote-steigern",
    title: "Vorverkaufsquote vor dem Spatenstich",
    description:
      "Die Bank zählt Wohnungen. Gelb frei, blau reserviert. Die Flächen liegen auf der Fassade.",
    date: "2026-07-02",
    readingMinutes: 6,
    image: "/blog/vorverkaufsquote-steigern.jpg",
    imageAlt: "Südfassade eines Neubaus mit Loggien, über dem Gehweg",
    tag: "Vorverkauf",
  },
  {
    slug: "crm-integration-neubauvertrieb",
    title: "Anfragen optional nach onOffice übergeben",
    description:
      "Datensatz mit Wohnungsnummer. Anfragen liegen zuerst im Dashboard. onOffice, Propstack oder Flowfact nur, wenn Sie es anbinden.",
    date: "2026-06-10",
    readingMinutes: 5,
    image: "/blog/crm-integration-neubauvertrieb.jpg",
    imageAlt: "Schreibtisch mit Wohnungsliste, Grundrissen und Laptop",
    tag: "CRM",
  },
  {
    slug: "warteliste-launch-strategie",
    title: "Warteliste vor dem Vermarktungsstart",
    description:
      "Countdown, Double-Opt-in, erster Tag. Das Postfach ist voll, bevor die Tafel am Zaun steht.",
    date: "2026-06-24",
    readingMinutes: 6,
    image: "/blog/warteliste-launch-strategie.jpg",
    imageAlt: "Leeres Erdgeschoss vor dem Vermarktungsstart, Fassade draußen",
    tag: "Vorverkauf",
  },
  {
    slug: "lead-qualitaet-verdoppeln",
    title: "Bessere Anfragen durch Merkliste und Gate",
    description:
      "Gate vor dem Exposé. Pflichtfelder, Double-Opt-in. Die WE steht im Datensatz.",
    date: "2026-05-20",
    readingMinutes: 6,
    image: "/blog/lead-qualitaet-verdoppeln.jpg",
    imageAlt: "Grundriss und Formular auf dem Tisch, Stift an der Loggia",
    tag: "Anfragen",
  },
  {
    slug: "virtueller-rundgang-neubau",
    title: "360°-Rundgang vor der Fertigstellung",
    description:
      "360°, nächster Raum, Blick zur Loggia. Solange die Musterwohnung fehlt.",
    date: "2026-05-06",
    readingMinutes: 6,
    image: "/blog/virtueller-rundgang-neubau.jpg",
    imageAlt: "Leeres Wohnzimmer mit Stativ und Blick zur Süd-Loggia",
    tag: "Rundgang",
  },
  {
    slug: "digitaler-bauzaun-qr-marketing",
    title: "QR-Code am Bauzaun",
    description: "Scan öffnet die WE. UTM am Zaun. Zählung, wer stehen bleibt.",
    date: "2026-04-21",
    readingMinutes: 5,
    image: "/blog/digitaler-bauzaun-qr-marketing.jpg",
    imageAlt: "Bauzaun mit Projekttafel und QR-Code vor dem Neubau",
    tag: "Baustelle",
  },
  {
    slug: "dsgvo-immobilienmarketing",
    title: "Messung ohne Cookie-Banner",
    description:
      "Kein Cookie. Keine IP. Besuch und Anfrage, ohne Einwilligungstext über der Fassade.",
    date: "2026-04-08",
    readingMinutes: 6,
    image: "/blog/dsgvo-immobilienmarketing.jpg",
    imageAlt: "Schreibtisch mit Unterlagen und geschlossenem Laptop",
    tag: "DSGVO",
  },
  {
    slug: "preisstrategie-neubau",
    title: "Preisänderung mit Alarm an Interessenten",
    description:
      "Aktionspreis, Zeitraum. Wer 3 Zimmer Süd merkt, bekommt die Mail.",
    date: "2026-03-17",
    readingMinutes: 6,
    image: "/blog/preisstrategie-neubau.jpg",
    imageAlt: "Gedruckte Preisliste mit Markierung, Stift und Taschenrechner",
    tag: "Preis",
  },
  {
    slug: "openimmo-schnittstelle-erklaert",
    title: "OpenImmo-Export aus dem Wohnungsfinder",
    description: "Wohnungsliste im XML. Portale, Makler, der eigene Bestand.",
    date: "2026-02-25",
    readingMinutes: 5,
    image: "/blog/openimmo-schnittstelle-erklaert.jpg",
    imageAlt: "Mappe mit Grundrissen, USB-Stick und Laptop auf dem Tisch",
    tag: "OpenImmo",
  },
  {
    slug: "neubau-kampagnen-utm-tracking",
    title: "Kampagnen mit UTM bis zur Anfrage",
    description:
      "Kanal, Anfrage, WE. Bauzaun, Anzeige, Newsletter — dieselbe Zählung.",
    date: "2026-02-04",
    readingMinutes: 6,
    image: "/blog/neubau-kampagnen-utm-tracking.jpg",
    imageAlt: "Handy fotografiert die Projekttafel am Bauzaun",
    tag: "Kampagne",
  },
  {
    slug: "besichtigung-digital-organisieren",
    title: "Besichtigungstermine in der Wohnung buchen",
    description: "Kapazität, Bestätigung, iCal. Weniger Anruf, weniger No-Show.",
    date: "2026-01-15",
    readingMinutes: 5,
    image: "/blog/besichtigung-digital-organisieren.jpg",
    imageAlt: "Schlüssel und Terminzettel auf der Küchentheke der Musterwohnung",
    tag: "Besichtigung",
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
