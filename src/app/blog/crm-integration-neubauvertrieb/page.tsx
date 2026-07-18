import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("crm-integration-neubauvertrieb")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function CrmIntegrationArticle() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>
          Eine Anfrage, die nicht im CRM ankommt, existiert für Ihren
          Vertrieb nicht.
        </strong>{" "}
        Genau das passiert im Neubauvertrieb täglich: Die Projektwebsite
        sammelt Interessenten, doch zwischen Formular und CRM liegt ein
        Postfach, eine Excel-Tabelle und ein Mitarbeiter, der Daten
        abtippt. Jeder dieser Schritte kostet Zeit – und in einem Markt,
        in dem Interessenten parallel bei drei Projekten anfragen,
        entscheidet Reaktionszeit über den Abschluss.
      </p>

      <h2>Das Medienbruch-Problem</h2>
      <p>
        Der typische Ablauf ohne Integration sieht so aus: Ein Interessent
        fragt Wohnung 2.04 über die Projektwebsite an. Die Anfrage landet
        als E-Mail im Sammelpostfach des Vertriebs. Irgendwann öffnet
        jemand die Mail, kopiert Name, Telefonnummer und Wunschwohnung in
        das CRM, legt eine Aufgabe an und informiert den zuständigen
        Kollegen. Zwischen Anfrage und erstem Rückruf vergehen Stunden,
        manchmal Tage.
      </p>
      <p>
        Dabei gehen drei Dinge verloren. Erstens Geschwindigkeit: Der
        Interessent ist am kaufbereitesten in dem Moment, in dem er
        anfragt. Zweitens Kontext: Beim Abtippen bleibt oft auf der
        Strecke, welche Wohnungen auf der Merkliste standen oder ob ein
        Besichtigungswunsch angegeben wurde. Drittens Datenqualität:
        Tippfehler in Telefonnummern und E-Mail-Adressen sind bei
        manueller Erfassung keine Ausnahme, sondern die Regel.
      </p>

      <h2>Native Anbindung: onOffice, Propstack, Flowfact</h2>
      <p>
        Die sauberste Lösung ist eine native CRM-Anbindung. flatplan.de
        bringt sie für drei im deutschsprachigen Raum verbreitete Systeme
        mit: <strong>onOffice</strong>, <strong>Propstack</strong> und{" "}
        <strong>Flowfact</strong>. Das Prinzip ist bei allen dreien
        gleich: Sie hinterlegen einmalig die API-Zugangsdaten Ihres CRMs
        – diese werden verschlüsselt gespeichert – und jede neue Anfrage
        aus dem <Link href="/funktionen/3d-grundrisse">Wohnungsfinder</Link>{" "}
        wird automatisch weitergeleitet.
      </p>
      <p>
        Der entscheidende Unterschied zur E-Mail: Die Anfrage kommt
        strukturiert an. Kontaktdaten, die konkret angefragte Wohneinheit,
        die Merkliste und der Rückruf- oder Besichtigungswunsch sind als
        Daten verfügbar, nicht als Fließtext. Ein Übergabeprotokoll
        dokumentiert jede Weiterleitung, sodass Sie jederzeit nachvollziehen
        können, ob und wann eine Anfrage im CRM angekommen ist. Einen
        Überblick über alle Schnittstellen gibt die Seite{" "}
        <Link href="/funktionen/integrationen">CRM & Schnittstellen</Link>.
      </p>

      <h2>Alternativen: Webhooks, REST-API und OpenImmo</h2>
      <p>
        Nicht jedes Unternehmen arbeitet mit einem der drei genannten
        Systeme – und nicht jeder Workflow braucht ein klassisches CRM.
        Dafür gibt es drei weitere Wege:
      </p>
      <ul>
        <li>
          <strong>Webhooks:</strong> Bei neuen Anfragen oder
          Statuswechseln sendet flatplan.de eine strukturierte Nachricht
          an eine URL Ihrer Wahl. Die Webhooks sind Slack-kompatibel –
          der Vertriebskanal in Slack, der bei jeder Anfrage aufleuchtet,
          ist in wenigen Minuten eingerichtet.
        </li>
        <li>
          <strong>Read-only-REST-API:</strong> Über API-Keys lesen Ihre
          eigenen Systeme Wohnungsdaten und Anfragen aus – etwa für ein
          internes Dashboard oder eine eigene Auswertung.
        </li>
        <li>
          <strong>OpenImmo-XML-Export:</strong> Der Branchenstandard für
          den Austausch von Immobiliendaten. Damit übernehmen Systeme,
          die OpenImmo verarbeiten, Ihre Objektdaten ohne manuelle
          Doppelpflege – Details erklärt unser Artikel{" "}
          <Link href="/blog/openimmo-schnittstelle-erklaert">OpenImmo einfach erklärt</Link>.
        </li>
      </ul>
      <p>
        Wichtig für die Erwartungshaltung: Eine pauschale Anbindung „an
        jedes CRM per Knopfdruck“ gibt es bei keinem Anbieter seriös.
        Nativ integriert sind onOffice, Propstack und Flowfact; alle
        anderen Systeme erreichen Sie über die genannten offenen
        Schnittstellen – je nach System mit etwas Konfigurationsaufwand
        auf Ihrer Seite.
      </p>

      <h2>Der Praxis-Workflow: von der Anfrage zum Termin</h2>
      <p>
        Wie sieht der Ablauf mit Integration konkret aus? Ein Beispiel aus
        einem typischen Bauträger-Setup mit onOffice:
      </p>
      <ol>
        <li>
          <strong>Anfrage:</strong> Die Interessentin klickt Wohnung 2.04
          im Wohnungsfinder an, legt zwei weitere Einheiten auf die
          Merkliste und sendet das Anfrageformular ab – inklusive der
          Pflichtfelder, die der Bauträger definiert hat.
        </li>
        <li>
          <strong>Bestätigung:</strong> Sie erhält sofort eine
          Auto-Antwort mit Double-Opt-in-Link. Mit der Bestätigung liegt
          eine dokumentierte DSGVO-Einwilligung vor.
        </li>
        <li>
          <strong>Übergabe:</strong> Die Anfrage wird automatisch an
          onOffice übergeben – mit Wohnungsbezug und Merkliste. Parallel
          meldet ein Webhook die Anfrage im Slack-Kanal des Vertriebs.
        </li>
        <li>
          <strong>Bearbeitung:</strong> Im Anfragen-Board von flatplan.de
          wird der Lead einem Teammitglied zugewiesen, mit A/B/C bewertet
          und mit einer Wiedervorlage versehen. Die SLA-Ampel zeigt, ob
          die Reaktionszeit eingehalten wird.
        </li>
        <li>
          <strong>Termin:</strong> Die Interessentin bucht einen
          Besichtigungsslot, der Termin wandert per iCal-Export in den
          Kalender des Verkäufers.
        </li>
      </ol>
      <p>
        Vom Klick auf „Anfrage senden“ bis zur Aufgabe im CRM vergehen
        Sekunden statt Stunden – und kein einziger Datensatz wurde von
        Hand übertragen. Wie der komplette Funnel davor aussieht, zeigt
        die Seite <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>.
      </p>

      <h2>Worauf Sie bei der Einführung achten sollten</h2>
      <p>
        Drei Punkte entscheiden in der Praxis über den Erfolg der
        Integration. Erstens: Klären Sie vorab, wer im CRM der Eigentümer
        neuer Kontakte ist – automatische Übergabe funktioniert nur so gut
        wie die Zuständigkeiten dahinter. Zweitens: Definieren Sie die
        Pflichtfelder im Anfrageformular bewusst. Jedes Feld erhöht die
        Datenqualität, senkt aber die Formular-Conversion – wie Sie diese
        Balance finden, beschreibt unser Artikel zur{" "}
        <Link href="/blog/lead-qualitaet-verdoppeln">
          Lead-Qualität im Neubauvertrieb
        </Link>
        . Drittens: Nutzen Sie das Übergabeprotokoll in den ersten Wochen
        aktiv, um sicherzugehen, dass jede Anfrage ankommt.
      </p>

      <h2>Fazit</h2>
      <p>
        Die CRM-Integration ist kein technisches Detail, sondern der
        Hebel, der aus einem schönen Wohnungsfinder ein Vertriebssystem
        macht. Wer den Medienbruch zwischen Website und CRM schließt,
        reagiert schneller, verliert keine Daten und entlastet sein Team
        von Routinearbeit. Mit nativer Anbindung an onOffice, Propstack
        und Flowfact ist das eine Frage von Minuten – nicht von
        IT-Projekten. Was die Plattform darüber hinaus für{" "}
        <Link href="/branchen/bautraeger">Bauträger</Link> und{" "}
        <Link href="/branchen/immobilienmakler">Makler</Link> leistet,
        zeigen die Branchen-Seiten.
      </p>
    </BlogArticle>
  );
}
