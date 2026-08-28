import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function CtaBand({
  title = "Rendering, Grundrisse, Wohnungsliste.",
  lead = "Termin in Grünwald oder per Video. Wir legen den Finder an einem laufenden Objekt auf.",
  cta = "Demo am Projekt",
  tone = "sonne",
}: {
  title?: string;
  lead?: string;
  cta?: string;
  tone?: "sonne" | "tinte";
}) {
  const dark = tone === "tinte";
  return (
    <section className={dark ? "section bg-dark" : "section bg-sonne"}>
      <div className="container" style={{ maxWidth: "40rem" }}>
        <p className="measure" style={{ marginBottom: "1rem", color: dark ? "var(--sonne)" : "var(--tinte)" }}>
          Termin in Grünwald.
        </p>
        <h2 style={{ color: dark ? "#fff" : "var(--tinte)" }}>{title}</h2>
        <p className="lead" style={{ color: dark ? "var(--text-on-dark-muted)" : "var(--graphit)", maxWidth: "34rem" }}>
          {lead}
        </p>
        <Link href="/kontakt" className={dark ? "btn btn-primary btn-lg" : "btn btn-outline btn-lg"}>
          {cta} <IconArrow size={18} />
        </Link>
      </div>
    </section>
  );
}
