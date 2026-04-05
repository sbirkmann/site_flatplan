"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Star, Award, TrendingUp, ArrowRight, Check, Building2, Users, BarChart } from 'lucide-react';

export default function Referenzen() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Referenzen & Case Studies | flatplan.de",
    "description": "Erfolgsgeschichten und Referenzen von Bauträgern, Maklern und Projektentwicklern, die mit dem 3D Wohnungsfinder ihren Vertrieb revolutioniert haben."
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
             <div className="badge"><Award size={16} style={{ marginRight: '8px' }}/> Erfolgsgeschichten</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Referenzen & Case Studies
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
               Wie Bauträger, Makler und Projektentwickler mit flatplan.de ihren Vertrieb transformiert haben.
             </p>
          </div>
        </section>

        {/* CASE STUDY 1 */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.8rem' }}>Case Study</span>
                 <h2 className="mb-4">Zinn Architektur – Neubau-Quartier München</h2>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Zinn Architektur entwickelte ein 48-Einheiten-Quartier in München-Riem. Die Herausforderung: Die Bank forderte 40% Vorverkaufsquote vor Baugenehmigung. Herkömmliche Exposés reichten nicht.</p>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Mit dem flatplan.de 3D Wohnungsfinder wurde die gesamte Anlage interaktiv erlebbar gemacht – inklusive Filter, Slice-View und automatisierten PDF-Exposés.</p>
                 
                 <div className="grid grid-3" style={{ gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '1.5rem', textAlign: 'center' }}>
                       <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>48</div>
                       <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Wohneinheiten</div>
                    </div>
                    <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '1.5rem', textAlign: 'center' }}>
                       <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>3 Wo.</div>
                       <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Quote erreicht</div>
                    </div>
                    <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '1.5rem', textAlign: 'center' }}>
                       <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>+40%</div>
                       <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Schneller</div>
                    </div>
                 </div>
              </div>
              <div className="animate-up delay-100">
                 <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-lg)' }}>
                    <img src="/showcase-3d.png" alt="Zinn Architektur 3D Wohnungsfinder" style={{ width: '100%', display: 'block' }} />
                 </div>
              </div>
           </div>
        </section>

        {/* CASE STUDY 2 */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-lg)' }}>
                    <img src="/showcase-detail.png" alt="Sparkasse Immobilien 3D Finder" style={{ width: '100%', display: 'block' }} />
                 </div>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2.5rem' }}>
                 <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.8rem' }}>Case Study</span>
                 <h2 className="mb-4">Sparkasse Immobilien – Lead-Optimierung</h2>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Die Immobilienabteilung der Sparkasse suchte nach einer Möglichkeit, die Qualität der Online-Anfragen zu steigern. Über 60% der bisherigen Leads waren unqualifiziert und führten zu kostspieligen Leerbesichtigungen.</p>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Durch die Integration des Flatfinders in die Immoscout-Landingpages konnte die Lead-Qualität verdoppelt und die Anzahl der Leerbesichtigungen um 70% reduziert werden.</p>
                 
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Lead-Qualität verdoppelt', '70% weniger Leerbesichtigungen', 'Automatischer Lead-Import in onOffice', 'ROI nach 6 Wochen erreicht'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ marginBottom: '0.75rem' }}>
                         <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={20} />
                         <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* CASE STUDY 3 */}
        <section className="section bg-soft border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.8rem' }}>Case Study</span>
                 <h2 className="mb-4">HM Immobilien – Exklusivmandate durch Technologie</h2>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Markus H. betreibt ein Maklerbüro in München mit 3 Mitarbeitern. Sein Problem: Bei Neubau-Mandaten konkurrierte er stets mit größeren Immobilienhäusern, die mehr Ressourcen haben.</p>
                 <p className="mb-4" style={{ fontSize: '1.05rem' }}>Seit er Bauträgern den flatplan.de 3D Wohnungsfinder als Teil seines Angebots präsentiert, hat er 4 Exklusivmandate in einem Jahr gewonnen – mehr als in den 3 Jahren zuvor zusammen.</p>

                 <div style={{ background: 'white', borderLeft: '4px solid var(--accent-primary)', padding: '1.5rem 2rem', marginTop: '1.5rem' }}>
                    <p style={{ margin: 0, fontWeight: 600, fontStyle: 'italic', fontSize: '1.05rem' }}>
                       &ldquo;Der Flatfinder ist mein Türöffner. Kein anderer Makler in der Region kann das bieten.&rdquo;
                    </p>
                    <span style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>– Markus H., HM Immobilien</span>
                 </div>
              </div>
              <div className="animate-up delay-100">
                 <div style={{ background: 'var(--text-primary)', padding: '3rem', color: 'white' }}>
                    <div style={{ textAlign: 'center' }}>
                       <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '2rem' }}>
                          {[1,2,3,4,5].map(s => <Star key={s} size={28} color="#eab308" fill="#eab308" />)}
                       </div>
                       <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>4</div>
                       <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Exklusivmandate in einem Jahr</div>
                       <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>vs. 1 in den 3 Jahren zuvor</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* CTA */}
        <section className="section bg-white text-center">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Werden Sie zur nächsten Erfolgsgeschichte.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Starten Sie jetzt mit einem unverbindlichen Beratungsgespräch.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                 Projekt anfragen <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
