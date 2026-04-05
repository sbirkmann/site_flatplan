"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Database, MousePointer2, Settings2, BarChart2, Mails, Lock } from 'lucide-react';

export default function LeadGenerierung() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Automatisierte Lead-Generierung in der Immobilienvermarktung",
    "description": "Erhalten Sie warm qualifizierte Leads inklusive Wunscheinheit direkt aus dem interaktiven flatplan.de Architektur-Viewer in Ihr CRM System."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center">
             <div className="badge"><Database size={16} className="mr-2" style={{ marginRight: '8px' }}/> Data & CRM</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Conversion-Starke Landingpages.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Machen Sie Schluss mit "Ich habe Interesse"-Mails ohne Kontext. flatplan.de qualifiziert 
               Nutzer über eine bedienbare 3D-Schnittstelle. Jede Anfrage bringt das exakte Kundenbedürfnis mit sich.
             </p>
             <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Vertrieb ankurbeln &rarr;
             </Link>
          </div>
        </section>

        <section className="section bg-soft border-b">
           <div className="container grid grid-2 items-center">
              <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-light)', padding: '4rem 2rem', textAlign: 'center' }}>
                 <BarChart2 size={64} color="var(--accent-primary)" style={{ margin: '0 auto 2rem' }} />
                 <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>+ 40%</h2>
                 <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Schnellere Kaufabschlüsse durch vorqualifizierte Anfragen.</p>
              </div>
              <div style={{ paddingLeft: '4rem' }}>
                 <MousePointer2 size={40} color="var(--accent-primary)" style={{ marginBottom: '2rem' }} />
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Der Funnel des 3D-Finders</h2>
                 <p className="mb-8" style={{ fontSize: '1.15rem' }}>Sobald Interessenten über Social Media (Facebook Ads, Instagram) oder immowelt auf Ihren integrierten <strong>interaktiven Wohnungsfinder</strong> stoßen, beginnt der Qualifizierungsprozess. Sie filtern nach "4 Zimmer" und "Budget 500k €". Der Finder zeigt nur relevante Ergebnisse.</p>
                 <Link href="/branchen/immobilienmakler" className="btn btn-outline" style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vorteile für Makler &rarr;</Link>
              </div>
           </div>
        </section>

        <section className="section bg-white border-b overflow-hidden">
           <div className="container max-w-4xl mx-auto text-center mb-12">
              <h2>Verknüpfung mit Ihren Vertriebssystemen</h2>
           </div>
           <div className="container grid grid-3">
              <div className="card-soft" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '3rem' }}>
                 <Settings2 size={36} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>API & Webhooks</h3>
                 <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Verbinden Sie den Finder via Zapier, Make oder REST API direkt mit Salesforce Pipedrive oder Hubspot für sofortige Lead-Anlage.</p>
              </div>
              <div className="card-soft" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '3rem' }}>
                 <Mails size={36} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Exposé-Bot</h3>
                 <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Einbindung in automatische E-Mail-Workflows. Bei Anfrage aus dem Finder versendet das System automatisch ein personalisiertes Immobilien-Exposé als PDF.</p>
              </div>
              <div className="card-soft" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 0, padding: '3rem' }}>
                 <Lock size={36} color="var(--text-primary)" className="mb-4" />
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sicherheit & DSGVO</h3>
                 <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Vollkommene Compliance. Leads werden verschlüsselt auf deutschen Servern verarbeitet und rechtssicher an Sie übertragen.</p>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
