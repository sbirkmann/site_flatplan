const items = [
  "WE 4.02  frei  ·  112,8 m² Penthouse",
  "WE 3.12  frei  ·  84,3 m² Süd",
  "WE 3.11  reserviert  ·  61,0 m² Loggia",
  "WE 2.08  verkauft  ·  Hof",
  "WE 2.04  frei  ·  4 Zimmer Garten",
  "WE 1.11  reserviert  ·  Exposé gelesen",
  "WE 1.03  verkauft  ·  EG",
  "WE EG.02  frei  ·  Terrasse 71,3 m²",
];

export default function StatusMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="status-marquee" aria-hidden>
      <div className="status-marquee-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="measure" style={{ whiteSpace: "nowrap" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
