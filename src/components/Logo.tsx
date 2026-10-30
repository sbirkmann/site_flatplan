export function LogoIcon({ size = 32, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? "#faf9f4" : "#1c1b17";
  const mark = "#c8321e";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Planrahmen */}
      <rect x="1.5" y="1.5" width="29" height="29" stroke={ink} strokeWidth="2" />
      {/* Grundriss-Linien */}
      <path d="M1.5 12h18M19.5 1.5V22M19.5 22h11M10 12v18.5" stroke={ink} strokeWidth="1.4" />
      {/* Tuerbogen angedeutet */}
      <path d="M10 22a4 4 0 0 1 4 4" stroke={ink} strokeWidth="1.2" />
      {/* Die aktive Parzelle: schraffiert in Signalrot */}
      <rect x="20" y="2" width="10.5" height="9.5" fill="url(#fp-hatch)" />
      <defs>
        <pattern id="fp-hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="transparent" />
          <line x1="0" y1="0" x2="0" y2="4" stroke={mark} strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect x="20" y="2" width="10.5" height="9.5" stroke={mark} strokeWidth="1.6" />
    </svg>
  );
}

export default function Logo({
  height = 28,
  dark = false,
}: {
  height?: number;
  dark?: boolean;
}) {
  return (
    <span className="brand">
      <LogoIcon size={height} light={dark} />
      <span className="brand-word" style={dark ? { color: "#faf9f4" } : undefined}>
        flatplan
        <span className="brand-tld" style={dark ? { color: "rgba(250,249,244,0.45)" } : undefined}>.de</span>
      </span>
    </span>
  );
}
