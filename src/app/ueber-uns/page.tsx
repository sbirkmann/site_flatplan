import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, Palette, ShieldCheck, Users } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Über uns – Das Team hinter flatplan.de",
  description:
    "Immowoo verbindet Immobilienkompetenz mit Software-Engineering: interaktive Wohnungsfinder für den deutschen Neubauvertrieb, gehostet in Deutschland, DSGVO-konform.",
  path: "/ueber-uns",
});

export default function UeberUns() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Über uns | flatplan.de",
    url: `${site.url}/ueber-uns`,
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <main>
      <JsonLd data={[aboutSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Über uns", path: "/ueber-uns" }])]} />

      <section className="page-hero bg-white border-b">
        <div className="container max-w-3xl mx-auto text-center animate-up">
          <span className="eyebrow">Über uns</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Wir machen Architektur erlebbar.
          </h1>
          <p className="lead">
            {site.company.brand} verbindet Immobilienkompetenz mit
            Software-Engineering. Unser Ziel: den Neubauvertrieb in der
            DACH-Region nachhaltig digitalisieren.
          </p>
        </div>
      </section>

      {/* WERTE */}
      <section className="section bg-soft border-b">
        <div className="container text-center mb-12 animate-up">
          <span className="eyebrow">Unsere DNA</span>
          <h2>Was uns antreibt</h2>
        </div>
        <div className="container grid grid-4">
          {[
            { icon: <Code2 size={30} />, title: "Engineering", desc: "Moderne Web-Technologie, WebGL-Panoramen, offene Schnittstellen – wir sind Entwickler im Herzen." },
            { icon: <Palette size={30} />, title: "Visualisierung", desc: "Wir machen aus den Renderings Ihres Studios interaktive Erlebnisse, die Emotionen wecken." },
            { icon: <Users size={30} />, title: "Immobilien-Know-how", desc: "Wir verstehen die Workflows von Bauträgern, Maklern und Banken – und bauen dafür." },
            { icon: <ShieldCheck size={30} />, title: "DSGVO & Qualität", desc: "Hosting in Deutschland, cookiefreies Tracking, keine Kompromisse bei der Qualität." },
          ].map((v, i) => (
            <div key={v.title} className={`card animate-up delay-${Math.min(i + 1, 4)}00 text-center`} style={{ padding: "2rem 1.5rem" }}>
              <div className="icon-wrapper" style={{ margin: "0 auto 1.25rem" }}>{v.icon}</div>
              <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{v.title}</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div className="animate-up">
            <h2 className="mb-6">Warum flatplan.de?</h2>
            <p className="mb-4">
              Die Idee entstand aus einer simplen Beobachtung: Bauträger
              investieren Millionen in Architektur und Bauqualität – aber ihr
              digitaler Vertrieb besteht aus statischen PDF-Exposés und
              Portal-Inseraten. Das ist ein Missverhältnis.
            </p>
            <p className="mb-4">
              Wir haben flatplan.de entwickelt, um diese Lücke zu schließen.
              Unser Team vereint Expertise aus Software-Engineering,
              3D-Architekturvisualisierung und Immobilienvertrieb.
            </p>
            <p>
              Das Ergebnis: ein System, das nicht nur optisch überzeugt,
              sondern messbare Geschäftsergebnisse liefert – schnellere
              Vorverkaufsquoten, qualifiziertere Leads und weniger
              Vertriebsaufwand. Beispiele dafür zeigen unsere{" "}
              <Link href="/referenzen" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>Referenzen</Link>.
            </p>
          </div>
          <div className="animate-up delay-100">
            <div className="bg-dark" style={{ padding: "2.5rem", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Auf einen Blick</h3>
              <ul className="check-list" style={{ marginBottom: 0 }}>
                {[
                  "Sitz in Bayern, Projekte in der gesamten DACH-Region",
                  "Spezialisiert auf digitalen Neubauvertrieb",
                  "Hosting-Standort Deutschland",
                  "Native CRM-Anbindung: onOffice, Propstack, Flowfact",
                  "Offene Schnittstellen: OpenImmo, Webhooks, REST-API",
                ].map((item) => (
                  <li key={item} style={{ color: "#fff" }}>
                    <Check size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section className="section bg-soft border-b">
        <div className="container text-center mb-12 animate-up">
          <span className="eyebrow">Technologie</span>
          <h2>Womit wir arbeiten</h2>
        </div>
        <div className="container grid grid-3 animate-up delay-100">
          {[
            { title: "Erlebnis & Viewer", items: ["Drehbare Projektansicht", "WebGL-360°-Panoramen", "Progressive Web App", "Automatische Bildoptimierung", "Mehrsprachigkeit"] },
            { title: "Backend & Datenaustausch", items: ["REST-API mit API-Keys", "OpenImmo-XML-Export", "Webhooks (Slack-kompatibel)", "MCP / OAuth 2.1 für KI-Assistenten", "CSV- & Excel-Exporte"] },
            { title: "Integrationen", items: ["onOffice", "Propstack", "Flowfact", "SMTP / E-Mail-Automation", "S3-kompatibler Speicher"] },
          ].map((stack) => (
            <div key={stack.title} className="card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.1875rem", marginBottom: "1.25rem", textAlign: "center" }}>{stack.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {stack.items.map((item, j) => (
                  <li key={item} style={{ padding: "0.625rem 0", borderBottom: j < stack.items.length - 1 ? "1px solid var(--border-light)" : "none", textAlign: "center", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Testimonials variant="dark" />

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto animate-up">
          <h2>Lassen Sie uns zusammenarbeiten.</h2>
          <p className="lead mb-8">Wir freuen uns auf Ihr nächstes Projekt.</p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kontakt aufnehmen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
