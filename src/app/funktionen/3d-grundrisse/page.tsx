import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, Rotate3d, Orbit, Layers, SunMedium, MapPin, Film,
  SlidersHorizontal, Heart, Smartphone, QrCode, Monitor, Compass,
  Building2, Link2, Presentation, FileText, Upload, MousePointerClick,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Interaktiver 3D Wohnungsfinder & 360°-Rundgänge im Browser",
  description:
    "Interaktiver Wohnungsfinder für Bauträger: drehbare 360°-Projektansicht, Etagen-Grundrisse, virtuelle Rundgänge und Sonnenstand-Simulation, ohne App im Browser.",
  path: "/funktionen/3d-grundrisse",
});

const faqs = [
  {
    q: "Welche Unterlagen brauchen Sie von uns?",
    a: "Für die drehbare Projektbühne benötigen wir die fotorealistischen 3D-Renderings Ihres Visualisierungsstudios – idealerweise als Rundum-Bildsequenz, alternativ einzelne Ansichten oder Fotos. Für die Etagen-Grundrisse reichen die Grundrisspläne je Geschoss sowie Ihre Wohnungsliste mit Flächen, Zimmern und Preisen. Den Rest – Hotspots, Pins, Verknüpfungen, Statusfarben – richten wir ein.",
  },
  {
    q: "Funktioniert der Wohnungsfinder auch ohne 3D-Renderings?",
    a: "Die drehbare Projektbühne lebt von Renderings oder Fotos – ohne Bildmaterial gibt es keine Rundumansicht. Etagen-Grundrisse, Wohnungsdetails, Filter, Merkliste und die komplette Lead-Strecke funktionieren aber auch ohne 3D-Visualisierung. Viele Projekte starten mit interaktiven Grundrissen und rüsten die 360°-Ansicht nach, sobald die Renderings vorliegen.",
  },
  {
    q: "Wie lange dauert die Einrichtung eines Projekts?",
    a: "Sobald Renderings, Grundrisse und Wohnungsdaten vorliegen, ist ein typisches Neubauprojekt in wenigen Tagen online. Die Dauer hängt vor allem von der Anzahl der Einheiten und Ansichten ab. Spätere Änderungen – neue Preise, Statuswechsel, zusätzliche Bilder – pflegen Sie selbst in Minuten ein. Ein bestehendes Projekt lässt sich außerdem duplizieren, wenn der nächste Bauabschnitt ansteht – dann geht es noch schneller.",
  },
  {
    q: "Läuft der Wohnungsfinder auch auf dem Smartphone?",
    a: "Ja. Der interaktive Wohnungsfinder läuft in jedem modernen Browser – ohne App-Download. Alle Bilder werden automatisch in Desktop- und Mobil-Varianten optimiert, und als PWA lässt sich das Projekt sogar auf dem Homescreen installieren. Auch 360°-Rundgänge und die drehbare Projektansicht funktionieren per Touch-Geste.",
  },
  {
    q: "Können wir mehrere Ansichten desselben Projekts zeigen?",
    a: "Ja. Ein Projekt kann mehrere Bereiche und Ansichten enthalten – zum Beispiel Vogelperspektive, Straßenseite und Innenhof oder einzelne Bauabschnitte. Interessenten wechseln per Klick zwischen den Ansichten; die anklickbaren Wohnungsflächen bleiben in jeder Perspektive erhalten.",
  },
  {
    q: "Wie aktuell sind Verfügbarkeit und Preise im Wohnungsfinder?",
    a: "Statusänderungen wirken sofort: Setzen Sie eine Einheit auf reserviert oder verkauft, ändert sich die Farbcodierung in der Projektansicht und in den Etagen-Grundrissen in Echtzeit. Preise, Aktionspreise und „Preis auf Anfrage“ pflegen Sie zentral – ohne Agentur, ohne Wartezeit.",
  },
  {
    q: "Woher stammen die 360°-Panoramen für die Rundgänge?",
    a: "Für Bestands- oder Musterwohnungen aus 360°-Fotografie, für unfertige Neubauten aus gerenderten Panoramen Ihres Visualisierungsstudios. Wir verbinden die Standpunkte zu einem begehbaren virtuellen Rundgang und setzen klickbare Punkte, die zu Wohnungen, Galerien oder anderen Standpunkten führen.",
  },
  {
    q: "Lässt sich der Wohnungsfinder in unsere Website einbinden?",
    a: "Ja – per Link, als Einbindung in Ihre Projektwebsite oder auf eigener Domain mit Ihrem Branding und Ihrer Akzentfarbe. Zusätzlich gibt es QR-Codes je Projekt und je Wohnung, etwa für den Bauzaun oder das Exposé, sowie ein einbettbares Verfügbarkeits-Widget, das auf Ihrer Website live anzeigt, wie viele Einheiten noch frei sind. Details dazu finden Sie unter Integrationen.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WohnungsfinderPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbs([
          { name: "Start", path: "/" },
          { name: "Funktionen", path: "/features" },
          { name: "Wohnungsfinder & 360°", path: "/funktionen/3d-grundrisse" },
        ])}
      />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="page-hero bg-soft border-b">
        <div className="container text-center max-w-3xl mx-auto animate-up">
          <span className="eyebrow">Wohnungsfinder & 360°</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
            Von der Außenansicht bis ins kleinste Zimmer.
          </h1>
          <p className="lead">
            Ihre 3D-Renderings werden zur interaktiven Bühne: Interessenten
            drehen das Projekt, klicken Wohnungen direkt in der Fassade an und
            gehen per 360°-Rundgang schon durch Räume, die noch gar nicht
            gebaut sind. Der interaktive Wohnungsfinder macht aus Plänen ein
            Kauferlebnis – lange vor dem Richtfest.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link href="/kontakt" className="btn btn-primary btn-lg">Demo anfragen <ArrowRight size={20} /></Link>
            <a href={site.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Live ausprobieren</a>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="device-frame" style={{ height: "clamp(400px, 50vw, 640px)" }}>
            <div className="device-frame-inner" style={{ height: "100%" }}>
              <iframe
                src={site.demoUrl}
                title="Live-Demo: interaktiver 3D Wohnungsfinder von flatplan.de"
                style={{ width: "100%", height: "100%", border: "none" }}
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center mt-4" style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
            Echte Live-Demo – drehen, zoomen und Wohnungen anklicken.
          </p>
        </div>
      </section>

      {/* WAS IST EIN WOHNUNGSFINDER */}
      <section className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "780px" }}>
          <span className="eyebrow">Grundlagen</span>
          <h2>Was ist ein interaktiver Wohnungsfinder?</h2>
          <p>
            Ein interaktiver Wohnungsfinder – oft auch 3D Wohnungsfinder oder
            Wohnungsnavigator genannt – ist die digitale Verkaufsplattform für
            ein Neubauprojekt: eine drehbare Projektansicht, in der jede
            Wohnung direkt in der Fassade anklickbar ist, verbunden mit
            interaktiven Grundrissen, Wohnungsdetails, Preisen und
            Live-Verfügbarkeit. Statt sich durch Exposé-PDFs und Preislisten
            zu arbeiten, erkunden Interessenten das Projekt so, wie sie es
            von modernen Konfiguratoren kennen: drehen, zoomen, klicken,
            vergleichen.
          </p>
          <p>
            flatplan verbindet dafür fünf Ebenen zu einem Erlebnis: die
            drehbare 360°-Projektansicht aus fotorealistischen Renderings,
            Etagen-Grundrisse mit anklickbaren Wohnungsflächen, das
            Wohnungsdetail mit allen Medien und Fakten, echte virtuelle
            Rundgänge durch 360°-Panoramen sowie die Sonnenstand-Simulation
            für Licht und Ausrichtung. Alles läuft im Browser – auf der
            Projektwebsite, am Messestand, auf dem Smartphone. Wie der
            Wohnungsfinder daraus qualifizierte Anfragen macht, lesen Sie
            unter <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>;
            hier geht es um das Erlebnis selbst.
          </p>
        </div>
      </section>

      {/* DREHBARE BÜHNE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Rotate3d size={26} /></span>
            <h2>Die drehbare Projektbühne: Ihr Neubau in der 360°-Ansicht</h2>
            <p className="lead mb-6">
              Herzstück des 3D Wohnungsfinders ist die drehbare Projektansicht:
              Aus den fotorealistischen 3D-Renderings Ihres
              Visualisierungsstudios entsteht eine flüssige Rundum-Sequenz, die
              sich wie ein Modell auf dem Drehteller anfühlt – nur eben im
              Browser, auf jedem Gerät.
            </p>
            <p className="mb-8">
              Jede Wohnung liegt als präzise gezeichneter Polygon-Hotspot
              direkt auf der Fassade. Ein Klick öffnet das Wohnungsdetail, die
              Farbcodierung zeigt auf einen Blick, welche Einheiten frei,
              demnächst verfügbar, reserviert, verkauft oder vermietet sind.
              Info-Punkte markieren Eingänge, Tiefgarage oder Spielplatz –
              alles dort, wo es hingehört: im Bild.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Drehbare, zoombare Rundumansicht aus vorgerenderten 3D-Bildsequenzen</li>
              <li><Check size={20} /> Anklickbare Wohnungsflächen (Polygon-Hotspots) und Info-Punkte</li>
              <li><Check size={20} /> Mehrere Bereiche und Ansichten: Vogelperspektive, Innenhof, Straßenseite</li>
              <li><Check size={20} /> Statusfarben je Einheit: frei, demnächst, reserviert, verkauft, vermietet</li>
              <li><Check size={20} /> Stufenloser Zoom bis ins Detail der Fassade</li>
            </ul>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem", background: "#fff" }}>
              <img
                src="/showcase-3d.png"
                alt="Drehbare 360°-Projektansicht im interaktiven Wohnungsfinder mit anklickbaren Wohnungsflächen und Statusfarben"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section bg-soft border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">So entsteht Ihr Wohnungsfinder</span>
            <h2>Vom Rendering zur interaktiven Projektansicht</h2>
            <p className="lead">
              Sie müssen nichts neu produzieren: Wir arbeiten mit den
              Visualisierungen, die für Ihr Neubauprojekt ohnehin entstehen –
              und machen daraus einen Wohnungsnavigator.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-wrapper"><Upload size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>1. Sie liefern die Renderings</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Ihr Visualisierungsstudio rendert das Projekt wie gewohnt –
                idealerweise als Rundum-Sequenz aus mehreren Blickwinkeln.
                Dazu kommen Grundrisspläne je Etage und Ihre Wohnungsliste mit
                Flächen, Zimmern und Preisen.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><MousePointerClick size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>2. Wir machen sie interaktiv</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                flatplan verwandelt die Bildsequenz in eine flüssig drehbare
                Projektbühne, zeichnet jede Wohnungsfläche als klickbaren
                Hotspot ein und verknüpft Grundrisse, Fotos, Videos und
                360°-Panoramen zu einem Erlebnis.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><Monitor size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>3. Sie präsentieren & pflegen</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Ihr Neubauprojekt geht online – auf eigener Domain, in Ihrem
                Branding. Status, Preise und Inhalte pflegen Sie danach selbst,
                Änderungen sind sofort für alle Interessenten sichtbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETAGEN-GRUNDRISSE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div style={{ order: 1 }}>
            <div className="device-frame" style={{ padding: "1.5rem", color: "white" }}>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem", marginBottom: "1rem", fontWeight: 600 }}>
                Wohnung 2.04 · 2. Obergeschoss
              </div>
              {[
                { label: "Wohnfläche", value: "87,5 m² (Balkon zu 50 % angerechnet)" },
                { label: "Räume", value: "3 Zimmer · Bad · Abstellraum · Südbalkon" },
                { label: "Ausrichtung", value: "Südwest · Fertigstellung Q3/2027" },
                { label: "Energie", value: "Energieausweis: Bedarf, 32 kWh/(m²·a), A+" },
                { label: "Status", value: "FREI · 489.000 €" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "1rem", marginBottom: "0.875rem", fontSize: "0.875rem" }}>
                  <div style={{ width: "110px", flexShrink: 0, color: "rgba(255,255,255,0.5)" }}>{row.label}</div>
                  <div style={{ fontWeight: 600 }}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ order: 2 }}>
            <span className="icon-wrapper"><Layers size={26} /></span>
            <h2>Etagen-Grundrisse: interaktive Grundrisse statt PDF-Stapel</h2>
            <p className="lead mb-6">
              Jede Etage bekommt ihren eigenen Etagen-Grundriss mit Pins und
              anklickbaren Wohnungsflächen. Interessenten blättern durch die
              Geschosse, sehen sofort, was frei ist – und landen mit einem
              Klick im vollständigen Wohnungsdetail.
            </p>
            <p className="mb-8">
              Dort wartet alles, was sonst über Exposé, Preisliste und
              Baubeschreibung verstreut ist: die Raumliste mit Einzelflächen,
              die Wohnfläche inklusive Anrechnungsfaktor für Balkon oder
              Terrasse, Ausstattungsmerkmale mit Icons, Energieausweis-Daten,
              Ausrichtung und das geplante Fertigstellungsquartal.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Grundrissbild je Etage mit Pins und klickbaren Flächen</li>
              <li><Check size={20} /> Raumliste mit Flächen, Balkon-Anrechnung transparent ausgewiesen</li>
              <li><Check size={20} /> Ausstattungsmerkmale mit Icons, Energieausweis-Daten</li>
              <li><Check size={20} /> Ausrichtung und Fertigstellungsquartal je Wohnung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WOHNUNGSDETAIL & MEDIEN */}
      <section className="section bg-soft border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Wohnungsdetail</span>
            <h2>Jede Einheit erzählt ihre eigene Geschichte</h2>
            <p className="lead">
              Das Wohnungsdetail bündelt alle Medien und Fakten einer Einheit –
              vom Grundriss bis zum Video. So wird aus einer Nummer auf der
              Preisliste ein Zuhause, das man sich vorstellen kann.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-wrapper"><Film size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Bilder, Videos & Varianten</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Bilder-Karussell mit Renderings und Fotos, Grundriss-Varianten
                (z. B. mit und ohne Möblierung) und Wohnungs-Videos von
                YouTube, Vimeo oder als eigene Datei – alles direkt im Viewer,
                ohne Medienbruch.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><FileText size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Dokumente & Preise</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Exposés und weitere Dokumente je Wohnung, Preise inklusive
                Aktionspreis und auf Wunsch diskret als „Preis auf Anfrage“.
                Preisänderungen sind sofort live – ohne neue PDF-Runde durch
                alle Kanäle.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><Building2 size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Zubuchbare Einheiten</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Stellplatz, Tiefgaragenplatz oder Keller lassen sich als
                zubuchbare Einheiten mit eigenem Preis an Wohnungen koppeln.
                Interessenten sehen das Gesamtpaket – Sie verkaufen es gleich
                mit.
              </p>
            </div>
          </div>
          <p className="text-center mt-12 max-w-3xl mx-auto" style={{ color: "var(--text-tertiary)" }}>
            Der Weg dorthin ist immer kurz: aus der drehbaren Projektansicht
            per Klick auf die Fassade, aus dem Etagen-Grundriss per Klick auf
            die Fläche, aus dem 360°-Rundgang über einen POI. Egal, wo ein
            Interessent einsteigt – das Wohnungsdetail ist der Ort, an dem aus
            Neugier eine konkrete Anfrage wird.
          </p>
        </div>
      </section>

      {/* 360°-RUNDGÄNGE */}
      <section className="section bg-white border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="icon-wrapper"><Orbit size={26} /></span>
            <h2>360°-Rundgänge: der virtuelle Rundgang durch ungebaute Räume</h2>
            <p className="lead mb-6">
              Echte WebGL-Panoramen statt starrer Bildstrecken: Interessenten
              stehen mitten im künftigen Wohnzimmer, schauen sich um und
              wechseln über verbundene Standpunkte in Küche, Bad oder auf die
              Dachterrasse – als wäre die virtuelle Besichtigung schon eine
              echte.
            </p>
            <p className="mb-8">
              Klickbare Punkte im Panorama führen weiter: zum Wohnungsdetail,
              in eine Bildergalerie oder zum nächsten Standpunkt. Und weil
              flatplan die Blickrichtungen auswertet, wissen Sie hinterher
              sogar, wohin Ihre Interessenten im Rundgang tatsächlich geschaut
              haben – ein Detail, das kein Exposé der Welt liefert.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Echte 360°-Panoramen auf WebGL-Basis, flüssig auf jedem Gerät</li>
              <li><Check size={20} /> Verbundene Standpunkte: von Raum zu Raum navigieren</li>
              <li><Check size={20} /> Klickbare POIs mit Sprung zu Wohnung, Galerie oder anderem Standpunkt</li>
              <li><Check size={20} /> Blickrichtungs-Statistik: sehen, was Interessenten wirklich ansehen</li>
            </ul>
            <Link href="/use-cases/virtuelle-besichtigung" className="btn btn-outline mt-8">
              Use Case: virtuelle Besichtigung <ArrowRight size={18} />
            </Link>
          </div>
          <div>
            <div className="card-soft" style={{ padding: "1rem", background: "#fff" }}>
              <img
                src="/showcase-3d.png"
                alt="Virtueller 360°-Rundgang mit verbundenen Standpunkten im 3D Wohnungsfinder"
                style={{ width: "100%", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SONNENSTAND */}
      <section className="section bg-soft border-b">
        <div className="container grid grid-2 items-center">
          <div style={{ order: 1 }}>
            <div className="card-soft" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", fontWeight: 600 }}>
                <SunMedium size={22} /> Sonnenstand · 17:30 Uhr
              </div>
              <div style={{ height: "8px", borderRadius: "999px", background: "linear-gradient(90deg, var(--border, #e5e5e5) 0%, var(--border, #e5e5e5) 72%, transparent 72%)", border: "1px solid var(--border, #e5e5e5)", position: "relative", marginBottom: "1.25rem" }}>
                <div style={{ position: "absolute", left: "72%", top: "50%", transform: "translate(-50%, -50%)", width: "22px", height: "22px", borderRadius: "50%", background: "#fff", border: "2px solid currentColor", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SunMedium size={12} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
                <span>Sonnenaufgang</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}><Compass size={14} /> Nordwinkel 12°</span>
                <span>Sonnenuntergang</span>
              </div>
            </div>
          </div>
          <div style={{ order: 2 }}>
            <span className="icon-wrapper"><SunMedium size={26} /></span>
            <h2>Sonnenstand-Simulation: Licht als Kaufargument</h2>
            <p className="lead mb-6">
              „Wie lange hat der Balkon abends Sonne?“ ist eine der häufigsten
              Fragen im Verkaufsgespräch – und mit der Sonnenstand-Simulation
              beantwortet sie sich selbst.
            </p>
            <p className="mb-8">
              Ein Schieberegler bewegt die Sonne über den Tagesverlauf, Licht
              und Schatten wandern über Fassade, Balkone und Terrassen. Der
              Kompass mit exakt hinterlegtem Nordwinkel zeigt jederzeit die
              Ausrichtung. So verkauft sich die Südwest-Terrasse mit
              Abendsonne fast von selbst – und die vermeintlich dunklere
              Einheit gewinnt, wenn der Regler zeigt, dass sie den ganzen
              Vormittag Licht hat.
            </p>
            <ul className="check-list">
              <li><Check size={20} /> Schieberegler für den kompletten Tagesverlauf</li>
              <li><Check size={20} /> Realistischer Licht- und Schattenwurf auf dem Projekt</li>
              <li><Check size={20} /> Kompass mit hinterlegtem Nordwinkel für exakte Ausrichtung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LAGE + FILTER */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Finden & entscheiden</span>
            <h2>Lage verstehen, Wunschwohnung filtern, Favoriten merken</h2>
            <p className="lead">
              Eine Wohnung kauft niemand ohne ihre Umgebung – und bei 40 oder
              120 Einheiten braucht es einen schnellen Weg zur passenden
              Auswahl. Deshalb gehören Lagekontext, Filter und Merkliste fest
              zum Wohnungsfinder: Interessenten grenzen ein, vergleichen und
              merken sich ihre Favoriten – im selben Erlebnis, ohne Umweg über
              Portale oder PDF-Listen.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-wrapper"><MapPin size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Lage & Umgebung</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Umgebungs-POIs zeigen Supermarkt, Kita, S-Bahn und Ärzte mit
                Entfernung und Gehminuten. Dazu kommen Anfahrtsinformationen
                und eine optionale Karte – die Mikrolage wird Teil der
                Immobilien-Visualisierung statt einer Fußnote im Exposé.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><SlidersHorizontal size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Filter & Suche</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Zimmerzahl, Wohnfläche, Preis und Etage sind als Filter
                eingebaut. Eigene Custom-Field-Filter ergänzen, was Ihr Projekt
                besonders macht – etwa „barrierefrei“, „Gartenanteil“ oder
                „Penthouse“. So findet jeder Interessent seine Auswahl in
                Sekunden.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><Heart size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Merkliste & Favoriten</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Interessenten markieren Favoriten und sammeln sie auf einer
                Merkliste – die perfekte Grundlage für eine qualifizierte
                Anfrage. Wie daraus Leads für Ihr CRM werden, zeigt die{" "}
                <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-PROSE */}
      <section className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "780px" }}>
          <span className="eyebrow">Hintergrund</span>
          <h2>Digitale Bauträger-Vermarktung: Warum ein Wohnungsnavigator mehr verkauft als jedes PDF</h2>
          <p>
            Wer heute ein Neubauprojekt online präsentieren will, konkurriert
            nicht mehr mit dem Bauträger von nebenan, sondern mit den
            Erwartungen, die Interessenten aus jedem guten Online-Shop
            mitbringen: sofort sehen, sofort vergleichen, sofort filtern. Ein
            statisches Exposé-PDF und eine Excel-Preisliste können das nicht
            leisten – ein interaktiver Wohnungsfinder schon.
          </p>
          <h3>Vorverkauf ab dem ersten Rendering</h3>
          <p>
            Der größte Hebel der digitalen Bauträger-Vermarktung liegt in der
            Zeit vor dem ersten Spatenstich. Genau dann, wenn es außer
            Visualisierungen noch nichts zu zeigen gibt, entscheidet sich, wie
            schnell die ersten Einheiten reserviert werden. Die drehbare
            360°-Ansicht macht aus denselben Renderings, die sonst nur das
            Exposé-Cover schmücken, ein begehbares Verkaufsinstrument: Jede
            Wohnung ist in der Fassade anklickbar, jeder Etagen-Grundriss
            führt zum vollständigen Wohnungsdetail, jeder virtuelle Rundgang
            ersetzt eine Besichtigung, die es physisch noch gar nicht geben
            kann.
          </p>
          <h3>Selbstqualifizierung statt Rückfragen-Schleife</h3>
          <p>
            Interessenten, die im Wohnungsnavigator gefiltert, verglichen,
            den Sonnenstand geprüft und eine Merkliste angelegt haben, stellen
            im Erstgespräch andere Fragen: nicht mehr „Was gibt es denn?“,
            sondern „Ist die 2.04 noch frei?“. Diese Selbstqualifizierung
            entlastet den Vertrieb spürbar – und die Anfragen, die ankommen,
            sind konkreter und ernsthafter als typische Portal-Kontakte. In
            Kombination mit der{" "}
            <Link href="/funktionen/lead-generierung">Lead-Engine</Link> und den{" "}
            <Link href="/funktionen/integrationen">CRM-Integrationen</Link>{" "}
            entsteht so eine durchgängige Strecke vom ersten Klick bis zur
            Reservierung.
          </p>
          <h3>Ein Kanal, alle Berührungspunkte</h3>
          <p>
            Ob auf der Projektwebsite, per QR-Code am Bauzaun, auf dem
            Messestand oder als Link aus dem Immobilienportal: Der
            Wohnungsfinder ist derselbe – immer aktuell, immer mit korrekten
            Statusfarben und Preisen. Für{" "}
            <Link href="/branchen/bautraeger">Bauträger</Link> bedeutet das:
            eine Datenpflege, ein Erlebnis, keine veralteten PDFs im Umlauf.
            Was das kostet, zeigt transparent die{" "}
            <Link href="/preise">Preisübersicht</Link>.
          </p>
          <h3>Sichtbar bleiben bis zur Schlüsselübergabe</h3>
          <p>
            Immobilien-Visualisierung endet nicht mit dem Vertriebsstart. Über
            die Baufortschritt-Anzeige dokumentieren Sie je Haus mit Foto und
            Notiz, wie das Projekt wächst – Rohbau, Richtfest, Fassade. Das
            hält Reservierungskunden bei der Stange und gibt Unentschlossenen
            einen Grund, wiederzukommen. Ankündigungs-Banner mit Zeitraum
            kündigen Vertriebsstart, Musterwohnungs-Eröffnung oder
            Preisaktionen direkt im Wohnungsfinder an, und Musterwohnung-Badges
            markieren die Einheiten, die man schon real besichtigen kann. So
            bleibt die 360°-Ansicht über die gesamte Projektlaufzeit ein
            lebendiger Vertriebskanal statt einer statischen Broschüre – vom
            ersten Rendering bis zur letzten verkauften Einheit.
          </p>
        </div>
      </section>

      {/* TECHNIK-FAKTEN */}
      <section className="section bg-dark border-b">
        <div className="container grid grid-2 items-center">
          <div>
            <span className="eyebrow">Technik</span>
            <h2>Gebaut für den Ernstfall Vertrieb</h2>
            <p className="lead">
              Kein Plugin, kein Download, keine Wartezeit: Der interaktive
              Wohnungsfinder läuft in jedem modernen Browser – auf dem
              Messestand genauso wie auf dem Smartphone des Interessenten am
              Bauzaun.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Auch international funktioniert das Konzept: Der mehrsprachige
              Viewer schaltet die komplette Oberfläche etwa auf Englisch um –
              wichtig für Kapitalanleger und Käufer aus dem Ausland. Und weil
              jedes Projekt seine eigene Domain, sein eigenes Branding und
              seine eigene Akzentfarbe bekommt, wirkt der Wohnungsfinder wie
              ein Teil Ihres Auftritts, nicht wie ein fremdes Tool.
            </p>
          </div>
          <ul className="check-list" style={{ marginBottom: 0 }}>
            <li style={{ color: "#fff" }}><Check size={20} /> Browserbasiert, ohne App-Download – sofort startklar</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Als PWA auf dem Homescreen installierbar</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Mehrsprachiger Viewer mit Sprachumschalter</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Eigene Domain je Projekt, eigenes Branding, eigene Akzentfarbe</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Bilder automatisch in Desktop- und Mobil-Varianten optimiert</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Optionales Wasserzeichen über allen Bildern</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Baufortschritt je Haus mit Foto und Notiz</li>
            <li style={{ color: "#fff" }}><Check size={20} /> Ankündigungs-Banner mit Zeitraum, z. B. für den Vertriebsstart</li>
          </ul>
        </div>
      </section>

      {/* EINSATZSZENARIEN */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Einsatzszenarien</span>
            <h2>Ein Wohnungsfinder, vier Bühnen</h2>
            <p className="lead">
              Dieselbe interaktive Projektansicht bespielt alle Kanäle Ihres
              Neubauvertriebs – ohne doppelte Pflege.
            </p>
          </div>
          <div className="grid grid-4">
            <div className="card">
              <div className="icon-wrapper"><Monitor size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Website-Einbindung</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Der Wohnungsfinder wird Teil Ihrer Projektwebsite oder läuft
                auf eigener Domain in Ihrem Branding – als zentrales Erlebnis
                statt „Download Exposé“-Button.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><QrCode size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>QR-Code am Bauzaun</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Wer vor der Baustelle steht, scannt und steht Sekunden später
                in der 360°-Ansicht – mit QR-Codes je Projekt und sogar je
                Wohnung.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><Presentation size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Messe & Beratung</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Auf dem Messestand oder im Beratungsgespräch drehen Sie das
                Projekt live, zeigen Sonnenstand und Rundgänge – deutlich
                eindrucksvoller als jede Mappe.
              </p>
            </div>
            <div className="card">
              <div className="icon-wrapper"><Link2 size={24} /></div>
              <h3 style={{ fontSize: "1.125rem" }}>Portal-Verlinkung</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem" }}>
                Aus Immobilienportalen und Anzeigen verlinken Sie direkt in
                den Wohnungsfinder – und verwandeln anonyme Portal-Klicks in
                qualifizierte Projekt-Interessenten.
              </p>
            </div>
          </div>
          <p className="text-center mt-12" style={{ color: "var(--text-tertiary)" }}>
            Mehr für Ihr Gewerk:{" "}
            <Link href="/branchen/bautraeger">flatplan für Bauträger</Link> ·{" "}
            <Link href="/funktionen/integrationen">CRM & Integrationen</Link> ·{" "}
            <Link href="/preise">Preise & Pakete</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft border-b">
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="text-center mb-12">
            <span className="eyebrow">FAQ</span>
            <h2>Häufige Fragen zum interaktiven Wohnungsfinder</h2>
          </div>
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2>Ihr Projekt als interaktive Bühne?</h2>
          <p className="lead mb-8">
            Schicken Sie uns Ihre Renderings – wir zeigen Ihnen in der
            Live-Demo, wie Ihr Vorhaben als interaktiver Wohnungsfinder
            aussieht: drehbar, klickbar, mit Grundrissen, Rundgängen und
            Sonnenstand.
          </p>
          <Link href="/kontakt" className="btn btn-primary btn-lg">
            Kostenlose Demo anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
