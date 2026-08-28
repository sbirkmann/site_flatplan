export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1.25" y="1.25" width="29.5" height="29.5" stroke="#163028" strokeWidth="1.25" />
      <path d="M16 1.25V30.75M1.25 16H30.75" stroke="#163028" strokeWidth="1.25" />
      <rect x="16.6" y="1.9" width="13.5" height="13.5" fill="#E8B92A" />
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
      <LogoIcon size={height} />
      <span className="brand-word" style={dark ? { color: "#fffcf6" } : undefined}>
        flatplan
        <span className="brand-tld" style={dark ? { color: "rgba(255,252,246,0.45)" } : undefined}>.de</span>
      </span>
    </span>
  );
}
