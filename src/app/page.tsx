import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import { blogPosts, formatDate } from "@/lib/blog";
import { IconArrow } from "@/components/icons";
import StatusMarquee from "@/components/illustrations/StatusMarquee";
import FacadeFinder from "@/components/photos/FacadeFinder";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "flatplan.de | Wohnungsfinder für den Neubauvertrieb",
    description:
      "Wohnungsfinder für Bauträger und Makler. Fassade aus dem Rendering, Etagengrundriss, 360°, Anfrage nach onOffice, Propstack oder Flowfact.",
    path: "/",
  }),
  title: { absolute: "flatplan.de | Wohnungsfinder für den Neubauvertrieb" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "flatplan.de Wohnungsfinder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.url,
  description:
    "Wohnungsfinder für den Neubauvertrieb: drehbare Projektansicht, 360°-Rundgänge, Anfragen, CRM (onOffice, Propstack, Flowfact), OpenImmo.",
  publisher: { "@id": `${site.url}/#organization` },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "EUR",
    description: "Demo am laufenden Objekt",
  },
};

const deskUnits = [
  { id: "WE 2.03", line: "3 Zimmer · 84,3 m² · 689.000 € · frei" },
  { id: "WE 3.02", line: "2 Zimmer · 61,0 m² · 498.000 € · reserviert" },
  { id: "WE 4.02", line: "4 Zimmer · 112,8 m² · 910.000 € · frei" },
  { id: "WE 1.04", line: "2 Zimmer · 54,2 m² · verkauft" },
];

