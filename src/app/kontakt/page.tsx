import type { Metadata } from "next";
import { Mail, MapPin, Phone, CalendarCheck } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt & Demo anfragen",
  description:
    "Fordern Sie eine kostenlose Live-Demo des interaktiven Wohnungsfinders an. Wir beraten Bauträger, Projektentwickler und Makler persönlich – Antwort innerhalb eines Werktags.",
  path: "/kontakt",
});

export default function Kontakt() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt | flatplan.de",
    url: `${site.url}/kontakt`,
  };

  return (
    <main>
      <JsonLd data={[contactSchema, breadcrumbs([{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt" }])]} />

      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Kontakt</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Sehen Sie Ihr Projekt als interaktiven Wohnungsfinder.
          </h1>
          <p className="lead">
            In einer persönlichen Live-Demo zeigen wir Ihnen die Plattform an
            einem echten Projekt – und besprechen, wie Ihr Vorhaben darin
            aussehen würde. Unverbindlich und kostenlos.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: "start", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "1.75rem" }}>Direkter Draht</h2>
            <p className="mb-8">
              Sie erreichen uns per Telefon, E-Mail oder über das Formular.
              Anfragen beantworten wir in der Regel innerhalb eines Werktags.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="flex items-start gap-4 mb-6">
                <span className="icon-wrapper" style={{ marginBottom: 0 }}><Phone size={20} /></span>
                <div>
                  <strong style={{ display: "block", color: "var(--text-primary)" }}>Telefon</strong>
                  <a href={site.company.phoneHref} style={{ color: "var(--accent-hover)", fontWeight: 600 }}>{site.company.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4 mb-6">
                <span className="icon-wrapper" style={{ marginBottom: 0 }}><Mail size={20} /></span>
                <div>
                  <strong style={{ display: "block", color: "var(--text-primary)" }}>E-Mail</strong>
                  <a href={`mailto:${site.company.email}`} style={{ color: "var(--accent-hover)", fontWeight: 600 }}>{site.company.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4 mb-6">
                <span className="icon-wrapper" style={{ marginBottom: 0 }}><MapPin size={20} /></span>
                <div>
                  <strong style={{ display: "block", color: "var(--text-primary)" }}>Anschrift</strong>
                  <span>{site.company.legalName}, {site.company.street}, {site.company.zip} {site.company.city}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="icon-wrapper" style={{ marginBottom: 0 }}><CalendarCheck size={20} /></span>
                <div>
                  <strong style={{ display: "block", color: "var(--text-primary)" }}>So geht es weiter</strong>
                  <span>
                    1. Anfrage senden &nbsp;→&nbsp; 2. Live-Demo mit echtem Projekt
                    &nbsp;→&nbsp; 3. Angebot für Ihr Vorhaben
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  );
}
