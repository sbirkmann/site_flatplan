import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("vorverkaufsquote-steigern")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Kein Baustart ohne Vorverkauf.</strong> Der Satz aus dem
        Bankgespräch. Üblich sind 30 bis 50 Prozent der WE oder des
        Volumens. Jede Woche ohne Quote verlängert die Zwischenfinanzierung
        und schiebt den ersten Übergabetermin. Die Flächen liegen auf der
        Fassade, sobald Modell und Bilder stehen — die machen wir, oder wir
        bereiten Ihr Material auf.
      </p>

      <h2>Drei Fragen, die das PDF nicht beantwortet</h2>
      <p>
        Der Interessent kauft etwas, das nicht steht. Papier reicht selten:
        Wohnzimmergröße, Blick vom Balkon, Lage im Haus, Sonne auf der
        Loggia, Vergleich zur WE nebenan. Das Gespräch klärt das — und
        skaliert nicht. Ein Team hat eine begrenzte Zahl Termine pro Woche.
        Solange die drei Fragen erst im Termin fallen, ist der Termin der
        Engpass.
      </p>

      <h2>Rendering, dann Ansicht</h2>
      <p>
        Sobald Sequenz und Grundrisse da sind, geht die Fassade online.
        Hotspot je WE,{" "}
        <Link href="/funktionen/3d-grundrisse">Etage, Nordwinkel, 360°</Link>.
        Der Interessent klärt die Fragen selbst. Der Vertrieb spricht mit
        Leuten, die eine WE kennen — nicht mit Leuten, die eine Preisliste
        gelesen haben. Ablauf:{" "}
        <Link href="/use-cases/neubauvertrieb">vom Rendering bis zur Akte</Link>.
      </p>
      <p>
        Rechnung, grob: 40 WE, 450.000 €, Bank will 40 Prozent — 16 Einheiten.
        Zwei Verkäufe im Monat: acht Monate. Drei Verkäufe: gut fünf.
        Drei Monate früherer Baustart bei 8 Mio. Zwischenfinanzierung und
        6 Prozent: rund 120.000 € Zins, bevor über den Quadratmeter
        verhandelt wird.
      </p>

      <h2>Liste vor dem Start</h2>
      <p>
        Der Launch bei null ist der teure Fehler. Countdown, Double-Opt-in,
        Mail am Stichtag. Wer 150 bestätigte Adressen hat, füllt die ersten
        Reservierungen in Tagen.{" "}
        <Link href="/blog/warteliste-launch-strategie">Liste vor dem Start</Link>.
      </p>

      <h2>Farbe in der Loggia</h2>
      <p>
        Gelb frei, blau reserviert, grau verkauft. Zwölf 3-Zimmer, vier
        noch frei — das steht in der Ansicht, nicht im Satz des Verkäufers.
        Auf der Projektseite kann „x von y frei“ stehen, ohne Preise. Der Stand muss der
        echte sein. Künstliche Knappheit hält nicht bis zur Bank.
      </p>

      <h2>Wer nicht anfragt, bleibt im System</h2>
      <p>
        Merkliste mit Magic-Link. Suchagent: 3 Zimmer Süd. Wieder-frei-Alarm,
        wenn eine Reservierung platzt. Gate vor dem Exposé. Die geplatzte
        Reservierung ist normal; die Zeit bis zur nächsten Vergabe zählt.
        {" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>
        {" · "}
        <Link href="/blog/lead-qualitaet-verdoppeln">Anfrage mit Merkliste</Link>.
      </p>

      <h2>Die Woche mit Zahlen</h2>
      <p>
        Welche WE geöffnet, gemerkt, angefragt. Welcher UTM-Kanal den Namen
        liefert. Große Einheiten oft angesehen, nie angefragt: Preis.
        Viele Klicks, keine Öffnung: Zielgruppe. Favoriten auf einem Schnitt:
        die nächste Anzeige. Wochenbericht. Read-only-Link für die Bank.
        Messung ohne Cookie.
      </p>
      <p>
        Für <Link href="/branchen/bautraeger">Bauträger</Link> und{" "}
        <Link href="/branchen/projektentwicklung">Projektentwicklung</Link>{" "}
        ist die Frage nicht der Finder, sondern der Monat, den die Quote
        später steht. Kondition nach WE:{" "}
        <Link href="/preise">Preise</Link>.
      </p>

      <h2>Reibung im Büro</h2>
      <p>
        Zwei Tage bis zur Antwort. Excel für den Status. Veraltete
        Preisliste beim Partner. Ein Status, eine Preisquelle, Board mit
        Zuweisung. Rollen je Projekt. Übergabe ins CRM. Die Stunde zwischen
        Interesse und Antwort ist das Loch in der Quote, das sich am
        günstigsten schließt.
      </p>
    </BlogArticle>
  );
}
