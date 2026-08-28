import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("openimmo-schnittstelle-erklaert")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>OpenImmo aus dem Finder.</strong> XML der Branche. Portale,
        Makler, der eigene Bestand. Dieselben WE wie in der Ansicht.
        Version 1.2.7 als Nenner.
      </p>

      <h2>Was die Datei trägt</h2>
      <p>
        Ein Knoten je Immobilie: Kategorie, Lage, Preise, Flächen,
        Ausstattung, Energie, Anhänge. Kaufpreis in einem Feld, Wohnfläche
        in einem Feld. Vierzig WE, vierzig Knoten, eine Pflege.
      </p>

      <h2>Wo es endet</h2>
      <p>
        Hotspot-Polygone, Sonnenstand, 360°-Standpunkte gehören nicht in
        den Standard. Die gehen nicht mit. Status und Preis schon. Der
        Finder bleibt die Ansicht; OpenImmo ist der Export.
      </p>

      <h2>Export</h2>
      <p>
        Aus der Wohnungsliste. Portal, Partner, Archiv. Kein zweites
        Tippen. Native CRM bleibt der Weg für die Anfrage; OpenImmo der Weg
        für den Objektstamm.{" "}
        <Link href="/funktionen/integrationen">CRM</Link>
        {" · "}
        <Link href="/blog/crm-integration-neubauvertrieb">Anfrage nach onOffice</Link>.
      </p>
      <p>
        Begriff: <Link href="/wissen/glossar">Glossar</Link>.
      </p>
    </BlogArticle>
  );
}
