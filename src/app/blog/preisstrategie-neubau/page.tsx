import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("preisstrategie-neubau")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Preisänderung mit Alarm.</strong> Die Liste steht Monate vor
        dem Start. Danach oft nichts. Offener Preis oder „auf Anfrage“,
        Treppe über den Verlauf, Mail an die Merkliste, wenn die Zahl fällt.
      </p>

      <h2>Anzeigen oder Anfrage</h2>
      <p>
        Ohne Zahl fliegt das Objekt bei manchen raus, bevor der Vertrieb
        davon weiß. Mit Zahl fragt, wer die Größenordnung kennt. Praxis:
        Standard-WE offen, Penthouse auf Anfrage. Nebenkosten und Stellplatz
        daneben, nicht im Erstgespräch als Überraschung.
      </p>

      <h2>Treppe</h2>
      <p>
        Früh unter Ziel, damit die{" "}
        <Link href="/blog/vorverkaufsquote-steigern">Quote</Link> steht.
        Nach Baustart Ziel. Rohbau mit Aufschlag, weil das Risiko fehlt.
        Beispiel, 30 WE, Ziel 6.000 €/m²: 5.700, 6.000, 6.300. Die
        angekündigte Stufe erzeugt den Termin, nicht der Rabatt danach.
      </p>

      <h2>Alarm</h2>
      <p>
        Wer 3 Zimmer Süd merkt, bekommt die Mail, wenn der Preis fällt oder
        die WE wieder frei ist. Suchagent, nicht Newsletter an alle.{" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>.
      </p>
      <p>
        Aktion mit Zeitraum in der Ansicht. Farbe und Zahl live, nicht in
        einer Excel von letzter Woche.
      </p>
    </BlogArticle>
  );
}
