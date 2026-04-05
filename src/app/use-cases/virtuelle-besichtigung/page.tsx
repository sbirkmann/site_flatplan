"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Camera, Clock, Globe, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function VirtuelleBesichtigung() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Virtuelle 3D Besichtigungen für Immobilien",
    "description": "Ortsunabhängig Immobilien vermarkten. Wie virtuelle 3D-Rundgänge im Vorverkauf den Makler-Aufwand minimieren und die Leads qualifizieren."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        {/* HERO */}
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container grid grid-2 items-center">
             <div className="hero-text animate-up" style={{ zIndex: 10 }}>
                <div className="badge"><Camera size={16} className="mr-2" style={{ marginRight: '8px' }}/> Immobilienpräsentation</div>
                <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Besichtigungen neu gedacht. <br/> 24/7. Weltweit.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
                  Reduzieren Sie Reisezeiten und Makleraufwand um bis zu 80%. Der 3D-Wohnungsfinder 
                  ermöglicht Ihren Kunden eine vollständige, maßstabsgetreue Hausbegehung im Browser.
                </p>
                <Link href="/kontakt" className="btn btn-primary btn-lg">
                   System Live Erleben <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </Link>
             </div>
             
             {/* Showcase Image with delay */}
             <div className="hero-visual animate-up delay-200" style={{ position: 'relative', zIndex: 5 }}>
                 <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '1rem', boxShadow: 'var(--shadow-xl)' }}>
                    <img src="/showcase-detail.png" alt="Virtuelle Besichtigung Interface" style={{ width: '100%', height: 'auto', display: 'block' }} />
                 </div>
             </div>
          </div>
        </section>

        {/* 1-2-3 STEPS */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto text-center mb-12 animate-up delay-100">
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Prozess</span>
              <h2>So funktioniert die virtuelle Besichtigung</h2>
           </div>
           
           <div className="container grid grid-3">
              <div className="card animate-up delay-100" style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '-20px', left: '2rem', fontSize: '4rem', fontWeight: 800, color: 'var(--bg-soft)', lineHeight: 1, zIndex: 0 }}>1</div>
                 <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modellerstellung</h3>
                    <p style={{ marginBottom: '0', fontSize: '0.95rem' }}>Sie übermitteln uns DWG oder BIM Daten. Wir erstellen ein hochdetailliertes, texturiertes und möbliertes 3D-Modell Ihres geplanten Objekts.</p>
                 </div>
              </div>
              <div className="card animate-up delay-200" style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '-20px', left: '2rem', fontSize: '4rem', fontWeight: 800, color: 'var(--bg-soft)', lineHeight: 1, zIndex: 0 }}>2</div>
                 <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>System-Integration</h3>
                    <p style={{ marginBottom: '0', fontSize: '0.95rem' }}>Wir stellen Ihnen einen einfachen Iframe-Code zur Verfügung. Sie binden das System in 5 Minuten in Ihre bestehende Landingpage ein.</p>
                 </div>
              </div>
              <div className="card animate-up delay-300" style={{ position: 'relative', border: '1px solid var(--accent-primary)' }}>
                 <div style={{ position: 'absolute', top: '-20px', left: '2rem', fontSize: '4rem', fontWeight: 800, color: 'var(--accent-light)', lineHeight: 1, zIndex: 0 }}>3</div>
                 <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vermarktung</h3>
                    <p style={{ marginBottom: '0', fontSize: '0.95rem' }}>Nutzer betreten die virtuelle Umgebung, filtern Einheiten, senden qualifizierte Leads und erhalten automatisiert Exposés.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* COMPARISON / BENEFITS */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Das Ende der nutzlosen "Sightseeing"-Termine</h2>
                 <p className="mb-4">Wer im <strong>Immobilienvertrieb</strong> tätig ist, kennt das Problem: Unzählige Stunden fließen in Vor-Ort Termine mit Kunden, die weder über das entsprechende Kapital verfügen, noch wirklich verstanden haben, was sie dort besichtigen.</p>
                 <p className="mb-8">Die <strong>virtuelle Besichtigung</strong> eliminiert diesen Streuverlust. Durch die immersive Präsentation vorab findet eine massive Selbstqualifizierung statt. Nur Interessenten mit echtem Kaufinteresse rufen an.</p>
                 
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-center gap-3 mb-4"><Check color="var(--accent-primary)" size={24} /> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Globale Reichweite (Auslandsinvestoren)</span></li>
                    <li className="flex items-center gap-3 mb-4"><Check color="var(--accent-primary)" size={24} /> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Keine Schmutzbaustellen-Termine mehr</span></li>
                    <li className="flex items-center gap-3"><Check color="var(--accent-primary)" size={24} /> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Voll möbliert statt grauer Rohbau</span></li>
                 </ul>
              </div>
              <div className="animate-up delay-200">
                 <img src="/flatfinder_features_expose.png" alt="flatplan.de Showcase Vogelperspektive" style={{ width: '100%', height: 'auto', border: '1px solid var(--border-light)' }} />
              </div>
           </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">Knowledge Base</div>
                 <h2>Häufige Fragen zu 3D-Rundgängen</h2>
              </div>
              
              <div style={{ background: 'white', padding: '2rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Müssen Kunden eine App installieren?</summary>
                    <p>Definitiv nicht. Um maximale Conversion-Raten im <strong>Neubauvertrieb</strong> zu gewährleisten, läuft unsere Architektur vollständig im Webbrowser (Chrome, Safari, Edge) unter iOS, Android, Windows und macOS.</p>
                 </details>
                 
                 <details className="faq-item">
                    <summary>Wie gut muss die Internetverbindung sein?</summary>
                    <p>Die 3D-Modelle werden (im Vergleich zu Videostreams) stark komprimiert. Nach einem kurzen, initialen Download (meist unter 20MB) wird das gesamte Gebäude in Echtzeit über die GPU des Nutzers gerendert. So ist auch mobile Nutzung problemlos möglich.</p>
                 </details>

                 <details className="faq-item">
                    <summary>Eignet sich dies auch für Bestandsimmobilien?</summary>
                    <p>Primär ist unser System für den sogenannten <strong>Off-Plan Vertrieb</strong> (Neubau, Revitalisierung, Projektentwicklung) konzipiert, da wir aus CAD / BIM Daten fotorealistische Welten erschaffen, die in der Realität noch gar nicht existieren.</p>
                 </details>
                 
                 <details className="faq-item" style={{ borderBottom: 'none', marginBottom: 0 }}>
                    <summary>Sind die 3D Rundgänge DSGVO-konform?</summary>
                    <p style={{ paddingBottom: 0 }}>Ja. Ihre Daten und die daraus generierten Leads werden verschlüsselt auf deutschen Servern verarbeitet. Wir handeln streng nach den Vorgaben der europäischen Datenschutz-Grundverordnung.</p>
                 </details>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
