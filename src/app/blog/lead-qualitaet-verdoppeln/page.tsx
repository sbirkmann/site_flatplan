import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("lead-qualitaet-verdoppeln")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function LeadQualitaetArticle() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Anfrage mit Merkliste.</strong> Portal-Exposé, Rückruf,
        „wollte nur mal schauen“. Zwanzig solche Gespräche sind ein
        Vormittag. Die Menge ist selten das Problem. Die WE fehlt im
        Datensatz.
      </p>

      <h2>Vor dem Formular</h2>
      <p>
        Wer die{" "}
        <Link href="/funktionen/3d-grundrisse">Fassade gedreht</Link>, die
        Etage gesehen, den Sonnenstand und den Standpunkt in der Wohnung
        hat, fragt nicht blind an. Die Anfrage nennt die WE.
      </p>

      <h2>Gate</h2>
      <p>
        Ansicht, Grundriss, 360° offen. Das PDF hinter der Mail.
        Double-Opt-in. Nachweis.{" "}
        <Link href="/funktionen/pdf-expose">Exposé und QR</Link>.
      </p>

      <h2>Felder</h2>
      <p>
        Jedes Pflichtfeld senkt die Zahl, hebt den Inhalt. Früh: Mail reicht.
        Später, bei knappen WE: Telefon, Besichtigungswunsch. Bei hoher{" "}
        <Link href="/blog/vorverkaufsquote-steigern">Quote</Link> meint
        die Anfrage die Wohnung.
      </p>

      <h2>Double-Opt-in</h2>
      <p>
        Keine Wegwerf-Adresse. Kein Tippfehler, der den Rückruf tötet.
        Der Link in der Mail ist der Filter, den das Formular nicht hat.
      </p>

      <h2>Board</h2>
      <p>
        A will den Termin. B Wiedervorlage. C Suchagent. Ohne Bewertung
        behandelt der Vertrieb alles gleich.{" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>.
      </p>
    </BlogArticle>
  );
}
