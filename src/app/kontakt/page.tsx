"use client";
import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { MessageSquare, ArrowRight, CheckCircle2, Building2, Briefcase, Settings2, Mail, Phone, MapPin } from 'lucide-react';

export default function KontaktFunnel() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const [units, setUnits] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt & Projektanfrage | flatplan.de",
    "description": "Kontaktieren Sie Investora Commercial für Ihren individuellen 3D Wohnungsfinder."
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        {/* HERO + DIRECT CONTACT */}
        <section className="bg-white border-b" style={{ padding: '6rem 0 5rem' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
             
             <div className="text-center animate-up" style={{ marginBottom: '4rem' }}>
                <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Sprechen Sie mit uns.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                  Per Telefon, E-Mail oder über unser Projektformular – wir sind für Sie da.
                </p>
             </div>

             <div className="grid grid-3 animate-up delay-100" style={{ marginBottom: '0' }}>
                <a href="tel:+498912345678" className="card text-center" style={{ padding: '3rem 2rem', textDecoration: 'none', cursor: 'pointer' }}>
                   <div style={{ width: '72px', height: '72px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <Phone size={32} color="var(--accent-primary)" />
                   </div>
                   <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Telefon</h3>
                   <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.15rem', display: 'block', marginBottom: '0.5rem' }}>+49 89 123 456 78</span>
                   <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Mo – Fr, 09:00 – 18:00 Uhr</p>
                </a>
                <a href="mailto:info@immowoo.de" className="card text-center" style={{ padding: '3rem 2rem', textDecoration: 'none', cursor: 'pointer' }}>
                   <div style={{ width: '72px', height: '72px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <Mail size={32} color="var(--accent-primary)" />
                   </div>
                   <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>E-Mail</h3>
                   <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.5rem' }}>info@immowoo.de</span>
                   <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Antwort innerhalb von 24h</p>
                </a>
                <div className="card text-center" style={{ padding: '3rem 2rem' }}>
                   <div style={{ width: '72px', height: '72px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <MapPin size={32} color="var(--accent-primary)" />
                   </div>
                   <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Standorte</h3>
                   <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Rohrdorf, Würzburg, Koblenz</span>
                   <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>Immowoo</p>
                </div>
             </div>
          </div>
        </section>

        {/* FUNNEL */}
        <section className="section bg-soft border-b" style={{ padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
             
             <div className="text-center animate-up" style={{ marginBottom: '3rem' }}>
                <div className="badge"><MessageSquare size={16} style={{ marginRight: '8px' }}/> Projektanfrage</div>
                <h2 style={{ marginBottom: '0.75rem' }}>Oder starten Sie direkt mit Ihrem Projekt.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>In 3 Schritten zu Ihrem individuellen Angebot.</p>
             </div>

             <div className="animate-up delay-100" style={{ background: 'white', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
                
                {/* Progress */}
                <div style={{ display: 'flex', background: 'var(--border-light)', height: '6px' }}>
                   <div style={{ width: submitted ? '100%' : `${(step / 3) * 100}%`, background: 'var(--accent-primary)', transition: 'width 0.4s ease' }}></div>
                </div>

                <div style={{ padding: '3.5rem 3rem' }}>
                   
                   {submitted ? (
                     <div className="animate-up text-center" style={{ padding: '1rem 0' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                           <CheckCircle2 size={48} color="var(--accent-primary)" />
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Vielen Dank!</h2>
                        <p style={{ fontSize: '1.1rem', maxWidth: '450px', margin: '0 auto 2rem' }}>Wir melden uns innerhalb von 24 Stunden mit einer individuellen Erstanalyse bei Ihnen.</p>
                        <Link href="/" className="btn btn-outline" style={{ textTransform: 'uppercase' }}>Zurück zur Startseite</Link>
                     </div>
                   ) : (
                     <>
                       {step === 1 && (
                         <div className="animate-up">
                            <h3 className="text-center" style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>Wofür benötigen Sie den 3D-Finder?</h3>
                            <div className="grid grid-3" style={{ gap: '1.25rem' }}>
                               {[
                                 { key: 'Bauträger', icon: <Building2 size={40} />, label: 'Bauträger', desc: 'Eigene Projekte vermarkten' },
                                 { key: 'Makler', icon: <Briefcase size={40} />, label: 'Immobilienmakler', desc: 'Exklusivmandate sichern' },
                                 { key: 'Agentur', icon: <Settings2 size={40} />, label: 'Agentur / PropTech', desc: 'White-Label Lösung' },
                               ].map(item => (
                                 <button key={item.key} onClick={() => { setType(item.key); setStep(2); }} style={{ border: '2px solid var(--border-light)', background: 'white', cursor: 'pointer', textAlign: 'center', padding: '2.5rem 1.5rem', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ color: 'var(--accent-primary)' }}>{item.icon}</div>
                                    <h4 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>{item.label}</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>{item.desc}</p>
                                 </button>
                               ))}
                            </div>
                         </div>
                       )}

                       {step === 2 && (
                         <div className="animate-up">
                            <h3 className="text-center" style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>Wie viele Wohneinheiten hat Ihr Objekt ca.?</h3>
                            <div className="grid grid-3" style={{ gap: '1.25rem' }}>
                               {[
                                 { key: '1-29', label: 'Kleine Quartiere' },
                                 { key: '30-99', label: 'Mittlere Areale' },
                                 { key: '100+', label: 'Großprojekte' },
                               ].map(item => (
                                 <button key={item.key} onClick={() => { setUnits(item.key); setStep(3); }} style={{ border: '2px solid var(--border-light)', background: 'white', cursor: 'pointer', textAlign: 'center', padding: '2.5rem 1.5rem', transition: 'all 0.15s' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', display: 'block', marginBottom: '0.75rem' }}>{item.key}</span>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>{item.label}</p>
                                 </button>
                               ))}
                            </div>
                            <div className="text-center mt-8">
                               <button onClick={() => setStep(1)} style={{ border: 'none', background: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem' }}>&larr; Zurück</button>
                            </div>
                         </div>
                       )}

                       {step === 3 && (
                         <div className="animate-up">
                            <h3 className="text-center" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Fast geschafft!</h3>
                            <p className="text-center" style={{ marginBottom: '2rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>Wohin dürfen wir Ihnen Projektbeispiele und Kalkulationen senden?</p>
                            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ maxWidth: '480px', margin: '0 auto' }}>
                               <div style={{ marginBottom: '1.25rem' }}>
                                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>Firma / Unternehmen *</label>
                                  <input type="text" required placeholder="Mustermann Immobilien GmbH" style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--border-dark)', fontSize: '1rem', background: 'white' }} />
                               </div>
                               <div style={{ marginBottom: '1.25rem' }}>
                                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>E-Mail Adresse *</label>
                                  <input type="email" required placeholder="name@firma.de" style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--border-dark)', fontSize: '1rem', background: 'white' }} />
                               </div>
                               <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                                  <div>
                                     <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>Ansprechpartner</label>
                                     <input type="text" placeholder="Max Mustermann" style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--border-dark)', fontSize: '1rem', background: 'white' }} />
                                  </div>
                                  <div>
                                     <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>Telefon</label>
                                     <input type="tel" placeholder="+49 89 123 456" style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--border-dark)', fontSize: '1rem', background: 'white' }} />
                                  </div>
                               </div>
                               <div style={{ marginBottom: '2rem' }}>
                                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>Nachricht (Optional)</label>
                                  <textarea rows={3} placeholder="z.B. Baustart Q3/2026, 48 WE in München-Schwabing..." style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--border-dark)', fontSize: '1rem', background: 'white', resize: 'vertical' }} />
                               </div>
                               <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '1rem' }}>
                                  Kostenlose Analyse anfragen <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                               </button>
                               <div className="text-center mt-4">
                                  <button type="button" onClick={() => setStep(2)} style={{ border: 'none', background: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}>&larr; Angaben korrigieren</button>
                               </div>
                            </form>
                         </div>
                       )}
                     </>
                   )}
                </div>
             </div>

             {/* Trust Badges */}
             <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                {[
                  { text: '100% DSGVO-Konform' },
                  { text: 'Unverbindlich & kostenlos' },
                  { text: 'Antwort binnen 24h' },
                ].map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                     <div style={{ width: '28px', height: '28px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircle2 size={16} color="var(--accent-primary)" />
                     </div>
                     <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{badge.text}</span>
                  </div>
                ))}
             </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
