"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, ChevronDown, Rotate3d, Users, FileText, Workflow,
  LayoutGrid, Building2, Home, Briefcase, BookOpen, HelpCircle, Library, Sparkles,
} from "lucide-react";
import Logo from "@/components/Logo";

type DropdownItem = {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const funktionen: DropdownItem[] = [
  { href: "/features", title: "Alle Funktionen", desc: "Die Plattform im Überblick", icon: <LayoutGrid size={18} /> },
  { href: "/funktionen/3d-grundrisse", title: "Wohnungsfinder & 360°-Rundgänge", desc: "Drehbare Projektansicht, Grundrisse, Panoramen", icon: <Rotate3d size={18} /> },
  { href: "/funktionen/lead-generierung", title: "Lead-Generierung", desc: "Anfragen, Suchagenten, Preis-Alarme", icon: <Users size={18} /> },
  { href: "/funktionen/pdf-expose", title: "Exposés & Vermarktung", desc: "Exposé-Gate, Preislisten, QR-Codes", icon: <FileText size={18} /> },
  { href: "/funktionen/integrationen", title: "CRM & Schnittstellen", desc: "onOffice, Propstack, Flowfact, OpenImmo", icon: <Workflow size={18} /> },
];

const branchen: DropdownItem[] = [
  { href: "/branchen/bautraeger", title: "Bauträger", desc: "Vorverkauf ab dem ersten Rendering", icon: <Building2 size={18} /> },
  { href: "/branchen/immobilienmakler", title: "Immobilienmakler", desc: "Alleinstellung im Neubauvertrieb", icon: <Home size={18} /> },
  { href: "/branchen/projektentwicklung", title: "Projektentwicklung", desc: "Quartiere & Portfolios digital vermarkten", icon: <Briefcase size={18} /> },
];

const wissen: DropdownItem[] = [
  { href: "/vorteile", title: "Vorteile", desc: "Warum ein Wohnungsfinder?", icon: <Sparkles size={18} /> },
  { href: "/faq", title: "FAQ", desc: "Häufige Fragen & Antworten", icon: <HelpCircle size={18} /> },
  { href: "/wissen/glossar", title: "Glossar", desc: "Fachbegriffe kurz erklärt", icon: <Library size={18} /> },
];

function Dropdown({ name, label, items, openDropdown, setOpenDropdown }: {
  name: string;
  label: string;
  items: DropdownItem[];
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const open = openDropdown === name;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown((cur) => (cur === name ? null : cur));
    }, 120);
  };

  return (
    <div className="nav-dropdown" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className="global-nav-link"
        aria-expanded={open}
        onClick={() => setOpenDropdown(open ? null : name)}
      >
        {label}
        <ChevronDown size={14} className="nav-chevron" />
      </button>
      {open && (
        <div className="nav-dropdown-menu" role="menu">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-dropdown-item" onClick={() => setOpenDropdown(null)}>
              {item.icon}
              <div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menüs bei Routenwechsel schließen
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Dropdown bei Klick außerhalb / Escape schließen
  useEffect(() => {
    if (!openDropdown) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  // Hintergrund-Scroll sperren, solange das Mobile-Menü offen ist
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`global-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container global-header-container">
          <Link href="/" aria-label="flatplan.de – Startseite" style={{ display: "inline-flex" }}>
            <Logo height={32} />
          </Link>

          <nav className="global-desktop-nav" ref={navRef} aria-label="Hauptnavigation">
            <Dropdown name="funktionen" label="Funktionen" items={funktionen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            <Dropdown name="branchen" label="Branchen" items={branchen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            <Link href="/preise" className={`global-nav-link ${pathname === "/preise" ? "active" : ""}`}>Preise</Link>
            <Link href="/referenzen" className={`global-nav-link ${pathname === "/referenzen" ? "active" : ""}`}>Referenzen</Link>
            <Link href="/blog" className={`global-nav-link ${pathname.startsWith("/blog") ? "active" : ""}`}>Blog</Link>
            <Dropdown name="wissen" label="Wissen" items={wissen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
          </nav>

          <div className="global-cta">
            <Link href="/kontakt" className="btn btn-primary btn-sm">
              Demo anfragen
            </Link>
            <button
              className="global-mobile-toggle"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <div className="mobile-menu-group">
              <div className="mobile-menu-label">Funktionen</div>
              {funktionen.map((i) => (
                <Link key={i.href} href={i.href}>{i.title}</Link>
              ))}
            </div>
            <div className="mobile-menu-group">
              <div className="mobile-menu-label">Branchen</div>
              {branchen.map((i) => (
                <Link key={i.href} href={i.href}>{i.title}</Link>
              ))}
            </div>
            <div className="mobile-menu-group">
              <Link href="/preise">Preise</Link>
              <Link href="/referenzen">Referenzen</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className="mobile-menu-group">
              <div className="mobile-menu-label">Wissen</div>
              {wissen.map((i) => (
                <Link key={i.href} href={i.href}>{i.title}</Link>
              ))}
            </div>
            <Link href="/kontakt" className="btn btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
              Demo anfragen
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
