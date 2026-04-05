"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/features', label: 'Funktionen' },
    { href: '/branchen/bautraeger', label: 'Bauträger' },
    { href: '/branchen/immobilienmakler', label: 'Makler' },
    { href: '/preise', label: 'Preise' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className={`global-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container global-header-container">
        
        {/* LOGO */}
        <Link href="/" className="logo-link" style={{ textDecoration: 'none' }}>
           <div className="global-logo-wrapper">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="18" height="40" fill="var(--accent-primary)" />
                 <rect x="22" width="18" height="26" fill="var(--text-primary)" />
                 <rect x="22" y="30" width="18" height="10" fill="var(--text-tertiary)" />
              </svg>
              <span className="global-logo-text">
                 flat<span style={{ color: 'var(--accent-primary)' }}>plan</span>.de
              </span>
           </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="global-desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="global-nav-link">{link.label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="global-cta">
          <Link href="/kontakt" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontWeight: 700, letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Kontakt
          </Link>
          <button className="global-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menü öffnen">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border-light)', padding: '1.5rem 0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-light)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/kontakt" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary" 
              style={{ marginTop: '1rem', textAlign: 'center', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
