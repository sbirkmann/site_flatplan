import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="global-footer-grid">
          {/* Marke */}
          <div className="brand-col">
            <Link href="/" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
              <Logo height={30} dark />
            </Link>
            <p className="global-footer-desc">
              Der interaktive Wohnungsfinder für Bauträger, Projektentwickler und
              Immobilienmakler. Vom ersten Rendering bis zur letzten verkauften
              Einheit: Wir digitalisieren Ihren Neubauvertrieb.
            </p>
          </div>

          {/* Produkt */}
          <div className="links-col">
            <h3>Produkt</h3>
            <ul className="global-footer-links">
              <li><Link href="/features">Alle Funktionen</Link></li>
              <li><Link href="/funktionen/3d-grundrisse">Wohnungsfinder & 360°</Link></li>
              <li><Link href="/funktionen/lead-generierung">Lead-Generierung</Link></li>
              <li><Link href="/funktionen/pdf-expose">Exposés & Vermarktung</Link></li>
              <li><Link href="/funktionen/integrationen">CRM & Schnittstellen</Link></li>
              <li><Link href="/preise">Preise</Link></li>
            </ul>
          </div>

          {/* Branchen & Wissen */}
          <div className="links-col">
            <h3>Branchen & Wissen</h3>
            <ul className="global-footer-links">
              <li><Link href="/branchen/bautraeger">Für Bauträger</Link></li>
              <li><Link href="/branchen/immobilienmakler">Für Immobilienmakler</Link></li>
              <li><Link href="/branchen/projektentwicklung">Für Projektentwickler</Link></li>
              <li><Link href="/referenzen">Referenzen</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/wissen/glossar">Glossar</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="links-col">
            <h3>Kontakt</h3>
            <address style={{ fontStyle: "normal" }}>
              <ul className="global-footer-links">
                <li style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                  <MapPin size={17} style={{ color: "var(--accent-primary)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                  <span className="global-foot-addr">
                    {site.company.legalName}<br />
                    {site.company.street}<br />
                    {site.company.zip} {site.company.city}
                  </span>
                </li>
                <li style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                  <Mail size={17} style={{ color: "var(--accent-primary)", flexShrink: 0 }} aria-hidden="true" />
                  <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
                </li>
                <li style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                  <Phone size={17} style={{ color: "var(--accent-primary)", flexShrink: 0 }} aria-hidden="true" />
                  <a href={site.company.phoneHref}>{site.company.phone}</a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="global-footer-bottom">
          <div>&copy; {new Date().getFullYear()} flatplan.de – Eine Marke der {site.company.brand}. Alle Rechte vorbehalten.</div>
          <div className="global-legal-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
