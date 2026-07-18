import type { Metadata } from "next";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung von flatplan.de: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website und im interaktiven Wohnungsfinder.",
    path: "/datenschutz",
  }),
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <main>
      <section className="page-hero bg-soft">
        <div className="container max-w-3xl mx-auto">
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>Datenschutzerklärung</h1>
          <div className="card prose" style={{ margin: 0, maxWidth: "none", padding: "2.5rem" }}>
            <h2 style={{ marginTop: 0 }}>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie der unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen – etwa über das Kontaktformular oder bei der Nutzung
              der Module unseres interaktiven Wohnungsfinders (z. B.
              Exposé-Anforderung). Andere Daten werden automatisch beim Besuch
              der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten werden
              zur Bearbeitung Ihrer Anfragen verwendet (z. B. Exposé-Zusendung,
              Kontaktaufnahme mit Bauträgern oder Maklern).
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich u. a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige Daten, die über eine Website
              generiert werden, handeln.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
              Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wir
              weisen darauf hin, dass die Datenübertragung im Internet (z. B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              {site.company.brand} / {site.company.legalName}
              <br />
              {site.company.street}
              <br />
              {site.company.zip} {site.company.city}
              <br />
              E-Mail: {site.company.email}
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
              für die Speicherung haben (z. B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen).
            </p>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
              die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular und Anfragen</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten (wie Name, E-Mail,
              Telefonnummer, Projektangaben) zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Der
              Versand der Formulardaten erfolgt per E-Mail über einen
              SMTP-Dienstleister an unser Anfrage-Postfach.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist.
            </p>

            <h3>Lead-Erfassung im Wohnungsfinder</h3>
            <p>
              Wenn Sie über die Module unseres Wohnungsfinders (z. B.
              „Exposé anfordern“, „Besichtigung vereinbaren“, Suchagent,
              Preis-Alarm) Anfragen zu einem konkreten Bauprojekt stellen,
              werden diese Daten im Rahmen des
              Auftragsverarbeitungsverhältnisses an den jeweiligen Bauträger
              oder Makler weitergegeben – auf Basis Ihrer ausdrücklichen
              Anfrage (Art. 6 Abs. 1 lit. b DSGVO) oder Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO).
            </p>

            <h3>Einbindung von CRM-Systemen (onOffice, Propstack, Flowfact)</h3>
            <p>
              Unsere Plattform bietet Schnittstellen zu externen CRM-Systemen
              von Maklern und Bauträgern. Übermitteln Sie Daten zu einem
              spezifischen Bauprojekt, werden diese gegebenenfalls über
              gesicherte Schnittstellen (REST-APIs, Webhooks) oder den
              OpenImmo-Standard direkt in das CRM-System des Anbieters
              übertragen. Diese Übertragung erfolgt verschlüsselt und stets
              auf Basis Ihrer ausdrücklichen Anfrage oder Einwilligung.
            </p>

            <h3>Cookies und Local Storage</h3>
            <p>
              Unsere Internetseiten verwenden technisch notwendige
              Speichertechnologien (z. B. Local Storage), um das Angebot
              nutzerfreundlich, effektiv und sicher zu machen – etwa zur
              Speicherung von Filter-Einstellungen oder Merklisten im
              Wohnungsfinder. Die Speicherung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO.
            </p>

            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt: Browsertyp und -version,
              verwendetes Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2>5. Analyse</h2>
            <p>
              Zur Auswertung des Klick- und Navigationsverhaltens im
              Wohnungsfinder (z. B. welche Wohnungen häufig betrachtet werden)
              setzen wir ein eigenes, cookiefreies Analyseverfahren ein, das
              ohne Speicherung von IP-Adressen arbeitet. Die Analysedaten
              dienen ausschließlich der technischen und vertrieblichen
              Optimierung der Plattform (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <p>
              <em>Stand der Datenschutzerklärung: Juli 2026</em>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
