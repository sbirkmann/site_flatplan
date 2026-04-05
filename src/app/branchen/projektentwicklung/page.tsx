"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Compass, Check, TrendingUp, Building2, BarChart, Layers, FileText, Users, ArrowRight, Target, ShieldCheck } from 'lucide-react';

export default function Projektentwicklung() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "3D Wohnungsfinder für Projektentwickler | flatplan.de",
    "description": "Digitalisieren Sie Ihren Projektvertrieb. Interaktive Architekturvisualisierung für Quartiere, Areale und Großprojekte – ab der frühen Planungsphase."
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
                <div className="badge"><Compass size={16} style={{ marginRight: '8px' }}/> Branchenlösung Projektentwicklung</div>
                <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Investoren überzeugen. Vor dem Spatenstich.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
                  Als Projektentwickler stehen Sie vor einer einzigartigen Herausforderung: 
                  Sie müssen ein Produkt verkaufen, das noch nicht existiert. 
                  Unser 3D Wohnungsfinder macht Ihre Vision greifbar.
                </p>
                <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                   <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                      Projekt anfragen <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                   </Link>
                   <Link href="/referenzen" className="btn btn-outline" style={{ textTransform: 'uppercase' }}>
                      Referenzen ansehen
                   </Link>
                </div>
             </div>
             <div className="animate-up delay-200">
                <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-xl)' }}>
                   <img src="/showcase-3d.png" alt="Projektentwicklung 3D Areal" style={{ width: '100%', display: 'block' }} />
                </div>
             </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-dark" style={{ padding: '4rem 0' }}>
           <div className="container grid grid-4 text-center animate-up">
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>500+</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Einheiten pro Areal</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>3 Wo.</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Typische Umsetzung</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>BIM</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>IFC/Revit Import</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>ROI</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Ab erster verkaufter WE</div>
              </div>
           </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Die Herausforderung der Projektentwicklung</h2>
                 <p className="mb-4">Projektentwickler bewegen sich in einem Spannungsfeld zwischen <strong>Vision und Finanzierung</strong>. Die Bank will Vorverkaufsquoten sehen, Investoren wollen Renditeberechnungen, und Käufer wollen wissen, wie ihre Wohnung aussieht – alles bevor der erste Stein gelegt wird.</p>
                 <p className="mb-4">Klassische Marketingmaterialien (Renderings, Broschüren) sind statisch, teuer und veralten schnell. Ein interaktiver 3D Wohnungsfinder hingegen bietet allen Stakeholdern ein lebendiges, stets aktuelles Erlebnis.</p>
                 
                 <div style={{ background: 'var(--accent-light)', borderLeft: '4px solid var(--accent-primary)', padding: '1.5rem 2rem', marginTop: '2rem' }}>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                       &ldquo;In der Projektentwicklung entscheidet die Qualität der Visualisierung über Millionen-Investitionen. Der Flatfinder macht den Unterschied.&rdquo;
                    </p>
                 </div>
              </div>
              <div className="animate-up delay-100">
                 <img src="/flatfinder_features_expose.png" alt="Projektentwicklung Dashboard" style={{ width: '100%', border: '1px solid var(--border-light)' }} />
              </div>
           </div>
        </section>

        {/* USE CASES */}
        <section className="section bg-soft border-b">
           <div className="container text-center mb-12 animate-up">
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Einsatzgebiete</span>
              <h2>Phasen der Projektentwicklung, in denen der Flatfinder überzeugt</h2>
           </div>
           <div className="container grid grid-3">
              {[
                { icon: <Target size={36} color="var(--accent-primary)" />, title: 'Frühphase & Akquise', desc: 'Überzeugen Sie Grundstückseigentümer und Partner mit einer visuellen Projektstudie, die weit über statische Renderings hinausgeht.' },
                { icon: <Building2 size={36} color="var(--accent-primary)" />, title: 'Finanzierungsphase', desc: 'Präsentieren Sie Banken und Investoren ein interaktives Modell, das die Qualität und Marktfähigkeit Ihres Projekts sofort demonstriert.' },
                { icon: <TrendingUp size={36} color="var(--accent-primary)" />, title: 'Vorverkauf & Marketing', desc: 'Stellen Sie den Flatfinder auf Ihre Projekt-Website und in Social-Media-Kampagnen. Qualifizierte Leads fließen automatisch in Ihr CRM.' },
                { icon: <Users size={36} color="var(--accent-primary)" />, title: 'Baustellenvertrieb', desc: 'Nutzen Sie den Finder vor Ort auf Tablets, um Besuchern auf der Baustelle die fertige Anlage visuell zu zeigen.' },
                { icon: <ShieldCheck size={36} color="var(--accent-primary)" />, title: 'Übergabe & After-Sales', desc: 'Nach Fertigstellung dient der Flatfinder als digitales Übergabe-Tool und Nachschlagewerk für Eigentümer.' },
                { icon: <BarChart size={36} color="var(--accent-primary)" />, title: 'Portfolioaufbau', desc: 'Nutzen Sie den Finder als Showcase in Ihrem Unternehmens-Portfolio, um bei zukünftigen Projekten schneller Finanzierungen zu erhalten.' },
              ].map((f, i) => (
                <div key={i} className="card animate-up" style={{ animationDelay: `${i * 80}ms`, textAlign: 'center', padding: '3rem 2rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>{f.icon}</div>
                   <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{f.title}</h3>
                   <p style={{ margin: 0, fontSize: '1rem' }}>{f.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* FEATURES */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Technische Highlights für Projektentwickler</h2>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      'BIM/IFC-Import: Wir verarbeiten Ihre Architekten-Daten direkt aus Revit, ArchiCAD oder Allplan',
                      'Multi-Building Areale: Mehrere Gebäude auf einem Grundstück, mit eigener Navigation pro Haus',
                      'Phasenweiser Vertrieb: Einzelne Bauabschnitte können sukzessive freigeschaltet werden',
                      'Live-Verfügbarkeitsabgleich mit Ihrem ERP/CRM-System',
                      'Polygon-Reduktion für mobile Nutzung auch bei extrem komplexen Modellen',
                      'Sonnenverlaufs-Simulation basierend auf realen Himmelsrichtungen',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ marginBottom: '1.25rem' }}>
                         <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={22} />
                         <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2rem' }}>
                 <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-md)' }}>
                    <img src="/showcase-detail.png" alt="3D Slice View" style={{ width: '100%', display: 'block' }} />
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* SEO CONTENT */}
        <section className="section bg-white border-b">
           <div className="container prose animate-up">
              <h2>Digitale Projektentwicklung: Warum 3D-Visualisierung der neue Standard ist</h2>
              <p>Die Projektentwicklungslandschaft in der DACH-Region verändert sich grundlegend. <strong>ESG-Auflagen</strong>, steigende Baukosten und anspruchsvollere Käufer erfordern neue Vermarktungsstrategien. Projektentwickler, die auf interaktive 3D-Technologie setzen, haben einen messbaren Wettbewerbsvorteil.</p>
              <h3>Vom Renderings zum Erlebnis</h3>
              <p>Statische 3D-Renderings haben ihren Platz – für Print und Präsentationen. Doch für die digitale Vermarktung reichen sie nicht mehr aus. Käufer erwarten heute ein interaktives Erlebnis, bei dem sie selbst navigieren, filtern und entdecken können. Der flatplan.de Wohnungsfinder bietet genau das.</p>
              <h3>Integration in den Projektentwicklungs-Workflow</h3>
              <p>Unser System passt sich Ihrem Workflow an, nicht umgekehrt. Durch den automatisierten Import aus BIM-Software können Planungsänderungen schnell und kostengünstig in das 3D-Modell übernommen werden. Das spart Zeit, Geld und Nerven.</p>
           </div>
        </section>

        {/* FAQ */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">FAQ Projektentwicklung</div>
                 <h2>Häufige Fragen von Projektentwicklern</h2>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Ab welcher Projektgröße lohnt sich ein Flatfinder?</summary>
                    <p>Selbst bei kleinen Projekten ab 6 Einheiten kann der Flatfinder sinnvoll sein, da er den Vertrieb massiv beschleunigt. Die höchste Rendite erzielen Projekte ab 30 Einheiten.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Können wir den Finder schon in der Planungsphase einsetzen?</summary>
                    <p>Absolut. Viele unserer Kunden starten mit einem Vorentwurf. Das 3D-Modell kann parallel zur Baugenehmigung iteriert und verfeinert werden.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Unterstützen Sie gemischte Nutzungskonzepte (Wohnen + Gewerbe)?</summary>
                    <p>Ja. Gewerbeflächen, Praxen, Büros und Tiefgaragenstellplätze können parallel zu Wohneinheiten dargestellt und separat vermarktet werden.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Wie gehen Sie mit Planungsänderungen um?</summary>
                    <p style={{ paddingBottom: 0 }}>Kleinere Änderungen (Preise, Texte, Verfügbarkeiten) können in Echtzeit aktualisiert werden. Bei architektonischen Änderungen passen unsere 3D-Artists das Modell schnell und kostgünstig an.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="section bg-white text-center">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Machen Sie Ihre Vision greifbar.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Starten Sie jetzt mit einem unverbindlichen Angebot für Ihr Entwicklungsprojekt.</p>
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
