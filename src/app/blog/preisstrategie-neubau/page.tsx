import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("preisstrategie-neubau")!;

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
          Im Neubau wird über Preise viel gerechnet – und wenig gesteuert.
        </strong>{" "}
        Die Kalkulation steht Monate vor Vermarktungsstart fest, die
        Preisliste wandert als PDF an den Vertrieb, und danach passiert oft:
        nichts. Dabei ist der Preis das wirksamste Vertriebswerkzeug, das ein
        Bauträger hat. Wer Preise sichtbar macht, gezielt anpasst und
        Interessenten automatisch über Änderungen informiert, verkauft
        planbarer – ohne pauschale Rabattschlachten. Dieser Artikel zeigt,
        wie eine aktive Preisstrategie im Neubau aussieht und welche
        digitalen Werkzeuge sie tragen.
      </p>

      <h2>Preistransparenz: anzeigen oder „auf Anfrage“?</h2>
      <p>
        Die erste strategische Entscheidung fällt vor dem ersten Euro:
        Zeigen Sie Preise offen an oder nicht? Die Zurückhaltung vieler
        Vertriebe („Preis auf Anfrage erzeugt Kontakte“) hat einen realen
        Preis: Interessenten vergleichen heute online, und ein Projekt ohne
        Preisangabe fliegt bei vielen aus der engeren Wahl, bevor der
        Vertrieb je davon erfährt. Offene Preise filtern dagegen vor – wer
        trotz Preisangabe anfragt, kennt die Größenordnung und ist
        qualifizierter.
      </p>
      <p>
        Die Praxis liegt oft dazwischen: Standard-Einheiten mit offenem
        Preis, Sonderobjekte wie das Penthouse mit „Preis auf Anfrage“. Ein
        interaktiver Wohnungsfinder unterstützt beide Varianten je Einheit –
        inklusive Nebenkosten und Provisionsangabe, sodass keine
        Überraschungen im Erstgespräch entstehen. Zubuchbare Einheiten wie
        Stellplatz oder Keller werden separat ausgewiesen, was die
        Vergleichbarkeit erhöht und Nachverhandlungen reduziert.
      </p>

      <h2>Die Preistreppe: Staffelung über den Vermarktungsverlauf</h2>
      <p>
        Die klassische Neubau-Preisstrategie ist die Preistreppe: Der
        Vertrieb startet mit bewusst attraktiven Einstiegspreisen, um schnell
        Vorverkäufe zu erzielen, und hebt die Preise in Stufen an, sobald
        Meilensteine erreicht sind. Das hat zwei Effekte: Frühe Käufer werden
        für ihr Risiko belohnt, und jede angekündigte Erhöhung erzeugt
        Handlungsdruck bei Unentschlossenen.
      </p>
      <h3>Beispielrechnung: Preistreppe über drei Stufen</h3>
      <p>
        Ein vereinfachtes Rechenbeispiel für ein Projekt mit 30 Einheiten und
        einem Zielmittel von 6.000 €/m² (Beispielrechnung, keine
        Kundenstudie):
      </p>
      <ul>
        <li>
          <strong>Stufe 1 (Vorverkauf, Einheiten 1–10):</strong> 5.700 €/m² –
          rund 5 % unter Ziel, um die Bankvorgabe zur Vorverkaufsquote
          schnell zu erfüllen
        </li>
        <li>
          <strong>Stufe 2 (Baustart, Einheiten 11–22):</strong> 6.000 €/m² –
          Zielniveau, gestützt durch sichtbaren Baufortschritt
        </li>
        <li>
          <strong>Stufe 3 (Rohbau/Fertigstellung, Einheiten 23–30):</strong>{" "}
          6.300 €/m² – Aufschlag für das entfallene Fertigstellungsrisiko
        </li>
      </ul>
      <p>
        Über alle Einheiten gemittelt landet das Projekt beim Zielpreis –
        aber mit früher Liquidität und einem Verkaufsargument in jeder
        Phase. Warum gerade die erste Stufe über den Baustart entscheidet,
        vertieft unser Artikel zur{" "}
        <Link href="/blog/vorverkaufsquote-steigern">
          Vorverkaufsquote
        </Link>
        . Entscheidend ist, dass jede Stufe kommuniziert wird: Eine
        angekündigte Preisanpassung, etwa über einen Ankündigungs-Banner im
        Wohnungsfinder, wirkt stärker als eine stillschweigende.
      </p>

      <h2>Aktionspreise: Rabatt mit Anfang und Ende</h2>
      <p>
        Nicht jede Einheit läuft nach Plan. In fast jedem Projekt gibt es
        „Ladenhüter“ – oft Erdgeschoss- oder Nordlagen, die nach Monaten noch
        offen sind. Der Reflex, projektweit die Preise zu senken, ist teuer
        und beschädigt das Vertrauen früher Käufer. Präziser wirkt der{" "}
        <strong>Aktionspreis je Einheit</strong>: Der ursprüngliche Preis
        bleibt sichtbar, der reduzierte Preis gilt erkennbar als Aktion – mit
        klarem Rahmen statt Dauerrabatt.
      </p>
      <p>
        Wichtig ist die Auswahl der richtigen Einheiten. Hier hilft das
        Analytics des Wohnungsfinders: Wenn eine Wohnung viele Öffnungen und
        Favoriten sammelt, aber keine Anfragen erzeugt, ist der Preis der
        wahrscheinlichste Blocker. Wird sie dagegen kaum geöffnet, liegt das
        Problem eher bei Lage oder Grundriss – dann verpufft ein Rabatt.
        Interaktive <Link href="/funktionen/3d-grundrisse">3D-Grundrisse</Link>{" "}
        und gute Visualisierung können bei solchen Einheiten mehr bewirken
        als der Preisnachlass.
      </p>

      <h2>Preis-Alarme: kalte Leads automatisch zurückholen</h2>
      <p>
        Der unterschätzte Hebel jeder Preisstrategie ist die Rückgewinnung.
        Über die Vermarktungslaufzeit sammeln sich hunderte Interessenten,
        die angefragt, aber nicht gekauft haben – häufig, weil die
        Wunschwohnung zu teuer oder bereits reserviert war. Ohne System sind
        diese Kontakte verloren. Mit <strong>Preis-Alarmen</strong> nicht:
        Interessenten abonnieren per Double-Opt-in eine Benachrichtigung und
        erhalten automatisch eine E-Mail, sobald sich der Preis ihrer
        beobachteten Wohnung ändert.
      </p>
      <p>
        Das Gegenstück ist der <strong>Wieder-frei-Alarm</strong>: Platzt
        eine Reservierung, informiert das System alle, die auf genau diese
        Einheit gewartet haben. Statt dass der Vertrieb bei einer geplatzten
        Reservierung von vorn beginnt, meldet sich der Interessentenkreis
        von selbst. Ein Rechenbeispiel: Bei 300 gesammelten Kontakten,
        30 aktiven Preis-Alarmen auf schwer verkäufliche Einheiten und einer
        Rückmeldequote von einem Drittel bringt eine einzige gezielte
        Preisanpassung zehn warme Gespräche – ohne einen Cent
        Mediabudget. Wie solche Alarme in die gesamte{" "}
        <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>{" "}
        eingebettet sind, zeigt die Funktionsseite im Detail.
      </p>

      <h2>Datenbasis statt Bauchgefühl: Woher die Preissignale kommen</h2>
      <p>
        Jede Preisentscheidung ist nur so gut wie die Daten dahinter. Drei
        Signalquellen sollten Sie systematisch auswerten. Erstens das
        Verhalten im Wohnungsfinder: Öffnungen, Favoriten und Likes je
        Einheit zeigen wöchentlich, wo die Nachfrage liegt – und wo nicht.
        Zweitens die Anfragen selbst: Fragen viele Interessenten dieselbe
        Einheit an, ist sie zu günstig eingepreist; fragt über Wochen
        niemand eine bestimmte Linie an, stimmt das Verhältnis von Preis
        und wahrgenommenem Wert nicht. Drittens die Gesprächsebene: Die im
        Anfragen-Board dokumentierten Absagegründe („zu teuer“, „Grundriss
        passt nicht“, „Fertigstellung zu spät“) sind die günstigste
        Marktforschung, die Sie bekommen können – vorausgesetzt, der
        Vertrieb erfasst sie konsequent.
      </p>
      <h3>Beispielrechnung: Nachfrage-Index je Einheit</h3>
      <p>
        Ein einfaches Modell für die monatliche Preisrunde
        (Beispielrechnung): Bilden Sie je Einheit einen Index aus
        Öffnungen, Favoriten und Anfragen – etwa 1 Punkt je Öffnung,
        5 Punkte je Favorit, 20 Punkte je Anfrage. Liegt eine Einheit über
        Monate im oberen Viertel des Index, verträgt sie die nächste
        Preisstufe früher; liegt sie im unteren Viertel und wird trotzdem
        oft geöffnet, ist sie der Kandidat für den Aktionspreis. Das Modell
        ist bewusst grob – sein Wert liegt darin, dass die Preisdiskussion
        mit denselben Zahlen geführt wird statt mit dem lautesten Argument.
      </p>

      <h2>Status-Steuerung: Knappheit ehrlich sichtbar machen</h2>
      <p>
        Preisstrategie ist auch Verfügbarkeitsstrategie. Die farbcodierten
        Status FREI, DEMNÄCHST, RESERVIERT und VERKAUFT machen im
        Wohnungsfinder auf einen Blick sichtbar, wie weit das Projekt ist –
        und echte, sichtbare Knappheit ist das stärkste Preisargument
        überhaupt. Wer sieht, dass von 30 Einheiten nur noch 6 frei sind,
        diskutiert weniger über den Quadratmeterpreis. Der Status DEMNÄCHST
        eignet sich zudem, um Einheiten bewusst zurückzuhalten und in
        späteren, teureren Stufen zu releasen – ein Muster, das auch bei der{" "}
        <Link href="/blog/warteliste-launch-strategie">
          Launch-Strategie mit Warteliste
        </Link>{" "}
        eine zentrale Rolle spielt.
      </p>
      <p>
        Für die Abstimmung mit Bank, Vertrieb und Investoren liefert der
        Export der Preisliste als CSV oder Excel jederzeit den aktuellen
        Stand; die druckoptimierte Exposé-Ansicht und das{" "}
        <Link href="/funktionen/pdf-expose">PDF-Exposé</Link> je Wohnung
        stellen sicher, dass auch die Unterlagen im Beratungsgespräch immer
        den gepflegten Preisstand zeigen – nicht die Preisliste von vor drei
        Monaten.
      </p>

      <h2>Preisänderungen kommunizieren: Reihenfolge ist Strategie</h2>
      <p>
        Wie eine Preisänderung ankommt, hängt davon ab, wer sie zuerst
        erfährt. Bewährt hat sich eine dreistufige Reihenfolge: Zuerst der
        eigene Interessentenpool – Preis-Alarm-Abonnenten und
        Newsletter-Empfänger erhalten die Information vor allen anderen,
        was den Alarmen ihren Wert gibt und dem Bestand ein
        Exklusivitätsgefühl. Dann die Projektseite selbst, etwa mit
        Ankündigungs-Banner bei bevorstehenden Erhöhungen („Preisstufe 2
        ab 1. März“). Zuletzt die externen Kanäle und Portale. Eine
        Erhöhung, die vorab angekündigt wird, erzeugt Abschlüsse{" "}
        <em>vor</em> dem Stichtag; eine Senkung, die zuerst die eigenen
        Alarme erreicht, erzeugt Gespräche statt Portalanfragen.
      </p>

      <h2>Governance: Wer darf Preise ändern – und wann?</h2>
      <p>
        Eine aktive Preisstrategie braucht klare Zuständigkeiten. Bewährt hat
        sich ein einfacher Rhythmus: Der Vertrieb liefert monatlich die
        Zahlen (Öffnungen, Favoriten, Anfragen je Einheit, Absagegründe),
        die Projektleitung entscheidet über Anpassungen, und die Änderung
        wird zentral im System gepflegt – mit Rollenrechten, sodass nicht
        jeder Nutzer Preise ändern kann, und einem Änderungsprotokoll, das
        jede Anpassung nachvollziehbar macht. Für{" "}
        <Link href="/branchen/bautraeger">Bauträger</Link> mit mehreren
        parallelen Projekten ist diese zentrale Pflege der Unterschied
        zwischen Preisstrategie und Preis-Wildwuchs: Ein Preis, ein System,
        alle Kanäle aktuell.
      </p>

      <h2>Fazit</h2>
      <p>
        Preisstrategie im Neubau heißt nicht, einmal richtig zu kalkulieren –
        sondern über die gesamte Laufzeit richtig zu reagieren. Die Bausteine:
        transparente Preise als Vorqualifizierung, eine kommunizierte
        Preistreppe statt stiller Anpassungen, chirurgische Aktionspreise
        statt pauschaler Rabatte und Preis- sowie Wieder-frei-Alarme, die
        den vorhandenen Interessentenpool automatisch reaktivieren. Die
        Werkzeuge dafür sind Teil des Wohnungsfinders – einen Überblick über
        Pakete und Konditionen gibt die{" "}
        <Link href="/preise">Preisübersicht</Link>.
      </p>
    </BlogArticle>
  );
}
