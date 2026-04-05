"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Target, TrendingUp, Presentation, Users, CheckCircle, BarChart } from 'lucide-react';

export default function Neubauvertrieb() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digitaler Neubauvertrieb: Maximale Conversion mit 3D Wohnungsfindern",
    "description": "Revolutionieren Sie den Neubauvertrieb. Wie Bauträger und Immobilienmakler durch interaktive 3D Grundrisse und Visualisierungen ihre Verkaufszyklen verkürzen."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        {/* HERO */}
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center" style={{ position: 'relative' }}>
             <div className="badge"><Target size={16} className="mr-2" style={{ marginRight: '8px' }}/> Use Case</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Neubauvertrieb: Verkaufen bevor der Spaten sticht.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Mit unserer 3D Flatfinder Technologie machen Sie Architektur begreifbar und 
               erreichen Vorverkaufsquoten für Bankenfinanzierungen in Rekordzeit.
             </p>
             <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Strategie besprechen &rarr;
             </Link>
             
             {/* Large Hero Image */}
             <div className="mt-8" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '1rem' }}>
                <img src="/flatfinder_features_expose.png" alt="3D Wohnungsfinder Interface" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-2 items-center">
              <div>
                 <img src="/showcase-3d.png" alt="flatplan.de Showcase Vogelperspektive" style={{ width: '100%', height: 'auto', border: '1px solid var(--border-light)' }} />
              </div>
              <div style={{ paddingLeft: '2rem' }}>
                 <TrendingUp size={40} color="var(--accent-primary)" className="mb-4" />
                 <h2 className="mb-6">Klassischer Vertrieb vs. Digitaler Wohnungsfinder</h2>
                 <p className="mb-4">Der klassische <strong>Neubauvertrieb</strong> lief jahrzehntelang nach demselben Schema ab: Bauzaun aufstellen, gedruckte Exposés verteilen und Anzeigen schalten. Käufer hatten immense Schwierigkeiten, aus einem technischen 2D Grundriss die räumliche Wirkung ihres zukünftigen Zuhauses abzuleiten.</p>
                 <p className="mb-8">Die Lösung: Ein <strong>3D Wohnungsfinder</strong>. Ihre digital-affine Zielgruppe studiert das komplette Immobilienprojekt bequem abends auf dem Tablet. Sie betrachten die <strong>3D Architekturvisualisierung</strong> und navigieren durch das voll möblierte Gebäude.</p>
                 <Link href="/funktionen/3d-grundrisse" className="btn btn-outline" style={{ borderRadius: 0, textTransform: 'uppercase' }}>Interaktive 3D Grundrisse ansehen &rarr;</Link>
              </div>
           </div>
        </section>

        {/* CUSTOMER JOURNEY */}
        <section className="section bg-white border-b overflow-hidden">
           <div className="container max-w-4xl mx-auto text-center mb-12">
              <h2>Die digitale Customer Journey im 3D Immobilienmarketing</h2>
              <p>Wie ein Interessent über Ihren neuen Funnel zum zufriedenen Käufer wird.</p>
           </div>
           <div className="container grid" style={{ gap: '0' }}>
              <div className="grid grid-2" style={{ border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', padding: '3rem', borderBottom: 'none' }}>
                 <div className="flex items-center gap-4">
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>1</span>
                    <h3 style={{ margin: 0 }}>Social Media & Ads</h3>
                 </div>
                 <p style={{ margin: 0 }}>Der Kunde sieht eine Social-Media-Ad (Facebook/Instagram) Ihres Bauprojekts. Der Klick führt direkt zur Flatfinder-Landingpage.</p>
              </div>
              <div className="grid grid-2" style={{ border: '1px solid var(--border-light)', padding: '3rem', borderBottom: 'none' }}>
                 <div className="flex items-center gap-4">
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>2</span>
                    <h3 style={{ margin: 0 }}>Interaktives Filtern</h3>
                 </div>
                 <p style={{ margin: 0 }}>Die gesamte Anlage lädt ohne App. Der Interessent filtert in Echtzeit nach "3-Zimmer", "Balkon", "Budget max 500k€".</p>
              </div>
              <div className="grid grid-2" style={{ border: '1px solid var(--border-light)', background: 'var(--text-primary)', color: 'white', padding: '3rem' }}>
                 <div className="flex items-center gap-4">
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>3</span>
                    <h3 style={{ margin: 0, color: 'white' }}>Conversion & Lead</h3>
                 </div>
                 <p style={{ margin: 0, color: 'var(--text-tertiary)' }}>Er klickt auf eine passende WHG und drückt "Exposé anfordern". Ihr Vertrieb erhält Sekunden später einen extrem warmen Lead.</p>
              </div>
           </div>
        </section>

        {/* IMAGE BREAKOUT */}
        <section className="bg-soft border-b" style={{ padding: '4rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                 <h2>Die Vorteile für Projektentwickler</h2>
                 <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Oft fordern finanzierende Banken bestimmte Vorverkaufsquoten (meist 30-50%). Je greifbarer Sie Ihr Bauvorhaben präsentieren, desto schneller generieren Sie Reservierungen und Notartermine. Eine Investition in High-End <strong>Digitales Immobilienmarketing</strong> mit flatplan.de rechnet sich meist schon mit dem Verkauf der allerersten Einheit.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-center gap-2 mb-2"><CheckCircle size={20} color="var(--accent-primary)" /> <strong>Senkung der Maklerkosten</strong> durch Eigenvermarktung (optional)</li>
                    <li className="flex items-center gap-2 mb-2"><CheckCircle size={20} color="var(--accent-primary)" /> <strong>Globale Vermarktung</strong> – Investoren aus der ganzen Welt können besichtigen</li>
                 </ul>
              </div>
              <div>
                 <img src="/showcase-detail.png" alt="flatplan.de 3D Grundriss Detail" style={{ width: '100%', border: '1px solid var(--border-light)' }} />
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
