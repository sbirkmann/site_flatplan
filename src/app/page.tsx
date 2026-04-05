"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { ArrowRight, Check, MonitorPlay, Box, BrainCircuit, Workflow, Users, Building2, Map, ShieldCheck, Cuboid, BarChart3, Smartphone, Palette, Globe } from 'lucide-react';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "flatplan.de 3D Wohnungsfinder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Interaktiver 3D Wohnungsfinder mit AI Shadow Rendering, CRM-Integration und automatisierten PDF Exposés für den Neubauvertrieb.",
    "publisher": {
      "@type": "Organization",
      "name": "Immowoo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Thomas Z." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Der 3D Wohnungsfinder hat unseren Vorverkauf um 40% beschleunigt."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sandra M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Seit wir den Flatfinder einbinden, hat sich die Lead-Qualität verdoppelt."
      }
    ]
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px', background: 'var(--bg-primary)' }}>
        
        {/* HERO */}
        <section className="bg-white" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0 6rem 0', borderBottom: '1px solid var(--border-light)' }}>
          <div className="container grid grid-2" style={{ alignItems: 'center' }}>
             <div style={{ paddingRight: '2rem', zIndex: 10 }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Next-Gen Immobilien Vertrieb</span>
                <h1 style={{ marginBottom: '2rem', letterSpacing: '-0.04em', lineHeight: 1.1, fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                  Zeigen Sie <br /> was entsteht. <br /> Verkaufen Sie sofort.
                </h1>
                <p style={{ marginBottom: '3rem', fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.6 }}>
                  Der interaktive 3D-Immobilienfinder mit AI Processing, Surroundings-Maps und vollautomatischer Lead-Engine.
                </p>
                <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                   <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ padding: '1.2rem 2.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Kostenlose Demo <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                   </Link>
                   <Link href="/features" className="btn btn-outline" style={{ padding: '1.2rem 2rem', textTransform: 'uppercase' }}>
                      Alle Features
                   </Link>
                </div>
             </div>
             <div style={{ position: 'relative', height: '600px', zIndex: 5 }}>
                 <div style={{ position: 'absolute', top: 0, right: '-5%', width: '110%', height: '100%', background: 'var(--text-primary)', padding: '0.5rem', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                     <div style={{ background: '#111', width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                        <iframe 
                           src="https://flatfind2.x900.3az.de/p/5" 
                           title="flatplan.de Demo"
                           style={{ width: '100%', height: '100%', border: 'none' }}
                        />
                     </div>
                 </div>
             </div>
          </div>
        </section>

        {/* TRUST LOGOS */}
        <section className="section bg-soft border-b" style={{ padding: '4rem 0' }}>
           <div className="container text-center">
              <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginBottom: '2rem', fontWeight: 700 }}>
                 Partner für High-End Immobilienvermarktung
              </p>
              <div className="flex justify-center flex-wrap" style={{ gap: '6rem', opacity: 0.8, alignItems: 'center' }}>
                 <div className="flex items-center gap-2">
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e3000f', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <span style={{ display: 'inline-block', width: '28px', height: '28px', background: '#e3000f', textAlign: 'center', color: 'white', fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>S</span> Sparkasse
                    </span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '3px solid var(--text-primary)', paddingBottom: '0.2rem' }}>Zinn Architektur</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>INVESTORA</span>
                 </div>
              </div>
           </div>
        </section>

        {/* TEASER 1: 3D & AI */}
        <section className="section bg-white border-b" style={{ overflow: 'hidden' }}>
           <div className="container grid grid-2 items-center">
              <div style={{ paddingRight: '4rem' }}>
                 <Cuboid size={40} color="var(--accent-primary)" style={{ marginBottom: '2rem' }} />
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Echte 3D-Navigation meets AI</h2>
                 <p className="mb-8" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>Ersetzen Sie starre 2D Grundrisse durch ein flüssiges 3D Erlebnis. Dank unseres AI Shadow Renderings wirken Fassaden, Grünanlagen und interaktive Rundgänge so realistisch wie nie zuvor.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><Check color="var(--accent-primary)" size={24} style={{ flexShrink: 0 }}/> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Keine App erforderlich, läuft im Browser</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><Check color="var(--accent-primary)" size={24} style={{ flexShrink: 0 }}/> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Automatische Bildoptimierung für Performance</span></li>
                    <li className="flex items-start gap-3"><Check color="var(--accent-primary)" size={24} style={{ flexShrink: 0 }}/> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Dynamische Grundrisse mit Etagen-Navigation</span></li>
                 </ul>
                 <Link href="/features" className="btn btn-outline mt-8" style={{ textTransform: 'uppercase' }}>Alle 3D & AI Features ansehen</Link>
              </div>
              <div style={{ position: 'relative' }}>
                 <div style={{ width: '120%', padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '16px' }}>
                    <img src="/showcase-3d.png" alt="3D Navigation Interface" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                 </div>
              </div>
           </div>
        </section>

        {/* TEASER 2: CRM & LEADS */}
        <section className="section bg-soft border-b" style={{ overflow: 'hidden' }}>
           <div className="container grid grid-2 items-center">
              <div style={{ position: 'relative', left: '-10%' }}>
                 <div style={{ width: '120%', padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', color: 'white' }}>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem', fontWeight: 600 }}>Lead Posteingang</div>
                    {[1,2,3].map((i) => (
                       <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18} /></div>
                          <div>
                             <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Lead #{1000 + i} • Vor {i*12} Minuten</div>
                             <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Automatisches PDF-Exposé versendet</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div style={{ paddingLeft: '4rem' }}>
                 <div className="flex gap-4 mb-8">
                    <Workflow size={40} color="var(--accent-primary)" />
                    <BrainCircuit size={40} color="var(--text-secondary)" />
                 </div>
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Automatisierte Lead-Maschine</h2>
                 <p className="mb-8" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>Von der On-the-fly Generierung eines PDF-Exposés bis zur direkten Synchronisierung in Ihr Makler-CRM (wie onOffice oder Propstack) – unser System vernetzt Ihre Prozesse.</p>
                 <Link href="/funktionen/pdf-expose" className="btn btn-outline" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRM & Sales Automatisierung &rarr;</Link>
              </div>
           </div>
        </section>

        {/* METRICS */}
        <section className="bg-dark text-center" style={{ padding: '6rem 0' }}>
           <div className="container grid grid-3">
              <div>
                 <div style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '1rem' }}>40%</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>Schnellerer Abverkauf</div>
                 <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Durch vorqualifizierte Leads</p>
              </div>
              <div>
                 <div style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '1rem' }}>100%</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>Automatisierung</div>
                 <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Exposés und CRM-Sync</p>
              </div>
              <div>
                 <div style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '1rem' }}>24/7</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>Virtuelle Begehungen</div>
                 <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Mit AI Shadowing und Surroundings</p>
              </div>
           </div>
        </section>

        {/* 8 CORE FEATURES GRID */}
        <section className="section bg-white border-b">
           <div className="container text-center mb-12 animate-up">
              <h2>Die 8 Säulen unserer Plattform</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Ein nahtloses System für Projektentwickler, Bauträger und Makler.</p>
           </div>
           <div className="container grid grid-4">
              {[
                { icon: <Cuboid size={28} />, title: '3D Erlebnisse', desc: 'Rundgänge & dynamische Grundrisse' },
                { icon: <BrainCircuit size={28} />, title: 'Künstliche Intelligenz', desc: 'Shadow Rendering & Content Gen' },
                { icon: <Building2 size={28} />, title: 'Projektmanagement', desc: 'Zentrale Verwaltung von Einheiten' },
                { icon: <Map size={28} />, title: 'Lage & Umgebung', desc: 'Interaktive Maps & Isochronen' },
                { icon: <MonitorPlay size={28} />, title: 'Lead-Generierung', desc: 'Landingpages & Auto-Exposés' },
                { icon: <Users size={28} />, title: 'CRM System', desc: 'Adressbuch & Benachrichtigungen' },
                { icon: <Workflow size={28} />, title: 'Schnittstellen', desc: 'OpenImmo Export & externe Sync' },
                { icon: <ShieldCheck size={28} />, title: 'Analytics', desc: 'Activity-Logs & Rechtemanagement' },
              ].map((f, i) => (
                <div key={i} className="card animate-up" style={{ animationDelay: `${i * 60}ms`, padding: '2rem 1.5rem', background: 'var(--bg-primary)' }}>
                   <div style={{ width: '48px', height: '48px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--accent-primary)', borderRadius: '12px' }}>{f.icon}</div>
                   <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                   <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{f.desc}</p>
                </div>
              ))}
           </div>
           <div className="text-center mt-12">
              <Link href="/features" className="btn btn-outline btn-lg" style={{ textTransform: 'uppercase' }}>Details auf der Feature-Seite</Link>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* CTA */}
        <section className="section bg-white text-center" style={{ padding: '8rem 0' }}>
           <div className="container max-w-4xl mx-auto">
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Nehmen Sie den Vertriebssprint auf.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Integrieren Sie einen branchenführenden 3D Wohnungsfinder in Ihr nächstes Hochbauprojekt.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ padding: '1.25rem 3rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                 Jetzt Projekt anfragen
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
