"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { IconMenu, IconClose, IconChevron } from "@/components/icons";

type DropdownItem = {
  href: string;
  title: string;
  desc: string;
};

const funktionen: DropdownItem[] = [
  { href: "/features", title: "Überblick", desc: "Was der Wohnungsfinder kann" },
  { href: "/funktionen/3d-grundrisse", title: "Wohnungsfinder", desc: "Fassade, Grundriss, 360°" },
  { href: "/funktionen/lead-generierung", title: "Anfragen", desc: "Exposé, Gate, Dashboard" },
  { href: "/funktionen/pdf-expose", title: "Exposé und QR", desc: "PDF, Preisliste, Bauzaun" },
  { href: "/funktionen/integrationen", title: "Dashboard und CRM", desc: "onOffice nur auf Wunsch" },
];

const branchen: DropdownItem[] = [
  { href: "/branchen/bautraeger", title: "Bauträger", desc: "Vorverkauf vor dem Spatenstich" },
  { href: "/branchen/immobilienmakler", title: "Makler", desc: "Neubau als Mandat" },
  { href: "/branchen/projektentwicklung", title: "Projektentwicklung", desc: "Quartier und Abschnitte" },
];

const wissen: DropdownItem[] = [
  { href: "/vorteile", title: "Im Vertrieb", desc: "Was sich im Alltag ändert" },
  { href: "/faq", title: "FAQ", desc: "Technik, Ablauf, Datenschutz" },
  { href: "/wissen/glossar", title: "Glossar", desc: "WE, OpenImmo, Gate" },
];

function pathIn(pathname: string, items: DropdownItem[]) {
  return items.some((i) => pathname === i.href || pathname.startsWith(`${i.href}/`));
}

function Dropdown({ name, label, items, openDropdown, setOpenDropdown, active }: {
  name: string;
  label: string;
  items: DropdownItem[];
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  active?: boolean;
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
    }, 140);
  };

  return (
    <div className="nav-dropdown" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className={`global-nav-link${active ? " active" : ""}`}
        aria-expanded={open}
        onClick={() => setOpenDropdown(open ? null : name)}
      >
        {label}
        <IconChevron size={12} className="nav-chevron" />
      </button>
      {open && (
        <div className="nav-dropdown-menu" role="menu">
          <p className="nav-dropdown-kicker">{label}</p>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem" onClick={() => setOpenDropdown(null)}>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

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
          <Link href="/" aria-label="flatplan.de – Startseite" className="brand-link">
            <Logo height={26} />
          </Link>

          <nav className="global-desktop-nav" ref={navRef} aria-label="Hauptnavigation">
            <Dropdown name="funktionen" label="Funktionen" items={funktionen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} active={pathIn(pathname, funktionen)} />
            <Dropdown name="branchen" label="Branchen" items={branchen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} active={pathIn(pathname, branchen)} />
            <Link href="/preise" className={`global-nav-link ${pathname === "/preise" ? "active" : ""}`}>Preise</Link>
            <Link href="/referenzen" className={`global-nav-link ${pathname === "/referenzen" ? "active" : ""}`}>Referenzen</Link>
            <Link href="/blog" className={`global-nav-link ${pathname.startsWith("/blog") ? "active" : ""}`}>Blog</Link>
            <Dropdown name="wissen" label="Wissen" items={wissen} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} active={pathIn(pathname, wissen)} />
          </nav>

          <div className="global-cta">
            <Link href="/kontakt" className="header-cta">Demo anfragen</Link>
            <button
              className="global-mobile-toggle"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
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
                <Link key={i.href} href={i.href}>
                  <strong>{i.title}</strong>
                  <span>{i.desc}</span>
                </Link>
              ))}
            </div>
            <div className="mobile-menu-group">
              <div className="mobile-menu-label">Branchen</div>
              {branchen.map((i) => (
                <Link key={i.href} href={i.href}>
                  <strong>{i.title}</strong>
                  <span>{i.desc}</span>
                </Link>
              ))}
            </div>
            <div className="mobile-menu-group">
              <Link href="/preise"><strong>Preise</strong></Link>
              <Link href="/referenzen"><strong>Referenzen</strong></Link>
              <Link href="/blog"><strong>Blog</strong></Link>
            </div>
            <div className="mobile-menu-group">
              <div className="mobile-menu-label">Wissen</div>
              {wissen.map((i) => (
                <Link key={i.href} href={i.href}>
                  <strong>{i.title}</strong>
                  <span>{i.desc}</span>
                </Link>
              ))}
            </div>
            <Link href="/kontakt" className="header-cta" style={{ marginTop: "1.75rem" }}>
              Demo anfragen
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
