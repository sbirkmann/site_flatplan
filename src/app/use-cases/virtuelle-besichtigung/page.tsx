import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Rotate3d, Sun, MapPin, Languages, Smartphone,
  CalendarCheck, Compass, Eye,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Virtuelle Besichtigung 24/7 – Neubauprojekte online erleben",
  description:
    "Virtuelle Besichtigung 24/7: drehbare Projektansicht, 360°-Rundgänge, Sonnenstand-Simulation und Umgebungs-POIs – mehrsprachig, als PWA, ohne App-Download.",
  path: "/use-cases/virtuelle-besichtigung",
});

export default function VirtuelleBesichtigungPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Use Cases", path: "/use-cases/virtuelle-besichtigung" },
          { name: "Virtuelle Besichtigung", path: "/use-cases/virtuelle-besichtigung" },
        ])}
      />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Use Case</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Virtuelle Besichtigung. 24 Stunden. 7 Tage.
          </h1>
          <p className="lead">
            Die meisten Immobiliensuchen finden abends auf dem Sofa statt –
            wenn kein Vertriebsbüro geöffnet hat. Mit flatplan.de besichtigen
            Interessenten Ihr Neubauprojekt, wann immer sie wollen: drehbare
            Projektansicht, echte 360°-Rundgänge und Sonnenstand-Simulation,
            direkt im Browser und ohne App-Download.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Demo anfragen <ArrowRight size={20} />
            </Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
              Live-Demo öffnen
            </a>
          </div>
        </div>
      </section>

      {/* PROJEKT ERLEBEN */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Rotate3d size={26} /></span>
            <h2>Vom Draufschauen zum Drin-Stehen.</h2>
            <p className="lead mb-8">
              Die virtuelle Besichtigung beginnt bei der Vogelperspektive:
              Interessenten drehen das gesamte Projekt um 360°, klicken
              Wohnungen direkt in der Fassade an und wechseln in den
              Etagen-Grundriss. Von dort geht es in echte 360°-Panorama-
              Rundgänge mit verbundenen Standpunkten – Raum für Raum, wie bei
              einem Rundgang durch die Musterwohnung.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Drehbare, zoombare Projektansicht aus fotorealistischen 3D-Renderings</li>
              <li><Check size={20} /> 360°-Rundgänge (WebGL) mit verbundenen Standpunkten</li>
              <li><Check size={20} /> Bildergalerien, Wohnungs-Videos und Foliensätze je Einheit</li>
            </ul>
            <Link href="/funktionen/3d-grundrisse" className="btn btn-outline">
              Projektansicht im Detail <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/showcase-detail.png"
                alt="Virtuelle Besichtigung: 360°-Rundgang durch eine Neubauwohnung im Browser"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEHR ALS EIN RUNDGANG */}
      <section className="section bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Mehr als ein Rundgang</span>
          <h2>Fragen beantworten, bevor sie gestellt werden</h2>
          <p className="lead">
            Eine gute Besichtigung beantwortet mehr als „Wie sieht es aus?“.
            Der Wohnungsfinder beantwortet auch: Wann habe ich Sonne? Was ist
            in der Nähe? Verstehe ich das auch auf Englisch?
          </p>
        </div>
        <div className="container grid grid-3">
          <div className="card">
            <span className="icon-wrapper"><Sun size={26} /></span>
            <h3>Sonnenstand-Simulation</h3>
            <p>
              Per Schieberegler wandert die Sonne über das Projekt – mit
              Kompass zur Orientierung. Interessenten prüfen selbst, wann der
              Südwest-Balkon Abendsonne hat. Eine Frage weniger im
              Verkaufsgespräch.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><MapPin size={26} /></span>
            <h3>Umgebung mit Gehminuten</h3>
            <p>
              Kita, Bäcker, S-Bahn: Umgebungs-POIs zeigen die Lagequalität mit
              Gehminuten direkt im Projekt – optional mit Karte. Die Lage
              verkauft mit, ohne dass jemand sie erklären muss.
            </p>
          </div>
          <div className="card">
            <span className="icon-wrapper"><Languages size={26} /></span>
            <h3>Mehrsprachig & als PWA</h3>
            <p>
              Der Viewer spricht mehrere Sprachen, darunter Englisch – ideal
              für internationale Käufer und Kapitalanleger. Als PWA lässt er
              sich wie eine App auf dem Homescreen installieren, ganz ohne
              App-Store.
            </p>
          </div>
        </div>
      </section>

      {/* FAKTEN-BAND */}
      <section className="bg-dark" style={{ padding: "5rem 0" }}>
        <div className="container grid grid-4 text-center">
          {[
            { icon: <Eye size={28} />, big: "24/7", label: "Immer geöffnet", sub: "Besichtigung ohne Termin, Anfahrt und Bauhelm" },
            { icon: <Smartphone size={28} />, big: "0 Apps", label: "Läuft im Browser", sub: "Smartphone, Tablet, Desktop – sofort startklar" },
            { icon: <Compass size={28} />, big: "360°", label: "Rundum erlebbar", sub: "Projektansicht drehen, Rundgänge begehen" },
            { icon: <Languages size={28} />, big: "EN+", label: "Mehrsprachig", sub: "Auch internationale Interessenten besichtigen selbst" },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ color: "var(--accent-on-dark)", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>{m.icon}</div>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{m.big}</div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff" }}>{m.label}</div>
              <p style={{ marginTop: "0.375rem", fontSize: "0.9rem", marginBottom: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRÜCKE ZUR ECHTEN BESICHTIGUNG */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <div className="card-soft" style={{ padding: "1rem" }}>
              <img
                src="/flatfinder_features_expose.png"
                alt="Besichtigungsslots mit iCal-Export: von der virtuellen zur echten Besichtigung"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div>
            <span className="icon-wrapper"><CalendarCheck size={26} /></span>
            <h2>Die Brücke zur echten Besichtigung.</h2>
            <p className="lead mb-8">
              Die virtuelle Besichtigung ersetzt den Vor-Ort-Termin nicht –
              sie sorgt dafür, dass er sich lohnt. Wer nach dem Rundgang noch
              persönlich kommen möchte, bucht direkt einen Besichtigungsslot:
              Der Termin wandert per iCal in beide Kalender, und Ihr Vertrieb
              trifft auf Interessenten, die das Projekt bereits kennen.
            </p>
            <ul className="check-list mb-8">
              <li><Check size={20} /> Besichtigungsslots mit iCal-Export für Interessent und Vertrieb</li>
              <li><Check size={20} /> Rückruf- und Besichtigungswunsch direkt im Anfrageformular</li>
              <li><Check size={20} /> Merkliste in der Anfrage: Ihr Team bereitet den Termin gezielt vor</li>
              <li><Check size={20} /> Anfragen laufen ins Anfragen-Board oder nativ ins CRM</li>
            </ul>
            <div className="flex gap-4 flex-wrap">
              <Link href="/funktionen/lead-generierung" className="btn btn-outline">
                Lead-Generierung <ArrowRight size={18} />
              </Link>
              <Link href="/use-cases/neubauvertrieb" className="btn btn-outline">
                Use Case Neubauvertrieb <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Öffnen Sie Ihr Projekt – rund um die Uhr.
          </h2>
          <p className="lead mb-8">
            Erleben Sie in einer kostenlosen Live-Demo, wie sich Ihr
            Neubauprojekt virtuell besichtigen lässt – vom ersten Rendering
            bis zum gebuchten Vor-Ort-Termin.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Jetzt Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
