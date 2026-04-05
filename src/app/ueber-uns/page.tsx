"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Building2, Users, Code2, Palette, ArrowRight, Check, ShieldCheck, Globe } from 'lucide-react';

export default function UeberUns() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über Investora Commercial | flatplan.de",
    "description": "Investora Commercial entwickelt interaktive 3D Wohnungsfinder für den deutschen Immobilienmarkt. Erfahren Sie mehr über unser Team und unsere Mission."
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
             <div className="badge"><Building2 size={16} style={{ marginRight: '8px' }}/> Über uns</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Wir machen Architektur erlebbar.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
               Investora Commercial verbindet Immobilienkompetenz mit Software-Engineering. 
               Unser Ziel: Den Neubauvertrieb in der DACH-Region nachhaltig digitalisieren.
             </p>
          </div>
        </section>

        {/* WERTE */}
        <section className="section bg-soft border-b">
           <div className="container text-center mb-12 animate-up">
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Unsere DNA</span>
              <h2>Was uns antreibt</h2>
           </div>
           <div className="container grid grid-4">
              {[
                { icon: <Code2 size={36} color="var(--accent-primary)" />, title: 'Engineering', desc: 'WebGL, Three.js, REST-APIs – wir sind Entwickler im Herzen.' },
                { icon: <Palette size={36} color="var(--accent-primary)" />, title: '3D-Visualisierung', desc: 'Architektur-Renderings, die banale CAD-Daten in Emotionen verwandeln.' },
                { icon: <Users size={36} color="var(--accent-primary)" />, title: 'Immobilien-Know-how', desc: 'Wir verstehen den Workflow von Bauträgern, Maklern und Banken.' },
                { icon: <ShieldCheck size={36} color="var(--accent-primary)" />, title: 'DSGVO & Qualität', desc: 'Deutsche Server, ISO-Standards, keine Kompromisse bei der Qualität.' },
              ].map((v, i) => (
                <div key={i} className="card animate-up text-center" style={{ animationDelay: `${i * 80}ms`, padding: '2.5rem 1.5rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>{v.icon}</div>
                   <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                   <p style={{ margin: 0, fontSize: '0.95rem' }}>{v.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* STORY */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Warum flatplan.de?</h2>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>
                    Die Idee entstand aus einer simplen Beobachtung: Bauträger investieren Millionen in Architektur und Bauqualität, 
                    aber ihr digitaler Vertrieb besteht aus statischen PDF-Exposés und Immoscout-Inseraten. Das ist ein Missverhältnis.
                 </p>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>
                    Wir haben flatplan.de entwickelt, um diese Lücke zu schließen. Unser Team vereint Expertise aus dem 
                    Software-Engineering, der 3D-Architekturvisualisierung und dem Immobilienvertrieb.
                 </p>
                 <p style={{ fontSize: '1.05rem' }}>
                    Das Ergebnis: Ein System, das nicht nur optisch beeindruckt, sondern messbare Geschäftsergebnisse liefert – 
                    schnellere Vorverkaufsquoten, qualifiziertere Leads und drastisch reduzierte Vertriebskosten.
                 </p>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2.5rem' }}>
                 <div style={{ background: 'var(--text-primary)', padding: '3rem', color: 'white' }}>
                    <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1.5rem' }}>Auf einen Blick</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                       {[
                         'Gegründet in München',
                         'Spezialisiert auf Immobilien-Tech',
                         'WebGL & Three.js Expertise',
                         '100% deutscher Hosting-Standort',
                         'Integrationen mit allen großen CRMs',
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3" style={{ marginBottom: '1.25rem' }}>
                            <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={22} />
                            <span style={{ fontSize: '1.1rem', color: 'white' }}>{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* TECH STACK */}
        <section className="section bg-soft border-b">
           <div className="container text-center mb-12 animate-up">
              <h2>Unsere Technologie-Kompetenz</h2>
           </div>
           <div className="container grid grid-3 animate-up delay-100">
              {[
                { title: '3D-Engine', items: ['WebGL 2.0', 'Three.js', 'Custom Shader', 'PBR Materials', 'LOD-Streaming'] },
                { title: 'Backend & API', items: ['REST / GraphQL', 'OpenImmo XML', 'Webhooks', 'SMTP-Integration', 'OAuth 2.0'] },
                { title: 'Integration', items: ['onOffice API', 'Propstack', 'FIO Systems', 'EMPRO', 'Immoprofessional'] },
              ].map((stack, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem' }}>
                   <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', textAlign: 'center' }}>{stack.title}</h3>
                   <ul style={{ listStyle: 'none', padding: 0 }}>
                      {stack.items.map((item, j) => (
                        <li key={j} style={{ padding: '0.75rem 0', borderBottom: j < stack.items.length - 1 ? '1px solid var(--border-light)' : 'none', textAlign: 'center', fontWeight: 600, fontSize: '1rem' }}>{item}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* CTA */}
        <section className="section bg-white text-center">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Lassen Sie uns zusammenarbeiten.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Wir freuen uns auf Ihr nächstes Projekt.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                 Kontakt aufnehmen <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
