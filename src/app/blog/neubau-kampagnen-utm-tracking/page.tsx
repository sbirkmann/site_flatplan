import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("neubau-kampagnen-utm-tracking")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>UTM am Link.</strong> „12.000 Klicks“ sagt nichts. Kanal,
        Anfrage, WE. Bauzaun, Anzeige, Newsletter — dieselbe Zählung.
      </p>

      <h2>Klick gegen Anfrage</h2>
      <p>
        Kanal A: 8.000 Klicks, 4.000 €, acht Anfragen. Kanal B: 1.500
        Klicks, 3.000 €, dreißig Anfragen. Nach Klick gewinnt A. Nach
        Anfrage kostet A 500 € und B 100 €. Ohne UTM schichtet das Budget
        in den teuren Kanal.
      </p>

      <h2>Drei Parameter</h2>
      <ul>
        <li>utm_source — meta, google, newsletter, bauzaun</li>
        <li>utm_medium — cpc, social, email, print, qr</li>
        <li>utm_campaign — haus-a-start, penthouse</li>
      </ul>
      <p>
        Eine Schreibweise. Klein, ohne Umlaut. Sonst zerfällt die Tabelle
        in Meta, meta, facebook, FB.
      </p>

      <h2>Kurzlink</h2>
      <p>
        Der lange UTM-String gehört nicht aufs Brett. Kurzlink mit Zähler,
        Ziel der Finder. QR am Zaun dasselbe Ziel.{" "}
        <Link href="/blog/digitaler-bauzaun-qr-marketing">QR am Brett</Link>.
      </p>
      <p>
        Messung ohne Cookie, bis zur Anfrage. Ablauf:{" "}
        <Link href="/use-cases/neubauvertrieb">vom Rendering bis zur Akte</Link>.
        Zahl nach WE: <Link href="/preise">Preise</Link>.
      </p>
    </BlogArticle>
  );
}
