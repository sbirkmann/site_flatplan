import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Rocket, Megaphone, Filter, Workflow, LineChart,
  MailCheck, QrCode, Rotate3d,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Digitaler Neubauvertrieb – vom Rendering zum verkauften Projekt",
  description:
    "Digitaler Neubauvertrieb end-to-end: vom fotorealistischen Rendering zum interaktiven Wohnungsfinder – mit Lead-Funnel, CRM-Übergabe und Vertriebscontrolling.",
  path: "/use-cases/neubauvertrieb",
});

const steps = [
  {
    num: "1",
    title: "Renderings werden zum Wohnungsfinder",
    desc: "Aus Ihren fotorealistischen 3D-Renderings entsteht die drehbare Projektansicht: Jede Wohnung wird als anklickbare Fläche in der Fassade hinterlegt, Etagen-Grundrisse, Preise, Räume und Ausstattung kommen aus Ihrer Preisliste dazu.",
  },
  {
    num: "2",
    title: "Warteliste vor dem Start",
    desc: "Noch vor dem offiziellen Vermarktungsstart sammelt eine Countdown-Seite Interessenten auf der Warteliste – mit Double-Opt-in. Am Launch-Tag informieren Sie alle Vorregistrierten auf einen Schlag.",
  },
  {
    num: "3",
    title: "Kampagnen führen ins Projekt",
    desc: "Social Ads, Portale, Print und Bauzaun verlinken per UTM-Kurzlink und QR-Code direkt in den Wohnungsfinder – unter eigener Projekt-Domain. Jeder Kanal ist einzeln messbar.",
  },
  {
    num: "4",
    title: "Interessenten qualifizieren sich selbst",
    desc: "Besucher drehen das Projekt, filtern nach Zimmern und Preis, laufen durch 360°-Rundgänge und legen Favoriten auf die Merkliste. Wer anfragt, kennt seine Wunscheinheit bereits.",
  },
  {
    num: "5",
    title: "Leads landen im CRM",
    desc: "Anfragen und Exposé-Downloads werden mit DSGVO-Einwilligung erfasst und nativ an onOffice, Propstack oder Flowfact übergeben – oder im eingebauten Anfragen-Board bearbeitet.",
  },
  {
    num: "6",
    title: "Controlling steuert den Abverkauf",
    desc: "Cookiefreie Statistik, Vertriebsziel-Tracking und automatische Wochenberichte zeigen, welche Einheiten laufen und welche Kampagnen konvertieren – für Sie, Ihre Bank und Ihre Investoren.",
  },
];

