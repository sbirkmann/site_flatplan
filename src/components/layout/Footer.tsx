import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="global-footer-grid">
          <div className="brand-col">
            <Link href="/" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
              <Logo height={30} />
            </Link>
            <p className="global-footer-desc">
              Der Wohnungsfinder für den Neubau-Vorverkauf. Ein Produkt der
              {" "}{site.company.legalName}, {site.company.city}. Hosting und
              Server in Deutschland.
            </p>
            <p className="mono" style={{ marginTop: "1rem" }}>
              RW 48.08 · HW 11.55 · Blatt 99
            </p>
          </div>

          <div className="links-col">
            <h3>Produkt</h3>
            <ul className="global-footer-links">
              <li><Link href="/features">Überblick</Link></li>
              <li><Link href="/funktionen/3d-grundrisse">Wohnungsfinder</Link></li>
              <li><Link href="/funktionen/lead-generierung">Anfragen</Link></li>
              <li><Link href="/funktionen/pdf-expose">Exposé und QR</Link></li>
              <li><Link href="/funktionen/integrationen">Dashboard und CRM</Link></li>
              <li><Link href="/preise">Preise</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h3>Projekt</h3>
            <ul className="global-footer-links">
              <li><Link href="/branchen/bautraeger">Bauträger</Link></li>
              <li><Link href="/branchen/immobilienmakler">Makler</Link></li>
              <li><Link href="/branchen/projektentwicklung">Projektentwicklung</Link></li>
              <li><Link href="/referenzen">Referenzen</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/wissen/glossar">Glossar</Link></li>
              <li><Link href="/ueber-uns">Über uns</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h3>Plankopf</h3>
            <address style={{ fontStyle: "normal" }}>
              <ul className="global-footer-links">
                <li className="global-foot-addr">
                  {site.company.legalName}<br />
                  {site.company.street}<br />
                  {site.company.zip} {site.company.city}
                </li>
                <li><a href={`mailto:${site.company.email}`}>{site.company.email}</a></li>
                <li><a href={site.company.phoneHref}>{site.company.phone}</a></li>
              </ul>
            </address>
          </div>
        </div>

        <div className="global-footer-bottom">
          <div>&copy; {new Date().getFullYear()} flatplan.de · {site.company.brand} · Maßstab 1:1</div>
          <div className="global-legal-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
