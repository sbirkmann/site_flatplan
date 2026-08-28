import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("digitaler-bauzaun-qr-marketing")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>QR am Brett.</strong> Der Zaun steht. Rendering, Name,
        Telefonnummer, die niemand im Vorbeigehen wählt. Scan öffnet die WE.
        UTM am Link. Zählung, wer stehen bleibt.
      </p>

      <h2>Die Nummer am Brett</h2>
      <p>
        Merken, später wählen. Drei Brüche. Die Kamera liest den Code.
        Fassade, Preis, Status, auf dem Handy, vor der Baugrube.
      </p>

      <h2>Wohin der Scan geht</h2>
      <p>
        Nicht die Unternehmensseite. Nicht ein PDF. Die Ansicht dieses
        Hauses. Hotspot,{" "}
        <Link href="/funktionen/3d-grundrisse">Etage</Link>, Gate.
        Code je Projekt und je WE, als SVG.{" "}
        <Link href="/funktionen/pdf-expose">Exposé und QR</Link>.
      </p>

      <h2>UTM am Zaun</h2>
      <p>
        utm_source=bauzaun. Dieselbe Zählung wie Anzeige und Newsletter.
        Wer scannt, welche WE öffnet, wer den Namen lässt.{" "}
        <Link href="/blog/neubau-kampagnen-utm-tracking">UTM am Link</Link>.
      </p>
      <p>
        Brett in Augenhöhe. Code groß genug für zwei Meter Abstand. Kein
        Lack über dem Druck, der die Kamera blendet.
      </p>
    </BlogArticle>
  );
}
