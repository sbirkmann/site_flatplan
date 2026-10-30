/** Platzhalter für echte Produkt-Screenshots, die später geliefert werden. */
export default function ShotSlot({
  label,
  note = "Screenshot folgt",
  tall = false,
}: {
  label: string;
  note?: string;
  tall?: boolean;
}) {
  return (
    <div className="shot-slot" style={tall ? { minHeight: "26rem" } : undefined}>
      <span className="shot-tag">{label}</span>
      <span className="shot-note">{note}</span>
    </div>
  );
}
