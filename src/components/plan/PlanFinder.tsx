"use client";
import { useState } from "react";

type Status = "frei" | "reserviert" | "verkauft";

const FLOORS = ["4", "3", "2", "1", "EG"] as const;

const STATUS: Status[][] = [
  ["verkauft", "frei", "reserviert", "frei"],
  ["frei", "verkauft", "frei", "reserviert"],
  ["reserviert", "frei", "frei", "verkauft"],
  ["frei", "reserviert", "verkauft", "frei"],
  ["verkauft", "frei", "frei", "reserviert"],
];

const META: Record<string, { rooms: string; area: string; price: string; note: string }> = {
  "4.01": { rooms: "1 Zimmer", area: "41,2 m²", price: "389.000 €", note: "Studio Hof" },
  "4.02": { rooms: "4 Zimmer", area: "112,8 m²", price: "910.000 €", note: "Penthouse Süd" },
  "4.03": { rooms: "2 Zimmer", area: "68,0 m²", price: "512.000 €", note: "West" },
  "4.04": { rooms: "2 Zimmer", area: "54,5 m²", price: "438.000 €", note: "Dachloggia" },
  "3.01": { rooms: "3 Zimmer", area: "78,4 m²", price: "612.000 €", note: "Hof" },
  "3.02": { rooms: "2 Zimmer", area: "61,0 m²", price: "498.000 €", note: "Loggia" },
  "3.03": { rooms: "3 Zimmer", area: "84,1 m²", price: "655.000 €", note: "Süd" },
  "3.04": { rooms: "2 Zimmer", area: "72,6 m²", price: "549.000 €", note: "West" },
  "2.01": { rooms: "4 Zimmer", area: "91,0 m²", price: "701.000 €", note: "Hof" },
  "2.02": { rooms: "3 Zimmer", area: "76,4 m²", price: "598.000 €", note: "Loggia" },
  "2.03": { rooms: "3 Zimmer", area: "84,3 m²", price: "689.000 €", note: "Süd-Loggia" },
  "2.04": { rooms: "4 Zimmer", area: "112,8 m²", price: "864.000 €", note: "Gartenseite" },
  "1.01": { rooms: "2 Zimmer", area: "64,0 m²", price: "492.000 €", note: "Hof" },
  "1.02": { rooms: "2 Zimmer", area: "58,2 m²", price: "451.000 €", note: "Loggia" },
  "1.03": { rooms: "3 Zimmer", area: "96,5 m²", price: "732.000 €", note: "Hof" },
  "1.04": { rooms: "2 Zimmer", area: "54,2 m²", price: "419.000 €", note: "West" },
  "EG.01": { rooms: "3 Zimmer", area: "88,0 m²", price: "—", note: "Garten" },
  "EG.02": { rooms: "2 Zimmer", area: "71,3 m²", price: "569.000 €", note: "Terrasse" },
  "EG.03": { rooms: "3 Zimmer", area: "79,8 m²", price: "628.000 €", note: "Süd" },
  "EG.04": { rooms: "2 Zimmer", area: "62,4 m²", price: "486.000 €", note: "barrierearm" },
};

function unitId(floor: string, bay: number) {
  return `${floor}.${String(bay).padStart(2, "0")}`;
}

/** Interaktives Planfeld: die Fassade als klickbare Parzellenzeichnung. */
export default function PlanFinder({
  initial = "2.03",
  caption = "Haus am Park · Beispielprojekt · 20 WE",
}: {
  initial?: string;
  caption?: string;
}) {
  const [selected, setSelected] = useState(initial);
  const selFloor = FLOORS.findIndex((f) => selected.startsWith(f === "EG" ? "EG" : `${f}.`));
  const selStatus = selFloor >= 0 ? STATUS[selFloor][parseInt(selected.slice(-2), 10) - 1] : "frei";
  const meta = META[selected] ?? { rooms: "—", area: "—", price: "—", note: "" };

  return (
    <div className="plan-field">
      <div className="plan-field-frame">
        <div className="plan-facade" role="group" aria-label="Wohnungen auf der Fassade wählen">
          {FLOORS.map((floor, r) =>
            [1, 2, 3, 4].map((bay, c) => {
              const id = unitId(floor, bay);
              const status = STATUS[r][c];
              return (
                <button
                  key={id}
                  type="button"
                  className="plan-unit"
                  data-status={status}
                  data-selected={id === selected ? "true" : "false"}
                  onClick={() => setSelected(id)}
                  aria-label={`Wohnung ${id}, ${META[id].rooms}, ${status}`}
                  aria-pressed={id === selected}
                >
                  <span className="unit-hatch" />
                  <span className="unit-id">{id}</span>
                </button>
              );
            }),
          )}
        </div>
        <div className="plan-callout" aria-live="polite">
          <strong>WE {selected}</strong>
          <span>{meta.rooms}</span>
          <span>{meta.area}</span>
          <span>{meta.price}</span>
          <span>{meta.note}</span>
          <span className="unit-chip" data-status={selStatus}>{selStatus}</span>
        </div>
        <div className="plan-field-legend">
          <div className="plan-legend">
            <span className="unit-chip" data-status="frei">frei</span>
            <span className="unit-chip" data-status="reserviert">reserviert</span>
            <span className="unit-chip" data-status="verkauft">verkauft</span>
          </div>
          <span className="mono">{caption}</span>
        </div>
      </div>
    </div>
  );
}
