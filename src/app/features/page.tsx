"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Layers, Cuboid, MonitorSmartphone, Share2, FileText, DownloadCloud, MousePointer2, CheckCircle2, Filter, Palette, Globe, Smartphone, BarChart3, ShieldCheck, SunMedium, Zap, BrainCircuit, Users, Building2, Workflow, FolderGit2, Map, MapPin } from 'lucide-react';

export default function Features() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flatfinder Features & Funktionen | 3D Wohnungsfinder",
    "description": "Erleben Sie echte 3D-Rundgänge, AI Shadow Rendering, CRM-Integration und umfassendes Immobilien-Management in einer Plattform."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px', background: 'var(--bg-primary)' }}>
        
        {/* HERO */}
        <section className="bg-dark text-white" style={{ padding: '8rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 0%, rgba(227, 0, 15, 0.15), transparent 70%)', zIndex: 1 }}></div>
          <div className="container max-w-4xl mx-auto text-center animate-up" style={{ position: 'relative', zIndex: 2 }}>
             <div className="badge" style={{ background: 'rgba(227, 0, 15, 0.15)', color: 'var(--accent-primary)', border: '1px solid var(--accent-primary)' }}><Layers size={16} style={{ marginRight: '8px' }}/> Neues Feature-Set</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
               Acht Dimensionen <br/><span style={{ color: 'var(--accent-primary)' }}>Perfekten Vertriebs.</span>
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 3rem auto' }}>
               Von KI-gestütztem Shadowing bis zur nahtlosen CRM-Integration. Entdecken Sie die technologische Basis für modernen Immobilienvertrieb.
             </p>
             <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Setup starten
             </Link>
          </div>
        </section>

        {/* 1. 3D & Visuelle Erlebnisse */}
        <section className="section border-b" style={{ background: '#0a0a0a', color: 'white', overflow: 'hidden' }}>
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <div style={{ padding: '4px', background: 'linear-gradient(135deg, var(--accent-primary), transparent)', borderRadius: '16px' }}>
                    <div style={{ background: '#111', borderRadius: '12px', overflow: 'hidden' }}>
                       <iframe 
                          src="https://flatfind2.x900.3az.de/p/5" 
                          style={{ width: '100%', height: '500px', border: 'none' }}
                       />
                    </div>
                 </div>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '3rem' }}>
                 <div style={{ width: '56px', height: '56px', background: 'rgba(227, 0, 15, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', borderRadius: '12px', border: '1px solid rgba(227, 0, 15, 0.2)' }}>
                    <Cuboid size={28} color="var(--accent-primary)" />
                 </div>
                 <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', display: 'block' }}>01 / Core</span>
                 <h2 className="mb-4" style={{ fontSize: '2.5rem', color: 'white' }}>3D & Visuelle Erlebnisse</h2>
                 <p className="mb-6" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Das Herzstück der Plattform. Interaktive 3D-Rundgänge, fluide Navigation und klickbare dynamische Grundrisse auf allen Achsen.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Interaktiver 360° Gebäudeviewer</strong> – Flüssige Steuerung mit Hover-Feedback und Live-Status (Verfügbar, Reserviert).</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Dynamische Grundrisse</strong> – Raum- und Ebenen-Navigation inklusive Anzeige der Himmelsrichtung.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Auto-Tours & Medien</strong> – Geführtes Erlebnis mit nahtloser Einbindung von Renderings und Videos.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Annotationen</strong> – Präzises Einzeichnen von Polygonen & POIs im Modell.</span></li>
                 </ul>
              </div>
           </div>
        </section>

        {/* 2. Künstliche Intelligenz */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up" style={{ paddingRight: '2.5rem' }}>
                 <div style={{ width: '56px', height: '56px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', borderRadius: '12px' }}>
                    <BrainCircuit size={28} color="var(--accent-primary)" />
                 </div>
                 <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', display: 'block' }}>02 / Automation</span>
                 <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>KI & Automatisierung</h2>
                 <p className="mb-6" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Systeme, die mittdenken. Sparen Sie Stunden an manueller Arbeit durch automatisierte Bildoptimierung und intelligente Schattenberechnungen.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><Zap color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span><strong>AI Shadow Rendering:</strong> Erzeugt Depth- & Normal-Maps für realistische Schatten.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><Zap color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span><strong>Digitale Assistenz:</strong> KI-Begleitung klärt Vorlieben in natürlicher Sprache und empfiehlt passende Einheiten.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><Zap color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span><strong>Bildoptimierung:</strong> Systemseitige Skalierung für maximale Performance (auch bei 500+ Einheiten).</span></li>
                    <li className="flex items-start gap-3"><Zap color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span><strong>Content Generation:</strong> KI-gestützte Exposé-Texte und smarte Vorqualifizierung.</span></li>
                 </ul>
              </div>
              <div className="animate-up delay-100">
                 <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '3rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '350px' }}>
                    <h3 style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '1.5rem' }}>Dynamic Shadow Matrix</h3>
                    <p style={{ textAlign: 'center', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>Echtzeitsimulation auf Basis unserer neuronalen Depth-Maps.</p>
                    <div style={{ marginTop: '2rem', height: '220px', background: '#0a0a0a', borderRadius: '12px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       {/* Grid Background */}
                       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, backgroundImage: 'linear-gradient(var(--accent-primary) 1px, transparent 1px), linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)', backgroundSize: '30px 30px', backgroundPosition: 'center center' }}></div>
                       
                       {/* Animated Scan Line */}
                       <div style={{ position: 'absolute', top: 0, left: '-10%', width: '120%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(227, 0, 15, 0.2), transparent)', animation: 'scanLine 3s infinite linear' }}></div>
                       
                       <style dangerouslySetInnerHTML={{ __html: `
                         @keyframes scanLine {
                           0% { transform: translateX(-100%); }
                           100% { transform: translateX(100%); }
                         }
                         @keyframes pulseDot {
                           0% { opacity: 0.5; transform: scale(0.9); box-shadow: 0 0 0 0 rgba(227, 0, 15, 0.4); }
                           50% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 20px 5px rgba(227, 0, 15, 0.2); }
                           100% { opacity: 0.5; transform: scale(0.9); box-shadow: 0 0 0 0 rgba(227, 0, 15, 0); }
                         }
                       `}} />

                       <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid rgba(227, 0, 15, 0.5)', background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulseDot 2.5s infinite ease-in-out' }}>
                             <SunMedium size={32} color="var(--accent-primary)" />
                          </div>
                          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                             <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--accent-primary)', background: 'rgba(227, 0, 15, 0.1)', border: '1px solid rgba(227, 0, 15, 0.2)', padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.05em' }}>CALCULATING_DEPTH</span>
                             <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#aaa', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.05em' }}>RAYTRACE_98%</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3 & 4. Management & Maps */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-2" style={{ gap: '4rem' }}>
              
              <div className="animate-up" style={{ background: 'white', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ width: '48px', height: '48px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', borderRadius: '12px' }}>
                    <Building2 size={24} color="var(--accent-primary)" />
                 </div>
                 <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', display: 'block' }}>03 / Portfolio</span>
                 <h2 className="mb-4" style={{ fontSize: '2rem' }}>Immobilien & Projektmanagement</h2>
                 <p className="mb-4">Zentrale Projektverwaltung von Bauvorhaben. Gliedern Sie komplexe Gebäude in Etagen und einzelne Wohneinheiten auf.</p>
                 <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Zentrale Datenpflege & Live-Status (Verfügbar, Reserviert)</li>
                    <li style={{ marginBottom: '0.5rem' }}>Echtzeit-Wohnungsnavigator mit Mehrkriterien-Filtern (Preis, Fläche, Zimmer)</li>
                    <li style={{ marginBottom: '0.5rem' }}>CSV-Import für Massenanlage oder Updates</li>
                    <li>Rollenbasierter Admin-Bereich & Projekt-Duplizierung</li>
                 </ul>
              </div>

              <div className="animate-up delay-100" style={{ background: 'white', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ width: '48px', height: '48px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', borderRadius: '12px' }}>
                    <Map size={24} color="var(--accent-primary)" />
                 </div>
                 <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', display: 'block' }}>04 / Location</span>
                 <h2 className="mb-4" style={{ fontSize: '2rem' }}>Lage & Umgebung (Maps)</h2>
                 <p className="mb-4">Verkaufen Sie nicht nur vier Wände, sondern den Kontext. Interaktive Surroundings-Map pro Projekt.</p>
                 <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Visualisierung von Infrastruktur (POIs)</li>
                    <li style={{ marginBottom: '0.5rem' }}>Berechnung von Isochronen (Fußweg, Fahrrad, Auto)</li>
                    <li>Lagekarten mit DSGVO-Switch (Google Maps Consent)</li>
                 </ul>
              </div>

           </div>
        </section>

        {/* 5 & 6. Lead Gen & CRM */}
        <section className="section bg-dark text-white border-b" style={{ position: 'relative', overflow: 'hidden' }}>
           <div className="container grid grid-2 items-center">
              <div className="animate-up text-center">
                 <div style={{ position: 'relative', width: '80%', margin: '0 auto', background: '#1a1a1a', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                       <div style={{ fontWeight: 600 }}>Posteingang</div>
                       <div style={{ color: 'var(--accent-primary)', background: 'rgba(227, 0, 15, 0.15)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>3 Neu</div>
                    </div>
                    {[1,2,3].map((i) => (
                       <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', textAlign: 'left' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18} /></div>
                          <div>
                             <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Lead Anfrage #{1000 + i}</div>
                             <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Wohneinheit 4B • vor {i * 12} Min</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2.5rem' }}>
                 <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>05 / Sales</div>
                    <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>06 / CRM</div>
                 </div>
                 <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Lead-Gen & System CRM</h2>
                 <p className="mb-6" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Vollautomatisierte PDF-Exposés für Endbenutzer und intelligente Lead-Routings im Hintergrund. Jede Einheit generiert ihre eigenen Dokumente on-the-fly.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Online-Exposés:</strong> Projektseiten mit Galerien, Grundrissen und Videos.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Automatisierte PDF-Exposés:</strong> Download in Echtzeit ohne Medienbruch.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Smart Contact Forms:</strong> Spam-Schutz (Honeypot, Rate Limits) & Adressbuch.</span></li>
                    <li className="flex items-start gap-3" style={{ marginBottom: '1rem' }}><CheckCircle2 color="var(--accent-primary)" size={20} style={{flexShrink: 0}} /> <span style={{ color: '#ccc' }}><strong>Termin-Integration:</strong> Calendly oder Microsoft Bookings für direkte Buchungen.</span></li>
                 </ul>
              </div>
           </div>
        </section>

        {/* 7 & 8. API & Analytics */}
        <section className="section bg-soft" style={{ padding: '6rem 0' }}>
            <div className="container text-center mb-12 animate-up">
               <h2>Datenhoheit. Perfekt integriert.</h2>
            </div>
            <div className="container grid grid-2" style={{ gap: '2rem' }}>
                <div className="card-soft animate-up" style={{ background: 'white', padding: '3rem', borderRadius: '16px' }}>
                    <Workflow size={40} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', display: 'block' }}>07 / Integration & Export</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Schnittstellen & Sync</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Übermitteln Sie Immobilien nahtlos an ImmoScout24, Immowelt und Co., dank unserer OpenImmo-Exportschnittstelle.</p>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                       <li>Zertifizierter OpenImmo-Export</li>
                       <li>Externe Synchronisation mit Maklersoftware</li>
                       <li>Umfangreiche CSV-Exporte (Leads, Besucher, Einheiten)</li>
                    </ul>
                </div>
                
                <div className="card-soft animate-up delay-100" style={{ background: 'white', padding: '3rem', borderRadius: '16px' }}>
                    <BarChart3 size={40} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', display: 'block' }}>08 / Analytics & Security</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Analytics, Tracking & Sicherheit</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Echtzeit-Statistiken zu Besucherzahlen und Klickverhalten. Ein lückenloses Activity-Log sorgt für absolute Transparenz.</p>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                       <li style={{ marginBottom: '0.5rem' }}>Auswertung von Klicks, Exposé-Downloads & Tour-Starts</li>
                       <li style={{ marginBottom: '0.5rem' }}>Conversion Funnels & Kontaktanfragen pro Stunde/Tag</li>
                       <li style={{ marginBottom: '0.5rem' }}>Sichere Authentifizierung, Session Handling & Brute-Force-Schutz</li>
                       <li>Team-verwaltung (Mandanten) & optional Google Analytics</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="section bg-white text-center border-t">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Nutzen Sie das volle Potenzial.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Das Komplettsystem für Ihren nächsten Projektabverkauf.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                 Jetzt Zukunft buchen
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
