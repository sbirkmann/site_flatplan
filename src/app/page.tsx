import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import { blogPosts, formatDate } from "@/lib/blog";
import { IconArrow } from "@/components/icons";
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
  { id: "WE 4.02", rooms: "4 Zimmer", area: "112,8 m\u00b2", price: "910.000 \u20ac", status: "frei" },
  { id: "WE 2.03", rooms: "3 Zimmer", area: "84,3 m\u00b2", price: "689.000 \u20ac", status: "frei" },
  { id: "WE 3.02", rooms: "2 Zimmer", area: "61,0 m\u00b2", price: "498.000 \u20ac", status: "reserviert" },
  { id: "WE 1.04", rooms: "2 Zimmer", area: "54,2 m\u00b2", price: "\u2014", status: "verkauft" },
];

const capabilities = [
  {
    title: "Status ohne Nachfrage",
    copy: "Frei, reserviert, verkauft — direkt in der Ansicht. Sie pflegen den Stand einmal im Dashboard, alle Kanäle zeigen ihn sofort.",
  },
  {
    title: "Grundriss und 360°",
    copy: "Zu jeder Einheit Fläche, Zimmer, Preis, Grundriss und ein Rundgang aus dem Modell — lange bevor eine Musterwohnung steht.",
  },
  {
    title: "Anfragen mit Wohnungsnummer",
    copy: "Jede Anfrage trägt die WE, aus der sie kam. Exposé nach Double-Opt-in, Suchagent für Interessenten, deren Wohnung noch nicht frei ist.",
  },
  {
    title: "Ein Finder je Bauvorhaben",
    copy: "Eingebettet in Ihre Seite oder unter eigener Adresse. Hosting in Deutschland, Messung ohne Cookie-Banner.",
  },
];

