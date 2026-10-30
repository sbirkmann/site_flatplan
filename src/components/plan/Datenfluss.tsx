/** Datenfluss: ein Stand im Dashboard, alle Kanäle live. */
export default function Datenfluss() {
  const targets = [
    { x: 60, y: 30, label: "FASSADE / FINDER" },
    { x: 60, y: 110, label: "PREISLISTE PDF" },
    { x: 60, y: 190, label: "EXPOSÉ + QR" },
    { x: 610, y: 30, label: "PORTALE · OPENIMMO" },
    { x: 610, y: 110, label: "CRM · ONOFFICE U.A." },
    { x: 610, y: 190, label: "STATISTIK · UTM" },
  ];
  return (
    <div className="diagram">
      <svg viewBox="0 0 860 250" role="img" aria-label="Datenfluss: Das Dashboard versorgt Fassade, Preisliste, Exposé, Portale, CRM und Statistik">
        {/* Zentrale */}
        <rect x="330" y="85" width="200" height="80" fill="#f1efe8" stroke="#c8321e" strokeWidth="2" />
        <text x="430" y="118" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700" letterSpacing="2" fill="#c8321e">
          DASHBOARD
        </text>
        <text x="430" y="140" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fill="rgba(28,27,23,0.72)">
          ein Stand, einmal gepflegt
        </text>
        {targets.map((t) => (
          <g key={t.label}>
            <rect x={t.x} y={t.y} width="190" height="44" fill="none" stroke="#1c1b17" strokeWidth="1.3" />
            <text x={t.x + 95} y={t.y + 27} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="700" letterSpacing="1.5" fill="#1c1b17">
              {t.label}
            </text>
            <line
              x1={t.x < 300 ? t.x + 190 : 530}
              y1={t.y + 22}
              x2={t.x < 300 ? 330 : t.x}
              y2={t.y + 22 < 125 ? 105 : t.y + 22 > 165 ? 145 : 125}
              stroke="rgba(28,27,23,0.55)"
              strokeWidth="1.2"
              strokeDasharray="5 4"
            />
            <circle cx={t.x < 300 ? 330 : 530} cy={t.y + 22 < 125 ? 105 : t.y + 22 > 165 ? 145 : 125} r="3" fill="#c8321e" />
          </g>
        ))}
      </svg>
      <p className="diagram-cap">Datenfluss · Preis oder Status ändern — Fassade, Exposé, QR und Portale ziehen nach</p>
    </div>
  );
}
