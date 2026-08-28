import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import BlogIndex from "@/components/BlogIndex";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Artikel zum Neubauvertrieb",
  description:
    "Vorverkaufsquote, Anfragen, CRM, DSGVO, Bauzaun, OpenImmo. Texte aus der Arbeit mit Bauträgern und Maklern.",
  path: "/blog",
});

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "flatplan.de Blog",
    url: `${site.url}/blog`,
    inLanguage: "de-DE",
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
      image: `${site.url}${p.image}`,
    })),
  };

  return (
    <main>
      <JsonLd data={[blogSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Blog", path: "/blog" }])]} />
      <PageHero
        eyebrow="Artikel"
        title="Texte aus dem Vorverkauf."
        lead="Quote, Gate, CRM, Bauzaun. Kein Magazin."
        tone="licht"
        measure={`${blogPosts.length} Artikel`}
      />

      <section className="section bg-white border-b" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <BlogIndex />
        </div>
      </section>

      <section className="section bg-blatt border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Begriff</span>
          <h2>WE, Gate, OpenImmo.</h2>
          <p className="lead">
            Das{" "}
            <Link href="/wissen/glossar" style={{ fontWeight: 700, textDecoration: "underline" }}>Glossar</Link>
            , wie am Tisch.
          </p>
          <Link href="/kontakt" className="btn btn-outline">
            Demo am Projekt <IconArrow size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
