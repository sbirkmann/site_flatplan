import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function CtaBand({
  title = "Wohnungsfinder an einem laufenden Projekt sehen.",
  lead = "Dreißig Minuten, in Grünwald oder per Video. Modelle und Renderings von uns. Grundrisse, wenn sie fehlen.",
  cta = "Demo anfragen",
  tone = "tinte",
}: {
  title?: string;
  lead?: string;
  cta?: string;
  tone?: "sonne" | "tinte";
}) {
  const dark = tone === "tinte";
  return (
    <section className={dark ? "section bg-dark" : "section bg-sonne"}>
      <div className="container" style={{ maxWidth: "38rem" }}>
        <p className="measure" style={{ marginBottom: "0.85rem", color: dark ? "var(--sonne)" : "var(--tinte)" }}>
          Grünwald
        </p>
        <h2 style={{ color: dark ? "#fff" : "var(--tinte)", maxWidth: "16ch" }}>{title}</h2>
        <p className="lead" style={{ color: dark ? "var(--text-on-dark-muted)" : "var(--graphit)", maxWidth: "34rem" }}>
          {lead}
        </p>
        <Link href="/kontakt" className="btn btn-primary btn-lg">
          {cta} <IconArrow size={18} />
        </Link>
      </div>
    </section>
  );
}
