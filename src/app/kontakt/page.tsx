import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import SheetHead from "@/components/plan/SheetHead";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt: Demo des Wohnungsfinders anfragen",
  description:
    "Demo-Termin in Grünwald oder per Video: Wir zeigen den Wohnungsfinder an einem echten Projekt. Antwort in einem Werktag. info@flatplan.de · +49 931 30194458.",
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
        blatt="K-01"
        title="Wir zeigen den Finder an einem echten Projekt."
        lead="Etwa dreißig Minuten, in Grünwald oder per Video — am Bildschirm, nicht an Folien. Die Wohnungsliste reicht, wenn Sie Ihr Vorhaben besprechen wollen."
        measure={`${site.company.city} · ${site.company.email} · Antwort in einem Werktag`}
      />

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "start", gap: "3.5rem" }}>
          <div>
            <SheetHead blatt="K-02" titel="Plankopf" />
            <h2>Telefon, Mail, Formular.</h2>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
              {[
                { k: "Telefon", v: <a href={site.company.phoneHref}>{site.company.phone}</a> },
                { k: "E-Mail", v: <a href={`mailto:${site.company.email}`}>{site.company.email}</a> },
                { k: "Adresse", v: <span>{site.company.legalName}, {site.company.street}, {site.company.zip} {site.company.city}</span> },
                { k: "Ablauf", v: <span>Nachricht · Demo · Angebot nach Zahl der Wohneinheiten</span> },
              ].map((row) => (
                <li key={row.k} style={{ marginBottom: "1.35rem", paddingBottom: "1.15rem", borderBottom: "1px solid var(--linie)" }}>
                  <span className="mono" style={{ display: "block", marginBottom: "0.25rem", color: "var(--rot)" }}>{row.k}</span>
                  <span style={{ color: "var(--tinte)", fontWeight: 600, fontSize: "1.1rem" }}>{row.v}</span>
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
