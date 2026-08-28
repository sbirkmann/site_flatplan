type Status = "frei" | "reserviert" | "verkauft";

const COLS: [number, number][] = [
  [88, 266],
  [306, 488],
  [530, 710],
  [752, 928],
];

const ROWS: [number, number][] = [
  [198, 392],
  [428, 614],
  [652, 834],
  [872, 1052],
  [1098, 1318],
];

/** 4.OG … EG — four bays, five Geschosse. */
const FLOORS = ["4", "3", "2", "1", "EG"] as const;

const STATUS: Status[][] = [
  ["verkauft", "frei", "reserviert", "frei"],
  ["frei", "verkauft", "frei", "reserviert"],
  ["reserviert", "frei", "frei", "verkauft"],
  ["frei", "reserviert", "verkauft", "frei"],
  ["verkauft", "frei", "frei", "reserviert"],
];

const META: Record<string, { area: string; note: string }> = {
  "4.01": { area: "41,2 m²", note: "Studio Hof" },
  "4.02": { area: "112,8 m²", note: "Penthouse Süd" },
  "4.03": { area: "68,0 m²", note: "2 Zimmer" },
  "4.04": { area: "54,5 m²", note: "Dachloggia" },
  "3.01": { area: "78,4 m²", note: "3 Zimmer Hof" },
  "3.02": { area: "61,0 m²", note: "Loggia" },
  "3.03": { area: "84,1 m²", note: "Süd" },
  "3.04": { area: "72,6 m²", note: "2 Zimmer" },
  "2.01": { area: "91,0 m²", note: "4 Zimmer Hof" },
  "2.02": { area: "76,4 m²", note: "3 Zimmer" },
  "2.03": { area: "84,3 m²", note: "Süd-Loggia" },
  "2.04": { area: "112,8 m²", note: "Garten" },
  "1.01": { area: "64,0 m²", note: "2 Zimmer" },
  "1.02": { area: "58,2 m²", note: "Loggia" },
  "1.03": { area: "96,5 m²", note: "Hof" },
  "1.04": { area: "54,2 m²", note: "2 Zimmer" },
  "EG.01": { area: "88,0 m²", note: "Garten" },
  "EG.02": { area: "71,3 m²", note: "Terrasse" },
  "EG.03": { area: "79,8 m²", note: "Süd" },
  "EG.04": { area: "62,4 m²", note: "barrierearm" },
};

function unitId(floor: string, bay: number) {
  return `${floor}.${String(bay).padStart(2, "0")}`;
}

export default function FacadeFinder({
  selected = "2.03",
  showLegend = true,
}: {
  selected?: string;
  showLegend?: boolean;
}) {
  let selRow = 2;
  let selCol = 2;
  FLOORS.forEach((floor, r) => {
    for (let c = 0; c < 4; c++) {
      if (unitId(floor, c + 1) === selected) {
        selRow = r;
        selCol = c;
      }
    }
  });
  const [sx1, sx2] = COLS[selCol];
  const [sy1] = ROWS[selRow];
  const status = STATUS[selRow][selCol];
  const meta = META[selected] ?? { area: "84,3 m²", note: "Süd-Loggia" };

  return (
    <figure className="facade-finder">
      <img
        src="/photos/neubau-fassade-sued.jpg"
        alt="Südfassade eines Münchner Neubaus, Wohnungen als Flächen eingezeichnet"
        width={1024}
        height={1536}
      />
      <svg viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {ROWS.map((row, r) =>
          COLS.map((col, c) => {
            const id = unitId(FLOORS[r], c + 1);
            const [x1, x2] = col;
            const [y1, y2] = row;
            return (
              <rect
                key={id}
                className="unit-poly"
                data-status={STATUS[r][c]}
                data-selected={id === selected ? "true" : "false"}
                x={x1}
                y={y1}
                width={x2 - x1}
                height={y2 - y1}
              />
            );
          }),
        )}
      </svg>
      <figcaption
        className="unit-callout"
        style={{
          left: `${((sx1 + sx2) / 2 / 1024) * 100}%`,
          top: `${(sy1 / 1536) * 100}%`,
        }}
      >
        <strong>WE {selected}</strong>
        <span>
          {meta.area} · {meta.note} · {status}
        </span>
      </figcaption>
      {showLegend && (
        <div className="facade-legend" aria-hidden>
          <span data-status="frei">frei</span>
          <span data-status="reserviert">reserviert</span>
          <span data-status="verkauft">verkauft</span>
        </div>
      )}
    </figure>
  );
}
