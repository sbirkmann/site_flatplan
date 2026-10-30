import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import { blogPosts, formatDate } from "@/lib/blog";
import { IconArrow } from "@/components/icons";
import PlanFinder from "@/components/plan/PlanFinder";
import DemoFrame from "@/components/plan/DemoFrame";
import SheetHead from "@/components/plan/SheetHead";
import Masskette from "@/components/plan/Masskette";
import AblaufPlan from "@/components/plan/AblaufPlan";
import Datenfluss from "@/components/plan/Datenfluss";
import StatusKreislauf from "@/components/plan/StatusKreislauf";
import ShotSlot from "@/components/plan/ShotSlot";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "flatplan.de | Wohnungsfinder für den Neubau-Vorverkauf",
    description:
      "Interaktiver Wohnungsfinder für Bauträger und Makler: Wohnungen direkt auf der Fassade wählen, Live-Status frei/reserviert/verkauft, 3D-Grundriss und 360°-Rundgang. Anfragen mit Wohnungsnummer, Dashboard, CRM-Anbindung. Made in Germany.",
    path: "/",
  }),
  title: { absolute: "flatplan.de | Wohnungsfinder für den Neubau-Vorverkauf" },
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
  { id: "WE 4.02", rooms: "4", area: "112,8 m²", price: "910.000 €", status: "frei" },
  { id: "WE 2.03", rooms: "3", area: "84,3 m²", price: "689.000 €", status: "frei" },
  { id: "WE 3.02", rooms: "2", area: "61,0 m²", price: "498.000 €", status: "reserviert" },
  { id: "WE 1.04", rooms: "2", area: "54,2 m²", price: "—", status: "verkauft" },
];

const capabilities = [
  {
    nr: "F-01",
    title: "Status ohne Nachfrage",
    copy: "Frei, reserviert, verkauft — direkt auf der Ansicht, farblich und als Schraffur. Sie pflegen den Stand einmal im Dashboard, Fassade, Preisliste, Exposé und QR-Code zeigen ihn sofort.",
  },
  {
    nr: "F-02",
    title: "Grundriss und 360° je Einheit",
    copy: "Zu jeder Wohnung: Fläche, Zimmer, Kaufpreis, Grundriss und ein Rundgang aus dem 3D-Modell — lange bevor eine Musterwohnung steht.",
  },
  {
    nr: "F-03",
    title: "Anfragen mit Wohnungsnummer",
    copy: "Kein „Interesse am Projekt“ mehr: Jede Anfrage trägt die WE, aus der sie kam. Exposé erst nach Double-Opt-in, Suchagent für Interessenten, deren Wohnung gerade vergeben ist.",
  },
  {
    nr: "F-04",
    title: "Ein Finder je Bauvorhaben",
    copy: "Eingebettet in Ihre Website oder unter eigener Projektdomain. Hosting in Deutschland, Messung ohne Cookie-Banner, OpenImmo-Export für die Portale.",
  },
];

