import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import FacadeFinder from "@/components/photos/FacadeFinder";
import { IconMail, IconPhone, IconPin, IconCalendar } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt: Demo am laufenden Objekt",
  description:
    "Termin in Grünwald oder per Video. Demo des Wohnungsfinders an einem laufenden Objekt. Antwort in einem Werktag.",
  path: "/kontakt",
});

export default function Kontakt() {
  return (
    <main>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "ContactPage", name: "Kontakt | flatplan.de", url: `${site.url}/kontakt` },
          breadcrumbs([{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt" }]),
        ]}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Demo am laufenden Objekt."
        lead="Dreißig Minuten. Rendering und Wohnungsliste reichen, wenn Sie das eigene Haus besprechen wollen."
        tone="sonne"
        illustration={<FacadeFinder showLegend={false} />}
        measure={`${site.company.city} · Antwort in einem Werktag`}
      />

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: "start", gap: "3.5rem" }}>
          <div>
            <span className="eyebrow">Büro</span>
            <h2>Telefon, Mail, Formular.</h2>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
              {[
                { icon: <IconPhone size={20} />, k: "Telefon", v: <a href={site.company.phoneHref}>{site.company.phone}</a> },
                { icon: <IconMail size={20} />, k: "E-Mail", v: <a href={`mailto:${site.company.email}`}>{site.company.email}</a> },
                { icon: <IconPin size={20} />, k: "Adresse", v: <span>{site.company.legalName}, {site.company.street}, {site.company.zip} {site.company.city}</span> },
                { icon: <IconCalendar size={20} />, k: "Ablauf", v: <span>Nachricht · Demo am Objekt · Angebot nach Zahl der WE</span> },
              ].map((row) => (
                <li key={row.k} style={{ display: "grid", gridTemplateColumns: "1.5rem 1fr", gap: "0.85rem", alignItems: "start", marginBottom: "1.35rem", paddingBottom: "1.15rem", borderBottom: "1px solid var(--nebel)" }}>
                  <span style={{ color: "var(--blatt)", marginTop: 2 }}>{row.icon}</span>
                  <div>
                    <span className="measure" style={{ display: "block", marginBottom: "0.2rem" }}>{row.k}</span>
                    <span style={{ color: "var(--tinte)", fontWeight: 600 }}>{row.v}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
