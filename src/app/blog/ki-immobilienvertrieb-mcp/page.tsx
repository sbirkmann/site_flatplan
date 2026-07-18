import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("ki-immobilienvertrieb-mcp")!;

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
          „Fasse mir die neuen Anfragen von gestern zusammen und setze
          Wohnung 3.07 auf reserviert.“
        </strong>{" "}
        Noch vor zwei Jahren wäre das eine Aufgabe für zwei verschiedene
        Systeme, drei Klickpfade und eine Viertelstunde gewesen. Heute ist es
        ein Satz an einen KI-Assistenten – vorausgesetzt, der Assistent hat
        einen sicheren, kontrollierten Zugang zu Ihren Vertriebsdaten. Genau
        dafür gibt es das Model Context Protocol, kurz MCP. In diesem Artikel
        erklären wir, was hinter dem Standard steckt, was die MCP-Schnittstelle
        von flatplan.de heute konkret kann – und wo die sinnvollen Grenzen
        liegen.
      </p>

      <h2>Was ist MCP – und warum betrifft es den Immobilienvertrieb?</h2>
      <p>
        Das Model Context Protocol ist ein offener Standard, der beschreibt,
        wie KI-Assistenten wie Claude mit externen Systemen sprechen: Welche
        Werkzeuge stellt ein System bereit, welche Parameter erwarten sie,
        welche Daten kommen zurück? Man kann sich einen MCP-Server als eine
        Art Dolmetscher vorstellen – auf der einen Seite die natürliche
        Sprache des Anwenders, auf der anderen Seite die strukturierten Daten
        eines Fachsystems.
      </p>
      <p>
        Für den Neubauvertrieb ist das interessanter, als es zunächst klingt.
        Denn die tägliche Vertriebsarbeit besteht zu einem großen Teil aus
        genau den Aufgaben, die KI-Assistenten gut beherrschen:
        Informationen zusammentragen, Status pflegen, Texte formulieren,
        Routinefragen beantworten. Was bisher fehlte, war der sichere Draht
        zwischen Assistent und Wohnungsfinder. flatplan.de bringt dafür einen
        eigenen MCP-Server mit – abgesichert über OAuth 2.1, mit rund 30
        Werkzeugen, die dem Assistenten gezielt Lese- und Schreibzugriff auf
        Ihr Projekt geben.
      </p>

      <h2>Was die MCP-Anbindung heute konkret kann</h2>
      <p>
        Die ehrliche Antwort vorweg: Ein KI-Assistent verkauft keine
        Wohnungen. Aber er nimmt dem Vertrieb die Klickarbeit ab, die zwischen
        den Verkaufsgesprächen liegt. Drei Kategorien haben sich in der Praxis
        als besonders nützlich erwiesen.
      </p>

      <h3>1. Status und Preise per Zuruf pflegen</h3>
      <p>
        Der Klassiker: Nach dem Notartermin muss die Einheit von RESERVIERT
        auf VERKAUFT gestellt werden. Über die MCP-Werkzeuge erledigt das der
        Assistent auf Zuruf – „Setze Wohnung 2.04 im Projekt Parkquartier auf
        verkauft“ – und der farbcodierte Status im{" "}
        <Link href="/funktionen/3d-grundrisse">
          interaktiven Wohnungsfinder
        </Link>{" "}
        ist sofort aktuell. Dasselbe gilt für Preisänderungen: Aktionspreis
        setzen, „Preis auf Anfrage“ aktivieren, Nebenkosten korrigieren.
        Wichtig dabei: Jede Änderung läuft über dieselben Berechtigungen und
        dasselbe Änderungsprotokoll wie eine manuelle Bearbeitung. Der
        Assistent kann nichts, was der angemeldete Nutzer nicht dürfte.
      </p>

      <h3>2. Anfragen lesen, zusammenfassen, priorisieren</h3>
      <p>
        Montagmorgen, 14 neue Anfragen aus dem Wochenende. Statt jede einzeln
        zu öffnen, lassen Sie sich vom Assistenten eine Zusammenfassung geben:
        Wer hat einen Besichtigungswunsch geäußert? Welche Anfragen beziehen
        sich auf die knappen 4-Zimmer-Wohnungen? Welche Kontakte kamen über
        welche Kampagne? Der Assistent liest die Daten aus dem Anfragen-Board
        und liefert eine sortierte Übersicht – die Priorisierung und der
        Anruf bleiben beim Menschen. Wie Anfragen überhaupt strukturiert
        erfasst und bewertet werden, beschreibt unsere Seite zur{" "}
        <Link href="/funktionen/lead-generierung">Lead-Generierung</Link> im
        Detail.
      </p>

      <h3>3. Exposé-Texte entwerfen – mit echten Daten statt Halluzination</h3>
      <p>
        Werbetexte aus einer generischen KI klingen oft austauschbar – und
        schlimmer: Sie erfinden gern Details. Der Unterschied bei einer
        MCP-Anbindung: Der Assistent kennt die realen Daten der Einheit –
        Räume, Flächen, Ausstattungsmerkmale, Energieausweis-Angaben,
        Ausrichtung – und formuliert auf dieser Grundlage. Aus „3 Zimmer,
        86 m², Südwest-Loggia, Fußbodenheizung“ wird ein Textentwurf, der
        faktisch stimmt und nur noch redaktionell geschliffen werden muss.
        Zusammen mit dem{" "}
        <Link href="/funktionen/pdf-expose">Exposé-PDF je Wohnung</Link>{" "}
        entsteht so ein deutlich schnellerer Weg vom Datensatz zum
        Vermarktungsdokument.
      </p>

      <h2>Ein Praxis-Szenario: die Wochenroutine mit Assistent</h2>
      <p>
        Wie sich das im Alltag rechnet, zeigt eine einfache Beispielrechnung –
        bewusst konservativ angesetzt, keine Kundenstudie, sondern eine
        Modellbetrachtung:
      </p>
      <ul>
        <li>
          <strong>Statuspflege:</strong> 5 Status- und Preisänderungen pro
          Woche à 4 Minuten manuell = 20 Minuten. Per Zuruf: unter 5 Minuten.
        </li>
        <li>
          <strong>Anfragen-Sichtung:</strong> 25 Anfragen pro Woche à
          2 Minuten Erstsichtung = 50 Minuten. Mit Zusammenfassung und
          Vorsortierung: rund 20 Minuten.
        </li>
        <li>
          <strong>Exposé-Texte:</strong> 3 Textentwürfe pro Woche à 30 Minuten
          = 90 Minuten. Mit datenbasiertem Erstentwurf plus Redaktion: rund
          45 Minuten.
        </li>
      </ul>
      <p>
        In diesem Modell spart ein einzelner Vertriebsmitarbeiter etwa
        90 Minuten pro Woche – knapp ein Arbeitstag pro Monat, der in
        Gespräche statt in Klickarbeit fließt. Für einen{" "}
        <Link href="/branchen/bautraeger">Bauträger</Link> mit mehreren
        parallel laufenden Projekten multipliziert sich der Effekt, weil der
        Assistent projektübergreifend arbeitet: „In welchen Projekten sind
        noch 2-Zimmer-Wohnungen unter 400.000 Euro frei?“ ist eine Frage von
        Sekunden.
      </p>

      <h2>Sicherheit: OAuth 2.1 statt geteilter Passwörter</h2>
      <p>
        Die berechtigte erste Frage jedes Vertriebsleiters lautet: Wer darf
        da eigentlich was? Die MCP-Anbindung von flatplan.de ist über
        OAuth 2.1 abgesichert – den aktuellen Standard für delegierte
        Autorisierung. Das bedeutet konkret:
      </p>
      <ul>
        <li>
          Kein Passwort verlässt jemals das System. Der Assistent erhält ein
          zweckgebundenes Zugriffstoken, das jederzeit widerrufen werden kann.
        </li>
        <li>
          Der Zugriff ist an einen konkreten Nutzer und dessen Rolle gebunden
          – ein VIEWER-Zugang kann auch über MCP keine Preise ändern.
        </li>
        <li>
          Änderungen erscheinen im Änderungsprotokoll und sind damit genauso
          nachvollziehbar wie manuelle Bearbeitungen.
        </li>
      </ul>
      <p>
        Damit unterscheidet sich der Ansatz grundlegend von Bastellösungen,
        bei denen ein Bot mit einem geteilten Admin-Login arbeitet. Wer tiefer
        in die Begriffe einsteigen möchte, findet die wichtigsten Definitionen
        in unserem <Link href="/wissen/glossar">Glossar</Link>.
      </p>

      <h2>MCP, REST-API, Webhooks: Was wofür?</h2>
      <p>
        Die MCP-Schnittstelle ist nicht der einzige Weg, Daten aus dem
        Wohnungsfinder in andere Systeme zu bringen – sie ist der Weg für
        dialogische, ad-hoc-Arbeit. Daneben stehen weitere{" "}
        <Link href="/funktionen/integrationen">Integrationsmöglichkeiten</Link>,
        die andere Aufgaben abdecken:
      </p>
      <ul>
        <li>
          <strong>Webhooks</strong> (Slack-kompatibel) melden neue Anfragen
          oder Statuswechsel in Echtzeit an Ihre Kanäle – ideal für „das Team
          soll es sofort wissen“.
        </li>
        <li>
          <strong>Die Read-only-REST-API</strong> mit API-Keys versorgt eigene
          Websites oder Dashboards mit aktuellen Verfügbarkeiten.
        </li>
        <li>
          <strong>Native CRM-Anbindungen</strong> an onOffice, Propstack und
          Flowfact übergeben Anfragen automatisch an Ihr Kundensystem – wie
          das im Detail funktioniert, lesen Sie im Artikel{" "}
          <Link href="/blog/crm-integration-neubauvertrieb">
            CRM-Integration im Neubauvertrieb
          </Link>
          .
        </li>
      </ul>
      <p>
        Die Faustregel: Automatische, wiederkehrende Datenflüsse gehören in
        CRM-Anbindung und Webhooks. Alles, was situativ, fragend und
        formulierend ist, gehört zum KI-Assistenten über MCP.
      </p>

      <h2>Wo die Grenzen liegen – und warum das gut so ist</h2>
      <p>
        Ein realistisches Bild gehört dazu. Der Assistent führt keine
        Verkaufsgespräche, entscheidet nicht über Reservierungen und ersetzt
        keine Vertriebsstrategie. Er sollte auch nicht unbeaufsichtigt
        Massenänderungen durchführen – bewährt hat sich das Muster
        „Assistent schlägt vor, Mensch bestätigt“: Der Entwurf des
        Exposé-Textes wird gelesen, bevor er ins PDF wandert; die
        Zusammenfassung der Anfragen ersetzt nicht den Blick in den
        Einzelfall, wenn es um eine Reservierung geht.
      </p>
      <p>
        Genau diese Arbeitsteilung macht den Ansatz für{" "}
        <Link href="/branchen/projektentwicklung">Projektentwickler</Link> und
        Vertriebsteams tragfähig: Die KI übernimmt die strukturierte
        Fleißarbeit auf Basis echter Daten, der Mensch behält Urteil und
        Verantwortung. Wer es andersherum aufzieht – KI entscheidet, Mensch
        räumt hinterher auf – handelt sich mehr Risiko ein, als er an Zeit
        gewinnt.
      </p>

      <h2>So starten Sie mit der MCP-Anbindung</h2>
      <p>
        Der Einstieg ist bewusst unspektakulär: Sie verbinden Ihren
        KI-Assistenten einmalig über den OAuth-Flow mit Ihrem
        flatplan-Projekt, prüfen die Rollenzuordnung – und beginnen mit
        Lese-Aufgaben. Zusammenfassungen, Verfügbarkeitsfragen,
        Statistik-Abfragen: alles, was nichts verändert, aber Zeit spart.
        Erst wenn das Team dem Werkzeug vertraut, kommen Schreiboperationen
        wie Statuswechsel dazu. Die MCP-Schnittstelle ist Bestandteil der
        Plattform; welche Leistungen in welchem Paket enthalten sind, zeigt
        unsere <Link href="/preise">Preisübersicht</Link>.
      </p>
      <h3>Prompts, mit denen Teams typischerweise starten</h3>
      <ul>
        <li>
          „Welche Wohnungen im Projekt X sind frei und haben mehr als
          80 Quadratmeter?“ – die schnelle Verfügbarkeitsauskunft im
          Kundengespräch.
        </li>
        <li>
          „Fasse die Anfragen der letzten sieben Tage zusammen, gruppiert
          nach Wohnungstyp.“ – die Montagsroutine.
        </li>
        <li>
          „Entwirf einen Exposé-Text für Wohnung 4.02, Zielgruppe junge
          Familien, sachlicher Ton.“ – der Startpunkt für die Redaktion.
        </li>
        <li>
          „Setze Wohnung 1.05 auf reserviert und den Aktionspreis für 2.01
          auf 419.000 Euro.“ – die erste Schreiboperation, wenn das
          Vertrauen steht.
        </li>
      </ul>

      <h2>Fazit</h2>
      <p>
        KI im Immobilienvertrieb wird oft entweder überschätzt („die KI
        verkauft“) oder unterschätzt („nur Spielerei“). Die MCP-Anbindung
        zeigt den nüchternen Mittelweg: ein standardisierter, über OAuth 2.1
        abgesicherter Kanal, über den ein Assistent echte Projektdaten liest,
        Status und Preise pflegt und Texte auf Faktenbasis entwirft. Das
        Ergebnis ist keine Revolution, sondern etwas Wertvolleres – jede
        Woche ein paar Stunden mehr für die Arbeit, die tatsächlich
        Abschlüsse bringt: das Gespräch mit dem Interessenten.
      </p>
    </BlogArticle>
  );
}
