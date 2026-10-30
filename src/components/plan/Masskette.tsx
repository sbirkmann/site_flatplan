/** Maßkette: grafischer Rhythmus zwischen Sektionen, wie auf dem Plan. */
export default function Masskette({
  segs = ["0", "2,50", "5,00", "7,50", "10,00"],
}: {
  segs?: string[];
}) {
  return (
    <div className="masskette" aria-hidden="true">
      {segs.map((n, i) => (
        <div key={i} className="mk-seg">
          <span className="mk-num">{n}</span>
        </div>
      ))}
    </div>
  );
}