export default function NeubauvertriebPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Use Cases", path: "/use-cases/neubauvertrieb" },
          { name: "Digitaler Neubauvertrieb", path: "/use-cases/neubauvertrieb" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Use Case</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Digitaler Neubauvertrieb: vom Rendering zum verkauften Projekt.
          </h1>
          <p className="lead">
            Zwischen dem ersten Rendering und dem letzten Notartermin liegt
            ein Prozess – und der lässt sich digitalisieren. So funktioniert
            Neubauvertrieb mit flatplan.de end-to-end: Vermarktung, Lead-Funnel,
            CRM-Übergabe und Controlling in einem System.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/features" className="btn btn-outline btn-lg">
              Alle Funktionen
            </Link>
          </div>
        </div>
      </section>

      {/* ABLAUF IN 6 SCHRITTEN */}
      <section className="section bg-white border-b">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Der Ablauf</span>
          <h2>In sechs Schritten vom Plan zum Abverkauf</h2>
        </div>
        <div className="container grid grid-3">
          {steps.map((s) => (
            <div key={s.num} className="card">
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--text-tertiary)",
                  opacity: 0.4,
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {s.num}
              </div>
              <h3>{s.title}</h3>
              <p style={{ marginBottom: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ERLEBNIS STATT EXPOSÉ */}
      <section className="section bg-soft border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Rotate3d size={26} /></span>
            <h2>Warum der Funnel mit dem Erlebnis beginnt.</h2>
            <p className="lead mb-8">
              Ein 2D-Grundriss verlangt Vorstellungskraft – der Wohnungsfinder
              nicht. Interessenten drehen das Projekt um 360°, prüfen den
              Sonnenstand auf ihrem künftigen Balkon und laufen durch
              Panorama-Rundgänge. Wer so besichtigt, fragt nicht „irgendwas
              mit 3 Zimmern“ an, sondern die WE 2.04 im zweiten Obergeschoss.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Drehbare Projektansicht mit anklickbaren Wohnungen</li>
              <li><Check size={20} /> Sonnenstand-Simulation mit Schieberegler und Kompass</li>
              <li><Check size={20} /> Status FREI/RESERVIERT/VERKAUFT live im Projekt</li>
            </ul>
            <Link href="/use-cases/virtuelle-besichtigung" className="btn btn-outline">
              Use Case virtuelle Besichtigung <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-3d.png"
                alt="Digitaler Neubauvertrieb: interaktiver Wohnungsfinder mit drehbarer Projektansicht"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FUNNEL-BAND */}
      <section className="bg-dark" style={{ padding: "5rem 0" }}>
        <div className="container grid grid-4 text-center">
          {[
            { icon: <Megaphone size={28} />, big: "Messbar", label: "Jeder Kanal", sub: "UTM-Kurzlinks & QR-Codes mit Klickzähler" },
            { icon: <Filter size={28} />, big: "Qualifiziert", label: "Jede Anfrage", sub: "Merkliste, Wunscheinheit, Budgetfilter" },
            { icon: <Workflow size={28} />, big: "Automatisch", label: "CRM-Übergabe", sub: "onOffice, Propstack, Flowfact – mit Protokoll" },
            { icon: <LineChart size={28} />, big: "Live", label: "Controlling", sub: "Statistik-Link, Zielverfolgung, Wochenbericht" },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ color: "var(--accent-on-dark)", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>{m.icon}</div>
              <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "0.75rem" }}>{m.big}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff" }}>{m.label}</div>
              <p style={{ marginTop: "0.375rem", fontSize: "0.9rem", marginBottom: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD-FUNNEL, DER NACHFASST */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/flatfinder_features_expose.png"
                alt="Lead-Funnel im Neubauvertrieb: Exposé-Gate, Suchagenten und Anfragen-Board"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div>
            <span className="icon-wrapper"><MailCheck size={26} /></span>
            <h2>Ein Funnel, der von selbst nachfasst.</h2>
            <p className="lead mb-8">
              Nicht jeder Besucher kauft beim ersten Klick. Deshalb arbeitet
              der Wohnungsfinder mit Mechanismen, die Interessenten zurückholen
              – automatisch und DSGVO-konform.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Exposé-Gate: PDF-Download erst nach E-Mail-Bestätigung – jeder Download ein Lead</li>
              <li><Check size={20} /> Suchagenten melden neue passende Einheiten per Mail</li>
              <li><Check size={20} /> Preis-Alarme und Wieder-frei-Alarme bei jeder Änderung</li>
              <li><Check size={20} /> Merkliste per Magic-Link – Interessenten kommen wieder</li>
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link href="/funktionen/lead-generierung" className="btn btn-outline">
                Lead-Generierung <ArrowRight size={18} />
              </Link>
              <Link href="/funktionen/integrationen" className="btn btn-outline">
                CRM-Integrationen <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Bereit für den digitalen Vertriebsstart?
          </h2>
          <p className="lead mb-8">
            Ob Bauträger, Projektentwickler oder Makler: In einer kostenlosen
            Live-Demo sehen Sie den kompletten Funnel an Ihrem eigenen Projekt
            – vom Rendering bis zum CRM.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Jetzt Demo anfragen <ArrowRight size={20} />
            </Link>
            <Link href="/branchen/bautraeger" className="btn btn-outline btn-lg">
              Lösung für Bauträger
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
