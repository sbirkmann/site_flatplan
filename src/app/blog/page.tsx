"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    slug: '/blog/lead-qualitaet-verdoppeln',
    title: 'Wie ein 3D-Konfigurator die Lead-Qualität im Neubauvertrieb verdoppelt',
    excerpt: 'Erfahren Sie, warum Wohnungskonfiguratoren die Konversionsraten dramatisch steigern und wie Bauträger davon profitieren.',
    date: '15. März 2026',
    readTime: '8 Min.',
    category: 'Lead-Generierung',
  },
  {
    slug: '/blog/3d-architekturvisualisierung-kosten',
    title: '3D Architekturvisualisierung Kosten (2026): Was kostet ein Rendering?',
    excerpt: 'Ein detaillierter Kostenvergleich zwischen statischen Renderings und interaktiven 3D Wohnungsfindern.',
    date: '12. März 2026',
    readTime: '10 Min.',
    category: 'Kosten & ROI',
  },
  {
    slug: '/blog/crm-integration-neubauvertrieb',
    title: 'CRM-Integration für den Neubauvertrieb: onOffice, Propstack & Co.',
    excerpt: 'Wie Sie Ihr CRM-System nahtlos an einen 3D Wohnungsfinder anbinden und Lead-Workflows vollständig automatisieren.',
    date: '10. März 2026',
    readTime: '7 Min.',
    category: 'Integrationen',
  },
];

export default function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "flatplan.de Wissens-Hub",
    "description": "Fachartikel zu 3D-Immobilienmarketing, Neubauvertrieb, Lead-Generierung und PropTech-Trends.",
    "publisher": { "@type": "Organization", "name": "Investora Commercial" }
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        {/* HERO */}
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center animate-up">
             <div className="badge"><BookOpen size={16} style={{ marginRight: '8px' }}/> Wissens-Hub</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Blog & Fachbeiträge
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
               Strategien, Analysen und Best Practices für digitalen Immobilienvertrieb und 3D-Architekturvisualisierung.
             </p>
          </div>
        </section>

        {/* BLOG POSTS */}
        <section className="section bg-soft">
           <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {posts.map((post, i) => (
                <Link key={i} href={post.slug} style={{ textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>
                   <article className="card animate-up" style={{ animationDelay: `${i * 100}ms`, padding: '2.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                      <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
                         <span style={{ background: 'var(--accent-light)', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.8rem', padding: '0.3rem 0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{post.category}</span>
                         <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{post.date}</span>
                         <span className="flex items-center gap-1" style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}><Clock size={14} /> {post.readTime}</span>
                      </div>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>{post.title}</h2>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>{post.excerpt}</p>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         Weiterlesen <ArrowRight size={16} />
                      </span>
                   </article>
                </Link>
              ))}
           </div>
        </section>

        {/* CTA */}
        <section className="section bg-dark text-center">
           <div className="container max-w-4xl mx-auto">
              <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Bereit für den digitalen Vertrieb?</h2>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1.15rem', marginBottom: '2rem' }}>Lassen Sie uns über Ihr Projekt sprechen.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>Projekt anfragen</Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
