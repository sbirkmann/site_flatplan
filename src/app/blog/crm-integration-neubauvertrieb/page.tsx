"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { Clock, User, ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function BlogPostCRM() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "CRM-Integration für den Neubauvertrieb: onOffice, Propstack & Co. automatisieren",
    "description": "Wie Sie Ihr CRM-System nahtlos an einen 3D Wohnungsfinder anbinden und Lead-Workflows vollständig automatisieren.",
    "author": { "@type": "Person", "name": "Investora Commercial" },
    "datePublished": "2026-03-10",
    "publisher": { "@type": "Organization", "name": "Investora Commercial" },
    "image": "/showcase-3d.png"
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        <article>
          <header className="bg-white border-b" style={{ padding: '6rem 0 4rem' }}>
             <div className="container max-w-4xl mx-auto animate-up">
                <Link href="/blog" style={{ color: 'var(--text-tertiary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}><ArrowLeft size={16} /> Zurück zum Blog</Link>
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
                  CRM-Integration für den Neubauvertrieb: onOffice, Propstack & Co. automatisieren
                </h1>
                <div className="flex gap-4" style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                   <span className="flex items-center gap-2"><Clock size={16} /> 7 Min. Lesezeit</span>
                   <span className="flex items-center gap-2"><User size={16} /> Investora Commercial</span>
                   <span>10. März 2026</span>
                </div>
             </div>
          </header>

          <section className="section bg-soft border-b">
             <div className="container max-w-4xl mx-auto prose animate-up">
                <p style={{ fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                   <strong>Ein 3D Wohnungsfinder generiert erstklassige Leads. Aber was passiert danach?</strong> Wenn der Lead nicht automatisch in Ihrem CRM-System landet, verlieren Sie wertvolle Minuten – und potenzielle Kunden.
                </p>

                <h2>Das Problem: Medienbrüche im Vertriebsprozess</h2>
                <p>In vielen Unternehmen sieht der Lead-Workflow so aus: Anfrage per E-Mail → Sachbearbeiter kopiert Daten manuell in CRM → Aufgabe wird erstellt → Makler wird informiert. Dieser Prozess dauert Stunden, manchmal Tage. In der Zwischenzeit hat der Interessent möglicherweise beim Wettbewerber angefragt.</p>

                <h2>Die Lösung: Automatisierte CRM-Anbindung</h2>
                <p>flatplan.de bietet native Integrationen für die gängigsten Immobilien-CRM-Systeme:</p>

                <h3>onOffice enterprise</h3>
                <p>Über die onOffice Web-API werden Leads automatisch als neue Adressen mit verknüpftem Interessentenobjekt angelegt. Der zuständige Makler erhält sofort eine Aufgabe mit den Details der angefragten Wohneinheit.</p>

                <h3>Propstack</h3>
                <p>Via REST-API werden Kontakte und Aktivitäten automatisch synchronisiert. Propstack-Nutzer sehen den Lead direkt in ihrer Pipeline mit vollständigem Kontext.</p>

                <h3>FIO Systems & EMPRO</h3>
                <p>Über OpenImmo-XML oder dedizierte API-Schnittstellen werden Objektdaten und Leads bidirektional synchronisiert. Verfügbarkeitsstatus-Änderungen im CRM werden in Echtzeit im 3D-Modell reflektiert.</p>

                <h3>SMTP E-Mail Trigger</h3>
                <p>Zusätzlich zu den CRM-Integrationen kann jeder Lead-Eingang eine formatierte E-Mail an beliebige Empfänger auslösen. Dies dient als Backup und als sofortige Benachrichtigung für den Vertrieb.</p>

                <h2>Vorteile der Automatisierung</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                   {[
                     'Reaktionszeit unter 5 Minuten statt Stunden',
                     'Keine manuellen Dateneingaben und Tippfehler',
                     'Jeder Lead enthält die exakte Wunscheinheit',
                     'DSGVO-konforme Einwilligungsdokumentation',
                     'Bidirektionale Verfügbarkeitssynchronisation',
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3" style={{ marginBottom: '1rem' }}>
                        <Check color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} size={20} />
                        <span style={{ fontSize: '1.05rem' }}>{item}</span>
                     </li>
                   ))}
                </ul>

                <h2>Fazit</h2>
                <p>Die CRM-Integration ist kein Nice-to-have, sondern der entscheidende Faktor, der aus einem guten 3D-Wohnungsfinder ein exzellentes Vertriebssystem macht. Wenn Sie Ihren Lead-Workflow automatisieren, steigern Sie nicht nur die Effizienz, sondern auch die Abschlussquote.</p>

                <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '2.5rem', marginTop: '3rem' }}>
                   <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Jetzt CRM-Integration einrichten</h3>
                   <p style={{ marginBottom: '1.5rem' }}>Wir zeigen Ihnen in einem 15-minütigen Call, wie die Integration in Ihr bestehendes System funktioniert.</p>
                   <Link href="/kontakt" className="btn btn-primary" style={{ textTransform: 'uppercase' }}>
                      Beratungstermin buchen <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                   </Link>
                </div>
             </div>
          </section>
        </article>

      </main>
      <Footer />
    </>
  );
}