export default function Home() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      <JsonLd data={softwareSchema} />

      {/* ---------- Blatt 01 · Hero ---------- */}
      <section className="section" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="container">
          <SheetHead blatt="01" titel="Wohnungsfinder Vorverkauf" />
          <div className="plan-split" style={{ alignItems: "start" }}>
            <div>
              <h1>Der Vorverkauf beginnt vor dem ersten Spatenstich.</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Ihre Käufer wählen die Wohnung direkt auf der Fassade: Grundriss,
                Fläche, Preis und ob sie noch zu haben ist. Die Anfrage erreicht
                Sie mit der Wohnungsnummer — nicht als „Interesse am Projekt“.
              </p>
              <div className="flex gap-4 flex-wrap items-center" style={{ marginTop: "2rem" }}>
                <Link href="/kontakt" className="btn btn-primary btn-lg">
                  Demo anfragen <IconArrow size={16} />
                </Link>
                <a
                  href={site.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  Live-Projekt öffnen <IconArrow size={14} />
                </a>
              </div>
              <p className="mono" style={{ marginTop: "1.75rem" }}>
                Im Browser · Server in Deutschland · eigene Domain oder Einbettung
              </p>
            </div>
            <PlanFinder />
          </div>
          <Masskette />
        </div>
      </section>

      {/* ---------- Blatt 02 · Live-Demo ---------- */}
      <section className="section bg-soft border-t border-b">
        <div className="container">
          <SheetHead blatt="02" titel="Live-Demo" />
          <h2>Kein Versprechen. Ein laufender Finder.</h2>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            Klicken Sie sich durch ein echtes Projekt: Wohnung auf der Fassade
            wählen, Grundriss öffnen, Status prüfen, anfragen. Genau so sieht es
            für Ihre Käufer aus.
          </p>
          <DemoFrame />
        </div>
      </section>

      {/* ---------- Blatt 03 · Leistungen ---------- */}
      <section className="section">
        <div className="container">
          <SheetHead blatt="03" titel="Leistungsverzeichnis" />
          <h2>Alles, was ein Interessent wissen will — auf einer Ansicht.</h2>
          <p className="lead" style={{ marginBottom: "2.5rem" }}>
            Der Finder ersetzt die veraltete PDF-Preisliste, die Rückfrage per
            Telefon und das Exposé aus der Schublade. Vier Bausteine, ein Stand.
          </p>
          <div className="stack-grid stack-grid-4">
            {capabilities.map((c) => (
              <div key={c.nr} className="stack-item">
                <span className="cell-nr">{c.nr}</span>
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Blatt 04 · Datenfluss ---------- */}
      <section className="section bg-soft border-t border-b">
        <div className="container">
          <SheetHead blatt="04" titel="Datenfluss" />
          <div className="plan-split">
            <div>
              <h2>Ein Stand, den alle Kanäle sehen.</h2>
              <p className="lead">
                Preis geändert? Status auf reserviert? Einmal im Dashboard
                gepflegt, ziehen Fassade, Etagenplan, Preisliste, Exposé,
                QR-Code und der Export an die Portale nach. Niemand verschickt
                mehr eine korrigierte PDF.
              </p>
              <Link href="/funktionen/integrationen" className="link-arrow" style={{ marginTop: "1rem" }}>
                Dashboard und Schnittstellen <IconArrow size={14} />
              </Link>
            </div>
            <Datenfluss />
          </div>
        </div>
      </section>

      {/* ---------- Blatt 05 · Fassade ---------- */}
      <section className="section">
        <div className="container">
          <SheetHead blatt="05" titel="Ansicht Südfassade" />
          <div className="overlap-fassade" style={{ padding: 0 }}>
            <figure className="photo-frame">
              <img
                src="/photos/neubau-fassade-sued.jpg"
                alt="Südfassade eines Neubaus — im Finder trägt jede Loggia eine anklickbare Wohnung"
                width={1024}
                height={1536}
              />
              <figcaption>
                <span>Ansicht Süd · M 1:100</span>
                <span>20 WE · 5 Geschosse</span>
              </figcaption>
            </figure>
            <div className="overlap-plate">
              <h2>Jede Wohnung sichtbar. Der Status stimmt.</h2>
              <p className="lead">
                Kein PDF von letzter Woche, keine Rückfrage im Vertrieb. Ein
                Klick auf die Fassade öffnet Grundriss, Fläche und Preis — und
                zeigt sofort, ob die Einheit noch frei ist.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Die Ansicht kommt aus Ihrem Projekt: Renderings und Modelle
                erstellen wir von Immowoo, vorhandenes Material bereiten wir
                auf. Fassade, Etagenplan und Grundriss sind immer derselbe
                Datenstand.
              </p>
              <Link href="/funktionen/3d-grundrisse" className="link-arrow">
                Zum Wohnungsfinder <IconArrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blatt 06 · Sonnenstand ---------- */}
      <section className="bg-soft border-t border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht, lange Schatten auf den Loggien"
          width={1536}
          height={1024}
        />
        <div className="container section">
          <SheetHead blatt="06" titel="Sonnenstands-Simulation" />
          <div style={{ maxWidth: "40rem" }}>
            <h2>Die Lagefrage, beantwortet vor dem Aushub.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              „Wie viel Sonne hat die Loggia im Juni um sechs?“ Uhrzeit und
              Jahreszeit einstellen, der Schattenwurf steht auf der Fassade.
              Die schwierigste Frage im Verkaufsgespräch beantwortet das Modell,
              nicht das Bauchgefühl.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Blatt 07 · 360° ---------- */}
      <section className="section">
        <div className="container">
          <SheetHead blatt="07" titel="Virtuelle Besichtigung" />
          <div className="overlap-interior" style={{ padding: 0 }}>
            <div className="overlap-plate">
              <h2>Vom Klick auf die Fassade in die Wohnung.</h2>
              <p className="lead">
                Dieselbe Einheit, die eben noch eine Fläche auf der Ansicht war:
                Wohnen, Küche, Loggia als 360°-Rundgang aus dem Modell. Solange
                es keine Musterwohnung gibt, ist das die Besichtigung.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Termine buchen Interessenten direkt in der Wohnungsansicht —
                Kapazität, Bestätigung und iCal-Datei inklusive. Weniger
                Telefonate, weniger No-Shows.
              </p>
              <Link href="/use-cases/virtuelle-besichtigung" className="link-arrow">
                Zum 360°-Rundgang <IconArrow size={14} />
              </Link>
            </div>
            <figure className="photo-frame overlap-interior-main">
              <img
                src="/photos/neubau-wohnen.jpg"
                alt="Wohnzimmer im Rohbau-Zustand mit Blick auf die Süd-Loggia"
                width={1536}
                height={1024}
              />
              <figcaption>
                <span>WE 2.03 · Wohnen</span>
                <span>360° · Rundblick</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Blatt 08 · Anfragen ---------- */}
      <section className="section bg-soft border-t border-b">
        <div className="container">
          <SheetHead blatt="08" titel="Anfragen und Exposé" />
          <div className="plan-split">
            <div>
              <h2>Sie wissen, wonach gefragt wurde.</h2>
              <p className="lead">
                Jede Anfrage kommt mit der Wohnungsnummer. Das Exposé geht erst
                nach Double-Opt-in raus, der Suchagent fängt alle auf, deren
                Wunschwohnung gerade vergeben ist.
              </p>
              <p style={{ color: "var(--tinte-70)" }}>
                Alles liegt im Dashboard: Wohnungsliste, Preise, Anfragen,
                Auswertung. Ein CRM — onOffice, Propstack, Flowfact — binden
                wir an, wenn Sie eines nutzen. Pflicht ist es nicht.
              </p>
              <Link href="/funktionen/lead-generierung" className="link-arrow">
                Anfragen und Exposé <IconArrow size={14} />
              </Link>
            </div>
            <ShotSlot label="Dashboard · Anfragen" note="Screenshot folgt — Platzhalter M 1:2" />
          </div>
        </div>
      </section>

      {/* ---------- Blatt 09 · Preisliste ---------- */}
      <section className="section">
        <div className="container">
          <SheetHead blatt="09" titel="Preisliste Haus A" />
          <div className="plan-split" style={{ alignItems: "start" }}>
            <div>
              <h2>Ein Stand, den alle sehen.</h2>
              <p className="lead">
                Sie pflegen Preis und Status im Dashboard. Fassade, Etagenplan,
                Exposé und QR-Code ziehen nach — ohne dass jemand eine neue PDF
                verschickt.
              </p>
              <StatusKreislauf />
            </div>
            <div className="price-table-wrap">
              <table className="price-table">
                <thead>
                  <tr>
                    <th scope="col">Einheit</th>
                    <th scope="col">Zi.</th>
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
              <p className="mono" style={{ marginTop: "1rem" }}>
                Haus A · Auszug · Stand live aus dem Dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blatt 10 · Ablauf ---------- */}
      <section className="section bg-soft border-t border-b">
        <div className="container">
          <SheetHead blatt="10" titel="Ablaufplan" />
          <h2>Vom Modell bis zur ersten Anfrage.</h2>
          <p className="lead" style={{ marginBottom: "2.5rem" }}>
            Drei Stationen, drei Wochen. Sie liefern Pläne und Vorhaben, wir
            liefern Modell, Finder und Vertriebsstand.
          </p>
          <AblaufPlan />
          <div className="walk" style={{ marginTop: "2rem" }}>
            {[
              {
                room: "Material",
                title: "Modell, Rendering, Grundriss",
                copy: "Wir erstellen 3D-Modell und Renderings, fehlende Grundrisse ergänzen wir. Vorhandene Pläne und Bilder übernehmen wir — meist müssen wir sie aufbereiten.",
              },
              {
                room: "Finder",
                title: "Projektseite oder eigene Domain",
                copy: "Wohnungen auf der Fassade, Statusfarben, Etagenpläne, 360°. Jedes Bauvorhaben bekommt seinen eigenen Finder — eingebettet in Ihre Seite oder unter eigener Adresse.",
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

      {/* ---------- Blatt 11 · Bauzaun ---------- */}
      <section className="border-b">
        <img
          className="overlap-fence-bleed"
          src="/photos/neubau-bauzaun.jpg"
          alt="Bauzaun vor dem Neubau mit Projekttafel und QR-Code"
          width={1536}
          height={1024}
        />
        <div className="container section">
          <SheetHead blatt="11" titel="Digitaler Bauzaun" />
          <div style={{ maxWidth: "40rem" }}>
            <h2>Ein QR-Code am Bauzaun, eine Wohnung pro Code.</h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Wer vor dem Zaun steht, scannt und landet in genau dieser Wohnung.
              Über UTM sehen Sie später, welche Anfragen von der Straße kamen —
              die Baustelle wird zum Vertriebskanal mit Messwert.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Blatt 12 · Zitat ---------- */}
      <section className="sec-quote">
        <div className="container">
          <SheetHead blatt="12" titel="Aus der Praxis" />
          <blockquote>
            Die Quote für die Bankfinanzierung stand nach drei Wochen. 48
            Einheiten in Riem — der Finder in der Ansicht.
          </blockquote>
          <p className="mono" style={{ margin: 0 }}>
            Thomas Z. · Zinn Architektur, München-Riem
          </p>
        </div>
      </section>

      {/* ---------- Kennzahlen ---------- */}
      <section className="bg-soft border-t border-b">
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

      {/* ---------- Blatt 13 · Blog ---------- */}
      <section className="section">
        <div className="container">
          <SheetHead blatt="13" titel="Fachartikel" />
          <h2>Aus dem Neubauvertrieb.</h2>
          <div className="blog-board" style={{ marginTop: "2.5rem" }}>
            <Link href={`/blog/${featured.slug}`} className="blog-card">
              <div className="blog-card-frame">
                <img src={featured.image} alt={featured.imageAlt} width={1200} height={750} />
              </div>
              <div className="blog-card-plate">
                <span className="mono">
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
                  <span className="mono">
                    {formatDate(post.date)} · {post.tag}
                  </span>
                  <strong>{post.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="link-arrow" style={{ marginTop: "2rem" }}>
            Alle Artikel <IconArrow size={14} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
