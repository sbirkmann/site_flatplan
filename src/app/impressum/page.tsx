import type { Metadata } from "next";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Impressum",
    description: "Impressum und Anbieterkennzeichnung von flatplan.de – eine Marke der Investora Commercial EWIV, Rohrdorf.",
    path: "/impressum",
  }),
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <main>
      <section className="page-hero bg-soft" style={{ minHeight: "70vh" }}>
        <div className="container max-w-3xl mx-auto">
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>Impressum</h1>
          <div className="card prose" style={{ margin: 0, maxWidth: "none", padding: "2.5rem" }}>
            <h2 style={{ marginTop: 0 }}>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Investora Commercial</strong>
              <br />
              Europäische Wirtschaftliche Interessenvereinigung (EWIV)
            </p>
            <p>
              {site.company.street}
              <br />
              {site.company.zip} {site.company.city}
              <br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={site.company.phoneHref}>{site.company.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
            </p>

            <h2>Vertreten durch</h2>
            <p>Geschäftsführer: Klaus Thomanek</p>

            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Würzburg
              <br />
              Registernummer: HRA 7576
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE308073305
            </p>

            <h2>EORI-Nummer</h2>
            <p>DE599323849000549</p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
