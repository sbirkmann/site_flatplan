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
import CustomerLogos from "@/components/CustomerLogos";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "flatplan.de | Wohnungsfinder für den Vorverkauf",
    description:
      "Wohnungsfinder für Bauträger und Makler: Wohnungen in der Fassade wählen, Status frei, reserviert oder verkauft, Grundriss und 360°. Anfrage mit Wohnungsnummer. Dashboard inklusive. Modelle und Renderings von Immowoo.",
    path: "/",
  }),
  title: { absolute: "flatplan.de | Wohnungsfinder für den Vorverkauf" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "flatplan.de Wohnungsfinder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.url,
  description:
    "Wohnungsfinder für den Vorverkauf: Fassade mit Live-Status, 3D-Grundrisse, 360°-Rundgänge, Anfragen mit Wohnungsnummer. Dashboard für Editor und Auswertung. CRM optional (onOffice, Propstack, Flowfact).",
  publisher: { "@id": `${site.url}/#organization` },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "EUR",
    description: "Kostenlose Demo",
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
          <span className="eyebrow">Bauträger · Makler · Vorverkauf</span>
          <h1>
            Wohnungsfinder
            <br />
            für den Vorverkauf.
          </h1>
          <p className="lead">
            Käufer klicken die Wohnung in der Fassade an: Grundriss, Preis,
            frei oder verkauft. Die Anfrage kommt mit Wohnungsnummer. Modelle
            und Renderings von uns; vorhandene Pläne bereiten wir auf.
            Status und Anfragen liegen im Dashboard.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <IconArrow size={18} />
            </Link>
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 650, textDecoration: "underline", textUnderlineOffset: 4 }}
            >
              Projekt ansehen
            </a>
          </div>
          <p className="home-hero-meta">Im Browser · Server in Deutschland · eigene Domain oder Einbettung</p>
        </div>
        <div className="home-hero-canvas">
          <iframe src={site.demoUrl} title="Wohnungsfinder, Beispielprojekt" allow="fullscreen" />
          <span className="home-hero-caption">Haus am Park · Beispiel</span>
        </div>
      </section>

      <StatusMarquee />

      <CustomerLogos />

      <section id="fassade" className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Fassade</span>
            <h2>Jede Wohnung auf der Fassade. Status live.</h2>
            <p className="lead">
              Frei, reserviert, verkauft — in der Ansicht, nicht in einer Liste
              von letzter Woche. Ein Klick öffnet Grundriss, Fläche und Preis.
            </p>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Zum Wohnungsfinder <IconArrow size={16} />
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
            <h2>Süd oder Abendlicht — am Schatten der Loggia.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Uhrzeit einstellen, Schatten auf der Fassade. Die Lagefrage,
              bevor jemand die Baugrube betreten hat.
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
            <span className="eyebrow">360°-Rundgang</span>
            <h2>Vom Klick auf die Fassade in die Wohnung.</h2>
            <p className="lead">
              Dieselbe WE wie auf dem Rendering: Wohnen, Küche, Loggia als
              360° aus dem Modell. Solange es keine Musterwohnung gibt.
            </p>
            <Link href="/use-cases/virtuelle-besichtigung" className="btn btn-outline">
              Zum 360°-Rundgang <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-dark border-b">
        <div className="container overlap-leads">
          <div>
            <span className="eyebrow">Anfragen</span>
            <h2>Die Anfrage enthält die Wohnungsnummer.</h2>
            <p className="lead">
              Exposé nach Double-Opt-in. Suchagent zum Beispiel für drei Zimmer
              Süd. Die Anfragen liegen im Dashboard. Ein CRM schließen wir an,
              wenn Sie eines nutzen — es ist kein Pflichtteil.
            </p>
            <Link href="/funktionen/lead-generierung" className="btn btn-primary">
              Anfragen und Exposé <IconArrow size={16} />
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
            <h2>QR-Code am Bauzaun, eine Wohnung pro Code.</h2>
            <p className="lead">
              Der Scan öffnet genau diese Wohnung. Mit UTM sehen Sie, welche
              Anfragen vom Zaun kommen.
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
          <h2 style={{ maxWidth: "20ch", marginBottom: "0.5rem" }}>Vom Modell bis zur ersten Anfrage.</h2>
          <div className="walk">
            {[
              { room: "Material", title: "Modell, Rendering, Grundriss", copy: "Wir erstellen die 3D-Modelle und die Renderings. Grundrisse machen wir, wenn sie fehlen. Haben Sie schon Pläne oder Bilder, schicken Sie sie uns — oft müssen wir sie aufbereiten." },
              { room: "Finder", title: "Projektseite oder eigene Domain", copy: "Wohnungen auf der Fassade, Statusfarben, Etage, 360°. Jedes Bauvorhaben bekommt seinen eigenen Wohnungsfinder — eingebettet oder unter eigener Adresse." },
              { room: "Vertrieb", title: "Dashboard, Anfragen, Auswertung", copy: "Editor für Wohnungen, Einstellungen, Statistiken. CRM wie onOffice, Propstack oder Flowfact nur, wenn Sie es brauchen." },
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
          <p className="plan-rule" style={{ marginBottom: "1.75rem" }}>Aus dem Vertrieb</p>
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

      <section className="sec-quote bg-dark border-b">
        <div className="container">
          <blockquote>
            Die Quote für die Bankfinanzierung stand nach drei Wochen. 48 WE in Riem, der Finder in der Ansicht.
          </blockquote>
          <p className="measure" style={{ margin: 0, color: "var(--text-on-dark-muted)" }}>Thomas Z. · Zinn Architektur, München-Riem</p>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="stat-line" style={{ color: "#fff" }}>
            <div><strong>Browser</strong><br /><span>ohne App</span></div>
            <div><strong>Dashboard</strong><br /><span>Editor · Auswertung</span></div>
            <div><strong>CRM</strong><br /><span>Anbindung optional</span></div>
            <div><strong>ohne Cookie</strong><br /><span>Messung ohne Banner</span></div>
            <div><strong>QR je WE</strong><br /><span>Bauzaun in die Wohnung</span></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
