"use client";
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Was ist ein 3D Wohnungsfinder / Flatfinder?", "acceptedAnswer": { "@type": "Answer", "text": "Ein 3D Wohnungsfinder ist eine browserbasierte WebGL-Applikation, die Immobilienprojekte (Neubauten) vor der Fertigstellung als interaktives 3D-Modell abbildet. Kaufinteressenten können das Gebäude drehen, Wohneinheiten filtern und Exposés automatisiert herunterladen." } },
      { "@type": "Question", "name": "Muss der Endkunde eine App installieren?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Der Flatfinder läuft vollständig im Webbrowser (Chrome, Safari, Edge, Firefox) auf Desktop, Tablet und Smartphone ohne jegliche Installation." } },
      { "@type": "Question", "name": "Welche Daten benötigen Sie von uns?", "acceptedAnswer": { "@type": "Answer", "text": "Im Optimalfall DWG-, DXF- oder IFC/BIM-Dateien. Wir können aber auch aus PDF-Grundrissen, SketchUp- oder Revit-Modellen arbeiten." } },
      { "@type": "Question", "name": "Wie lange dauert die Erstellung?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 2-4 Wochen nach Datenlieferung, abhängig von der Komplexität des Projekts und der Anzahl der Wohneinheiten." } },
      { "@type": "Question", "name": "Ist der Flatfinder DSGVO-konform?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Alle Daten werden verschlüsselt auf deutschen Servern verarbeitet und gespeichert. Es werden keine Tracking-Cookies ohne Einwilligung gesetzt." } },
      { "@type": "Question", "name": "Welche CRM-Systeme werden unterstützt?", "acceptedAnswer": { "@type": "Answer", "text": "Wir integrieren uns nahtlos in onOffice, Propstack, FIO, EMPRO und Immoprofessional. Über REST-API und Webhooks sind auch andere Systeme anbindbar." } },
      { "@type": "Question", "name": "Was kostet ein 3D Wohnungsfinder?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten hängen von der Projektgröße ab. Es gibt ein einmaliges Setup-Honorar und eine moderate monatliche Lizenzgebühr. Fordern Sie ein individuelles Angebot an." } },
      { "@type": "Question", "name": "Kann der Finder in meine bestehende Website eingebunden werden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Die Einbindung erfolgt über einen simplen Iframe-Code oder optional über unsere JavaScript-API. Die Integration dauert weniger als 5 Minuten." } }
    ]
  };

  return (
    <>
      <SEO />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: '80px' }}>
        
        <section className="bg-white border-b" style={{ padding: '8rem 0 6rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center animate-up">
             <div className="badge"><HelpCircle size={16} style={{ marginRight: '8px' }}/> Wissen & Support</div>
             <h1 style={{ marginBottom: '2rem', marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
               Frequently Asked Questions
             </h1>
             <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
               Antworten auf die häufigsten Fragen rund um den 3D Wohnungsfinder, Technik, Kosten und Integration.
             </p>
          </div>
        </section>

        {/* GENERAL */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <h2 className="mb-8">Allgemeines</h2>
              <div style={{ background: 'white', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Was ist ein 3D Wohnungsfinder / Flatfinder?</summary>
                    <p>Ein 3D Wohnungsfinder ist eine browserbasierte WebGL-Applikation, die geplante Immobilienprojekte (Neubauten, Quartiere, Revitalisierungen) als interaktives 3D-Modell abbildet. Kaufinteressenten können das Gebäude in Echtzeit drehen, Wohneinheiten nach Zimmerzahl, Fläche und Budget filtern und automatisiert maßgeschneiderte PDF-Exposés herunterladen. Kein Download, keine App, kein Plugin. Alles direkt im Browser.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Muss der Endkunde eine App installieren?</summary>
                    <p>Nein, unter keinen Umständen. Der Flatfinder basiert auf WebGL und läuft nativ in jedem modernen Webbrowser (Chrome, Safari, Edge, Firefox) auf Desktop, Tablet und Smartphone. Das ist auch für Ihre <strong>Conversion Rate</strong> entscheidend: Jeder zusätzliche Installationsschritt führt zu ca. 50% Nutzer-Abbruch.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Für welche Projektgrößen eignet sich flatplan.de?</summary>
                    <p>Von einem einzelnen Mehrfamilienhaus mit 6 Einheiten bis hin zu großen städtischen Arealen mit über 500 Wohneinheiten, die auf mehrere Gebäude verteilt sind. Unsere Engine wurde speziell für hohe Polygon-Dichten optimiert. Selbst 200+ Einheiten über 10 Gebäude laufen auf einem Mittelklasse-Smartphone flüssig.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Wie unterscheidet sich flatplan.de von einem statischen 360°-Rundgang?</summary>
                    <p style={{ paddingBottom: 0 }}>Ein 360°-Rundgang (z.B. Matterport) zeigt vordefinierte, statische Kamerastandpunkte. Der flatplan.de 3D Finder hingegen ist ein echtes Echtzeit-3D-Modell: Der User navigiert frei, filtert Einheiten, betrachtet Lichtverläufe und erzeugt dynamische Grundriss-Ansichten (Slice-View). Es ist die Differenz zwischen einem Foto und einem komplett steuerbaren Architekturmodell.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* TECHNIK */}
        <section className="section bg-white border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <h2 className="mb-8">Technik & Daten</h2>
              <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Welche Architekturdaten benötigen Sie?</summary>
                    <p>Im Optimalfall erhalten wir DWG-, DXF- oder IFC/BIM-Dateien Ihres Architekten. Falls diese nicht vorliegen, können wir auch aus PDF-Grundrissen, SketchUp- oder Revit-Modellen hochwertige 3D-Modelle erstellen. Die Qualität des Inputs beeinflusst den Setup-Aufwand.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Wie lange dauert die Erstellung eines 3D-Modells?</summary>
                    <p>In der Regel 2-4 Wochen nach Lieferung aller Grundlagen-Daten. Bei besonders komplexen Projekte (viele Gebäude, Sonderarchitektur) kann der Zeitraum auf 6 Wochen steigen. Wir stimmen den Zeitplan individuell mit Ihnen ab.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Kann der Finder in meine bestehende Website eingebunden werden?</summary>
                    <p>Ja. Die Einbindung erfolgt über einen simplen Iframe-Code oder optional über unsere JavaScript-API für tiefere Integrationen (z.B. Event-Tracking). Die technische Integration dauert weniger als 5 Minuten und erfordert keinerlei Backend-Änderungen an Ihrer Seite.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Wie gut muss die Internetverbindung des Nutzers sein?</summary>
                    <p>Die 3D-Modelle werden hochkomprimiert übertragen. Der initiale Download liegt typischerweise unter 20 MB. Danach rendert die GPU des Endgerätes in Echtzeit. Auch im mobilem 4G-Netz ist die Nutzung problemlos möglich.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Unterstützen Sie barrierefreie Darstellung (WCAG)?</summary>
                    <p style={{ paddingBottom: 0 }}>Ja. Wir arbeiten kontinuierlich daran, die Zugänglichkeit (Accessibility) unserer Viewer zu verbessern. Tastaturnavigation, Screen-Reader-Kompatibilität und kontrastreiche Farbmodi sind in Entwicklung und werden sukzessive ausgerollt.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* CRM & INTEGRATION */}
        <section className="section bg-soft border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <h2 className="mb-8">CRM & Integrationen</h2>
              <div style={{ background: 'white', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Welche CRM-Systeme werden unterstützt?</summary>
                    <p>Wir integrieren uns nahtlos in <strong>onOffice enterprise</strong>, <strong>Propstack</strong>, <strong>FIO</strong>, <strong>EMPRO</strong> und <strong>Immoprofessional</strong>. Über unsere REST-API und Webhook-Schnittstellen sind grundsätzlich auch alle weiteren Systeme anbindbar, die JSON-Payloads oder OpenImmo-XML verarbeiten können.</p>
                 </details>
                 <details className="faq-item">
                    <summary>Werden Verfügbarkeiten automatisch synchronisiert?</summary>
                    <p>Ja. Bei der Premium-Integration (Enterprise-Paket) kann ein bidirektionaler Abgleich eingerichtet werden. Wenn Sie in Ihrem CRM eine Einheit als "reserviert" oder "verkauft" markieren, wird sie im 3D-Modell in Echtzeit farblich gekennzeichnet.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Können Leads automatisch an mein E-Mail-System gesendet werden?</summary>
                    <p style={{ paddingBottom: 0 }}>Ja. Wir unterstützen SMTP-Anbindung und Webhook-basierte E-Mail-Trigger. Jede Anfrage aus dem Flatfinder kann automatisch als formatierte E-Mail an Ihren Vertrieb oder als geparstes Datenobjekt an Ihr CRM gesendet werden.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* KOSTEN */}
        <section className="section bg-white border-b">
           <div className="container max-width-3xl mx-auto animate-up">
              <h2 className="mb-8">Kosten & Lizenzierung</h2>
              <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem 3rem', border: '1px solid var(--border-light)' }}>
                 <details className="faq-item" open>
                    <summary>Was kostet ein 3D Wohnungsfinder?</summary>
                    <p>Die Kosten setzen sich aus einem einmaligen Setup-Honorar (3D-Modellierung) und einer moderaten monatlichen Lizenz- und Hosting-Gebühr zusammen. Die genaue Kalkulation hängt von der Anzahl der Gebäude und Einheiten ab. <Link href="/kontakt" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Fordern Sie jetzt ein individuelles Angebot an.</Link></p>
                 </details>
                 <details className="faq-item">
                    <summary>Gibt es eine Mindestvertragslaufzeit?</summary>
                    <p>Nein. Wir bieten flexible Laufzeiten an, die sich am Vermarktungszeitraum Ihres Bauprojekts orientieren. Sobald alle Einheiten verkauft sind, kann die Lizenz beendet werden.</p>
                 </details>
                 <details className="faq-item" style={{ borderBottom: 'none' }}>
                    <summary>Ist der Flatfinder steuerlich absetzbar?</summary>
                    <p style={{ paddingBottom: 0 }}>In der Regel ja. Die Kosten für den 3D Wohnungsfinder können als Vertriebskosten oder Marketingaufwand steuerlich geltend gemacht werden. Konsultieren Sie hierzu bitte Ihren Steuerberater.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="section bg-dark text-center">
           <div className="container max-w-4xl mx-auto">
              <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Noch Fragen offen?</h2>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1.25rem', marginBottom: '2rem' }}>Unser Team steht Ihnen jederzeit zur Verfügung.</p>
              <Link href="/kontakt" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>Jetzt Kontakt aufnehmen</Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
