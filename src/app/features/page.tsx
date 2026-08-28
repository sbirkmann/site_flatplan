import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FacadeFinder from "@/components/photos/FacadeFinder";
import LeadInboxMock from "@/components/illustrations/LeadInboxMock";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Wohnungsfinder: Ansicht, Etage, Anfrage, CRM",
  description:
    "Fassade aus dem Rendering, Etagengrundriss, 360°, Anfragen mit WE-Bezug, Übergabe nach onOffice, Propstack oder Flowfact. OpenImmo, Messung ohne Cookie.",
  path: "/features",
});

export default function Features() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Funktionen", path: "/features" }])} />
      <PageHero
        eyebrow="Funktionen"
        title="Ansicht, Etage, Anfrage, CRM."
        lead="Ein Objekt. Ein Finder. Kein Werkzeugkasten aus fünf Systemen."
        tone="licht"
        measure="Haus A · 48 WE · onOffice, Propstack, Flowfact"
        actions={
          <>
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo am Projekt <IconArrow size={18} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 650, textDecoration: "underline", textUnderlineOffset: 4 }}>Laufendes Objekt</a>
          </>
        }
      />

      <section className="overlap-stage bg-himmel border-b">
        <div className="container overlap-fassade">
          <div className="overlap-frame">
            <FacadeFinder />
          </div>
          <div className="overlap-plate">
            <span className="eyebrow">Ansicht</span>
            <h2>Rendering wird zur Fassade.</h2>
            <p className="lead">
              Drehbar, soweit die Bildsequenz reicht. WE als Hotspot. Etage,
              360°, Sonnenstand. Eigene Domain, PWA.
            </p>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Ansicht und Etage <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="overlap-licht border-b">
        <img
          className="overlap-licht-bleed"
          src="/photos/neubau-abendlicht.jpg"
          alt="Südfassade im Abendlicht"
          width={1536}
          height={1024}
        />
        <div className="overlap-plate">
          <p className="measure">Sonnenstand · Nordwinkel · 21. Juni</p>
          <h2>Schatten auf der Loggia.</h2>
          <p className="lead" style={{ margin: 0 }}>
            Regler über den Tag. Für die Frage nach Süd und Abendlicht, solange
            draußen Baugrube ist.
          </p>
        </div>
      </section>

      <section className="section bg-dark border-b">
        <div className="container overlap-leads">
          <div>
            <span className="eyebrow">Vorgang</span>
            <h2>Anfrage mit WE, nicht mit Formulartext.</h2>
            <p className="lead">
              Gate, Suchagent, Preis-Alarm, Board A/B/C, QR am Zaun, Double-Opt-in.
            </p>
            <Link href="/funktionen/lead-generierung" className="btn btn-primary">
              Anfragen und Gate <IconArrow size={16} />
            </Link>
          </div>
          <LeadInboxMock />
        </div>
      </section>

      <section className="overlap-stage bg-white border-b">
        <div className="container overlap-interior">
          <figure className="photo-frame overlap-interior-main">
            <img
              src="/photos/neubau-wohnen.jpg"
              alt="Wohnzimmer mit Süd-Loggia"
              width={1536}
              height={1024}
            />
            <figcaption>360° · Standpunkt Wohnen</figcaption>
          </figure>
          <div className="overlap-plate">
            <span className="eyebrow">CRM</span>
            <h2>onOffice, Propstack, Flowfact.</h2>
            <p className="lead">
              OpenImmo-Export. Webhook. REST lesend. MCP, wenn die Akte im Chat
              geführt werden soll. Rollen, 2FA.
            </p>
            <Link href="/funktionen/integrationen" className="btn btn-outline">
              Schnittstellen <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-blatt border-b">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Auswertung</span>
          <h2>Messung ohne Cookie, ohne IP.</h2>
          <p className="lead">
            Welche WE geöffnet wird. Welcher UTM-Kanal den Namen liefert.
            Wochenbericht, Read-only-Link.
          </p>
          <div className="stat-line">
            <div><strong>0</strong><br /><span>Cookies</span></div>
            <div><strong>UTM</strong><br /><span>bis zur Anfrage</span></div>
            <div><strong>Live</strong><br /><span>Aufrufe Haus A</span></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
