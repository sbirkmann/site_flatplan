"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="container">
        
        <div className="global-footer-grid">
          {/* Brand Info */}
          <div className="brand-col">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', textDecoration: 'none' }}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="18" height="40" fill="var(--accent-primary)" />
                 <rect x="22" width="18" height="26" fill="white" />
                 <rect x="22" y="30" width="18" height="10" fill="#64748b" />
              </svg>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'white' }}>flat<span style={{ color: 'var(--accent-primary)' }}>plan</span>.de</span>
            </Link>
            <p className="global-footer-desc">
              Der 3D Wohnungsfinder für Bauträger, Projektentwickler und Immobilienmakler. 
              Wir digitalisieren Ihren Neubauvertrieb für maximale Vorverkaufsquoten und Lead-Qualität.
            </p>
          </div>

          {/* Solutions / SEO Hub */}
          <div className="links-col">
            <h3>Produkte & Module</h3>
            <ul className="global-footer-links">
              <li><Link href="/features">Alle Features & Funktionen</Link></li>
              <li><Link href="/funktionen/integrationen">API & Integrationen (CRM)</Link></li>
              <li><Link href="/funktionen/pdf-expose">PDF-Exposé Generator</Link></li>
              <li><Link href="/preise">Preise & Lizenzierung</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/wissen/glossar">Glossar</Link></li>
            </ul>
          </div>

          {/* For Whom */}
          <div className="links-col">
            <h3>Branchen & Unternehmen</h3>
            <ul className="global-footer-links">
              <li><Link href="/branchen/bautraeger">Für Bauträger</Link></li>
              <li><Link href="/branchen/immobilienmakler">Für Immobilienmakler</Link></li>
              <li><Link href="/branchen/projektentwicklung">Für Projektentwickler</Link></li>
              <li><Link href="/referenzen">Referenzen & Case Studies</Link></li>
              <li><Link href="/ueber-uns">Über Immowoo</Link></li>
              <li><Link href="/blog">Wissen & Blog</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="links-col contact-col">
            <h3>Kontakt</h3>
            <address style={{ fontStyle: 'normal' }}>
              <ul className="global-footer-links">
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span className="global-foot-addr">Immowoo<br />Rohrdorf, Würzburg, Koblenz</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Mail size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <a href="mailto:info@immowoo.de">info@immowoo.de</a>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <Phone size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <a href="tel:+498912345678">+49 89 123 456 78</a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="global-footer-bottom">
          <div>
            &copy; 2026 flatplan.de – Eine Marke der Immowoo. Alle Rechte vorbehalten.
          </div>
          <div className="global-legal-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
