/** Status-Kreislauf einer Wohnung: frei → reserviert → verkauft. */
export default function StatusKreislauf() {
  return (
    <div className="diagram">
      <svg viewBox="0 0 860 170" role="img" aria-label="Status einer Wohnung: frei, reserviert, verkauft — mit Rückweg bei Storno">
        {/* frei */}
        <g>
          <rect x="30" y="55" width="180" height="64" fill="none" stroke="#c8321e" strokeWidth="1.8" />
          <rect x="30" y="55" width="180" height="64" fill="url(#sk-frei)" />
          <text x="120" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="700" letterSpacing="3" fill="#c8321e">FREI</text>
        </g>
        {/* reserviert */}
        <g>
          <rect x="340" y="55" width="180" height="64" fill="none" stroke="#3d5a6e" strokeWidth="1.8" />
          <rect x="340" y="55" width="180" height="64" fill="url(#sk-res)" />
          <text x="430" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="700" letterSpacing="3" fill="#3d5a6e">RESERVIERT</text>
        </g>
        {/* verkauft */}
        <g>
          <rect x="650" y="55" width="180" height="64" fill="rgba(143,140,133,0.18)" stroke="#8f8c85" strokeWidth="1.8" />
          <text x="740" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="700" letterSpacing="3" fill="#8f8c85">VERKAUFT</text>
        </g>
        {/* Pfeile vorwärts */}
        <g stroke="#1c1b17" strokeWidth="1.6" fill="none">
          <line x1="216" y1="87" x2="332" y2="87" />
          <path d="M326 80 L336 87 L326 94" />
          <line x1="526" y1="87" x2="642" y2="87" />
          <path d="M636 80 L646 87 L636 94" />
        </g>
        {/* Rückweg Storno */}
        <g stroke="rgba(28,27,23,0.5)" strokeWidth="1.2" strokeDasharray="6 5" fill="none">
          <path d="M 430 125 Q 430 155 215 142 L 215 125" />
          <path d="M 208 128 L 215 121 L 222 128" stroke="rgba(28,27,23,0.5)" />
        </g>
        <text x="320" y="160" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" fill="rgba(28,27,23,0.55)">
          STORNO → WIEDER FREI
        </text>
        <text x="274" y="72" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" fill="rgba(28,27,23,0.55)">RESERVIERUNG</text>
        <text x="584" y="72" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" fill="rgba(28,27,23,0.55)">NOTAR</text>
        <defs>
          <pattern id="sk-frei" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#c8321e" strokeWidth="1" opacity="0.35" />
          </pattern>
          <pattern id="sk-res" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#3d5a6e" strokeWidth="1" opacity="0.4" />
            <line x1="3.5" y1="0" x2="3.5" y2="7" stroke="#3d5a6e" strokeWidth="1" opacity="0.4" transform="rotate(90 3.5 3.5)" />
          </pattern>
        </defs>
      </svg>
      <p className="diagram-cap">Statuslogik · drei Zustände, ein Klick im Dashboard — überall sofort sichtbar</p>
    </div>
  );
}
