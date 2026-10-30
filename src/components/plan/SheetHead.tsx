export default function SheetHead({
  blatt,
  titel,
}: {
  blatt: string;
  titel: string;
}) {
  return (
    <div className="sheet-head" aria-hidden="true">
      <span>flatplan.de — {titel}</span>
      <span className="sheet-blatt">Blatt {blatt}</span>
    </div>
  );
}
