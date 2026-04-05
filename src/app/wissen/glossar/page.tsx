"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { BookA, Search } from 'lucide-react';

export default function Glossar() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist ein 3D Flatfinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein 3D Flatfinder ist ein interaktiver, meist browserbasierter Immobilienkonfigurator. Er übersetzt 2D-Grundsrisse und CAD-Daten in ein flüssiges 3D-Erlebnis für Projektentwicklungen."
        }
      },
      {
        "@type": "Question",
        "name": "Was bedeutet OpenImmo Standard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der OpenImmo Standard ist ein deutschsprachiges XML-Format zum Austausch von Immobilien- und Kunden-Daten zwischen Webportalen (z.B. Immoscout) und Makler-CRMs."
        }
      }
    ]
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
             <div className="badge"><BookA size={16} className="mr-2" style={{ marginRight: '8px' }}/> SEO Hub & Wissen</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Glossar – Immobilienmarketing.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Von <strong>BIM</strong> über <strong>Off-Plan Vertrieb</strong> bis zu <strong>WebGL</strong>.
               Die relevantesten Begriffe, wenn Sie Neubauprojekte digital vermarkten.
             </p>
          </div>
        </section>

        {/* GLOSSARY LIST */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              
              <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '3rem' }}>
                 
                 <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>BIM (Building Information Modeling)</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                       BIM beschreibt eine softwarebasierte Methode für die optimierte Planung, Ausführung und Bewirtschaftung von Gebäuden. flatplan.de extrahiert aus diesen digitalen Zwillingen alle Wohnflächendaten vollautomatisiert.
                    </p>
                 </div>

                 <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Dwell-Time (Verweildauer)</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                       Wichtiger SEO-Faktor. Er misst, wie lange User auf einer Webseite bleiben. Interaktive 3D Wohnungsfinder erhöhen die Dwell-Time oftmals um 500-1000%, wodurch die Google-Rankings des Bauträgers enorm ansteigen.
                    </p>
                 </div>

                 <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Off-Plan Vertrieb</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                       Der Verkauf von Immobilien (vom Plan weg), bevor das Gebäude fertiggestellt ist. Hier ist "Emotionalisierung" durch perfekte 3D Architekturvisualisierungen der einzige Weg zur schnellen Baufinanzierung.
                    </p>
                 </div>

                 <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>OpenImmo XML</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                       XML-Spezifikation für den automatisierten Austausch von Objektdaten. Ermöglicht, dass Leads unseres Finders nahtlos in CRMs wie onOffice, Propstack oder FIO importiert werden.
                    </p>
                 </div>

                 <div style={{ paddingBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Slice-View</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                       Eine Funktion von <strong>flatplan.de</strong>, bei der einzelne Etagen eines Architekturobjekts in 3D "abgeschnitten" werden, um den Blick in eine voll-möblierte Wohnung aus der Vogelperspektive freizugeben.
                    </p>
                 </div>

              </div>
              
              <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                 <Link href="/blog/lead-qualitaet-verdoppeln" className="btn btn-outline" style={{ textTransform: 'uppercase' }}>Neubau-Strategien lesen</Link>
              </div>

           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
