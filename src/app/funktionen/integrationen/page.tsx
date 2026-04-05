"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Share2, RefreshCw, Smartphone, ListChecks, CheckCircle, Database } from 'lucide-react';
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";

export default function Integrationen() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Immobilien CRM Integrationen & Schnittstellen | flatplan.de",
    "description": "flatplan.de integriert sich nahtlos in onOffice, FIO, Propstack, EMPRO und Immoprofessional. Automatisieren Sie Ihren Neubauvertrieb zu 100%.",
    "publisher": {
      "@type": "Organization",
      "name": "Immowoo"
    }
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
             <div className="badge"><Share2 size={16} className="mr-2" style={{ marginRight: '8px' }}/> Automatisierung & API</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Nahtlose Integration in Ihre Immobilien-Software.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Manuelle Lead-Erfassung war gestern. Unser 3D-Wohnungsfinder harmoniert perfekt 
               mit führenden CRM-Lösungen wie onOffice, Propstack und FIO. Für effizienten Neubauvertrieb ohne Medienbrüche.
             </p>
             <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Schnittstellen-Beratung
             </Link>
          </div>
        </section>

        {/* LOGOS / PARTNERS FOCUS */}
        <section className="section bg-soft border-b" style={{ padding: '4rem 0' }}>
           <div className="container text-center animate-up delay-100">
              <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 800 }}>
                 Offiziell Kompatibel mit
              </p>
              <div className="flex justify-center flex-wrap gap-8" style={{ alignItems: 'center' }}>
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e3000f', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border-light)' }}>onOffice</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0055aa', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border-light)' }}>Propstack</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#444444', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border-light)' }}>FIO</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff6600', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border-light)' }}>EMPRO</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--border-light)' }}>Immoprofessional</div>
              </div>
           </div>
        </section>

        {/* FEATURE DETAILS */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">onOffice & Propstack: Der Gold-Standard</h2>
                 <p className="mb-4">Wenn Sie Bauträger-Projekte vermarkten, ist Ihr CRM-System das Herzstück. Durch die tiefe Integration von flatplan.de in <strong>onOffice enterprise</strong> oder <strong>Propstack</strong> werden Kundenanfragen aus dem 3D-Modell in Echtzeit als komplett neue Adresse samt verknüpftem Wunschobjekt angelegt.</p>
                 <p className="mb-8"><strong>Das bedeutet für Sie:</strong> Sobald der Kunde auf "Exposé anfordern" im browserbasierten Flatfinder klickt (z.B. für Wohnung #12 im Haus B), erstellt Ihr CRM eine Aufgabe für den verantwortlichen Makler, sendet das automatische Exposé (optional) und ordnet die Interessen-Kategorie korrekt zu.</p>
                 
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-center gap-3 mb-4"><CheckCircle color="var(--accent-primary)" size={24} /> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>100% DSGVO-Konforme Leadübergabe (OpenImmo-Standard)</span></li>
                    <li className="flex items-center gap-3 mb-4"><CheckCircle color="var(--accent-primary)" size={24} /> <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Keine Tippfehler mehr durch automatisches Parsing</span></li>
                 </ul>
              </div>
              <div className="animate-up delay-200">
                 <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '3rem', position: 'relative' }}>
                    <RefreshCw size={64} color="var(--accent-primary)" style={{ opacity: 0.1, position: 'absolute', top: '1rem', right: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem' }}>FIO & EMPRO & Immoprofessional</h3>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Egal ob Sie eine spezifische Bankenvertriebs-Software wie FIO nutzen oder auf hochspezialisierte Branchenlösungen wie EMPRO und Immoprofessional setzen. Über definierte <strong>REST-Schnittstellen</strong> (oder standardisierte E-Mail-Parser) dockt der 3D-Rundgang perfekt an Ihr System an.</p>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Selbst Verfügbarkeits-Status (Wohnung verkauft in Immoprofessional) kann über bidirektionale Interfaces im 3D-Modell in Echtzeit auf "Rot" geschaltet werden.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ - TECHNIK */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">FAQ Technik</div>
                 <h2>Fragen zu den Software-Schnittstellen</h2>
              </div>
              
              <div style={{ background: 'white', padding: '2rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Wie erfolgt der Abgleich der Immobilien-Einheiten?</summary>
                    <p>Flatplan.de kann als eigenständiges CMS dienen oder (bei Premium-Integration) Ihre OpenImmo-XML Dateien oder API-Feeds entgegennehmen. Wenn Sie in onOffice eine Wohneinheit als "Reserviert" markieren, färbt sich die entsprechende Etage im 3D Modell auf Ihrer Webseite automatisch ein.</p>
                 </details>
                 
                 <details className="faq-item">
                    <summary>Kostet die Anbindung an EMPRO oder FIO extra?</summary>
                    <p>Die reine Leadübergabe via Standard-Schnittstelle (Mail-Parser, Basisanbindung) ist im Einrichtungs-Paket meistens kostenfrei enthalten. Komplexe bidirektionale REST-API Synchronisationen (Live-Bestandsabgleich) werden als Add-On bei der initialen Projektentwicklung abgerechnet.</p>
                 </details>

                 <details className="faq-item">
                    <summary>Muss ich Propstack / onOffice neu konfigurieren?</summary>
                    <p>Grundsätzlich nicht. Die API-Endpoints von modernen CRMs wie Propstack erlauben es uns, sogenannte Webhooks oder direkten API-Zugriff (via Token) zu nutzen, ohne dass Sie Ihre bewährten Workflow-Automatisierungen umbauen müssen.</p>
                 </details>
                 
                 <details className="faq-item" style={{ borderBottom: 'none', marginBottom: 0 }}>
                    <summary>Unterstützen Sie auch andere, proprietäre CRMs?</summary>
                    <p style={{ paddingBottom: 0 }}>Ja. Sobald Ihr ERP oder CRM-System fähig ist, JSON-Payloads via HTTP POST zu empfangen (Webhook) oder XML-Dateien einzulesen, können wir leadsichere Verbindungen herstellen.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* IMAGE BREAKOUT */}
        <section className="bg-white" style={{ padding: '6rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center' }}>
              <div className="animate-up">
                 <img src="/showcase-detail.png" alt="flatplan.de Integrationsübersicht" style={{ width: '100%', height: 'auto', border: '1px solid var(--border-light)' }} />
              </div>
              <div style={{ paddingLeft: '4rem' }} className="animate-up delay-200">
                 <h2>Die perfekte Datenkonsistenz im Neubauvertrieb</h2>
                 <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Die digitale Fehlerquote im Vertrieb wird oft unterschätzt. Durch Copy-Paste Fehler in Excel-Listen gehen Millionen-Deals verloren. Durch die harte Vernetzung der <strong>3D Architektur</strong> mit Ihrem Makler-CRM existiert nur noch "Ein Single Point of Truth".</p>
                 <Link href="/branchen/bautraeger" className="btn btn-outline" style={{ borderRadius: 0, textTransform: 'uppercase' }}>Bauträger-Vorteile ansehen &rarr;</Link>
              </div>
           </div>
        </section>

        {/* 8 CORE FEATURES GRID */}
        <CoreFeaturesGrid />

        {/* TESTIMONIALS */}
        <Testimonials variant="light" />

      </main>
      <Footer />
    </>
  );
}
