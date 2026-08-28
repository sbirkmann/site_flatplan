"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blogPosts, formatDate, type BlogPost } from "@/lib/blog";

const tags = ["Alle", ...Array.from(new Set(blogPosts.map((p) => p.tag)))];

export default function BlogIndex() {
  const [tag, setTag] = useState("Alle");
  const posts = useMemo(
    () => (tag === "Alle" ? blogPosts : blogPosts.filter((p) => p.tag === tag)),
    [tag],
  );

  return (
    <>
      <div className="tag-filter mb-8">
        {tags.map((t) => (
          <button key={t} type="button" aria-pressed={tag === t} onClick={() => setTag(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="blog-board">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} lead={tag === "Alle" && i === 0} />
        ))}
      </div>
    </>
  );
}

function BlogCard({ post, lead }: { post: BlogPost; lead?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`blog-card${lead ? " blog-card--lead" : ""}`}>
      <div className="blog-card-frame">
        <img src={post.image} alt={post.imageAlt} width={1200} height={750} />
      </div>
      <div className="blog-card-plate">
        <span className="measure">
          {formatDate(post.date)}  ·  {post.tag}  ·  {post.readingMinutes} Min.
        </span>
        <strong>{post.title}</strong>
        <span className="blog-card-desc">{post.description}</span>
      </div>
    </Link>
  );
}
