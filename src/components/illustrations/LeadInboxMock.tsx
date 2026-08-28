const leads = [
  { unit: "WE 2.04", title: "Merkliste, drei Wohnungen", meta: "vor 4 Min. · onOffice" },
  { unit: "WE 1.11", title: "Exposé gelesen", meta: "vor 16 Min. · Double-Opt-in" },
  { unit: "3 Zi. Süd", title: "Suchagent", meta: "vor 38 Min. · Preis-Alarm" },
  { unit: "WE 4.02", title: "Besichtigung Samstag, 11 Uhr", meta: "vor 1 Std. · iCal" },
];

export default function LeadInboxMock() {
  return (
    <div className="lead-sheet">
      <div className="lead-sheet-head">
        <span>Anfragen, 28. Aug.</span>
        <span>vier neu</span>
      </div>
      {leads.map((lead) => (
        <div key={lead.title} className="lead-sheet-row">
          <span className="lead-unit">{lead.unit}</span>
          <span className="lead-title">{lead.title}</span>
          <span className="lead-meta">{lead.meta}</span>
        </div>
      ))}
    </div>
  );
}
