"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Building2, Check, TrendingUp, ShieldCheck, BarChart, Layers, FileText, Users, ArrowRight } from 'lucide-react';

export default function Bautraeger() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "3D Wohnungsfinder für Bauträger | flatplan.de",
    "description": "Erreichen Sie die notwendige Vorverkaufsquote schneller. Interaktive 3D Architekturvisualisierung für digitalen Neubauvertrieb und Bauträgermarketing.",
    "publisher": { "@type": "Organization", "name": "Investora Commercial" }
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        {/* HERO */}
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container grid grid-2 items-center">
             <div className="animate-up">
                <div className="badge"><Building2 size={16} style={{ marginRight: '8px' }}/> Branchenlösung Bauträger</div>
                <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Vorverkaufsquote erreichen. Vor allen anderen.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
                  Als Bauträger wissen Sie: Die finanzierende Bank will Sicherheit sehen. Unser 3D Wohnungsfinder 
                  generiert qualifizierte Reservierungen, bevor der erste Spaten gestochen wird.
                </p>
                <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                   <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                      Projekt anfragen <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                   </Link>
                   <Link href="/features" className="btn btn-outline" style={{ textTransform: 'uppercase' }}>
                      Alle Features
                   </Link>
                </div>
             </div>
             <div className="animate-up delay-200">
                <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-xl)' }}>
                   <img src="/showcase-3d.png" alt="3D Wohnungsfinder Bauträger" style={{ width: '100%', display: 'block' }} />
                </div>
             </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-dark" style={{ padding: '4rem 0' }}>
           <div className="container grid grid-4 text-center animate-up">
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>40%</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Schnellerer Abverkauf</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>2x</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Höhere Lead-Qualität</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>24/7</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Virtuelle Begehungen</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>100%</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>DSGVO-Konform</div>
              </div>
           </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Das Problem: Teure Vertriebszeit ohne Ergebnis</h2>
                 <p className="mb-4">Dutzende Vor-Ort Termine mit Interessenten, die weder Budget haben noch den Grundriss verstanden haben, kosten einen Bauträger pro Projekt durchschnittlich 60.000 – 120.000 € an Vertriebsausgaben. Gedruckte Exposés veralten innerhalb weniger Wochen.</p>
                 <p className="mb-4">Die Lösung: Ein <strong>interaktiver 3D Wohnungsfinder</strong>, der den gesamten Qualifizierungsprozess automatisiert. Der Interessent sieht exakt, was er bekommt – dreidimensional, maßstabsgetreu, und zu jeder Tages- und Nachtzeit.</p>
                 
                 <div style={{ background: 'var(--accent-light)', borderLeft: '4px solid var(--accent-primary)', padding: '1.5rem 2rem', marginTop: '2rem' }}>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                       &ldquo;Jeder Euro, den Sie in digitale Vorverkaufs-Infrastruktur investieren, spart Ihnen zehn Euro an klassischen Vertriebskosten.&rdquo;
                    </p>
                 </div>
              </div>
              <div className="animate-up delay-100">
                 <img src="/flatfinder_features_expose.png" alt="Bauträger Dashboard" style={{ width: '100%', border: '1px solid var(--border-light)' }} />
              </div>
           </div>
        </section>

        {/* 1-2-3 STEPS */}
        <section className="section bg-soft border-b">
           <div className="container max-w-4xl mx-auto text-center mb-12 animate-up">
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Prozess</span>
              <h2>So starten Sie in 3 Schritten</h2>
           </div>
           <div className="container grid grid-3">
              {[
                { num: '1', title: 'Daten liefern', desc: 'Senden Sie uns Ihre DWG/BIM Dateien oder PDF-Grundrisse. Wir übernehmen die gesamte 3D-Modellierung, Texturierung und Möblierung. Sie müssen nichts tun.' },
                { num: '2', title: 'Integration', desc: 'Wir liefern Ihnen einen Embed-Code. In 5 Minuten ist der 3D-Finder auf Ihrer Projektseite live. Optional verknüpfen wir Ihr CRM (onOffice, Propstack, etc.).' },
                { num: '3', title: 'Leads empfangen', desc: 'Interessenten filtern, staunen und fragen an. Jeder Lead enthält die exakte Wunscheinheit, Zimmerzahl und Kontaktdaten. Ihr Vertrieb ruft nur noch warme Leads an.' },
              ].map((s, i) => (
                <div key={i} className="card animate-up" style={{ animationDelay: `${i * 100}ms`, position: 'relative', borderColor: i === 2 ? 'var(--accent-primary)' : 'var(--border-light)' }}>
                   <span style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--bg-secondary)', position: 'absolute', top: '-10px', left: '1.5rem', lineHeight: 1 }}>{s.num}</span>
                   <div style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                      <p style={{ margin: 0, fontSize: '1rem' }}>{s.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* FEATURES DEEP DIVE */}
        <section className="section bg-white border-b">
           <div className="container max-w-4xl mx-auto text-center mb-12 animate-up">
              <h2>Was der Flatfinder für Bauträger leistet</h2>
           </div>
           <div className="container grid grid-2" style={{ gap: '1.5rem' }}>
              {[
                { icon: <Layers size={32} color="var(--accent-primary)" />, title: 'Interaktive 3D-Gebäudeansicht', desc: 'Nutzer erkunden Ihre Anlage in Echtzeit. Fassadenfarben, Balkonperspektiven, Grünanlagen – alles visuell erlebbar, und das vor dem Spatenstich.' },
                { icon: <BarChart size={32} color="var(--accent-primary)" />, title: 'Intelligente Filtersuche', desc: 'Käufer filtern nach Zimmeranzahl, Quadratmetern, Budget, Etage und Ausrichtung. Unpassende Einheiten werden im Modell ausgegraut.' },
                { icon: <FileText size={32} color="var(--accent-primary)" />, title: 'Dynamische PDF-Exposés', desc: 'Auf Knopfdruck erstellt das System ein professionelles PDF mit 3D-Grundriss, Kaufpreis, Lageplan und Ihrem CI. Immer aktuell.' },
                { icon: <ShieldCheck size={32} color="var(--accent-primary)" />, title: 'Live-Verfügbarkeiten', desc: 'Verkaufte oder reservierte Wohnungen werden in Echtzeit aus Ihrem CRM synchronisiert und im 3D-Modell farblich markiert.' },
                { icon: <Users size={32} color="var(--accent-primary)" />, title: 'Lead-Qualifizierung', desc: 'Jede Anfrage enthält die exakte Wunscheinheit. Kein Rätselraten, keine kalten Anrufe. Ihr Vertrieb arbeitet ausschließlich mit warmen Leads.' },
                { icon: <TrendingUp size={32} color="var(--accent-primary)" />, title: 'Analytics Dashboard', desc: 'Sehen Sie in Echtzeit, welche Wohnungen am meisten betrachtet werden. Optimieren Sie Ihre Preisstrategie datengetrieben.' },
              ].map((f, i) => (
                <div key={i} className="card animate-up" style={{ animationDelay: `${i * 80}ms`, display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '2.5rem' }}>
                   <div style={{ flexShrink: 0, marginTop: '4px' }}>{f.icon}</div>
                   <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                      <p style={{ margin: 0, fontSize: '1rem' }}>{f.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* SEO CONTENT */}
        <section className="section bg-white border-b">
           <div className="container prose animate-up">
              <h2>Warum Bauträger auf digitale 3D-Vermarktung umsteigen</h2>
              <p>Die Immobilienbranche in Deutschland, Österreich und der Schweiz erlebt einen fundamentalen Wandel. <strong>Bauträger</strong>, die noch immer auf analoge Exposés und reine Maklerbesichtigungen setzen, verlieren massiv an Wettbewerbsfähigkeit gegenüber PropTech-affinen Konkurrenten.</p>
              
              <h3>Die Vorverkaufsquote als entscheidendes KPI</h3>
              <p>Banken fordern häufig 30-50% Vorverkaufsquote, bevor sie die Baufinanzierung freigeben. Je schneller ein Bauträger diese Quote erreicht, desto eher beginnt der Bau und desto geringer sind die Zwischenfinanzierungskosten. Ein <strong>interaktiver 3D Wohnungsfinder</strong> wie flatplan.de beschleunigt diesen Prozess nachweislich um bis zu 40%.</p>

              <h3>Return on Investment (ROI) im Bauträgermarketing</h3>
              <p>Kalkulieren Sie konservativ: Wenn die Erstellung eines Flatfinders 15.000 € kostet und Sie dadurch nur eine einzige Wohneinheit einen Monat früher verkaufen, haben Sie bei einem durchschnittlichen Bankzins von 4% auf einen Kaufpreis von 400.000 € bereits über 1.300 € Finanzierungskosten gespart. In der Praxis verkaufen Bauträger mit 3D-Findern nicht eine, sondern dutzende Einheiten schneller.</p>
              
              <h3>Integration in Ihre bestehende Vertriebsstruktur</h3>
              <p>Der flatplan.de Wohnungsfinder ersetzt nicht Ihren Vertrieb, sondern macht ihn effizienter. Ihre Makler erhalten vorqualifizierte Leads inklusive Wunscheinheit. Ihre Marketing-Agentur erhält ein einbettbares Widget für Social-Media-Kampagnen. Ihre Bank erhält beeindruckende Präsentationsunterlagen.</p>
           </div>
        </section>

        {/* FAQ */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">FAQ Bauträger</div>
                 <h2>Häufige Fragen von Bauträgern</h2>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Funktioniert der Finder auch für Gewerbeimmobilien?</summary>
                    <p>Ja. Neben Wohneinheiten können auch Gewerbeflächen, Praxen, Büros und Tiefgaragenstellplätze im 3D-Modell dargestellt und vermarktet werden.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Können wir den 3D-Finder auch für Baustellenbesichtigungen nutzen?</summary>
                    <p>Absolut. Viele Bauträger nutzen den Flatfinder vor Ort auf einem Tablet, um Kunden direkt auf der Baustelle die fertige Anlage visuell zu zeigen.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Was passiert nach dem Abverkauf aller Einheiten?</summary>
                    <p>Sie können die Lizenz jederzeit kündigen. Alternativ nutzen viele Kunden den Flatfinder im After-Sales als digitales Übergabe-Tool.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Unterstützen Sie auch WEG-Aufteilungen?</summary>
                    <p style={{ paddingBottom: 0 }}>Ja. Das 3D-Modell kann exakt nach Teilungserklärung aufgebaut werden, sodass jede WEG-Einheit als eigenständiges klickbares Objekt dargestellt wird.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="section bg-white text-center">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Starten Sie Ihren digitalen Vorverkauf.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Fordern Sie jetzt ein unverbindliches Angebot für Ihr Bauprojekt an.</p>
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
