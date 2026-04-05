"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Briefcase, Check, TrendingUp, Target, BarChart, Smartphone, FileText, Users, ArrowRight, Megaphone, Globe, Search } from 'lucide-react';

export default function Immobilienmakler() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "3D Wohnungsfinder für Immobilienmakler | flatplan.de",
    "description": "Sichern Sie sich Exklusivmandate mit einem interaktiven 3D Flatfinder. Qualifizierte Leads, automatisierte Exposés und CRM-Integration für moderne Makler.",
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
                <div className="badge"><Briefcase size={16} style={{ marginRight: '8px' }}/> Branchenlösung Immobilienmakler</div>
                <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  Exklusivmandate gewinnen. Leads automatisieren.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
                  Als Makler, der einem Bauträger einen digitalen 3D Wohnungsfinder anbieten kann, 
                  heben Sie sich drastisch von der Konkurrenz ab. Das sichert Ihnen Alleinaufträge.
                </p>
                <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                   <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                      Jetzt starten <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                   </Link>
                   <Link href="/funktionen/integrationen" className="btn btn-outline" style={{ textTransform: 'uppercase' }}>
                      CRM-Anbindung
                   </Link>
                </div>
             </div>
             <div className="animate-up delay-200">
                <div style={{ border: '1px solid var(--border-light)', padding: '0.75rem', boxShadow: 'var(--shadow-xl)' }}>
                   <img src="/showcase-detail.png" alt="Makler Lead Dashboard" style={{ width: '100%', display: 'block' }} />
                </div>
             </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-dark" style={{ padding: '4rem 0' }}>
           <div className="container grid grid-4 text-center animate-up">
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>2x</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Lead-Qualität</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>-70%</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Weniger Leerbesichtigungen</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>5 Min</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Website-Integration</div>
              </div>
              <div>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.75rem' }}>∞</div>
                 <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>Besichtigungen 24/7</div>
              </div>
           </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <img src="/flatfinder_features_expose.png" alt="Makler Flatfinder Ansicht" style={{ width: '100%', border: '1px solid var(--border-light)' }} />
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2rem' }}>
                 <h2 className="mb-6">Das Makler-Dilemma: Austauschbare Dienstleistung</h2>
                 <p className="mb-4">In einem Markt, in dem dutzende Makler um dasselbe Neubau-Mandat konkurrieren, zählt nur eines: der messbare Mehrwert. Ein 3D-Wohnungsfinder auf Ihrer Landingpage demonstriert dem Bauträger sofort, dass Sie technologisch an der Spitze stehen.</p>
                 <p className="mb-4">Statt „wir haben gute Kontakte" sagen Sie: <strong>„Wir liefern Ihnen einen interaktiven 3D-Finder, der Ihre Käufer vorqualifiziert und direkt in Ihr CRM überträgt."</strong></p>
                 <p>Das ist kein Argument, dem ein Bauträger widerstehen kann.</p>
              </div>
           </div>
        </section>

        {/* VORTEILE FÜR MAKLER */}
        <section className="section bg-soft border-b">
           <div className="container text-center mb-12 animate-up">
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Ihre Vorteile</span>
              <h2>Was der Flatfinder für Makler leistet</h2>
           </div>
           <div className="container grid grid-3">
              {[
                { icon: <Megaphone size={36} color="var(--accent-primary)" />, title: 'Automatisierte Exposés', desc: 'Kein stundenlanges Layouten von PDFs mehr. Nutzer exportieren sich ihr Wunsch-Exposé aus der 3D-Ansicht heraus. CI-konform und immer aktuell.' },
                { icon: <Globe size={36} color="var(--accent-primary)" />, title: 'Überregionale Vernetzung', desc: 'Verkaufen Sie Münchener Neubauten mühelos an Investoren in Hamburg, da eine physische Besichtigung durch den 3D-Rundgang entfällt.' },
                { icon: <Search size={36} color="var(--accent-primary)" />, title: 'Qualifizierte Leads (Hot Leads)', desc: 'Der Kunde filtert nach Budget und Zimmeranzahl. Seine Anfrage enthält direkt die Haus- und Wohnungsnummer. Kein Rätselraten mehr.' },
                { icon: <Smartphone size={36} color="var(--accent-primary)" />, title: 'Mobile-First Design', desc: 'Über 65% der Immobiliensuchenden nutzen ihr Smartphone. Der Flatfinder ist für Touch-Gesten und mobile Bildschirme perfekt optimiert.' },
                { icon: <BarChart size={36} color="var(--accent-primary)" />, title: 'Analytics & Heatmaps', desc: 'Erfahren Sie in Echtzeit, welche Wohnungen am meisten betrachtet werden. Nutzen Sie die Daten für gezielte Nachfass-Aktionen.' },
                { icon: <Users size={36} color="var(--accent-primary)" />, title: 'Alleinstellung im Markt', desc: 'Bieten Sie Bauträgern eine Technologie, die kein anderer Makler in der Region hat. Das sichert Ihnen langfristige Exklusivmandate.' },
              ].map((f, i) => (
                <div key={i} className="card animate-up" style={{ animationDelay: `${i * 80}ms`, textAlign: 'center', padding: '3rem 2rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>{f.icon}</div>
                   <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{f.title}</h3>
                   <p style={{ margin: 0, fontSize: '1rem' }}>{f.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* CRM SECTION */}
        <section className="section bg-white border-b">
           <div className="container grid grid-2 items-center">
              <div className="animate-up">
                 <h2 className="mb-6">Nahtlose CRM-Integration</h2>
                 <p className="mb-4">Egal ob <strong>onOffice</strong>, <strong>Propstack</strong>, <strong>FIO</strong>, <strong>EMPRO</strong> oder <strong>Immoprofessional</strong> – der Flatfinder dockt direkt an Ihr bestehendes System an. Ein Lead aus dem 3D-Modell landet als vollständiger Kontakt mit Wunschobjekt in Ihrer Pipeline.</p>
                 
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Automatische Adress-Erstellung im CRM', 'Verknüpfung mit dem angefragten Objekt', 'Sofortige Aufgaben-Erstellung für den zuständigen Makler', 'DSGVO-konforme Einwilligungsdokumentation', 'SMTP-basierte Bestätigungsmails an den Interessenten'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ marginBottom: '1rem' }}>
                         <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={22} />
                         <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{item}</span>
                      </li>
                    ))}
                 </ul>
                 <Link href="/funktionen/integrationen" className="btn btn-outline mt-4" style={{ textTransform: 'uppercase' }}>Alle Integrationen ansehen</Link>
              </div>
              <div className="animate-up delay-100" style={{ paddingLeft: '2rem' }}>
                 <div className="flex justify-center flex-wrap gap-4" style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {['onOffice enterprise', 'Propstack API', 'FIO Systems', 'EMPRO', 'Immoprofessional'].map((name, i) => (
                      <div key={i} style={{ fontSize: '1.25rem', fontWeight: 800, padding: '1rem 2rem', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', width: '100%', textAlign: 'center' }}>{name}</div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials variant="dark" />

        {/* SEO CONTENT */}
        <section className="section bg-white border-b">
           <div className="container prose animate-up">
              <h2>Digitale Makler-Tools: Warum der 3D Wohnungsfinder das wichtigste Akquise-Instrument wird</h2>
              <p>Der Immobilienmarkt verändert sich rasant. Käufer recherchieren heute online, vergleichen Angebote und treffen eine Vorauswahl, bevor sie überhaupt einen Makler kontaktieren. Wer als Makler in diesem digitalen Umfeld nicht die richtigen Werkzeuge hat, verliert Mandate an technisch besser aufgestellte Wettbewerber.</p>
              <p>Ein <strong>interaktiver 3D Wohnungsfinder</strong> ist dabei kein „Nice-to-have" mehr, sondern ein entscheidendes Alleinstellungsmerkmal. Bauträger bevorzugen nachweislich Makler, die ihnen eine digitale Vermarktungslösung bieten können, die über klassische Immoscout-Inserate hinausgeht.</p>
              <h3>ROI für Immobilienmakler</h3>
              <p>Rechnen Sie konservativ: Wenn der Flatfinder Ihnen auch nur ein einziges Exklusivmandat pro Jahr sichert, amortisiert er sich vielfach. Ein typisches Neubau-Mandat mit 30 Einheiten und einem durchschnittlichen Verkaufspreis von 350.000 € generiert bei 3% Provision einen Umsatz von über 300.000 €.</p>
           </div>
        </section>

        {/* FAQ */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <div className="text-center mb-12">
                 <div className="badge">FAQ Makler</div>
                 <h2>Häufige Fragen von Maklern</h2>
              </div>
              <div style={{ background: 'white', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Kann ich den Flatfinder unter meiner eigenen Marke anbieten?</summary>
                    <p>Ja. White-Label ist möglich. Ihr Logo, Ihre Farben, Ihre Domain. Ihr Bauträger-Kunde sieht nur Ihre Marke.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Muss ich technisches Know-how haben?</summary>
                    <p>Nein. Wir übernehmen die komplette technische Umsetzung. Sie liefern die Architekturdaten des Bauträgers und wir kümmern uns um alles andere.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Funktioniert der Finder auf allen Portalen?</summary>
                    <p>Der Flatfinder kann per Iframe oder Link in jede Website eingebunden werden, inklusive Ihrer eigenen Makler-Website und Social-Media-Kampagnen.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Wie werde ich als flatplan.de Partner anerkannt?</summary>
                    <p style={{ paddingBottom: 0 }}>Kontaktieren Sie uns für ein Partnergespräch. Wir bieten attraktive Provisionsmodelle für Makler, die flatplan.de aktiv ihren Bauträger-Kunden empfehlen.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="section bg-white text-center">
           <div className="container max-w-4xl mx-auto animate-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Werden Sie der Makler, den Bauträger wollen.</h2>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>Heben Sie sich ab mit einem Werkzeug, das die Konkurrenz nicht hat.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>
                 Angebot anfordern <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
