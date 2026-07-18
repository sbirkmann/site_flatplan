import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { blogPosts, formatDate } from "@/lib/blog";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog – Fachwissen für den digitalen Neubauvertrieb",
  description:
    "Fachartikel für Bauträger, Projektentwickler und Makler: Vorverkauf, Lead-Qualität, CRM-Integration, DSGVO, Kampagnen-Tracking und Preisstrategie im Neubauvertrieb.",
  path: "/blog",
});

export default function Blog() {
  const [featured, ...rest] = blogPosts;

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

      <section className="page-hero bg-soft border-b">
        <div className="container max-w-3xl mx-auto text-center animate-up">
          <span className="eyebrow">Blog</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Wissen für den digitalen Neubauvertrieb.
          </h1>
          <p className="lead">
            Praxisnahe Artikel über Vorverkauf, Lead-Qualität, CRM-Anbindung
            und Vermarktung – aus der täglichen Arbeit mit Bauträgern,
            Projektentwicklern und Maklern.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section bg-white border-b" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="card grid grid-2" style={{ padding: 0, overflow: "hidden", alignItems: "stretch", gap: 0 }}>
            <img
              src={featured.image}
              alt={featured.imageAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "280px" }}
            />
            <div style={{ padding: "clamp(1.5rem, 4vw, 3rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="badge" style={{ alignSelf: "flex-start" }}>Neu · {featured.tag}</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>{featured.title}</h2>
              <p style={{ marginBottom: "1.5rem" }}>{featured.description}</p>
              <div className="flex items-center gap-8" style={{ color: "var(--text-tertiary)", fontSize: "0.875rem", fontWeight: 500 }}>
                <span className="flex items-center gap-2"><CalendarDays size={16} /> {formatDate(featured.date)}</span>
                <span className="flex items-center gap-2"><Clock3 size={16} /> {featured.readingMinutes} Min.</span>
              </div>
              <span className="btn btn-outline mt-8" style={{ alignSelf: "flex-start" }}>
                Artikel lesen <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ALLE ARTIKEL */}
      <section className="section bg-white" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="grid grid-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  style={{ width: "100%", aspectRatio: "1200 / 630", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem", flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-hover)" }}>{post.tag}</span>
                  <h3 style={{ fontSize: "1.125rem", margin: 0, lineHeight: 1.35 }}>{post.title}</h3>
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>{post.description}</p>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "auto", paddingTop: "0.75rem" }}>
                    {formatDate(post.date)} · {post.readingMinutes} Min. Lesezeit
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSAR-TEASER + CTA */}
      <section className="section bg-soft border-t">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 style={{ fontSize: "1.75rem" }}>Begriffe nachschlagen?</h2>
            <p>
              Von 360°-Rundgang bis Vorverkaufsquote: Im{" "}
              <Link href="/wissen/glossar" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>Glossar</Link>{" "}
              erklären wir die wichtigsten Fachbegriffe des digitalen
              Neubauvertriebs – kompakt und ohne Fachchinesisch.
            </p>
          </div>
          <div className="text-center">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Live-Demo anfragen <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
