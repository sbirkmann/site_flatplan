"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <main>
      <Header />
      <section className="legal-page">
        <div className="container">
          <h1>Impressum</h1>
          <div className="legal-content glass-card">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p><strong>Investora Commercial</strong><br />
            Europäische Wirtschaftliche Interessenvereinigung (EEIV)</p>
            <p>Schaurain 21<br />
            83101 Rohrdorf<br />
            Deutschland</p>

            <h2>Kontakt</h2>
            <p>Telefon: +49(0)931 49737742<br />
            E-Mail: /kontakt</p>

            <h2>Vertreten durch</h2>
            <p>Geschäftsführer: Klaus Thomanek</p>

            <h2>Registereintrag</h2>
            <p>Eintragung im Handelsregister.<br />
            Registergericht: Würzburg<br />
            Registernummer: HRA 7576</p>

            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE308073305</p>

            <h2>EORI-Nummer</h2>
            <p>DE599323849000549</p>

            <h2>EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
        a { color: var(--accent); }
      `}</style>
    </main>
  );
}
