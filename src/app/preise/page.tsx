"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Tag, Check, Award, ArrowRight } from 'lucide-react';

export default function Preise() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Preise & Packages | flatplan.de",
    "description": "Transparente Kostenstruktur für den 3D-Wohnungsfinder. Perfekt gestaffelt nach Wohneinheiten und Gebäude-Komplexität."
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
             <div className="badge"><Tag size={16} style={{ marginRight: '8px' }}/> Investition in Ihren Vertrieb</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Keine versteckten Gebühren. Fair kalkuliert.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Unsere Flatfinder-Engine rechnet sich typischerweise bereits beim beschleunigten Abverkauf 
               der ersten Wohneinheit durch eingesparte Maklerarbeitszeit und exzellente Vorqualifizierung.
             </p>
          </div>
        </section>

        {/* PRICING PLANS */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-3">
              
              {/* PLAN 1 */}
              <div className="card animate-up" style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
                 <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Quartier & Objekt</h3>
                    <p style={{ margin: 0, fontSize: '1.05rem' }}>Für Einzelgebäude und kleine Wohnanlagen bis 30 Einheiten.</p>
                 </div>
                 <div style={{ marginBottom: '2.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Mittelstand</span>
                    <span style={{ display: 'block', color: 'var(--text-tertiary)', fontSize: '1rem', marginTop: '0.5rem' }}>Einmaliges Setup + monatliche Lizenz</span>
                 </div>
                 <ul style={{ listStyle: 'none', padding: 0, flex: 1, marginBottom: '3rem' }}>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>Komplettes 3D Außenmodell</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>Alle Grundrisse als 3D Slice-View</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>Browserbasierter Filter & Finder</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--text-tertiary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5, textDecoration: 'line-through', color: 'var(--text-tertiary)' }}>CRM API Integration</span>
                    </li>
                 </ul>
                 <Link href="/kontakt" className="btn btn-outline" style={{ width: '100%', textTransform: 'uppercase', fontSize: '1rem', padding: '1rem' }}>Angebot anfordern</Link>
              </div>

              {/* PLAN 2 PRO */}
              <div className="card animate-up delay-100" style={{ background: 'var(--text-primary)', color: 'white', border: '2px solid var(--accent-primary)', display: 'flex', flexDirection: 'column', position: 'relative', transform: 'scale(1.05)', zIndex: 10, boxShadow: 'var(--shadow-xl)', padding: '3rem' }}>
                 <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent-primary)', color: 'white', fontSize: '0.8rem', fontWeight: 800, padding: '0.6rem 1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <Award size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> Beliebteste Lösung
                 </div>
                 
                 <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #334155', paddingBottom: '2rem', marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'white' }}>Megaprojekt & Areal</h3>
                    <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-tertiary)' }}>Für Bauträger ab 30 bis +500 Einheiten.</p>
                 </div>
                 <div style={{ marginBottom: '2.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>Enterprise</span>
                    <span style={{ display: 'block', color: 'var(--text-tertiary)', fontSize: '1rem', marginTop: '0.5rem' }}>Abhängig von Gebäudeanzahl</span>
                 </div>
                 <ul style={{ listStyle: 'none', padding: 0, flex: 1, marginBottom: '3rem' }}>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.5 }}>Alles aus dem Quartier-Paket</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.5 }}>Volle CRM-Integration (onOffice, FIO, etc.)</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.5 }}>Dynamische PDF-Exposé-Generierung</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.5 }}>Polygon-Reduktion für Mobile WebGL</span>
                    </li>
                 </ul>
                 <Link href="/kontakt" className="btn btn-primary" style={{ width: '100%', textTransform: 'uppercase', fontSize: '1rem', padding: '1rem' }}>Angebot anfordern</Link>
              </div>

              {/* PLAN 3 */}
              <div className="card animate-up delay-200" style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
                 <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Agentur & White-Label</h3>
                    <p style={{ margin: 0, fontSize: '1.05rem' }}>Für Immobilienmarketing-Agenturen und PropTechs.</p>
                 </div>
                 <div style={{ marginBottom: '2.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Partner-API</span>
                    <span style={{ display: 'block', color: 'var(--text-tertiary)', fontSize: '1rem', marginTop: '0.5rem' }}>Multi-Mandanten fähig</span>
                 </div>
                 <ul style={{ listStyle: 'none', padding: 0, flex: 1, marginBottom: '3rem' }}>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>White-Label Server Hosting (DE)</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>Headless Data/Inventory API</span>
                    </li>
                    <li className="flex items-start gap-4" style={{ marginBottom: '1.25rem' }}>
                       <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={24} />
                       <span style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>CI/CD Anpassung an Endkunden-Brands</span>
                    </li>
                 </ul>
                 <Link href="/kontakt" className="btn btn-outline" style={{ width: '100%', textTransform: 'uppercase', fontSize: '1rem', padding: '1rem' }}>Partnerschaft anfragen</Link>
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="section bg-white border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">Lizenzierung</div>
                 <h2>Häufige Fragen zu den Kosten</h2>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Wie setzen sich die Kosten zusammen?</summary>
                    <p>Die Kosten splitten sich in ein einmaliges Setup-Honorar (3D-Modellierung, Texturierung, Optimierung aus Ihren DWG/BIM-Daten) sowie eine moderate, monatliche Serverhosting- und Lizenz-Gebühr.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Gibt es versteckte Gebühren für Updates?</summary>
                    <p>Nein. Notwendige Browser-Updates sind durch Ihre Lizenzgebühr zu 100% abgedeckt. Nur signifikante Architektur-Wechsel erfordern eine Nachbereitung des 3D Modells.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none', marginBottom: 0 }}>
                    <summary>Reduzieren sich die Kosten bei vorhandenen BIM Modellen?</summary>
                    <p style={{ paddingBottom: 0 }}>Absolut. Wenn Ihr Architekt bereits top-strukturierte IFC/BIM Daten liefert, entfällt ein großer Teil der Extrusions-Arbeit, was das Budget messbar entlastet.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="light" />

        {/* CTA */}
        <section className="section bg-dark text-center">
           <div className="container max-w-4xl mx-auto">
              <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Lassen Sie sich ein unverbindliches Angebot erstellen.</h2>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1.15rem', marginBottom: '2rem' }}>Wir kalkulieren fair und transparent basierend auf Ihren Projektanforderungen.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>Jetzt Angebot anfordern</Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
