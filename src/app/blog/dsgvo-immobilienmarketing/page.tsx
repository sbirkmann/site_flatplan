import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("dsgvo-immobilienmarketing")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Messung ohne Banner.</strong> Kein Cookie. Keine IP. Besuch
        und Anfrage, ohne Einwilligungstext über der Fassade. Die Anfrage
        selbst braucht Nachweis und Frist — das ist ein anderer Vorgang.
      </p>

      <h2>Was die Anfrage enthält</h2>
      <p>
        Name, Mail, Telefon, WE. Familienplanung steht oft im Freitext.
        Erhebung, Speicherung, Löschung: DSGVO. Tracking mit Drittanbieter
        und Cookie ist daneben ein zweites Thema — und das, das den Banner
        erzwingt.
      </p>

      <h2>Drei Grundlagen</h2>
      <p>
        Anfrage beantworten: Vertrag bzw. Anbahnung, Art. 6 Abs. 1 lit. b.
        Anonyme Reichweite: berechtigtes Interesse, lit. f, solange nichts
        Personenbezug hat. Newsletter, Suchagent, Preis-Alarm: Einwilligung,
        lit. a, plus TDDDG wo Kennungen zu Marketing gesetzt würden.
      </p>

      <h2>Die eingebaute Messung</h2>
      <p>
        Welche WE geöffnet wird. Verweildauer im Rundgang. UTM bis zur
        Anfrage. Ohne Cookie, ohne IP. Kein Banner dafür. Die Statistik
        zählt alle Besuche, nicht nur die mit „Akzeptieren“.
      </p>

      <h2>Gate und Frist</h2>
      <p>
        Double-Opt-in, Nachweis, Aufbewahrung, Papierkorb, Export für
        Auskunft.{" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>
        {" · "}
        <Link href="/faq">FAQ, Recht</Link>.
      </p>
    </BlogArticle>
  );
}
