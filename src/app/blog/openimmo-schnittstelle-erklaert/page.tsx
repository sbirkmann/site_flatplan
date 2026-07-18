import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("openimmo-schnittstelle-erklaert")!;

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
          Wer Immobiliendaten zwischen zwei Systemen bewegt, stolpert früher
          oder später über vier Silben: OpenImmo.
        </strong>{" "}
        Das Format ist der De-facto-Standard für den Datenaustausch in der
        deutschsprachigen Immobilienbranche – und gleichzeitig für viele
        Bauträger und Makler eine Blackbox, die irgendwo zwischen CRM,
        Portal und IT-Dienstleister lebt. Dieser Artikel erklärt, was
        OpenImmo ist, wie das Format aufgebaut ist, wo seine Grenzen liegen
        und wie der Export aus dem Wohnungsfinder in der Praxis
        funktioniert.
      </p>

      <h2>Was ist OpenImmo?</h2>
      <p>
        OpenImmo ist ein XML-basiertes Austauschformat für Immobiliendaten,
        das seit den frühen 2000er-Jahren vom OpenImmo e.V. gepflegt wird.
        Die Idee: Statt dass jedes Portal, jedes CRM und jede
        Maklersoftware eigene Import-Formate definiert, einigt sich die
        Branche auf eine gemeinsame Struktur. Ein Objekt wird einmal
        beschrieben – Adresse, Flächen, Preise, Ausstattung, Energiedaten,
        Bilder, Ansprechpartner – und jedes OpenImmo-fähige System kann
        diese Beschreibung lesen.
      </p>
      <p>
        In der Praxis begegnet Ihnen OpenImmo an drei Stellen: bei der
        Übertragung von Objekten an Immobilienportale, beim Wechsel oder der
        Anbindung von Maklersoftware und CRM-Systemen sowie beim Austausch
        zwischen Bauträger und externem Vertrieb. Die verbreitete Version
        1.2.7 hat sich über Jahre als stabiler Nenner etabliert – an ihr
        orientiert sich auch der Export von flatplan.de.
      </p>

      <h2>So ist eine OpenImmo-Datei aufgebaut</h2>
      <p>
        Eine OpenImmo-Übertragung ist eine XML-Datei mit fester Hierarchie.
        Vereinfacht dargestellt:
      </p>
      <ul>
        <li>
          <strong>&lt;openimmo&gt;</strong> – der Wurzelknoten mit
          Übertragungs-Metadaten (Absender, Zeitstempel, Übertragungsart)
        </li>
        <li>
          <strong>&lt;anbieter&gt;</strong> – der Datenlieferant, also z. B.
          Ihr Unternehmen mit Anbieternummer
        </li>
        <li>
          <strong>&lt;immobilie&gt;</strong> – ein Knoten je Objekt bzw.
          Einheit, darunter strukturierte Blöcke wie
          &lt;objektkategorie&gt;, &lt;geo&gt;, &lt;preise&gt;,
          &lt;flaechen&gt;, &lt;ausstattung&gt;, &lt;zustand_angaben&gt;
          (inklusive Energieausweis) und &lt;anhaenge&gt; für Bilder und
          Dokumente
        </li>
      </ul>
      <p>
        Der Wert des Standards liegt in den definierten Feldern: Ein
        Kaufpreis steht in &lt;kaufpreis&gt;, eine Wohnfläche in
        &lt;wohnflaeche&gt; – nicht in einem Freitext, den ein Mensch
        interpretieren muss. Für ein Neubauprojekt mit 40 Einheiten heißt
        das: 40 &lt;immobilie&gt;-Knoten mit jeweils konsistenten Flächen-,
        Preis- und Ausstattungsangaben. Genau die Daten also, die im
        Wohnungsfinder ohnehin je Einheit gepflegt sind – Räume und Flächen,
        Ausstattungsmerkmale, Energieausweis-Daten, Preise inklusive
        Nebenkosten und Provision.
      </p>

      <h2>Wofür Bauträger und Makler OpenImmo konkret brauchen</h2>
      <h3>1. Portale beliefern ohne Doppelpflege</h3>
      <p>
        Der Klassiker: Ein Projekt soll zusätzlich zur eigenen Projektseite
        auf Immobilienportalen sichtbar sein. Ohne Standard heißt das,
        jede Einheit in jeder Portal-Maske einzeln zu pflegen – und bei
        jeder Preisänderung überall nachzuziehen. Mit OpenImmo exportieren
        Sie den aktuellen Datenbestand und übergeben ihn an Systeme, die das
        Format verarbeiten. Die Projektseite mit dem interaktiven
        Wohnungsfinder bleibt dabei das führende System und der Ort, an dem
        aus Portalbesuchern qualifizierte Anfragen werden – zur
        Arbeitsteilung zwischen Portal und eigener Seite mehr auf der Seite{" "}
        <Link href="/branchen/immobilienmakler">für Immobilienmakler</Link>.
      </p>
      <h3>2. CRM und Maklersoftware anbinden</h3>
      <p>
        Viele CRM- und Maklersysteme importieren Objektdaten per OpenImmo.
        Damit lässt sich der Objektbestand aus dem Wohnungsfinder in die
        Bestandsverwaltung übernehmen, ohne eine Zeile abzutippen. Für die
        Anfragen-Seite – also Interessenten statt Objekte – sind dagegen die
        nativen CRM-Anbindungen an onOffice, Propstack und Flowfact sowie
        Webhooks der richtige Weg; wie dieser Workflow aussieht, beschreibt
        unser Artikel zur{" "}
        <Link href="/blog/crm-integration-neubauvertrieb">
          CRM-Integration im Neubauvertrieb
        </Link>
        .
      </p>
      <h3>3. Externe Vertriebe und Partner versorgen</h3>
      <p>
        Arbeitet ein Bauträger mit externen Vertriebspartnern, ist OpenImmo
        die neutrale Übergabesprache: Der Partner bekommt einen sauberen,
        vollständigen Datenbestand für sein eigenes System – statt einer
        Preisliste als PDF und einem Ordner Bilder. Gerade in der{" "}
        <Link href="/branchen/projektentwicklung">Projektentwicklung</Link>{" "}
        mit wechselnden Vertriebskonstellationen spart das je Übergabe
        Stunden an Abstimmung.
      </p>

      <h2>Beispielrechnung: Was Doppelpflege kostet</h2>
      <p>
        Eine einfache Beispielrechnung (Beispielwerte): Ein Projekt mit
        40 Einheiten wird auf zwei Portalen und in einem CRM gepflegt. Die
        Ersterfassung je Einheit und System dauert konservativ 10 Minuten –
        macht 40 × 3 × 10 Minuten = 20 Stunden nur für die Ersteingabe.
        Über die Laufzeit kommen im Schnitt fünf Änderungen je Einheit dazu
        (Preisstufen, Statuswechsel, korrigierte Flächen) à 3 Minuten je
        System: weitere 30 Stunden. Bei 60 Euro internem Stundensatz stehen
        rund 3.000 Euro Pflegeaufwand im Raum – plus das Risiko
        inkonsistenter Preise zwischen den Kanälen, das teurer sein kann als
        jede Arbeitsstunde. Mit einem führenden System und
        Standard-Export reduziert sich das auf die einmalige Pflege im
        Wohnungsfinder.
      </p>

      <h2>Der OpenImmo-Export in flatplan.de</h2>
      <p>
        Der Wohnungsfinder von flatplan.de bietet einen{" "}
        <strong>OpenImmo-XML-Export</strong>, angelehnt an die verbreitete
        Version 1.2.7. Die je Einheit gepflegten Daten – Flächen, Räume,
        Preise, Status, Ausstattung, Energieausweis – werden in die
        Standardstruktur übersetzt und stehen als XML zum Download bereit.
        Damit ist der Wohnungsfinder nicht nur Vermarktungsoberfläche,
        sondern auch Datendrehscheibe: Er ergänzt die weiteren
        Exportwege wie CSV/Excel-Preislisten, die Read-only-REST-API und
        Webhooks. Einen Überblick über alle Schnittstellen gibt die Seite{" "}
        <Link href="/funktionen/integrationen">Integrationen</Link>.
      </p>
      <h3>Grenzen des Standards – ehrlich betrachtet</h3>
      <p>
        OpenImmo ist ein kleinster gemeinsamer Nenner, kein Allheilmittel.
        Drei Einschränkungen sollten Sie kennen: Erstens interpretieren
        nicht alle Systeme jedes Feld identisch – ein Testimport lohnt sich
        immer. Zweitens transportiert das Format Objektdaten, aber keine
        interaktiven Inhalte: 360°-Rundgänge, die drehbare Projektansicht
        oder Sonnenstand-Simulation bleiben Alleinstellungsmerkmale der
        eigenen Projektseite. Drittens ersetzt ein Datenexport keine
        Prozessintegration – für Echtzeit-Anwendungsfälle sind API und
        Webhooks das passendere Werkzeug. Wer diese Grenzen kennt, setzt
        OpenImmo dort ein, wo es stark ist: als robustes, breit
        unterstütztes Transportformat für Objektdaten.
      </p>

      <h3>Praxis-Tipp: Der Export als Qualitätscheck</h3>
      <p>
        Ein angenehmer Nebeneffekt des strukturierten Exports: Er deckt
        Datenlücken auf. Fehlt bei einzelnen Einheiten die
        Energieausweis-Angabe oder eine Flächenart, fällt das spätestens
        beim Blick in die XML-Struktur auf – und damit vor dem
        Portal-Import, nicht danach. Viele Teams nutzen den Export deshalb
        vor dem Vermarktungsstart bewusst als letzte
        Vollständigkeitsprüfung des Datenbestands, ergänzend zur
        Launch-Checkliste im System.
      </p>

      <h2>Häufige Fragen aus der Praxis</h2>
      <h3>Reicht OpenImmo, oder brauche ich zusätzlich eine API?</h3>
      <p>
        Beides hat seinen Platz. OpenImmo ist ein Datei-Format: Es
        transportiert einen Stand der Objektdaten von A nach B – ideal für
        Portale, Systemwechsel und Partnerübergaben. Eine API beantwortet
        dagegen Anfragen in Echtzeit: „Welche Einheiten sind gerade frei,
        was kosten sie?“ Für ein internes Dashboard oder eine
        Preisanzeige auf einer weiteren Website ist die
        Read-only-REST-API mit API-Keys der richtige Weg; für die
        Benachrichtigung bei neuen Anfragen sind es Webhooks. Faustregel:
        Dateien für Bestandsübergaben, API und Webhooks für laufende
        Prozesse.
      </p>
      <h3>Welche Version sollte ich verwenden?</h3>
      <p>
        Im Zweifel die, die Ihr Zielsystem sicher versteht – und das ist
        in der Breite nach wie vor die 1.2.7er-Linie. Neuere Versionen
        bringen zusätzliche Felder, werden aber nicht von jedem System
        gleich schnell unterstützt. Da OpenImmo abwärtskompatibel gedacht
        ist, fahren Sie mit einem Export, der sich an 1.2.7 orientiert, in
        der Praxis am robustesten: Er wird von der größten Zahl an
        Portalen, CRM- und Maklersystemen ohne Sonderbehandlung
        verarbeitet.
      </p>
      <h3>Wie stelle ich sicher, dass der Import beim Empfänger klappt?</h3>
      <p>
        Mit einem Testlauf vor dem Echtbetrieb: eine Einheit exportieren,
        beim Zielsystem importieren und Feld für Feld prüfen – besonders
        Flächenarten, Preisfelder (Kaufpreis vs. Nettokaltmiete),
        Energieausweis-Angaben und die Bildzuordnung. Weichen einzelne
        Felder ab, lässt sich das fast immer über die Feldzuordnung des
        importierenden Systems lösen. Erst wenn die Testeinheit sauber
        ankommt, folgt der Gesamtbestand.
      </p>
      <h3>Was ist mit Bildern und Dokumenten?</h3>
      <p>
        OpenImmo sieht dafür den &lt;anhaenge&gt;-Block vor: Bilder,
        Grundrisse und Dokumente werden referenziert und zusammen mit der
        XML-Datei übergeben. In der Praxis lohnt es sich, auf sprechende
        Dateinamen und die richtige Kennzeichnung der Anhangsart
        (Titelbild, Grundriss, Dokument) zu achten – Portale sortieren
        danach ihre Galerien.
      </p>

      <h2>Fazit</h2>
      <p>
        OpenImmo ist unspektakulär – und genau deshalb wertvoll. Der
        Standard erspart Bauträgern und Maklern die teuerste Routinearbeit
        der Vermarktung: dieselben Objektdaten mehrfach zu pflegen. Die
        Voraussetzung ist ein führendes System, in dem die Daten vollständig
        und aktuell liegen. Wenn der Wohnungsfinder diese Rolle übernimmt,
        sind Portale, CRM und Partner mit wenigen Klicks versorgt – und die
        Projektseite bleibt der Kanal, auf dem aus Daten Emotion und aus
        Besuchern Anfragen werden. Unbekannte Begriffe rund um Formate und
        Schnittstellen erklärt unser{" "}
        <Link href="/wissen/glossar">Glossar</Link>; was die Plattform
        insgesamt kostet, zeigt die <Link href="/preise">Preisübersicht</Link>.
      </p>
    </BlogArticle>
  );
}
