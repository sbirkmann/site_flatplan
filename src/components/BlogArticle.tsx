import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { blogPosts, formatDate, type BlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

/**
 * Gemeinsames Artikel-Layout: Hero mit Bild & Meta, prose-Inhalt,
 * Related-Posts aus der Registry, Article-JSON-LD und CTA.
 */
export default function BlogArticle({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...fallback];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    inLanguage: "de-DE",
    author: { "@type": "Organization", name: site.company.brand, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbs([
            { name: "Start", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b" style={{ paddingBottom: "0" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="animate-up">
            <span className="badge">{post.tag}</span>
            <h1 style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", maxWidth: "56rem" }}>{post.title}</h1>
            <p className="lead" style={{ maxWidth: "48rem" }}>{post.description}</p>
            <div className="flex items-center gap-8 mb-8" style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", fontWeight: 500 }}>
              <span className="flex items-center gap-2"><CalendarDays size={16} /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-2"><Clock3 size={16} /> {post.readingMinutes} Min. Lesezeit</span>
            </div>
          </div>
          <div style={{ borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <img src={post.image} alt={post.imageAlt} style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>

      {/* INHALT */}
      <article className="section bg-white border-b">
        <div className="container max-w-4xl mx-auto">
          <div className="prose" style={{ margin: 0, maxWidth: "72ch" }}>{children}</div>
        </div>
      </article>

      {/* WEITERLESEN */}
      {relatedPosts.length > 0 && (
        <section className="section bg-soft border-b">
          <div className="container">
            <h2 style={{ fontSize: "1.75rem" }} className="mb-8">Weiterlesen</h2>
            <div className="grid grid-3">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <img src={p.image} alt={p.imageAlt} style={{ width: "100%", aspectRatio: "1200 / 630", objectFit: "cover" }} loading="lazy" />
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-hover)" }}>{p.tag}</span>
                    <h3 style={{ fontSize: "1.0625rem", margin: 0 }}>{p.title}</h3>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "auto" }}>
                      {formatDate(p.date)} · {p.readingMinutes} Min.
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Lieber zeigen statt lesen?</h2>
          <p className="lead mb-8">
            In einer kostenlosen Live-Demo sehen Sie den interaktiven
            Wohnungsfinder an einem echten Projekt.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
