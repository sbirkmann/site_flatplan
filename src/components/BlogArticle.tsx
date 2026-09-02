import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { blogPosts, formatDate, type BlogPost } from "@/lib/blog";
import { site } from "@/lib/site";
import CtaBand from "@/components/ui/CtaBand";

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

      <section className="page-hero border-b" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: "52rem" }}>
          <Link href="/blog" className="measure" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
            ← Artikel
          </Link>
          <span className="eyebrow">{post.tag}</span>
          <h1 style={{ maxWidth: "18ch" }}>{post.title}</h1>
          <p className="lead" style={{ maxWidth: "38rem" }}>{post.description}</p>
          <p className="measure" style={{ marginBottom: "1.75rem" }}>
            {formatDate(post.date)}  ·  {post.readingMinutes} Min.
          </p>
          <figure className="overlap-frame" style={{ margin: 0, padding: "0.55rem" }}>
            <img src={post.image} alt={post.imageAlt} width={1200} height={750} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }} />
          </figure>
        </div>
      </section>

      <article className="section bg-white border-b">
        <div className="container" style={{ maxWidth: "52rem" }}>
          <div className="prose" style={{ margin: 0, maxWidth: "66ch" }}>{children}</div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section bg-soft border-b">
          <div className="container">
            <p className="plan-rule mb-8">Weitere Artikel</p>
            <div className="blog-board blog-board--related">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-card-frame">
                    <img src={p.image} alt={p.imageAlt} width={1200} height={750} />
                  </div>
                  <div className="blog-card-plate">
                    <span className="measure">{p.tag} · {formatDate(p.date)}</span>
                    <strong>{p.title}</strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </main>
  );
}
