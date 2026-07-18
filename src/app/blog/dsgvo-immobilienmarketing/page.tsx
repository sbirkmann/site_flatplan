import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("dsgvo-immobilienmarketing")!;

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
          Der Cookie-Banner ist das erste, was Interessenten auf den meisten
          Projektwebsites sehen – und das erste Hindernis zwischen ihnen und
          Ihrer Immobilie.
        </strong>{" "}
        Gleichzeitig ist er für viele Bauträger und Makler das Symptom eines
        tieferliegenden Problems: Marketing-Tracking, das personenbezogene
        Daten sammelt, Einwilligungen erfordert und im Zweifel den
        Datenschutzbeauftragten beschäftigt. Dieser Artikel zeigt, wie
        Immobilienmarketing ohne Cookie-Banner und ohne IP-Speicherung
        funktioniert – und welche DSGVO-Pflichten jenseits des Trackings in
        der Vermarktung wirklich zählen.
      </p>

      <h2>Warum Immobilienmarketing ein Datenschutz-Thema ist</h2>
      <p>
        Kaum eine Branche verarbeitet so sensible Informationen wie der
        Immobilienvertrieb: Kaufinteressenten geben Auskunft über
        Familienplanung, Budget und Finanzierung – oft schon in der ersten
        Anfrage. Wer für ein Neubauprojekt mit 40 Einheiten vermarktet,
        sammelt über die Laufzeit schnell mehrere hundert Datensätze mit
        Namen, Telefonnummern und Wohnungswünschen. Jeder dieser Datensätze
        unterliegt der DSGVO – von der Erhebung über die Speicherung bis zur
        Löschung.
      </p>
      <p>
        Dazu kommt das Tracking: Google Analytics, Facebook-Pixel und
        ähnliche Werkzeuge setzen Cookies, übertragen Daten an Drittanbieter
        und benötigen deshalb eine aktive Einwilligung. Die Folgen sind
        bekannt: Consent-Banner, die einen Teil der Besucher direkt
        vergraulen, und Statistiken, die nur noch die Besucher abbilden, die
        „Akzeptieren“ geklickt haben. Studienübergreifend lehnen je nach
        Gestaltung 20 bis 50 Prozent der Besucher das Tracking ab – Ihre
        Kampagnenauswertung arbeitet dann mit einem Zerrbild.
      </p>

      <h2>Die Rechtsgrundlagen im Überblick</h2>
      <p>
        Bevor es um Werkzeuge geht, lohnt ein Blick auf die Systematik.
        Jede Verarbeitung personenbezogener Daten braucht eine
        Rechtsgrundlage – im Marketing sind drei relevant. Erstens die{" "}
        <strong>Vertragsanbahnung</strong> (Art. 6 Abs. 1 lit. b DSGVO):
        Wer eine Wohnung anfragt, erwartet eine Antwort – die Verarbeitung
        der Kontaktdaten zur Beantwortung genau dieser Anfrage ist ohne
        gesonderte Einwilligung zulässig. Zweitens das{" "}
        <strong>berechtigte Interesse</strong> (lit. f): Hierauf lässt sich
        etwa eine reichweitenarme, anonyme Statistik stützen – je weniger
        in die Privatsphäre eingegriffen wird, desto tragfähiger die
        Abwägung. Drittens die <strong>Einwilligung</strong> (lit. a): Sie
        ist immer dann Pflicht, wenn Cookies oder vergleichbare
        Kennungen zu Marketingzwecken gesetzt werden (hier greift
        zusätzlich das TDDDG) oder wenn Sie Interessenten wiederholt
        kontaktieren wollen – Newsletter, Suchagenten, Preis-Alarme.
      </p>
      <p>
        Aus dieser Systematik folgt die Strategie dieses Artikels: Alles,
        was sich anonym lösen lässt, anonym lösen (Tracking) – und dort,
        wo es ohne personenbezogene Daten nicht geht (Anfragen,
        Newsletter), die Einwilligung sauber und nachweisbar einholen.
      </p>

      <h2>Cookiefreies Tracking: messen ohne Einwilligungs-Banner</h2>
      <p>
        Die gute Nachricht: Für die Fragen, die im Neubauvertrieb wirklich
        zählen, braucht es keine personenbezogenen Profile. Wie viele
        Besucher hatte die Projektseite? Welche Wohnungen werden am
        häufigsten geöffnet? Über welchen Kanal kommen die Anfragen? All das
        lässt sich mit aggregierten, anonymen Messwerten beantworten.
      </p>
      <p>
        Genau so arbeitet das eingebaute Analytics des interaktiven
        Wohnungsfinders von flatplan.de: Das Tracking setzt{" "}
        <strong>keine Cookies</strong> und speichert{" "}
        <strong>keine IP-Adressen</strong>. Erfasst werden Ereignisse wie
        Besuche, Klicks, Wohnungs-Öffnungen, Favoriten, die Verweildauer in
        360°-Rundgängen und die Scroll-Tiefe – ohne dass sich daraus ein
        identifizierbares Personenprofil ergibt. Das Ergebnis: Es ist{" "}
        <strong>kein Cookie-Banner nötig</strong>, die Seite startet ohne
        Hürde, und die Zahlen bilden alle Besucher ab, nicht nur die
        einwilligenden.
      </p>
      <h3>Was Sie trotzdem alles sehen</h3>
      <ul>
        <li>Besuche und Klickpfade über das gesamte Projekt</li>
        <li>
          Öffnungen, Favoriten und Feedback je Wohnung – welche Grundrisse
          ziehen, welche liegen wie Blei
        </li>
        <li>Verweildauer in Rundgängen und Scroll-Tiefe als Interesse-Signal</li>
        <li>
          Conversion je UTM-Quelle – welcher Kanal bringt Anfragen, nicht nur
          Klicks
        </li>
        <li>Live-Anzeige, wie viele Besucher gerade online sind</li>
        <li>Wochen- und Monatsberichte per E-Mail sowie ein Read-only-Statistik-Link für Stakeholder</li>
      </ul>
      <p>
        Wie sich daraus eine belastbare Kampagnensteuerung bauen lässt,
        beschreibt unser Artikel über{" "}
        <Link href="/blog/neubau-kampagnen-utm-tracking">
          UTM-Tracking von Klick bis Anfrage
        </Link>{" "}
        im Detail.
      </p>

      <h2>Einwilligung sauber einholen: Double-Opt-in als Standard</h2>
      <p>
        Beim Anfrageformular führt kein Weg an personenbezogenen Daten
        vorbei – hier gilt es, die Einwilligung sauber zu dokumentieren.
        Bewährt hat sich das <strong>Double-Opt-in</strong>: Der Interessent
        sendet die Anfrage ab, erhält eine automatische Bestätigungsmail und
        klickt den Bestätigungslink. Erst damit ist die Einwilligung
        belastbar nachgewiesen – inklusive Zeitstempel.
      </p>
      <p>
        Im Wohnungsfinder ist dieser Ablauf in die{" "}
        <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>{" "}
        integriert: DSGVO-Einwilligung im Formular, Double-Opt-in per
        Auto-Antwort und gespeicherte Einwilligungsnachweise, die Sie im
        Zweifel vorlegen können. Dasselbe Prinzip gilt für Newsletter,
        Suchagenten und Preis-Alarme – jede wiederkehrende Kontaktaufnahme
        stützt sich auf eine dokumentierte, bestätigte Einwilligung.
      </p>
      <h3>Datensparsamkeit im Formular</h3>
      <p>
        Die DSGVO verlangt Datenminimierung – und die deckt sich hier
        ausnahmsweise mit dem Vertriebsinteresse: Jedes zusätzliche
        Pflichtfeld senkt die Formular-Conversion. Konfigurierbare
        Pflichtfelder erlauben es, genau die Angaben zu verlangen, die der
        Vertrieb für die Erstqualifizierung braucht – und nicht mehr. Wie
        Sie die Balance zwischen Datenqualität und Abschlussquote finden,
        zeigt der Beitrag zur{" "}
        <Link href="/blog/lead-qualitaet-verdoppeln">
          Lead-Qualität im Neubauvertrieb
        </Link>
        .
      </p>

      <h2>Aufbewahrungsfristen: Löschen ist Pflicht, nicht Kür</h2>
      <p>
        Der am häufigsten übersehene Teil der DSGVO im Vertrieb ist die
        Löschpflicht. Personenbezogene Daten dürfen nur so lange gespeichert
        werden, wie der Zweck es erfordert. Eine Anfrage zu einem Projekt,
        das seit zwei Jahren abverkauft ist, hat in aller Regel keinen
        Zweck mehr – bleibt aber in vielen Postfächern und Excel-Listen
        unbegrenzt liegen. Genau solche Altbestände werden bei Auskunfts-
        oder Löschersuchen und bei Prüfungen durch Aufsichtsbehörden zum
        Problem.
      </p>
      <p>
        Praktikabel wird die Löschpflicht nur mit Automatisierung. In
        flatplan.de definieren Sie <strong>Aufbewahrungsfristen</strong>, nach
        deren Ablauf Anfragen automatisch gelöscht oder anonymisiert werden.
        Ein Papierkorb fängt versehentliche Löschungen ab, und der
        Datenexport stellt sicher, dass Sie Auskunftsersuchen nach Art. 15
        DSGVO strukturiert beantworten können. Für Bauträger, die mit
        externen Vertrieben arbeiten, ist zusätzlich das Rollenkonzept
        relevant: Wer nur ansehen soll, bekommt eine VIEWER-Rolle – Zugriffe
        lassen sich über das Login-Protokoll nachvollziehen.
      </p>
      <h3>Beispielrechnung: Was ein Altbestand kostet</h3>
      <p>
        Ein Rechenbeispiel zur Einordnung (Beispielwerte, keine
        Rechtsberatung): Ein Vertriebsteam beantwortet ein
        Auskunftsersuchen manuell – Daten aus Postfach, CRM und
        Excel-Listen zusammensuchen, prüfen, dokumentieren. Bei zwei
        Stunden Aufwand pro Fall und einem internen Stundensatz von 60 Euro
        kostet ein einzelnes Ersuchen 120 Euro; bei zehn Ersuchen über die
        Projektlaufzeit sind es 1.200 Euro – zuzüglich des Risikos, dass in
        vergessenen Datenbeständen etwas übersehen wird. Mit zentraler
        Datenhaltung und automatischer Fristenlöschung schrumpft der
        Aufwand auf wenige Minuten pro Fall.
      </p>

      <h2>Datenflüsse an Dritte: CRM, Portale, Dienstleister</h2>
      <p>
        Immobilienvermarktung ist arbeitsteilig: Anfragen wandern ins CRM,
        Objektdaten an Portale, Auswertungen an den Vertriebspartner. Jeder
        dieser Datenflüsse gehört ins Verarbeitungsverzeichnis – und mit
        jedem Dienstleister, der personenbezogene Daten verarbeitet, braucht
        es einen Auftragsverarbeitungsvertrag. Übersichtlich bleibt das nur,
        wenn die Zahl der Systeme klein und die Übergaben dokumentiert sind:
        Die <Link href="/funktionen/integrationen">Integrationen</Link> des
        Wohnungsfinders protokollieren jede Anfrage-Weiterleitung ans CRM,
        Zugangsdaten werden verschlüsselt gespeichert. Für{" "}
        <Link href="/branchen/bautraeger">Bauträger</Link>, die mehrere
        Projekte parallel vermarkten, reduziert das die Zahl der Stellen, an
        denen personenbezogene Daten liegen, erheblich.
      </p>

      <h2>Zugriffe absichern: Rollen, 2FA, Protokolle</h2>
      <p>
        Datenschutz endet nicht bei der Erhebung – die häufigsten Pannen
        passieren beim Zugriff. Ein geteiltes Sammelpasswort für das
        Vermarktungstool, Ex-Mitarbeiter mit aktiven Konten, der
        Vertriebspartner mit Vollzugriff auf alle Projekte: Jede dieser
        Konstellationen ist ein vermeidbares Risiko. Technisch braucht es
        dafür drei Dinge, die im Wohnungsfinder bereits angelegt sind:
        Rollen je Projekt (VIEWER, EDITOR, MANAGER), sodass jeder nur
        sieht und ändert, was seine Aufgabe erfordert;
        Zwei-Faktor-Authentifizierung per TOTP für alle Konten mit Zugriff
        auf Interessentendaten; und eine Sitzungsverwaltung mit
        Login-Protokoll, über die sich Zugänge nachvollziehen und im
        Zweifel sofort beenden lassen. Einladungs-Links statt geteilter
        Zugangsdaten stellen sicher, dass jede Person ein eigenes,
        einzeln entziehbares Konto hat – die Grundvoraussetzung, um bei
        einem Personalwechsel handlungsfähig zu bleiben.
      </p>

      <h2>Checkliste: DSGVO-Basics für die Projektvermarktung</h2>
      <ul>
        <li>
          <strong>Tracking:</strong> cookiefrei und ohne IP-Speicherung
          messen – oder Consent-Management sauber aufsetzen und den
          Datenverlust einkalkulieren
        </li>
        <li>
          <strong>Formulare:</strong> nur notwendige Pflichtfelder,
          Einwilligungstext, Double-Opt-in, Einwilligungsnachweise speichern
        </li>
        <li>
          <strong>Fristen:</strong> Aufbewahrungsfristen definieren und
          Löschung/Anonymisierung automatisieren
        </li>
        <li>
          <strong>Auskunft:</strong> Datenexport je Person technisch
          sicherstellen
        </li>
        <li>
          <strong>Dritte:</strong> AV-Verträge mit allen Dienstleistern,
          Weiterleitungen protokollieren
        </li>
        <li>
          <strong>Zugriff:</strong> Rollen, Zwei-Faktor-Authentifizierung
          und Login-Protokoll für alle Beteiligten
        </li>
      </ul>
      <p>
        Begriffe wie Double-Opt-in, Auftragsverarbeitung oder Consent
        erläutert kompakt unser{" "}
        <Link href="/wissen/glossar">Glossar</Link>.
      </p>

      <h2>Fazit: Datenschutz als Conversion-Vorteil</h2>
      <p>
        DSGVO-Konformität im Immobilienmarketing ist kein reines
        Pflichtprogramm – richtig umgesetzt ist sie ein Vertriebsvorteil.
        Eine Projektseite ohne Cookie-Banner startet ohne Reibung, misst
        vollständig statt lückenhaft und signalisiert Interessenten, die
        gerade die größte Investition ihres Lebens planen, einen sorgfältigen
        Umgang mit ihren Daten. Wer zusätzlich Einwilligungen per
        Double-Opt-in dokumentiert und Löschfristen automatisiert, hat die
        größten Risiken der Vermarktung im{" "}
        <Link href="/use-cases/neubauvertrieb">Neubauvertrieb</Link>{" "}
        abgeräumt – und den Kopf frei für das, worum es eigentlich geht:
        verkaufen. (Hinweis: Dieser Artikel ersetzt keine Rechtsberatung.)
      </p>
    </BlogArticle>
  );
}
