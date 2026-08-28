import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("besichtigung-digital-organisieren")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Slot in der Wohnung.</strong> Sieben Mails für einen
        Samstag. Bestätigung fehlt. Die Hälfte steht nicht vor der Tür.
        Kapazität, Bestätigung, iCal. Weniger Anruf, weniger No-Show.
      </p>

      <h2>Was die Koordination kostet</h2>
      <p>
        30 WE, 150 Termine über die Laufzeit. Zwanzig Minuten hin und her
        je Termin: fünfzig Stunden Logistik. Ohne Erinnerung fallen 20 bis
        30 Prozent aus. Drei Tage bis zum Vorschlag: der Interessent war
        inzwischen in zwei anderen Häusern.
      </p>

      <h2>Slot</h2>
      <p>
        Kapazität je Fenster. Bestätigung an beide. iCal in den Kalender.
        Absage gibt den Platz frei. Der 360°-Standpunkt vorher filtert, wer
        kommt.{" "}
        <Link href="/blog/virtueller-rundgang-neubau">
          Standpunkt in der ungebauten Wohnung
        </Link>
        .
      </p>

      <h2>Board danach</h2>
      <p>
        Wer war da, welche WE, nächster Schritt. Nicht eine Excel neben dem
        Kalender.{" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>.
      </p>
    </BlogArticle>
  );
}
