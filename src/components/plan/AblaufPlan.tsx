/** Ablaufplan: vom Modell bis zur ersten Anfrage — als Plansequenz. */
export default function AblaufPlan() {
  const boxes = [
    { x: 20, label: "01 · MATERIAL", sub: "3D-Modell, Renderings, Grundrisse" },
    { x: 300, label: "02 · FINDER", sub: "Fassade, Status, 360°, eigene Domain" },
    { x: 580, label: "03 · VERTRIEB", sub: "Dashboard, Anfragen mit WE, CRM" },
  ];
  return (
    <div className="diagram">
      <svg viewBox="0 0 860 190" role="img" aria-label="Ablauf: Material, Finder, Vertrieb">
        {boxes.map((b, i) => (
          <g key={b.label}>
            <rect x={b.x} y="55" width="220" height="80" fill="none" stroke="#1c1b17" strokeWidth="1.6" />
            <rect x={b.x} y="55" width="220" height="26" fill="#f1efe8" stroke="#1c1b17" strokeWidth="1.2" />
            <text x={b.x + 10} y="73" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" letterSpacing="2" fill="#1c1b17">
              {b.label}
            </text>
            <text x={b.x + 10} y="106" fontFamily="var(--font-sans)" fontSize="14" fill="rgba(28,27,23,0.72)">
              {b.sub}
            </text>
            {i < 2 && (
              <g stroke="#c8321e" strokeWidth="1.8" fill="none">
                <line x1={b.x + 224} y1="95" x2={b.x + 274} y2="95" />
                <path d={`M ${b.x + 268} 88 L ${b.x + 276} 95 L ${b.x + 268} 102`} />
              </g>
            )}
            {/* Vermessung unten */}
            <line x1={b.x} y1="160" x2={b.x + 220} y2="160" stroke="rgba(28,27,23,0.4)" strokeWidth="1" />
            <line x1={b.x} y1="155" x2={b.x} y2="165" stroke="rgba(28,27,23,0.4)" strokeWidth="1" />
            <line x1={b.x + 220} y1="155" x2={b.x + 220} y2="165" stroke="rgba(28,27,23,0.4)" strokeWidth="1" />
            <text x={b.x + 110} y="178" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" fill="rgba(28,27,23,0.55)">
              {["WOCHE 1–2", "WOCHE 2–3", "AB WOCHE 3"][i]}
            </text>
          </g>
        ))}
      </svg>
      <p className="diagram-cap">Ablaufplan · vom vorhandenen Material bis zum laufenden Vertrieb</p>
    </div>
  );
}
