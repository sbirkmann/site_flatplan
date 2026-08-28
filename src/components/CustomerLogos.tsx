import Image from "next/image";
import Link from "next/link";

const customers = [
  {
    name: "Sparkasse",
    href: "/referenzen#sparkasse",
    src: "/customers/sparkasse.svg",
    alt: "Sparkasse, Sparkassen-Finanzgruppe",
    width: 28,
    height: 36,
  },
  {
    name: "Zinn Architektur",
    href: "/referenzen#zinn",
    src: null,
    alt: "Zinn Architektur",
    width: 0,
    height: 0,
  },
  {
    name: "INVESTORA",
    href: null,
    src: "/customers/investora.png",
    alt: "INVESTORA",
    width: 162,
    height: 36,
  },
] as const;

export default function CustomerLogos() {
  return (
    <section className="bg-white border-b" aria-label="Kunden">
      <div className="container">
        <ul className="partner-logos">
          {customers.map((c) => {
            const mark = c.src ? (
              <Image
                src={c.src}
                alt={c.alt}
                width={c.width}
                height={c.height}
                className="partner-logos-img"
                unoptimized={c.src.endsWith(".svg")}
              />
            ) : (
              <span className="partner-logos-word">{c.name}</span>
            );
            return (
              <li key={c.name}>
                {c.href ? (
                  <Link href={c.href} className="partner-logos-item" aria-label={`${c.alt}, Referenz`}>
                    {mark}
                  </Link>
                ) : (
                  <span className="partner-logos-item">{mark}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