export default function Home() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      <JsonLd data={softwareSchema} />

      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="eyebrow">Bauträger · Makler · Vorverkauf</span>
          <h1>Der Vorverkauf beginnt vor dem ersten Spatenstich.</h1>
          <p className="lead">
            Ihre Käufer wählen die Wohnung direkt in der Fassade: Grundriss,
            Fläche, Preis und ob sie noch zu haben ist. Die Anfrage erreicht Sie
            mit der Wohnungsnummer — nicht als „Interesse am Projekt“.
          </p>
          <div className="home-hero-actions">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <IconArrow size={18} />
            </Link>
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Projekt ansehen <IconArrow size={15} />
            </a>
          </div>
          <p className="home-hero-meta">
            Im Browser · Server in Deutschland · eigene Domain oder Einbettung
          </p>
        </div>

        <div className="home-hero-canvas">
          <div className="home-hero-canvas-inner">
            <FacadeFinder selected="2.03" />
          </div>
          <span className="home-hero-caption">Haus am Park · Beispielprojekt</span>
        </div>
      </section>

      <CustomerLogos />

      {/* ---------- Was der Finder leistet ---------- */}
      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">Überblick</span>
          <h2 style={{ maxWidth: "22ch", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            Alles, was ein Interessent wissen will — auf einer Ansicht.
          </h2>
          <div className="stack-grid stack-grid-4">
            {capabilities.map((c) => (
              <div key={c.title} className="stack-item">
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Fassade ---------- */}
      <section id="fassade" className="section bg-soft">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Fassade</span>
            <h2>Jede Wohnung sichtbar. Der Status stimmt.</h2>
            <p className="lead">
              Kein PDF von letzter Woche, keine Rückfrage im Vertrieb. Ein Klick
              öffnet Grundriss, Fläche und Preis — und zeigt sofort, ob die
              Einheit noch frei ist.
            </p>
            <Link href="/funktionen/3d-grundrisse" className="link-arrow">
              Zum Wohnungsfinder <IconArrow size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Sonnenstand ---------- */}
      <section id="licht" className="bg-white">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht, Schatten auf den Loggien"
          width={1536}
          height={1024}
        />
        <div className="overlap-licht">
          <div className="overlap-plate">
            <span className="eyebrow">Sonnenstand</span>
            <h2>Die Lagefrage, beantwortet vor dem Aushub.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              „Wie viel Sonne hat die Loggia im Juni um sechs?“ Uhrzeit und
              Jahreszeit einstellen, der Schattenwurf steht auf der Fassade.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 360° Rundgang: Text links, Bild rechts ---------- */}
      <section id="rundgang" className="section bg-soft">
        <div className="container overlap-interior">
          <div className="overlap-plate">
            <span className="eyebrow">360°-Rundgang</span>
            <h2>Vom Klick auf die Fassade in die Wohnung.</h2>
            <p className="lead">
              Dieselbe Einheit, die eben noch ein Rechteck auf dem Rendering war:
              Wohnen, Küche, Loggia als 360° aus dem Modell. Solange es keine
              Musterwohnung gibt, ist das die Besichtigung.
            </p>
            <Link href="/use-cases/virtuelle-besichtigung" className="link-arrow">
              Zum 360°-Rundgang <IconArrow size={15} />
            </Link>
          </div>
          <figure className="photo-frame overlap-interior-main">
            <img
              src="/photos/neubau-wohnen.jpg"
              alt="Unmöbliertes Wohnzimmer mit Blick auf die Süd-Loggia"
              width={1536}
              height={1024}
            />
            <figcaption>WE 2.03 · Wohnen</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Anfragen ---------- */}
      <section className="section bg-white">
        <div className="container overlap-leads">
          <div className="overlap-plate">
            <span className="eyebrow">Anfragen</span>
            <h2>Sie wissen, wonach gefragt wurde.</h2>
            <p className="lead">
              Jede Anfrage kommt mit der Wohnungsnummer. Exposé nach
              Double-Opt-in, Suchagent für alle, deren Wunschwohnung gerade
              vergeben ist. Alles liegt im Dashboard — ein CRM schließen wir an,
              wenn Sie eines nutzen.
            </p>
            <Link href="/funktionen/lead-generierung" className="link-arrow">
              Anfragen und Exposé <IconArrow size={15} />
            </Link>
          </div>
          <div className="overlap-frame">
            <LeadInboxMock />
          </div>
        </div>
      </section>

      {/* ---------- Preisliste ---------- */}
      <section className="section bg-soft">
        <div className="container">
          <div className="price-head">
            <div>
              <span className="eyebrow">Preisliste</span>
              <h2>Ein Stand, den alle sehen.</h2>
            </div>
            <p className="lead">
              Sie pflegen Preis und Status im Dashboard. Fassade, Etagenplan,
              Exposé und QR-Code ziehen nach — ohne dass jemand eine neue PDF
              verschickt.
            </p>
          </div>
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Einheit</th>
                <th scope="col">Zimmer</th>
                <th scope="col">Fläche</th>
                <th scope="col">Kaufpreis</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {deskUnits.map((u) => (
                <tr key={u.id}>
                  <td className="price-unit">{u.id}</td>
                  <td>{u.rooms}</td>
                  <td>{u.area}</td>
                  <td>{u.price}</td>
                  <td>
                    <span className="unit-chip" data-status={u.status}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="measure" style={{ marginTop: "1.5rem" }}>
            Haus A · Auszug · Stand wird live aus dem Dashboard gezogen
          </p>
        </div>
      </section>

      {/* ---------- Bauzaun ---------- */}
      <section id="bauzaun" className="bg-white">
        <img
          className="overlap-fence-bleed"
          src="/photos/neubau-bauzaun.jpg"
          alt="Bauzaun vor dem Neubau mit Projekttafel"
          width={1536}
          height={1024}
        />
        <div className="container">
          <div className="overlap-plate">
            <span className="eyebrow">Baustelle</span>
            <h2>Ein QR-Code am Bauzaun, eine Wohnung pro Code.</h2>
            <p className="lead">
              Wer vor dem Zaun steht, scannt und landet in genau dieser Wohnung.
              Über UTM sehen Sie später, welche Anfragen von der Straße kamen.
            </p>
            <Link href="/funktionen/pdf-expose" className="link-arrow">
              Exposé, Preisliste, QR <IconArrow size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Ablauf ---------- */}
      <section className="section bg-soft">
        <div className="container">
          <span className="eyebrow">Ablauf</span>
          <h2 style={{ maxWidth: "22ch", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            Vom Modell bis zur ersten Anfrage.
          </h2>
          <div className="walk">
            {[
              {
                room: "Material",
                title: "Modell, Rendering, Grundriss",
                copy: "Wir erstellen 3D-Modell und Renderings, Grundrisse ergänzen wir, wenn sie fehlen. Vorhandene Pläne und Bilder übernehmen wir — meist müssen wir sie aufbereiten.",
              },
              {
                room: "Finder",
                title: "Projektseite oder eigene Domain",
                copy: "Wohnungen auf der Fassade, Statusfarben, Etagenpläne, 360°. Jedes Bauvorhaben bekommt seinen eigenen Finder — eingebettet oder unter eigener Adresse.",
              },
              {
                room: "Vertrieb",
                title: "Dashboard, Anfragen, Auswertung",
                copy: "Editor für Wohnungen und Preise, Rollen für Ihr Team, Statistiken über Aufrufe und Anfragen. onOffice, Propstack oder Flowfact binden wir an, wenn Sie es brauchen.",
              },
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

      {/* ---------- Zitat ---------- */}
      <section className="sec-quote bg-white border-t">
        <div className="container">
          <blockquote>
            Die Quote für die Bankfinanzierung stand nach drei Wochen. 48
            Einheiten in Riem — der Finder in der Ansicht.
          </blockquote>
          <p className="measure" style={{ margin: 0 }}>
            Thomas Z. · Zinn Architektur, München-Riem
          </p>
        </div>
      </section>

      {/* ---------- Kennzahlen ---------- */}
      <section className="bg-soft">
        <div className="container">
          <div className="stat-line">
            <div>
              <strong>Browser</strong>
              <br />
              <span>ohne App</span>
            </div>
            <div>
              <strong>Dashboard</strong>
              <br />
              <span>Editor · Auswertung</span>
            </div>
            <div>
              <strong>CRM</strong>
              <br />
              <span>Anbindung optional</span>
            </div>
            <div>
              <strong>ohne Cookie</strong>
              <br />
              <span>Messung ohne Banner</span>
            </div>
            <div>
              <strong>QR je WE</strong>
              <br />
              <span>Bauzaun in die Wohnung</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog ---------- */}
      <section className="section bg-white border-t">
        <div className="container">
          <span className="eyebrow">Aus dem Vertrieb</span>
          <div className="blog-board" style={{ marginTop: "2.5rem" }}>
            <Link href={`/blog/${featured.slug}`} className="blog-card blog-card--lead">
              <div className="blog-card-frame">
                <img src={featured.image} alt={featured.imageAlt} width={1200} height={750} />
              </div>
              <div className="blog-card-plate">
                <span className="measure">
                  {featured.tag} · {formatDate(featured.date)}
                </span>
                <strong>{featured.title}</strong>
                <span className="blog-card-desc">{featured.description}</span>
              </div>
            </Link>
          </div>
          <ul className="blog-list" style={{ marginTop: "3rem" }}>
            {rest.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="measure">
                    {formatDate(post.date)} · {post.tag}
                  </span>
                  <strong style={{ display: "block", marginTop: "0.3rem" }}>
                    {post.title}
                  </strong>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="link-arrow" style={{ marginTop: "2rem" }}>
            Alle Artikel <IconArrow size={15} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
