"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { MonitorPlay, Box, ZoomIn, Info, Check } from 'lucide-react';

export default function Grundrisse() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Interaktive 3D Grundrisse & Architektur",
    "description": "Erleben Sie Immobilienprojekte vor der Fertigstellung. Möblierte 3D Grundrisse, dynamische Exposés und Detailansichten in Echtzeit für Ihr Immobilienmarketing."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center">
             <div className="badge"><MonitorPlay size={16} className="mr-2" style={{ marginRight: '8px' }}/> Navigator Engine</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Von Außenanlage bis ins kleinste Zimmer.
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
               Der flatplan.de Architektur-Viewer übersetzt CAD und BIM Daten in ein Browserbasiertes 
               3D-Erlebnis, ohne Installation. Das entscheidende Feature für Ihren digitalen Vertrieb.
             </p>
             <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Unverbindlich Anfragen &rarr;
             </Link>
          </div>
        </section>

        <section className="section bg-soft border-b">
           <div className="container grid grid-2">
              <div style={{ padding: '2rem', background: 'var(--text-primary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <Box size={40} color="var(--accent-primary)" className="mb-8" />
                 <h2 style={{ color: 'white' }}>Die Magie des Slice-View</h2>
                 <p style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Käufer tun sich oft schwer, 2D Strichzeichnungen von Architekten in räumliche Vorstellungskraft umzusetzen. Der "Slice-View" (Etagenansicht) schneidet das Gebäude visuell von oben auf.
                 </p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-center gap-3 mb-4"><Check color="var(--accent-primary)" /> <span style={{ color: 'white' }}>Möblierte Raumstruktur sofort erkennbar</span></li>
                    <li className="flex items-center gap-3 mb-4"><Check color="var(--accent-primary)" /> <span style={{ color: 'white' }}>Vergleich von Wohnungsgrößen</span></li>
                    <li className="flex items-center gap-3"><Check color="var(--accent-primary)" /> <span style={{ color: 'white' }}>Lichteinfallssimulation und Balkonansichten</span></li>
                 </ul>
              </div>
              <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '1rem' }}>
                 <img src="/showcase-detail.png" alt="3D Grundriss von oben" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
           </div>
        </section>

        <section className="section bg-white border-b overflow-hidden">
           <div className="container prose" style={{ maxWidth: '80ch' }}>
              <div className="badge">Detailwissen</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Technische Anforderungen & BIM Integration</h2>
              <p>Unser 3D Wohnungsfinder Team bei Investora Commercial arbeitet nahtlos mit Ihren Architekten zusammen. Für ein perfektes Rendering benötigen wir lediglich Standard-Baupläne (DWG, DXF) oder im Optimalfall <strong>BIM Modelle</strong> (IFC-Daten). Wir extrudieren alle Wände, Fenster und Dachschrägen millimetergenau.</p>
              
              <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Texturierung und fotorealistische Renderings</h3>
              <p>Nach Aufbau der Rohstruktur überziehen unsere 3D-Artists das gesamte Modell mit hochauflösenden Texturen. Von der korrekten Fassadenklinker-Farbe bis zu den authentischen Parkettmustern in den Wohnzimmern: Das <strong>Immobilienmarketing</strong> profitiert von einer Detailtreue, die bei Kunden echte Emotionen auslöst.</p>

              <div className="card-soft mt-8" style={{ border: '1px solid var(--accent-primary)', background: 'var(--accent-light)', padding: '2rem', borderRadius: 0 }}>
                 <Info size={28} color="var(--accent-primary)" className="mb-4" />
                 <h4 style={{ color: 'var(--accent-primary)' }}>Performance & WebGL</h4>
                 <p style={{ margin: 0, color: 'var(--text-primary)' }}>Um Wartezeiten zu vermeiden, durchläuft jedes Megaprojekt bei uns einen mehrstufigen Polygon-Reduktions-Prozess. So läuft selbst ein 200-Wohnungs-Quartier performant auf einem iPhone (via Safari und WebGL) in flüssigen Framerates ab. Ohne Plugin, rein Browserbasiert.</p>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
