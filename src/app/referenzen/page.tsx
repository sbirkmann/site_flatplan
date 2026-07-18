import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Referenzen & Case Studies aus dem Neubauvertrieb",
  description:
    "Wie Bauträger, Makler und die Sparkasse Immobilien mit dem interaktiven Wohnungsfinder Vorverkaufsquoten erreichen, Lead-Qualität verdoppeln und Alleinaufträge gewinnen.",
  path: "/referenzen",
});

export default function Referenzen() {
  return (
    <main>
      <JsonLd data={breadcrumbs([{ name: "Start", path: "/" }, { name: "Referenzen", path: "/referenzen" }])} />

      <section className="page-hero bg-white border-b">
        <div className="container max-w-3xl mx-auto text-center animate-up">
          <span className="eyebrow">Erfolgsgeschichten</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Referenzen & Case Studies.
          </h1>
          <p className="lead">
            Wie Bauträger, Makler und Projektentwickler mit flatplan.de ihren
            Vertrieb umgestellt haben – mit messbaren Ergebnissen.
          </p>
        </div>
      </section>

      {/* CASE STUDY 1 */}
      <section className="section bg-soft border-b">
        <div className="container grid grid-2 items-center">
          <div className="animate-up">
            <span className="eyebrow">Case Study · Bauträger</span>
            <h2 className="mb-4">Zinn Architektur – Neubau-Quartier München</h2>
            <p className="mb-4">
              Zinn Architektur entwickelte ein 48-Einheiten-Quartier in
              München-Riem. Die Herausforderung: Die Bank forderte 40 %
              Vorverkaufsquote vor Baubeginn – mit klassischen Exposés kaum
              rechtzeitig zu schaffen.
            </p>
            <p className="mb-4">
              Mit dem flatplan.de Wohnungsfinder wurde die gesamte Anlage
              interaktiv erlebbar: drehbare Projektansicht, Etagen-Grundrisse
              mit Live-Status, Filter und Exposé-Gate. Interessenten
              qualifizierten sich selbst – der Vertrieb sprach nur noch mit
              ernsthaften Käufern.
            </p>
            <div className="grid grid-3" style={{ gap: "1rem", marginTop: "2rem" }}>
              {[
                { big: "48", label: "Wohneinheiten" },
                { big: "3 Wo.", label: "Quote erreicht" },
                { big: "+40%", label: "Schnellerer Vorverkauf" },
              ].map((m) => (
                <div key={m.label} className="card" style={{ padding: "1.5rem 1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.875rem", fontWeight: 800, color: "var(--accent-primary)" }}>{m.big}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-up delay-100">
            <div className="card-soft" style={{ padding: "0.875rem", background: "#fff", boxShadow: "var(--shadow-lg)" }}>
              <img src="/showcase-3d.png" alt="Interaktiver Wohnungsfinder des Neubau-Quartiers von Zinn Architektur" style={{ width: "100%", borderRadius: "var(--radius-sm)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 2 */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div className="animate-up">
            <div className="card-soft" style={{ padding: "0.875rem", boxShadow: "var(--shadow-lg)" }}>
              <img src="/showcase-detail.png" alt="Wohnungsfinder-Integration der Sparkasse Immobilien" style={{ width: "100%", borderRadius: "var(--radius-sm)" }} />
            </div>
          </div>
          <div className="animate-up delay-100">
            <span className="eyebrow">Case Study · Bankvertrieb</span>
            <h2 className="mb-4">Sparkasse Immobilien – Lead-Optimierung</h2>
            <p className="mb-4">
              Die Immobilienabteilung der Sparkasse suchte nach einem Weg, die
              Qualität der Online-Anfragen zu steigern: Über 60 % der
              bisherigen Leads waren unqualifiziert und führten zu
              kostspieligen Leerbesichtigungen.
            </p>
            <p className="mb-4">
              Durch die Einbindung des Wohnungsfinders in die
              Portal-Landingpages verdoppelte sich die Lead-Qualität – und die
              Anfragen laufen seither automatisch ins CRM.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Lead-Qualität verdoppelt</li>
              <li><Check size={20} /> 70 % weniger Leerbesichtigungen</li>
              <li><Check size={20} /> Automatischer Lead-Import in onOffice</li>
              <li><Check size={20} /> ROI nach 6 Wochen erreicht</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CASE STUDY 3 */}
      <section className="section bg-soft border-b">
        <div className="container grid grid-2 items-center">
          <div className="animate-up">
            <span className="eyebrow">Case Study · Makler</span>
            <h2 className="mb-4">HM Immobilien – Alleinaufträge durch Technologie</h2>
            <p className="mb-4">
              Markus H. betreibt ein Maklerbüro in München mit drei
              Mitarbeitern. Sein Problem: Bei Neubau-Mandaten konkurrierte er
              mit größeren Immobilienhäusern, die mehr Ressourcen haben.
            </p>
            <p className="mb-4">
              Seit er Bauträgern den flatplan.de Wohnungsfinder als Teil
              seines Angebots präsentiert, hat er vier Exklusivmandate in
              einem Jahr gewonnen – mehr als in den drei Jahren zuvor
              zusammen. Wie das funktioniert, zeigt die Seite{" "}
              <Link href="/branchen/immobilienmakler" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>
                für Immobilienmakler
              </Link>.
            </p>
            <div className="card" style={{ borderLeft: "4px solid var(--accent-primary)", padding: "1.5rem 2rem" }}>
              <p style={{ margin: 0, fontWeight: 600, fontStyle: "italic" }}>
                „Der Flatfinder ist mein Türöffner. Kein anderer Makler in der
                Region kann das bieten.“
              </p>
              <span style={{ display: "block", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                – Markus H., HM Immobilien
              </span>
            </div>
          </div>
          <div className="animate-up delay-100">
            <div className="bg-dark" style={{ padding: "3rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "2rem" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={26} color="#eab308" fill="#eab308" />
                ))}
              </div>
              <div style={{ fontSize: "4rem", fontWeight: 800, color: "var(--accent-on-dark)", marginBottom: "0.5rem", lineHeight: 1 }}>4</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>Exklusivmandate in einem Jahr</div>
              <div style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>vs. 1 in den 3 Jahren zuvor</div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials variant="dark" />

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto animate-up">
          <h2>Werden Sie zur nächsten Erfolgsgeschichte.</h2>
          <p className="lead mb-8">
            Starten Sie mit einem unverbindlichen Beratungsgespräch und einer
            Live-Demo an einem echten Projekt.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Projekt anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
