import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function CtaBand({
  title = "Sehen Sie den Wohnungsfinder an einem laufenden Projekt.",
  lead = "Dreißig Minuten, in Grünwald oder per Video. Wir zeigen Ihnen einen echten Finder, nicht eine Folienpräsentation — und sagen Ihnen ehrlich, ob sich das für Ihr Bauvorhaben lohnt.",
  cta = "Demo anfragen",
}: {
  title?: string;
  lead?: string;
  cta?: string;
  tone?: "sonne" | "tinte";
}) {
  return (
    <section className="section cta-band border-t">
      <div className="container">
        <div className="cta-band-inner">
          <div>
            <span className="eyebrow">Grünwald bei München</span>
            <h2>{title}</h2>
          </div>
          <div className="cta-band-action">
            <p className="lead">{lead}</p>
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              {cta} <IconArrow size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
