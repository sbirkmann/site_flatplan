import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("warteliste-launch-strategie")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Der Launch bei null ist der teure Fehler.</strong> Dienstag,
        Seite live, Preisliste frei, Anzeigen an. Dann Stille. Das Interesse
        war da: Passant am Grundstück, Nachfrage im Büro. Es lag nicht in
        einer Liste. Countdown, Double-Opt-in, Mail am Stichtag.
      </p>

      <h2>Der erste Tag</h2>
      <p>
        Neuigkeitswert hat das Objekt einmal. Fünf Reservierungen in der
        ersten Woche stehen in der Fassade. Keine in der ersten Woche auch.
        Für <Link href="/branchen/bautraeger">Bauträger</Link> hängt das an
        der Bank.{" "}
        <Link href="/blog/vorverkaufsquote-steigern">Die Quote vor dem Spatenstich</Link>.
      </p>

      <h2>Seite vor den Preisen</h2>
      <p>
        Name, Lage, erste Bilder. Noch keine Liste. Eintrag: Unterlagen
        24 Stunden vor der Veröffentlichung. Double-Opt-in — die Adresse
        ist bestätigt. Substanz: Mix, ein Rendering, kein leeres „bleiben
        Sie informiert“.
      </p>
      <ul>
        <li>Stichtag auf der Seite. Countdown.</li>
        <li>Mail nur an Bestätigte.</li>
        <li>UTM am Link, derselbe Finder.</li>
      </ul>

      <h2>Tag X</h2>
      <p>
        Die Mail geht raus. Die Ansicht ist fertig: Hotspots, Status, Gate.
        Wer öffnet, sieht WE, nicht eine Baustelle ohne Preis. Wer nicht
        öffnet, bleibt auf der Liste für den Suchagenten.
      </p>
      <p>
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>
        {" · "}
        <Link href="/use-cases/neubauvertrieb">Ablauf</Link>.
      </p>
    </BlogArticle>
  );
}
