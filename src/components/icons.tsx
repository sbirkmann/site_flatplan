import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function I({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Nordpfeil nach rechts — Bewegung, CTA */
export function IconArrow(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 12h14" />
      <path d="M14 6l6 6-6 6" />
    </I>
  );
}

/** Vermessungs-Haken */
export function IconCheck(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 13l5 5L20 6" />
    </I>
  );
}

/** Grundriss-Linien statt Burger */
export function IconMenu(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 7h16" />
      <path d="M4 12h11" />
      <path d="M4 17h16" />
    </I>
  );
}

export function IconClose(p: IconProps) {
  return (
    <I {...p}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </I>
  );
}

export function IconChevron(p: IconProps) {
  return (
    <I {...p}>
      <path d="M6 9l6 6 6-6" />
    </I>
  );
}

/** Vier Räume */
export function IconPlan(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" />
      <path d="M12 3.5v17M3.5 12h17" />
      <rect x="13.5" y="5.5" width="5" height="5" fill="currentColor" stroke="none" />
    </I>
  );
}

/** Fassade mit markierter Wohnung */
export function IconFacade(p: IconProps) {
  return (
    <I {...p}>
      <rect x="5" y="3" width="14" height="18" />
      <rect x="7.5" y="6" width="3.5" height="4" />
      <rect x="13" y="6" width="3.5" height="4" fill="currentColor" stroke="none" />
      <rect x="7.5" y="12" width="3.5" height="4" />
      <rect x="13" y="12" width="3.5" height="4" />
      <path d="M10 21v-3h4v3" />
    </I>
  );
}

export function IconSun(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12h2.5M19 12h2.5M5.2 5.2l1.8 1.8M17 17l1.8 1.8M18.8 5.2l-1.8 1.8M7 17l-1.8 1.8" />
    </I>
  );
}

/** Gestapelte Anfragen */
export function IconLeads(p: IconProps) {
  return (
    <I {...p}>
      <rect x="5" y="7" width="14" height="12" />
      <path d="M8 4h11v12" />
      <path d="M8 11h8M8 14h5" />
    </I>
  );
}

/** Gefaltetes Blatt */
export function IconExpose(p: IconProps) {
  return (
    <I {...p}>
      <path d="M7 3.5h7.5L19.5 9v11.5H7z" />
      <path d="M14.5 3.5V9H19.5" />
      <path d="M10 13h6M10 16.5h4" />
    </I>
  );
}

/** Zwei Räume, verbunden */
export function IconCrm(p: IconProps) {
  return (
    <I {...p}>
      <rect x="2.5" y="7" width="8" height="10" />
      <rect x="13.5" y="7" width="8" height="10" />
      <path d="M10.5 12h3" />
    </I>
  );
}

export function IconBuilding(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 20V6l8-3 8 3v14" />
      <path d="M10 20v-5h4v5" />
      <path d="M7 10h2M15 10h2M7 14h2M15 14h2" />
    </I>
  );
}

export function IconHouse(p: IconProps) {
  return (
    <I {...p}>
      <path d="M3 11l9-7 9 7" />
      <path d="M6 10.5V20h12v-9.5" />
      <rect x="10" y="14" width="4" height="6" />
    </I>
  );
}

export function IconQuartier(p: IconProps) {
  return (
    <I {...p}>
      <rect x="2.5" y="10" width="6" height="11" />
      <rect x="9" y="5" width="6" height="16" />
      <rect x="15.5" y="8" width="6" height="13" />
    </I>
  );
}

export function IconHelp(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.2 9.2c0-1.6 1.3-2.7 2.8-2.7s2.8 1 2.8 2.5c0 1.6-2.8 2-2.8 3.7" />
      <path d="M12 17h.01" />
    </I>
  );
}

export function IconBook(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 5.5h7.5V20H6A2 2 0 0 1 4 18z" />
      <path d="M12.5 5.5H20V18a2 2 0 0 1-2 2h-5.5z" />
      <path d="M12.5 5.5v14.5" />
    </I>
  );
}

export function IconMail(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3" y="6" width="18" height="12" />
      <path d="M3 7l9 6 9-6" />
    </I>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <I {...p}>
      <rect x="8" y="2.5" width="8" height="19" rx="1" />
      <path d="M10 5h4M12 18.5h.01" />
    </I>
  );
}

export function IconPin(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 21s-7-7.2-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 13.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </I>
  );
}

export function IconCalendar(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01" />
    </I>
  );
}

export function IconClock(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.5 2.2" />
    </I>
  );
}

export function IconSend(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 4l16 8-16 8 3-8z" />
    </I>
  );
}

export function IconLoader(p: IconProps) {
  return (
    <I {...p} className={`spin ${p.className ?? ""}`}>
      <circle cx="12" cy="12" r="8.5" strokeOpacity="0.25" />
      <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" />
    </I>
  );
}

export function IconStar(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.2 6.3 20l2.1-6.4L3 9.6h6.8z" />
    </I>
  );
}

export function IconShield(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3l8 3v6c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </I>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.6 3.6 8.5S14.4 17.9 12 20.5C9.6 17.9 8.4 14.9 8.4 12S9.6 6.1 12 3.5z" />
    </I>
  );
}

export function IconQr(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <path d="M13.5 13.5h3v3h-3zM18.5 13.5h2v2M13.5 18.5h2v2M18 18.5h2.5V21" />
    </I>
  );
}

export function IconLayers(p: IconProps) {
  return (
    <I {...p}>
      <path d="M3 8l9-4 9 4-9 4z" />
      <path d="M3 12l9 4 9-4" />
      <path d="M3 16l9 4 9-4" />
    </I>
  );
}

export function IconOrbit(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9" ry="5" />
      <ellipse cx="12" cy="12" rx="5" ry="9" />
    </I>
  );
}

export function IconChart(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 19.5h16" />
      <path d="M7 16V10M12 16V6M17 16v-8" />
    </I>
  );
}

export function IconDatabase(p: IconProps) {
  return (
    <I {...p}>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
      <path d="M4.5 6v12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6" />
      <path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </I>
  );
}

export function IconBot(p: IconProps) {
  return (
    <I {...p}>
      <rect x="4" y="8" width="16" height="11" />
      <path d="M12 8V4.5M9.5 13h.01M14.5 13h.01M8 19v2M16 19v2" />
    </I>
  );
}

export function IconCode(p: IconProps) {
  return (
    <I {...p}>
      <path d="M8 7L3.5 12 8 17" />
      <path d="M16 7l4.5 5L16 17" />
      <path d="M13.5 5l-3 14" />
    </I>
  );
}

export function IconPalette(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17h2.2a2.2 2.2 0 0 0 0-4.4H13" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </I>
  );
}

export function IconAward(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.5 7.5 21 12 18.5 16.5 21 15 13.5" />
    </I>
  );
}

export function IconNorth(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 3.5l4 10H8z" fill="currentColor" stroke="none" />
      <path d="M12 21v-7.5" />
    </I>
  );
}

export function IconKey(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="8" cy="14" r="4.5" />
      <path d="M12 14h8v3M17 14v3" />
    </I>
  );
}
