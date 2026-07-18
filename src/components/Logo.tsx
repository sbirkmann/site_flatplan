/**
 * flatplan.de Logo — komplette Wort-Bild-Marke als eine SVG.
 * Icon: orange Gebäude-Kachel mit 2×2-Einheiten-Raster,
 * eine Einheit dunkel markiert = „die gefundene Wohnung".
 */
export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#ff5a00" />
      <rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2" fill="#ffffff" />
      <rect x="17" y="6.5" width="8.5" height="8.5" rx="2" fill="#0f172a" />
      <rect x="6.5" y="17" width="8.5" height="8.5" rx="2" fill="#ffffff" />
      <rect x="17" y="17" width="8.5" height="8.5" rx="2" fill="#ffffff" />
    </svg>
  );
}

export default function Logo({
  height = 32,
  dark = false,
}: {
  height?: number;
  /** true = Schriftzug in Weiß (für dunkle Flächen wie den Footer) */
  dark?: boolean;
}) {
  const textColor = dark ? "#ffffff" : "#0f172a";
  const deColor = dark ? "rgba(255,255,255,0.55)" : "#94a3b8";
  const width = (height / 32) * 172;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 172 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="flatplan.de"
    >
      {/* Icon */}
      <rect width="32" height="32" rx="8" fill="#ff5a00" />
      <rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2" fill="#ffffff" />
      <rect x="17" y="6.5" width="8.5" height="8.5" rx="2" fill="#0f172a" />
      <rect x="6.5" y="17" width="8.5" height="8.5" rx="2" fill="#ffffff" />
      <rect x="17" y="17" width="8.5" height="8.5" rx="2" fill="#ffffff" />
      {/* Wortmarke */}
      <text
        x="41"
        y="16.5"
        dominantBaseline="central"
        fontFamily="var(--font-sans, Inter, system-ui, sans-serif)"
        fontSize="21"
        fontWeight="800"
        letterSpacing="-0.8"
      >
        <tspan fill={textColor}>flat</tspan>
        <tspan fill="#ff5a00">plan</tspan>
        <tspan fill={deColor} fontWeight="700">.de</tspan>
      </text>
    </svg>
  );
}
