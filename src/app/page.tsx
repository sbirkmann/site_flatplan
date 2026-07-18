import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Rotate3d, Workflow, Users, MailCheck, QrCode, Globe2,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "flatplan.de | Interaktiver Wohnungsfinder für den Neubauvertrieb",
    description:
      "Verkaufen Sie Neubauwohnungen ab dem ersten Rendering: interaktiver Wohnungsfinder mit 360°-Rundgängen, Grundriss-Navigation, Lead-Engine und CRM-Sync für onOffice, Propstack und Flowfact.",
    path: "/",
  }),
  title: { absolute: "flatplan.de | Interaktiver Wohnungsfinder für den Neubauvertrieb" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "flatplan.de Wohnungsfinder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.url,
  description:
    "Interaktiver Wohnungsfinder für den Neubauvertrieb: drehbare Projektansicht, 360°-Rundgänge, Lead-Management, CRM-Integration (onOffice, Propstack, Flowfact) und OpenImmo-Export.",
  publisher: { "@id": `${site.url}/#organization` },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "EUR",
    description: "Kostenlose Live-Demo",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas Z." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Der 3D Wohnungsfinder hat unseren Vorverkauf um 40% beschleunigt.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sandra M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Seit wir den Flatfinder einbinden, hat sich die Lead-Qualität verdoppelt.",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <JsonLd data={softwareSchema} />

      {/* HERO */}
      <section className="page-hero bg-white border-b" style={{ overflow: "hidden" }}>
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div className="animate-up" style={{ zIndex: 10 }}>
            <span className="eyebrow">Digitaler Neubauvertrieb</span>
            <h1>
              Zeigen Sie, was entsteht.
              <br />
              Verkaufen Sie sofort.
            </h1>
            <p className="lead" style={{ maxWidth: "520px", marginBottom: "2.5rem" }}>
              Der interaktive Wohnungsfinder für Bauträger und Makler: drehbare
              Projektansicht, 360°-Rundgänge, Grundriss-Navigation und eine
              Lead-Engine, die Anfragen direkt in Ihr CRM liefert – alles im
              Browser, ohne App.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/kontakt" className="btn btn-primary btn-lg">
                Kostenlose Demo <ArrowRight size={20} />
              </Link>
              <Link href="/features" className="btn btn-outline btn-lg">
                Alle Funktionen
              </Link>
            </div>
            <ul className="check-list mt-8" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: 0 }}>
              <li style={{ marginBottom: 0 }}><Check size={18} /> Ohne App-Download</li>
              <li style={{ marginBottom: 0 }}><Check size={18} /> DSGVO-konform</li>
              <li style={{ marginBottom: 0 }}><Check size={18} /> Live in wenigen Tagen</li>
            </ul>
          </div>
          <div className="animate-up delay-200" style={{ position: "relative", minHeight: "420px" }}>
            <div className="device-frame" style={{ height: "clamp(420px, 45vw, 600px)" }}>
              <div className="device-frame-inner" style={{ height: "100%" }}>
                <iframe
                  src={site.demoUrl}
                  title="flatplan.de Live-Demo: interaktiver Wohnungsfinder"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-soft border-b" style={{ padding: "3.5rem 0" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-tertiary)", marginBottom: "2rem", fontWeight: 700 }}>
            Partner für hochwertige Immobilienvermarktung
          </p>
          <div className="flex justify-center flex-wrap items-center" style={{ gap: "4rem", opacity: 0.85 }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#e3000f", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-block", width: "26px", height: "26px", background: "#e3000f", textAlign: "center", color: "white", fontSize: "17px", lineHeight: "26px", fontWeight: "bold" }}>S</span>
              Sparkasse
            </span>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "3px solid var(--text-primary)", paddingBottom: "0.2rem" }}>
              Zinn Architektur
            </span>
            <span style={{ fontSize: "1.375rem", fontWeight: 800, letterSpacing: "0.05em", color: "var(--text-secondary)" }}>
              INVESTORA
            </span>
          </div>
        </div>
      </section>

      {/* TEASER 1: WOHNUNGSFINDER */}
      <section className="section bg-white border-b" style={{ overflow: "hidden" }}>
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Rotate3d size={26} /></span>
            <h2>Das ganze Projekt. Interaktiv erlebbar.</h2>
            <p className="lead mb-8">
              Interessenten drehen Ihr Projekt um 360°, klicken Wohnungen
              direkt in der Fassade an und navigieren durch Etagen-Grundrisse.
              Sonnenstand-Simulation, Umgebungs-Infos und begehbare
              Panorama-Rundgänge machen aus Plänen ein Kauferlebnis –
              lange vor der Fertigstellung.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Läuft im Browser – keine App, keine Installation</li>
              <li><Check size={20} /> Live-Verfügbarkeit: frei, reserviert, verkauft</li>
              <li><Check size={20} /> Mehrsprachig und als PWA installierbar</li>
            </ul>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Wohnungsfinder im Detail <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-3d.png"
                alt="Interaktiver Wohnungsfinder: drehbare Projektansicht mit anklickbaren Wohnungen"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEASER 2: LEAD-ENGINE */}
      <section className="section bg-soft border-b" style={{ overflow: "hidden" }}>
        <div className="container grid grid-2 items-center">
          <div style={{ order: 1 }}>
            <div className="device-frame" style={{ padding: "1.5rem", color: "white" }}>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem", marginBottom: "1rem", fontWeight: 600 }}>
                Lead-Posteingang
              </div>
              {[
                { title: "Anfrage · WE 2.04 · Merkliste mit 3 Wohnungen", meta: "Vor 4 Minuten · an onOffice übergeben" },
                { title: "Exposé-Download · WE 1.11", meta: "Vor 16 Minuten · Double-Opt-in bestätigt" },
                { title: "Suchagent · 3 Zimmer, Südbalkon", meta: "Vor 38 Minuten · Preis-Alarm aktiv" },
              ].map((lead) => (
                <div key={lead.title} style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{lead.title}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{lead.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ order: 2 }}>
            <span className="icon-wrapper"><Workflow size={26} /></span>
            <h2>Die Lead-Engine, die nachts weiterarbeitet.</h2>
            <p className="lead mb-8">
              Exposé-Gate, Suchagenten, Preis- und Wieder-frei-Alarme,
              Wartelisten mit Countdown: Der Wohnungsfinder sammelt
              qualifizierte Anfragen rund um die Uhr – und übergibt sie
              automatisch an onOffice, Propstack oder Flowfact.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Double-Opt-in & DSGVO-Einwilligung eingebaut</li>
              <li><Check size={20} /> Lead-Bewertung, Wiedervorlagen & Aufgaben im Anfragen-Board</li>
              <li><Check size={20} /> Webhooks & Read-only-API für Ihre eigenen Systeme</li>
            </ul>
            <Link href="/funktionen/lead-generierung" className="btn btn-outline">
              Lead-Generierung ansehen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAKTEN */}
      <section className="bg-dark" style={{ padding: "5.5rem 0" }}>
        <div className="container grid grid-4 text-center">
          {[
            { icon: <Globe2 size={28} />, big: "24/7", label: "Virtuelle Besichtigung", sub: "Ihr Projekt ist immer geöffnet" },
            { icon: <Workflow size={28} />, big: "3 CRMs", label: "Nativ angebunden", sub: "onOffice, Propstack, Flowfact" },
            { icon: <MailCheck size={28} />, big: "100%", label: "DSGVO-konform", sub: "Cookiefreies Tracking, Double-Opt-in" },
            { icon: <QrCode size={28} />, big: "1 Klick", label: "Vom Bauzaun ins Projekt", sub: "QR-Codes je Projekt & Wohnung" },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ color: "var(--accent-on-dark)", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>{m.icon}</div>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{m.big}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff" }}>{m.label}</div>
              <p style={{ marginTop: "0.375rem", fontSize: "0.9rem", marginBottom: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <CoreFeaturesGrid />

      <Testimonials variant="dark" />

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ihr nächstes Projekt verdient mehr als ein PDF.
          </h2>
          <p className="lead mb-8">
            Sehen Sie in einer kostenlosen Live-Demo, wie Ihr Bauvorhaben als
            interaktiver Wohnungsfinder aussieht – und wie daraus Anfragen werden.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Jetzt Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
