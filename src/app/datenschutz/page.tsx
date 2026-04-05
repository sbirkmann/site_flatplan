"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <main>
      <Header />
      <section className="legal-page">
        <div className="container">
          <h1>Datenschutzerklärung</h1>
          <div className="legal-content glass-card">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p><strong>Allgemeine Hinweise</strong><br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

            <h2>2. Datenerfassung auf dieser Website</h2>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:</p>
            <p>Investora Commercial (EEIG)<br />
            Schaurain 21<br />
            83101 Rohrdorf<br />
            E-Mail: /kontakt</p>

            <h2>3. Datensicherheit</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

            <h2>4. Auskunft, Löschung und Sperrung</h2>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>

            <h2>5. Server-Log-Dateien</h2>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .legal-page { padding: 10rem 0 6rem; background: var(--muted); min-height: 80vh; }
        .legal-content { padding: 3rem; background: white; margin-top: 2rem; border-radius: 1rem; }
        h1 { font-size: 3rem; margin-bottom: 2rem; }
        h2 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
        p { margin-bottom: 1rem; color: var(--muted-foreground); line-height: 1.6; }
      `}</style>
    </main>
  );
}
