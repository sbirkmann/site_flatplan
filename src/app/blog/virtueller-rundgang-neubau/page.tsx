import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("virtueller-rundgang-neubau")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>
          Das Grundproblem des Neubauvertriebs lässt sich in einem Satz
          fassen: Sie verkaufen Räume, die niemand betreten kann.
        </strong>{" "}
        Beim Bestandsobjekt entscheidet die Besichtigung – der Moment, in dem
        der Interessent im Wohnzimmer steht und sich sein Leben darin
        vorstellt. Im Neubau gibt es diesen Moment über Monate nicht. Genau
        diese Lücke schließen virtuelle 360°-Rundgänge: Sie machen ein
        Projekt begehbar, das erst als Rendering existiert. In diesem Artikel
        klären wir, was ein Panorama-Rundgang technisch ist, wann er sich
        lohnt, mit welchen Kosten Sie rechnen sollten und wie er den Vertrieb
        konkret entlastet.
      </p>

      <h2>Was ein 360°-Rundgang ist – und was nicht</h2>
      <p>
        Begriffe wie „virtueller Rundgang“, „3D-Tour“ und „digitaler Zwilling“
        werden im Marketing munter vermischt. Für eine seriöse Entscheidung
        lohnt die Abgrenzung:
      </p>
      <ul>
        <li>
          <strong>360°-Panorama-Rundgang:</strong> Der Interessent steht an
          festen Standpunkten – etwa Wohnzimmer, Küche, Loggia – und blickt
          sich frei um; die Standpunkte sind miteinander verbunden, sodass
          ein Raum-zu-Raum-Gang entsteht. Im Neubau werden die Panoramen aus
          fotorealistischen 3D-Renderings erzeugt. Das ist die Technik, um
          die es hier geht: flatplan.de rendert solche Rundgänge direkt im
          Browser per WebGL, ohne App und ohne Plugin.
        </li>
        <li>
          <strong>Frei begehbares 3D-Modell:</strong> Eine durchgehend
          navigierbare 3D-Welt wie im Computerspiel. Aufwendig in Erstellung
          und Pflege, auf schwächeren Geräten oft zäh – und für die
          Kaufentscheidung selten besser als hochwertige Panoramen, weil
          Fotorealismus dort schwerer zu erreichen ist.
        </li>
        <li>
          <strong>Video-Rundflug:</strong> Emotional stark, aber passiv – der
          Zuschauer kann weder anhalten noch den Blick dorthin lenken, wo
          seine Fragen sind.
        </li>
      </ul>
      <p>
        Der Panorama-Rundgang trifft für den Neubauvertrieb den Sweet Spot:
        fotorealistische Qualität, aktive Steuerung durch den Interessenten,
        flüssig auf jedem Smartphone. Die wichtigsten Fachbegriffe rund um
        Viewer und Rundgänge haben wir im{" "}
        <Link href="/wissen/glossar">Glossar</Link> zusammengefasst.
      </p>

      <h2>Warum Rundgänge im Neubau mehr leisten als im Bestand</h2>
      <p>
        Im Bestand ist der virtuelle Rundgang ein Vorfilter für die echte
        Besichtigung. Im Neubau ist er die Besichtigung – jedenfalls für die
        lange Phase zwischen Vermarktungsstart und Fertigstellung. Das
        verändert seine Rolle grundlegend:
      </p>
      <ul>
        <li>
          <strong>Er beantwortet die Vorstellungsfrage:</strong> Grundrisse
          lesen ist eine Fähigkeit, die viele Käufer schlicht nicht haben.
          Ein Rundgang übersetzt „86 m², 3 Zimmer“ in ein räumliches
          Erlebnis – Deckenhöhe, Blickachsen, Proportionen.
        </li>
        <li>
          <strong>Er ist rund um die Uhr verfügbar:</strong> Die{" "}
          <Link href="/use-cases/virtuelle-besichtigung">
            virtuelle Besichtigung
          </Link>{" "}
          findet abends auf dem Sofa statt, gern mehrfach und gemeinsam mit
          dem Partner – Situationen, die kein Vertriebskalender abdeckt.
        </li>
        <li>
          <strong>Er skaliert:</strong> Ob 10 oder 1.000 Menschen den
          Rundgang machen, kostet Ihren Vertrieb gleich viel: nichts.
        </li>
      </ul>
      <p>
        Am stärksten wirkt der Rundgang nicht isoliert, sondern eingebettet:
        Im interaktiven Wohnungsfinder gelangt der Interessent von der
        drehbaren Projektansicht über{" "}
        <Link href="/funktionen/3d-grundrisse">
          Etagen-Grundrisse
        </Link>{" "}
        in den Rundgang der konkreten Einheit – und kann dort per
        Sonnenstand-Simulation sogar prüfen, wann die Abendsonne auf die
        Loggia fällt. Erlebnis, Fakten und Anfrage bleiben in einem Fluss.
      </p>

      <h2>Wann sich Rundgänge lohnen – und für welche Einheiten</h2>
      <p>
        Die pragmatische Antwort: fast immer, aber selten für alles. Kaum
        ein Projekt braucht einen Rundgang für jede der 40 Einheiten – denn
        Wohnungen wiederholen sich in Typen. Bewährt hat sich eine
        Staffelung:
      </p>
      <h3>Die Musterwohnungs-Logik, digital gedacht</h3>
      <p>
        So wie ein Bauträger eine physische Musterwohnung einrichtet, wählen
        Sie je Wohnungstyp eine repräsentative Einheit für den Rundgang aus –
        im Viewer lässt sich diese mit einem Musterwohnung-Badge
        kennzeichnen. Bei einem Projekt mit fünf Grundrisstypen reichen also
        fünf Rundgänge, um praktisch jedem Interessenten „seine“ Wohnung
        begehbar zu machen. Zusätzliche Kandidaten für eigene Rundgänge sind
        die Einheiten mit dem höchsten Erklärungsbedarf oder dem höchsten
        Preis: das Penthouse, die Maisonette, die Gartenwohnung mit
        Sondergrundriss.
      </p>
      <h3>Beispielrechnung: Budget gegen Vertriebszeit</h3>
      <p>
        Eine Modellrechnung (keine Kundenstudie): Hochwertige
        Innenraum-Panoramen aus Renderings kosten je nach Visualisierer und
        Detailgrad typischerweise einen drei- bis vierstelligen Betrag pro
        Wohnung – für fünf Mustertypen also grob 5.000 bis 15.000 Euro.
        Dagegen steht die Vertriebszeit: Wenn ein Verkäufer pro
        Erkläritermin 90 Minuten investiert (Anfahrt, Gespräch, Nachbereitung)
        und der Rundgang nur 30 dieser Termine durch qualifizierte
        Zweitgespräche ersetzt, sind das 45 eingesparte Stunden – und die
        verbleibenden Termine finden mit Interessenten statt, die das Objekt
        bereits kennen und konkrete Fragen mitbringen. Bei sechsstelligen
        Objektpreisen amortisiert sich das Budget realistischerweise mit dem
        ersten Verkauf, der ohne Rundgang nicht oder später zustande gekommen
        wäre.
      </p>

      <h2>Wie der Rundgang den Vertrieb konkret entlastet</h2>
      <p>
        Der Effekt zeigt sich an drei Stellen im Vertriebsprozess:
      </p>
      <ul>
        <li>
          <strong>Vor dem Erstkontakt:</strong> Interessenten qualifizieren
          sich selbst. Wer nach dem Rundgang anfragt, hat Schnitt und
          Raumgefühl bereits geprüft – die Anfrage bezieht sich auf eine
          konkrete Einheit, nicht auf „Informationen zum Projekt“. Das ist
          der Kern besserer{" "}
          <Link href="/funktionen/lead-generierung">Lead-Qualität</Link>.
        </li>
        <li>
          <strong>Im Gespräch:</strong> Der Rundgang wird zum gemeinsamen
          Medium. Verkäufer und Interessent bewegen sich – auch im
          Videocall – durch dieselben Räume; Einwände („wirkt das Bad nicht
          klein?“) lassen sich am Bild klären statt am Papier.
        </li>
        <li>
          <strong>Nach dem Gespräch:</strong> Der Interessent nimmt den Link
          mit nach Hause und überzeugt dort die Mitentscheider. Über die
          Merkliste mit Magic-Link kehrt er ohne Hürde zu seinen Favoriten
          zurück – und das Analytics zeigt Ihnen die Verweildauer im
          Rundgang als Interesse-Signal.
        </li>
      </ul>
      <p>
        Für <Link href="/branchen/immobilienmakler">Immobilienmakler</Link>,
        die Neubauprojekte im Vertriebsauftrag vermarkten, kommt ein Aspekt
        hinzu: Der Rundgang macht die Vermarktungsleistung gegenüber dem
        Bauträger sichtbar – messbar in Rundgang-Verweildauer und
        Wohnungs-Öffnungen statt nur in Anfragezahlen.
      </p>

      <h2>Qualität entscheidet: Worauf Sie bei Panoramen achten sollten</h2>
      <p>
        Ein schlechter Rundgang schadet mehr, als gar keiner: Wo das
        Rendering lieblos wirkt, schließt der Interessent auf das Gebäude.
        Vier Kriterien trennen brauchbar von überzeugend:
      </p>
      <ul>
        <li>
          <strong>Realistische Möblierung und Materialien</strong> – keine
          sterilen Leerräume, aber auch keine Ausstattung, die es im
          Kaufumfang nicht gibt. Ehrlichkeit zahlt auf den Notartermin ein.
        </li>
        <li>
          <strong>Standpunkte mit Logik:</strong> Der Gang durch die Wohnung
          sollte der natürlichen Bewegung folgen – Diele, Wohnraum, Küche,
          Loggia. Verbundene Standpunkte, die Orientierung stiften, statt
          zusammenhangloser Einzelbilder.
        </li>
        <li>
          <strong>Korrektes Licht:</strong> Die Lichtstimmung sollte zur
          realen Ausrichtung passen – eine Nordwohnung mit Abendsonnen-Flut
          fällt spätestens bei der Sonnenstand-Simulation im selben Viewer
          auf.
        </li>
        <li>
          <strong>Mobile Performance:</strong> Deutlich mehr als die Hälfte
          der Besucher kommt über das Smartphone. WebGL-Panoramen im Browser
          ohne App-Zwang sind hier der entscheidende Unterschied zwischen
          „angesehen“ und „abgebrochen“.
        </li>
      </ul>

      <h2>Vom Rundgang zur Anfrage: die Kette schließen</h2>
      <p>
        Ein Rundgang, der auf einer Insel lebt – etwa als nackter Link im
        Portal-Exposé – verschenkt seinen Wert. Erst die Einbettung in den
        Vermarktungsauftritt macht ihn zum Vertriebswerkzeug: Aus dem
        Rundgang heraus führt der Weg direkt zu Preis, Verfügbarkeitsstatus
        und Anfrageformular mit Besichtigungswunsch; das Exposé-PDF steht
        hinter dem Exposé-Gate als nächster Vertiefungsschritt bereit. So
        wird aus dem „Wow“-Moment im Wohnzimmer-Panorama in derselben
        Sitzung eine dokumentierte Anfrage – der Kern des{" "}
        <Link href="/use-cases/neubauvertrieb">
          digitalen Neubauvertriebs
        </Link>
        . Wie Sie die so entstandenen Anfragen anschließend priorisieren,
        beschreibt der Artikel über{" "}
        <Link href="/blog/lead-qualitaet-verdoppeln">
          Lead-Qualität im Neubauvertrieb
        </Link>
        .
      </p>

      <h3>Mehr als Wohnräume: was sich sonst noch zeigen lässt</h3>
      <p>
        Rundgänge müssen nicht an der Wohnungstür enden. Auch
        Gemeinschaftsflächen entscheiden mit: das Foyer, der begrünte
        Innenhof, die Dachterrasse, die Tiefgarageneinfahrt. Gerade bei
        Projekten mit Quartiersanspruch beantworten solche Standpunkte die
        Frage „Wie fühlt sich das Ankommen an?“ – eine Frage, die kein
        Grundriss beantwortet. Ergänzend lassen sich im Viewer Bildergalerien
        und Foliensätze mit Video einbinden, sodass Rundgang, Renderings und
        Bewegtbild ein geschlossenes Erlebnis ergeben statt verstreuter
        Einzelmedien. Ein mehrsprachiger Viewer erweitert die Reichweite
        zusätzlich: Internationale Interessenten machen denselben Rundgang
        in ihrer Sprache – ohne zusätzliche Produktionskosten, denn die
        Panoramen selbst sprechen ohnehin keine.
      </p>

      <h2>Fazit</h2>
      <p>
        Virtuelle Rundgänge lösen das strukturelle Handicap des Neubaus: das
        Fehlen der Besichtigung. Richtig eingesetzt – als Panorama-Touren je
        Wohnungstyp, fotorealistisch gerendert, eingebettet in einen
        Wohnungsfinder mit Grundrissen, Sonnenstand und Anfrageprozess –
        verwandeln sie passive Prospektleser in Interessenten, die „ihre“
        Wohnung schon durchschritten haben. Die Investition ist überschaubar,
        wenn Sie in Mustertypen statt Einzelwohnungen denken; der Ertrag
        zeigt sich in besseren Erstgesprächen, kürzeren Entscheidungswegen
        und einem Vertrieb, der seine Zeit bei den richtigen Interessenten
        verbringt.
      </p>
    </BlogArticle>
  );
}
