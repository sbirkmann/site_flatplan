export function LogoIcon({ size = 32, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? "#F5F3EF" : "#16181C";
  const mark = "#D8451A";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="3" width="7" height="26" fill={ink} />
      <rect x="4" y="3" width="7" height="7" fill={mark} />
      <path d="M15 8h13M15 16h10M15 24h7" stroke={ink} strokeWidth="1.75" strokeLinecap="square" />
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
      <span className="brand-word" style={dark ? { color: "#F5F3EF" } : undefined}>
        flatplan
        <span className="brand-tld" style={dark ? { color: "rgba(245,243,239,0.4)" } : undefined}>.de</span>
      </span>
    </span>
  );
}
