import Link from "next/link";
import {
  Rotate3d, Orbit, Layers, SunMedium, Users, Workflow, BarChart3, ShieldCheck,
} from "lucide-react";

const features = [
  { icon: <Rotate3d size={26} />, title: "Interaktiver Wohnungsfinder", desc: "Drehbare Projektansicht mit anklickbaren Wohnungen, direkt im Browser." },
  { icon: <Layers size={26} />, title: "Etagen & Grundrisse", desc: "Grundriss-Navigation mit Pins, Flächen und Status je Einheit." },
  { icon: <Orbit size={26} />, title: "360°-Rundgänge", desc: "Begehbare Panorama-Touren mit verknüpften Standpunkten." },
  { icon: <SunMedium size={26} />, title: "Sonnenstand-Simulation", desc: "Licht und Schatten je Tageszeit – inklusive Kompass." },
  { icon: <Users size={26} />, title: "Lead-Engine", desc: "Anfragen, Exposé-Gate, Suchagenten, Preis-Alarme und Warteliste." },
  { icon: <Workflow size={26} />, title: "CRM & Schnittstellen", desc: "onOffice, Propstack, Flowfact, OpenImmo-Export, Webhooks und API." },
  { icon: <BarChart3 size={26} />, title: "Cookiefreies Analytics", desc: "Klicks, Favoriten und Conversion je Kampagne – ohne Cookie-Banner." },
  { icon: <ShieldCheck size={26} />, title: "DSGVO & Sicherheit", desc: "Double-Opt-in, Aufbewahrungsfristen, 2FA und Rollen-Rechte." },
];

export default function CoreFeaturesGrid({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="section bg-white border-b">
      {showTitle && (
        <div className="container text-center mb-12">
          <span className="eyebrow">Die Plattform</span>
          <h2>Acht Bausteine. Ein Vertriebssystem.</h2>
          <p className="lead max-w-2xl mx-auto">
            Vom ersten Rendering bis zur letzten verkauften Einheit – alles in
            einer Plattform für Projektentwickler, Bauträger und Makler.
          </p>
        </div>
      )}
      <div className="container grid grid-4">
        {features.map((f, i) => (
          <div key={f.title} className={`card animate-up delay-${Math.min(i + 1, 4)}00`} style={{ padding: "1.75rem 1.5rem" }}>
            <div className="icon-wrapper">{f.icon}</div>
            <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{f.title}</h3>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/features" className="btn btn-outline btn-lg">Alle Funktionen im Detail</Link>
      </div>
    </section>
  );
}
