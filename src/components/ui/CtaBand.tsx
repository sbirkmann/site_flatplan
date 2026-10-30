import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function CtaBand({
  title = "Sehen Sie den Wohnungsfinder an einem laufenden Projekt.",
  lead = "Dreißig Minuten, in Grünwald oder per Video. Wir zeigen Ihnen einen echten Finder, keine Folien — und sagen Ihnen ehrlich, ob sich das für Ihr Bauvorhaben lohnt.",
  cta = "Demo anfragen",
}: {
  title?: string;
  lead?: string;
  cta?: string;
  /** veraltet, wird ignoriert */
  tone?: "sonne" | "tinte";
}) {
  return (
    <section className="section cta-band">
      <div className="container">
        <div className="cta-band-inner">
          <div>
            <h2>{title}</h2>
          </div>
          <div className="cta-band-action">
            <p className="lead" style={{ marginBottom: "1.5rem" }}>{lead}</p>
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              {cta} <IconArrow size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
