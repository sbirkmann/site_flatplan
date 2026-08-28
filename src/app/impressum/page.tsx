import type { Metadata } from "next";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Impressum",
    description: "Impressum und Anbieterkennzeichnung von flatplan.de – eine Marke der Immowoo Group GmbH, Grünwald.",
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
          <div className="overlap-plate prose" style={{ margin: 0, maxWidth: "none" }}>
            <h2 style={{ marginTop: 0 }}>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Immowoo Group GmbH</strong>
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
            <p>Geschäftsführer: Andrei-Alexandru Muckle</p>

            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht München
              <br />
              Registernummer: HRB 314765
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads
              und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>

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