export default function Home() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      <JsonLd data={softwareSchema} />

      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="eyebrow">Fassade, nicht PDF.</span>
          <h1>
            Vertrieb
            <br />
            über die Fassade.
          </h1>
          <p className="lead">
            Jede WE als Fläche auf dem Rendering. Grundriss, 360°, Preis, Status.
            Anfrage nach onOffice, Propstack oder Flowfact.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo am Projekt <IconArrow size={18} />
            </Link>
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 650, textDecoration: "underline", textUnderlineOffset: 4 }}
            >
              Laufendes Objekt
            </a>
          </div>
          <p className="home-hero-meta">Browser · Server in Deutschland · Einrichtung in Tagen</p>
        </div>
        <div className="home-hero-canvas">
          <iframe src={site.demoUrl} title="Wohnungsfinder, laufendes Objekt" allow="fullscreen" />
          <span className="home-hero-caption">Haus am Park · live</span>
        </div>
      </section>

      <StatusMarquee />

      <section className="bg-white border-b">
        <div className="container">
          <p className="partner-line measure" style={{ margin: 0, fontSize: "0.95rem", letterSpacing: "0.02em", textTransform: "none" }}>
            Projekte u. a. mit
            <span className="name" style={{ color: "#c41e3a" }}>Sparkasse</span>
            <span className="name">Zinn Architektur</span>
            <span className="name">Investora</span>
          </p>
        </div>
      </section>

      <section id="fassade" className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Ansicht</span>
            <h2>Status liegt auf der Loggia.</h2>
            <p className="lead">
              Gelb frei, blau reserviert, grau verkauft. Klick auf WE 2.03 öffnet
              Fläche, Preis und Grundriss.
            </p>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Ansicht und Etage <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="licht" className="overlap-licht border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht, Schatten auf den Loggien"
          width={1536}
          height={1024}
        />
        <div className="overlap-frame overlap-licht-inset">
          <FacadeFinder selected="4.02" showLegend={false} />
        </div>
        <div className="overlap-plate">
          <span className="eyebrow">Sonnenstand</span>
          <h2>21. Juni, 18 Uhr, Süd.</h2>
          <p className="lead" style={{ marginBottom: 0 }}>
            Schatten über der Fassade. Nordwinkel hinterlegt. Für die Frage nach
            dem Abendbalkon.
          </p>
        </div>
      </section>

      <section id="rundgang" className="overlap-stage bg-white border-b">
        <div className="container overlap-interior">
          <figure className="photo-frame overlap-interior-main">
            <img
              src="/photos/neubau-wohnen.jpg"
              alt="Unmöbliertes Wohnzimmer, Blick auf die Süd-Loggia"
              width={1536}
              height={1024}
            />
            <figcaption>WE 2.03 · Wohnen</figcaption>
          </figure>
          <figure className="overlap-frame overlap-interior-inset">
            <img
              src="/photos/neubau-kueche.jpg"
              alt="Küche derselben Wohnung, Blick zur Loggia"
              width={1536}
              height={1024}
            />
          </figure>
          <div className="overlap-plate">
            <span className="eyebrow">360°</span>
            <h2>Standpunkt in der ungebauten Wohnung.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Panorama, nächster Raum, Blick zur Loggia. Solange die Musterwohnung fehlt.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-dark border-b">
        <div className="container overlap-leads">
          <div>
            <span className="eyebrow">Vorgang</span>
            <h2>Die Anfrage nennt die WE.</h2>
            <p className="lead">
              Exposé nach Double-Opt-in. Suchagent für 3 Zimmer Süd. Datensatz in
              onOffice, Propstack oder Flowfact.
            </p>
            <Link href="/funktionen/lead-generierung" className="btn btn-primary">
              Anfragen und Gate <IconArrow size={16} />
            </Link>
          </div>
          <div className="overlap-frame" style={{ background: "var(--papier)", color: "var(--tinte)", padding: "1.25rem 1.35rem 1.5rem" }}>
            <figure className="photo-frame" style={{ marginBottom: "1.15rem" }}>
              <img
                src="/photos/neubau-loggien.jpg"
                alt="Loggien der Südfassade"
                width={1536}
                height={1024}
              />
              <figcaption>WE 2.03 · Anfrage</figcaption>
            </figure>
            <LeadInboxMock />
          </div>
        </div>
      </section>

      <section className="overlap-stage bg-white border-b">
        <div className="container overlap-desk">
          <div className="overlap-frame">
            <FacadeFinder selected="3.02" showLegend={false} />
          </div>
          <ol className="overlap-desk-list">
            <li className="measure" style={{ borderBottom: "1px solid var(--tinte)", paddingBottom: "0.85rem" }}>
              Haus A · 3 Zimmer · Süd
            </li>
            {deskUnits.map((u) => (
              <li key={u.id}>
                <strong>{u.id}</strong>
                <span>{u.line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="bauzaun" className="overlap-fence border-b">
        <img
          className="overlap-fence-bleed"
          src="/photos/neubau-bauzaun.jpg"
          alt="Bauzaun vor dem Neubau, Projekttafel am Brett"
          width={1536}
          height={1024}
        />
        <div className="container">
          <div className="overlap-plate">
            <span className="eyebrow">Baustelle</span>
            <h2>QR je Wohnung, am Brett.</h2>
            <p className="lead">
              Scan öffnet die WE. UTM am Zaun. Zählung, wer stehen bleibt.
            </p>
            <Link href="/funktionen/pdf-expose" style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 }}>
              Exposé, Preisliste, QR <IconArrow size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-blatt border-b">
        <div className="container">
          <span className="eyebrow">Ablauf</span>
          <h2 style={{ maxWidth: "16ch", marginBottom: "2rem" }}>Ansicht, Wohnung, Vorgang.</h2>
          <div className="walk">
            {[
              { room: "Ansicht", title: "Fassade aus dem Rendering", copy: "Hotspots je WE. Statusfarbe in der Loggia. Mehrere Blickwinkel, wenn das Studio sie liefert." },
              { room: "Wohnung", title: "Etage und Rundgang", copy: "Grundriss je Geschoss. Panorama, soweit vorhanden. Sonnenstand mit Nordwinkel." },
              { room: "Vorgang", title: "Anfrage ins CRM", copy: "Gate, Suchagent, Termin. Übergabe nach onOffice, Propstack oder Flowfact." },
            ].map((step) => (
              <div key={step.room} className="walk-row">
                <p className="room">{step.room}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-b">
        <div className="container">
          <p className="plan-rule" style={{ marginBottom: "1.75rem" }}>Texte aus dem Vorverkauf.</p>
          <div className="blog-board">
            <Link href={`/blog/${featured.slug}`} className="blog-card blog-card--lead">
              <div className="blog-card-frame">
                <img src={featured.image} alt={featured.imageAlt} width={1200} height={750} />
              </div>
              <div className="blog-card-plate">
                <span className="measure">{featured.tag} · {formatDate(featured.date)}</span>
                <strong>{featured.title}</strong>
                <span className="blog-card-desc">{featured.description}</span>
              </div>
            </Link>
          </div>
          <ul className="blog-list" style={{ marginTop: "2rem" }}>
            {rest.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="measure">{formatDate(post.date)}  ·  {post.tag}</span>
                  <strong style={{ display: "block", marginTop: "0.25rem" }}>{post.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="measure" style={{ display: "inline-block", marginTop: "1.25rem", textDecoration: "underline" }}>
            Alle Artikel
          </Link>
        </div>
      </section>

      <section className="sec-quote bg-sonne border-b">
        <div className="container">
          <blockquote>
            Die Quote für die Bankfinanzierung stand nach drei Wochen. 48 WE in Riem, der Finder in der Ansicht.
          </blockquote>
          <p className="measure" style={{ margin: 0, color: "var(--tinte)" }}>Thomas Z. · Zinn Architektur, München-Riem</p>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="stat-line" style={{ color: "#fff" }}>
            <div><strong>Browser</strong><br /><span>ohne App</span></div>
            <div><strong>3 CRM</strong><br /><span>onOffice · Propstack · Flowfact</span></div>
            <div><strong>ohne Cookie</strong><br /><span>Messung ohne Banner</span></div>
            <div><strong>QR je WE</strong><br /><span>Bauzaun in die Wohnung</span></div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Rendering, Grundrisse, Wohnungsliste."
        lead="Termin in Grünwald oder per Video. Wir legen den Finder an einem laufenden Objekt auf."
        cta="Demo am Projekt"
      />
    </main>
  );
}
