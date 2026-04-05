"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { FileText, Download, Check, Settings, Printer, Database } from 'lucide-react';
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";

export default function PdfExpose() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Automatisierte PDF-Exposés für Immobilien | flatplan.de",
    "description": "Exposé-Generator: Erstellen Sie aus dem interaktiven 3D Wohnungskonfigurator heraus dynamische, CI-konforme PDF-Exposés für Bauträger und Makler."
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
             <div className="badge"><FileText size={16} className="mr-2" style={{ marginRight: '8px' }}/> Exposé-Pipeline</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Das Exposé. Dynamisch, aktuell & brand-safe.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Befreien Sie sich vom stundenlangen InDesign-Layouten. Unser PDF-Generator erzeugt
               auslaufend aktuelle Immobilien-Exposés direkt aus den 3D-Metadaten Ihres Flatfinders.
             </p>
             <div className="flex justify-center gap-4">
               <Link href="/funktionen/integrationen" className="btn btn-primary btn-lg" style={{ borderRadius: 0, textTransform: 'uppercase' }}>CRM-Anbindung ansehen</Link>
             </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Das Ende der veralteten PDF-Broschüre</h2>
                 <p className="mb-4">Wer kennt es nicht: Die 100-seitige Immobilienbroschüre wird vom Projektentwickler in Auftrag gegeben. Eine Woche nach dem Druck ändert sich ein Wohnungspreis oder der Grundriss von Einheit 12 wird durch Zusammenlegung modifiziert. Alle PDFs sind sofort wertlos.</p>
                 <p className="mb-8">Die Lösung ist der <strong>dynamische Exposé-Generator</strong> von flatplan.de. Die Datenquelle (Single Point of Truth) ist das Live-Modell. Ändert der Makler in seinem CRM den Preis, ist das vom User heruntergeladene Exposé eine Sekunde später aktualisiert.</p>
                 
                 <div className="card bg-white mt-8" style={{ borderLeft: '4px solid var(--accent-primary)', padding: '2rem' }}>
                    <Settings color="var(--accent-primary)" size={32} style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.25rem' }}>Echtzeit-Renderings</h3>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>Das PDF zieht sich nicht nur Text, sondern greift auf die hochauflösenden 3D-Snapshots der ausgewählten Wohnung (Slice-View) automatisch zu. Kein lästiges Screenshot-Sammeln mehr.</p>
                 </div>
              </div>
              <div className="animate-up delay-100 flex justify-center">
                 <div style={{ position: 'relative', width: '80%', background: 'white', padding: '1rem', boxShadow: 'var(--shadow-2xl)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '30px', background: 'var(--text-primary)', marginBottom: '1rem' }}></div>
                    <img src="/showcase-detail.png" alt="Dynamic PDF Content Header" style={{ width: '100%', marginBottom: '1rem' }} />
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Wohnung 14 - Penthouse</h4>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Kaufpreis: 780.000 € • Wohnfläche: 124 m²</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                       <div style={{ flex: 1, height: '80px', background: 'var(--bg-secondary)' }}></div>
                       <div style={{ flex: 1, height: '80px', background: 'var(--bg-secondary)' }}></div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--accent-primary)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                       <Download size={32} />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FEATURES DETAIL */}
        <section className="section bg-white border-b">
           <div className="container max-w-4xl mx-auto text-center mb-12 animate-up">
              <h2>Perfekt abgestimmt auf Ihre Marke</h2>
           </div>
           <div className="container grid grid-3">
              <div className="card-soft animate-up" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '2.5rem' }}>
                 <Printer size={32} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Corporate Identity (CI)</h3>
                 <p style={{ margin: 0, fontSize: '0.95rem' }}>Schriftarten, Farben, Logos und Margins: Unsere Engine baut das Exposé in exakt dem Design auf, das Ihre Marketingabteilung oder Digitalagentur vorschreibt.</p>
              </div>
              <div className="card-soft animate-up delay-100" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '2.5rem' }}>
                 <Check size={32} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Rechtsicherheit</h3>
                 <p style={{ margin: 0, fontSize: '0.95rem' }}>Impressum, Provisionshinweise nach aktueller Gesetzgebung und Widerrufsbelehrungen können obligatorisch an jedes PDF angehängt werden.</p>
              </div>
              <div className="card-soft animate-up delay-200" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '2.5rem' }}>
                 <Database size={32} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>OpenImmo Kompatibel</h3>
                 <p style={{ margin: 0, fontSize: '0.95rem' }}>Sollten Sie Grundrisse und Bilder in Ihrem CRM (Propstack, onOffice) aktualisieren, importiert der Flatfinder diese nachts oder per Webhook sofort in das Live-PDF.</p>
              </div>
           </div>
        </section>

        <CoreFeaturesGrid />

      </main>
      <Footer />
    </>
  );
}
