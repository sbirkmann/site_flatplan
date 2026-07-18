import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("digitaler-bauzaun-qr-marketing")!;

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
          Ihre beste Werbefläche haben Sie bereits bezahlt – sie steht am
          Grundstück.
        </strong>{" "}
        Der Bauzaun eines Neubauprojekts erreicht Monat für Monat Tausende
        Menschen, und zwar genau die richtigen: Anwohner, Pendler,
        Spaziergänger – Menschen mit nachweisbarem Bezug zum Standort. Kein
        Portal, keine Anzeige liefert eine derart präzise lokale Zielgruppe
        zum Preis von null zusätzlichen Mediakosten. Und trotzdem verpufft
        diese Reichweite bei den meisten Projekten: ein Rendering, ein
        Projektname, eine Telefonnummer, die niemand im Vorbeigehen wählt.
        Der digitale Bauzaun schließt diese Lücke – mit QR-Codes, die aus
        einem neugierigen Blick einen messbaren Besuch im Wohnungsfinder
        machen.
      </p>

      <h2>Warum die Telefonnummer am Bauzaun nicht funktioniert</h2>
      <p>
        Der klassische Bauzaun stellt dem Passanten eine unzumutbare Aufgabe:
        Er soll sich im Vorbeigehen eine Telefonnummer oder Domain merken,
        später daran denken und dann aktiv werden – und zwar in einem Moment,
        in dem sein Interesse längst abgekühlt ist. Die Konversionskette hat
        drei Bruchstellen: merken, erinnern, handeln.
      </p>
      <p>
        Ein QR-Code verkürzt diese Kette auf eine einzige Geste. Kamera
        drauf, tippen – und der Passant steht mitten im Projekt: drehbare
        360°-Ansicht, anklickbare Wohnungen, Preise, Verfügbarkeit. Der
        entscheidende Punkt ist der Moment: Das Interesse wird genau dann
        bedient, wenn es entsteht – vor dem Grundstück, mit dem Gebäude
        (oder der Baugrube) vor Augen. Seit jedes Smartphone QR-Codes nativ
        mit der Kamera liest, ist die Hürde praktisch verschwunden.
      </p>

      <h2>Was hinter dem Code liegt, entscheidet über alles</h2>
      <p>
        Der häufigste Fehler beim QR-Marketing ist nicht der Code – es ist
        das Ziel dahinter. Wer Passanten auf eine generische
        Unternehmens-Homepage oder ein PDF schickt, verliert sie nach
        Sekunden. Die Erwartung des Scannenden ist konkret: „Zeig mir dieses
        Gebäude hier.“ Genau das sollte die Zielseite leisten:
      </p>
      <ul>
        <li>
          <strong>Sofort das Projekt:</strong> Die drehbare Projektansicht
          mit anklickbaren Einheiten, mobil optimiert – der Scan passiert zu
          nahezu 100 Prozent auf dem Smartphone.
        </li>
        <li>
          <strong>Antworten auf die Passanten-Fragen:</strong> Was kostet
          das? Was ist noch frei? Wie sieht der Blick aus dem dritten
          Obergeschoss aus? Farbcodierte Status, Preise und{" "}
          <Link href="/funktionen/3d-grundrisse">
            interaktive Grundrisse
          </Link>{" "}
          beantworten das ohne Formular und ohne Wartezeit.
        </li>
        <li>
          <strong>Ein Weg zum Kontakt:</strong> Merkliste, Anfrage mit
          Besichtigungswunsch oder das Exposé-PDF hinter dem Exposé-Gate –
          der spontane Besuch bekommt eine Fortsetzung.
        </li>
      </ul>
      <p>
        flatplan.de erzeugt die passenden QR-Codes direkt aus dem Projekt –
        als SVG, also verlustfrei skalierbar vom A4-Aushang bis zur
        zehn Meter breiten Bauzaunplane. Und zwar auf zwei Ebenen: ein Code
        je Projekt und zusätzlich ein Code je Wohnung.
      </p>

      <h3>Der Wohnungs-QR-Code: Präzision statt Gießkanne</h3>
      <p>
        Die Codes je Einheit eröffnen eine Spielart, die klassische
        Bauzaunwerbung nicht kennt: ortsbezogene Präzision. Ein Banner am
        Westgiebel – „Diese Wohnung mit Abendsonne ist noch frei“ – verlinkt
        direkt auf genau diese Einheit mit Grundriss, Preis und
        Sonnenstand-Simulation. Am Musterwohnungsfenster führt der Code in
        den 360°-Rundgang des Wohnungstyps. Auf dem Schild an der Tiefgarage
        wirbt der Code für die zubuchbaren Stellplätze. Jeder Code holt den
        Betrachter exakt dort ab, wo er gerade steht – im Wortsinn.
      </p>

      <h2>Messbarkeit: aus Laufkundschaft wird ein Vertriebskanal</h2>
      <p>
        Das stärkste Argument für den digitalen Bauzaun ist nicht die
        Bequemlichkeit – es ist die Messbarkeit. Klassische Bauzaunwerbung
        ist ein Blindflug: Niemand weiß, ob sie wirkt. Mit
        UTM-Kampagnen-Kurzlinks hinter den QR-Codes ändert sich das
        grundlegend. Jeder Code trägt seine eigene Kampagnenkennung mit
        Klickzähler; das cookiefreie Analytics des Wohnungsfinders führt die
        Kette fort – ganz ohne Cookie-Banner: Besuche, Wohnungs-Öffnungen,
        Favoriten, Anfragen je Quelle.
      </p>
      <p>
        Damit lassen sich Fragen beantworten, die vorher niemand stellen
        konnte: Bringt die Zaunseite zur Hauptstraße mehr Scans als die zum
        Park? Konvertieren Bauzaun-Besucher besser als Portal-Besucher?
        Lohnt sich die teure Plane am Gerüst? Wie Sie dieses Kampagnen-Setup
        über alle Kanäle aufziehen, beschreibt der Artikel{" "}
        <Link href="/blog/neubau-kampagnen-utm-tracking">
          Neubau-Kampagnen messbar machen
        </Link>
        ; warum das Tracking ohne Einwilligungsbanner auskommt, erklärt der
        Beitrag zum{" "}
        <Link href="/blog/dsgvo-immobilienmarketing">
          DSGVO-konformen Immobilienmarketing
        </Link>
        .
      </p>

      <h3>Beispielrechnung: Was der Bauzaun leisten kann</h3>
      <p>
        Eine Modellbetrachtung, keine Kundenstudie: An einer innerstädtischen
        Lage passieren täglich 2.000 Menschen den Bauzaun. Scannt nur jeder
        Fünfhundertste, sind das 4 Scans am Tag – rund 120 qualifizierte,
        lokal verankerte Projektbesuche im Monat. Konvertieren davon
        3 Prozent zu einer Anfrage oder einem Exposé-Download mit
        E-Mail-Adresse, entstehen 3 bis 4 Leads monatlich – aus einer
        Fläche, die ohnehin dasteht. Zum Vergleich: Dieselben Leads über
        bezahlte Anzeigen kosten je nach Markt schnell 50 bis 150 Euro pro
        Stück. Über eine zweijährige Bauzeit summiert sich der Bauzaun so zu
        einem Kanal, der mit Portalen ernsthaft konkurriert – bei
        Grenzkosten nahe null.
      </p>

      <h2>Vom Scan zum Lead: die Kette zu Ende denken</h2>
      <p>
        Der Scan ist erst der Anfang. Damit aus dem spontanen Besucher ein
        Kontakt wird, muss die{" "}
        <Link href="/funktionen/lead-generierung">Lead-Mechanik</Link>{" "}
        greifen – und zwar mit Rücksicht auf die Situation: Wer im
        Vorbeigehen scannt, füllt kein siebenzeiliges Formular aus. Bewährt
        haben sich die niedrigschwelligen Wege:
      </p>
      <ul>
        <li>
          <strong>Merkliste per Magic-Link:</strong> Favoriten sichern und
          abends auf dem Sofa weiterschauen – die natürliche Fortsetzung des
          Spontanbesuchs.
        </li>
        <li>
          <strong>Exposé-Gate:</strong> Das{" "}
          <Link href="/funktionen/pdf-expose">Exposé-PDF</Link> gegen
          E-Mail-Adresse – ein fairer Tausch, der aus dem anonymen Scan einen
          dokumentierten Lead macht.
        </li>
        <li>
          <strong>Suchagent und Preis-Alarm:</strong> Ist die Wunschwohnung
          reserviert oder (noch) zu teuer, hält die automatische
          Benachrichtigung den Kontakt warm – mit Double-Opt-in und
          DSGVO-Einwilligung sauber dokumentiert.
        </li>
        <li>
          <strong>Besichtigungsslots:</strong> Wer schon einmal vor dem
          Gebäude steht, bucht den Vor-Ort-Termin besonders bereitwillig
          gleich mit.
        </li>
      </ul>
      <p>
        Für <Link href="/branchen/bautraeger">Bauträger</Link> mit längerer
        Bauzeit lohnt außerdem der Blick auf den Baufortschritt im Viewer:
        Der Bauzaun-Besucher von heute ist oft der Rückkehrer von übermorgen
        – wenn die Projektseite lebt und den Fortschritt je Haus zeigt,
        bleibt das Projekt über Monate im Relevant Set. Die als PWA
        installierbare Projektseite landet dabei auf Wunsch direkt auf dem
        Homescreen des Interessenten.
      </p>

      <h3>Über den Zaun hinaus: dieselbe Mechanik an jedem Touchpoint</h3>
      <p>
        Was am Bauzaun funktioniert, funktioniert überall dort, wo Ihr
        Projekt physisch sichtbar ist: auf dem Bauschild an der
        Zufahrtsstraße, im Schaufenster des Vertriebsbüros, auf dem
        Aufsteller beim Besichtigungstermin, in der Zeitungsanzeige und auf
        der Rückseite des gedruckten Kurzexposés. Weil jeder Code seinen
        eigenen Kampagnen-Kurzlink trägt, bleibt trotz identischer Zielseite
        messbar, welcher Touchpoint welchen Beitrag leistet. So entsteht mit
        minimalem Aufwand ein durchgängiges Offline-zu-Online-System – mit
        dem Bauzaun als reichweitenstärkstem Baustein.
      </p>

      <h2>Praktische Umsetzung: sechs Regeln für den Bauzaun-Code</h2>
      <ul>
        <li>
          <strong>Größe und Höhe:</strong> Der Code muss aus der natürlichen
          Distanz scanbar sein – Faustregel: Code-Kantenlänge mindestens ein
          Zehntel der Scan-Entfernung, montiert auf Augenhöhe, nicht drei
          Meter über dem Gehweg.
        </li>
        <li>
          <strong>Kontrast und Ruhe:</strong> Dunkler Code auf hellem,
          ruhigem Grund. Kein Code quer über dem Rendering.
        </li>
        <li>
          <strong>Eine klare Handlungsaufforderung:</strong> „Alle Wohnungen,
          Preise und Rundgänge – jetzt scannen“ schlägt jedes unkommentierte
          Quadrat.
        </li>
        <li>
          <strong>SVG statt Pixelbild:</strong> Für den Großformatdruck
          zählt verlustfreie Skalierung – deshalb kommen die Codes aus
          flatplan.de als SVG.
        </li>
        <li>
          <strong>Je Standort ein eigener Kurzlink:</strong> Nur getrennte
          Kampagnen-Links machen Zaunseiten vergleichbar.
        </li>
        <li>
          <strong>Vor dem Druck testen:</strong> Einmal mit drei
          verschiedenen Smartphones aus realer Distanz scannen – der
          günstigste Qualitätscheck der gesamten Kampagne.
        </li>
      </ul>

      <h2>Fazit</h2>
      <p>
        Der Bauzaun ist die einzige Werbefläche, die exakt vor Ihrem Produkt
        steht und deren Publikum sich selbst nach Standortbezug vorsortiert.
        QR-Codes je Projekt und je Wohnung verwandeln diese stille Reserve
        in einen messbaren Kanal des{" "}
        <Link href="/use-cases/neubauvertrieb">Neubauvertriebs</Link>: Der
        Scan führt in ein mobiles Projekterlebnis, Kampagnen-Kurzlinks machen
        jede Zaunseite auswertbar, und Merkliste, Exposé-Gate und Suchagent
        fangen den spontanen Besuch als dauerhaften Kontakt ein. Das Beste
        daran: Anders als jede Anzeige ist diese Fläche schon bezahlt – es
        wäre fahrlässig, sie weiter nur mit einer Telefonnummer zu
        beschriften.
      </p>
      <p>
        Der Einstieg ist an einem Nachmittag erledigt: QR-Codes mit eigenem
        Kampagnen-Kurzlink je Zaunseite erzeugen, Plakatmotiv mit klarer
        Handlungsaufforderung gestalten, aus realer Distanz testen, drucken.
        Schon nach den ersten Wochen zeigt der Klickzähler, ob die Fläche
        arbeitet – und liefert damit das Argument, das klassische
        Bauzaunwerbung nie liefern konnte: einen Beleg.
      </p>
    </BlogArticle>
  );
}
