import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("lead-qualitaet-verdoppeln")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function LeadQualitaetArticle() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Die teuersten Leads sind die, die Ihr Vertrieb vergeblich anruft.</strong>{" "}
        Wer Neubauprojekte über Portale und Anzeigen vermarktet, kennt das
        Muster: Das Exposé wird reflexhaft angefordert, beim Rückruf heißt
        es „ich wollte nur mal schauen“, und nach zwanzig solcher
        Gespräche ist ein Vormittag verbrannt. Das Problem ist selten die
        Menge der Anfragen – es ist ihre Qualität. Und die lässt sich
        systematisch steuern.
      </p>

      <h2>Qualität beginnt vor dem Formular</h2>
      <p>
        Ein <Link href="/funktionen/3d-grundrisse">interaktiver Wohnungsfinder</Link>{" "}
        verändert den Moment, in dem eine Anfrage entsteht. Wer ein Projekt
        gedreht, Etagen-Grundrisse durchgeblättert, den Sonnenstand simuliert
        und einen 360°-Rundgang gemacht hat, fragt nicht mehr blind an – er
        hat sich bereits selbst qualifiziert. Die Anfrage bezieht sich auf
        eine konkrete Wohneinheit, deren Schnitt, Preis und Ausrichtung der
        Interessent kennt. Das allein sortiert einen großen Teil der
        „Nur-mal-schauen“-Kontakte aus, bevor sie Ihren Vertrieb erreichen.
      </p>

      <h2>Das Exposé-Gate: aus Downloads werden Kontakte</h2>
      <p>
        Das Exposé-PDF ist im Neubauvertrieb die meistgefragte Ressource –
        und meistens wird sie anonym verschenkt. Ein{" "}
        <strong>Exposé-Gate</strong> dreht das um: Der Download startet
        erst, nachdem der Interessent seine E-Mail-Adresse hinterlegt hat.
        Aus einem anonymen Klick wird ein Kontakt mit dokumentiertem
        Interesse an einer konkreten Wohnung. Wie das Gate mit Preislisten,
        QR-Codes und Widgets zusammenspielt, zeigt die Seite{" "}
        <Link href="/funktionen/pdf-expose">Exposés & Vermarktung</Link>.
      </p>
      <p>
        Entscheidend ist die Dosierung. Wer vor jedes Bild eine Schranke
        setzt, vergrault Besucher. Bewährt hat sich: Projektansicht,
        Grundrisse und Rundgänge frei zugänglich lassen – das ist Ihr
        Schaufenster – und erst das detaillierte Exposé-PDF hinter das
        Gate legen. So bleibt das Erlebnis offen, aber der wertvollste
        Moment wird erfasst.
      </p>

      <h2>Pflichtfelder: die Conversion-Qualitäts-Balance</h2>
      <p>
        Jedes zusätzliche Formularfeld senkt die Abschlussrate des
        Formulars – und erhöht gleichzeitig die Qualität der Anfragen, die
        durchkommen. Diese Balance sollten Sie bewusst wählen, nicht dem
        Zufall überlassen. Mit konfigurierbaren Pflichtfeldern legen Sie
        fest, was eine Anfrage mindestens enthalten muss: Telefonnummer?
        Rückruf- oder Besichtigungswunsch? Zeithorizont?
      </p>
      <p>
        Eine praktikable Faustregel: In der frühen Vermarktungsphase, wenn
        Sie Reichweite aufbauen, halten Sie die Hürde niedrig. Je weiter
        der Verkauf fortschreitet und je knapper die Einheiten werden,
        desto mehr dürfen Sie verlangen – wer bei 80 Prozent{" "}
        <Link href="/blog/vorverkaufsquote-steigern">Vorverkaufsquote</Link>{" "}
        anfragt, meint es ernst.
      </p>

      <h2>Double-Opt-in: der ehrlichste Qualitätsfilter</h2>
      <p>
        Double-Opt-in gilt vielen als lästige DSGVO-Pflicht. Tatsächlich
        ist es einer der besten Qualitätsfilter überhaupt: Wer den
        Bestätigungslink in der E-Mail klickt, hat eine echte, erreichbare
        Adresse angegeben und sein Interesse ein zweites Mal bekräftigt.
        Tippfehler-Adressen und Wegwerf-Kontakte fallen automatisch
        heraus. Nebenbei entsteht ein dokumentierter Einwilligungsnachweis
        – wichtig, wenn Sie den Kontakt später mit Suchagenten-Mails oder
        einem Newsletter ansprechen wollen.
      </p>

      <h2>Merklisten-Signale: Interesse sichtbar machen</h2>
      <p>
        Nicht jedes Kaufsignal ist eine Anfrage. Die Merkliste ist ein
        unterschätzter Indikator: Wer drei Wohnungen favorisiert und per
        Magic-Link auf seine Liste zurückkehrt, beschäftigt sich ernsthaft
        mit dem Projekt. Kommt die Anfrage dann, liefert die angehängte
        Merkliste Ihrem Verkäufer wertvollen Kontext – er sieht sofort,
        ob jemand zwischen zwei 3-Zimmer-Wohnungen schwankt oder das
        Penthouse mit der Gartenwohnung vergleicht, und kann das Gespräch
        entsprechend führen.
      </p>

      <h2>Suchagenten und Preis-Alarme: warme Leads auf Vorrat</h2>
      <p>
        Der häufigste Grund für eine Nicht-Anfrage ist banal: Die passende
        Wohnung ist gerade nicht frei oder zu teuer. Klassisch geht dieser
        Kontakt verloren. Mit einem <strong>Suchagenten</strong> bleibt er
        im System: Der Interessent hinterlegt seine Kriterien und erhält
        automatisch eine Mail, sobald eine passende Einheit verfügbar
        wird. <strong>Preis-Alarme</strong> und{" "}
        <strong>Wieder-frei-Alarme</strong> arbeiten nach demselben
        Prinzip – sie melden sich, wenn eine gemerkte Wohnung günstiger
        wird oder aus einer Reservierung zurückfällt. Einen Überblick über
        alle Werkzeuge gibt die Seite{" "}
        <Link href="/funktionen/lead-generierung">Lead-Generierung</Link>.
      </p>
      <p>
        Diese Kontakte sind Gold wert: Sie haben ihr Interesse präzise
        beschrieben, per Double-Opt-in bestätigt und warten aktiv auf Ihr
        Signal. Wenn die Mail kommt, ist der Lead nicht kalt, sondern
        vorgewärmt – oft der schnellste Weg zur Besichtigung.
      </p>

      <h2>A/B/C-Bewertung: Fokus für den Vertrieb</h2>
      <p>
        Auch mit guter Qualifizierung sind nicht alle Leads gleich. Eine
        einfache <strong>A/B/C-Bewertung</strong> im Anfragen-Board schafft
        Fokus: A-Leads – konkrete Wohnung, Besichtigungswunsch, kurzfristiger
        Zeithorizont – werden zuerst angerufen, mit SLA-Ampel für die
        Reaktionszeit. B-Leads bekommen eine Wiedervorlage, C-Leads laufen
        über Suchagent und Newsletter mit, bis sie sich weiterentwickeln.
        Zuweisung, Aufgaben und Textbausteine sorgen dafür, dass dieser
        Prozess im Team funktioniert und nichts liegen bleibt.
      </p>

      <h2>Messen statt vermuten</h2>
      <p>
        Ob Ihre Qualifizierung funktioniert, zeigt sich in den Zahlen:
        Wie viele Besucher öffnen Wohnungen? Wie viele Downloads laufen
        durch das Exposé-Gate? Welche Kampagne liefert Anfragen, die zu
        Besichtigungen werden? Ein cookiefreies Analytics mit Conversion
        je UTM-Quelle beantwortet das, ohne dass Sie einen Cookie-Banner
        brauchen – mehr dazu auf unserer{" "}
        <Link href="/vorteile">Vorteile-Seite</Link> und im Artikel über{" "}
        <Link href="/blog/dsgvo-immobilienmarketing">DSGVO-konformes Tracking</Link>.
      </p>

      <h2>Fazit</h2>
      <p>
        Lead-Qualität entsteht nicht im Verkaufsgespräch, sondern davor:
        durch ein Erlebnis, das Selbstqualifizierung ermöglicht, durch
        Gates und Pflichtfelder an den richtigen Stellen, durch
        Double-Opt-in als Filter und durch Suchagenten, die aus
        „noch nicht“ ein „jetzt“ machen. Wer diese Bausteine kombiniert,
        bekommt weniger Anfragen als über das Portal-Gießkannenprinzip –
        aber deutlich mehr Gespräche, die zu Abschlüssen führen. Wie die
        Anfragen anschließend automatisch im CRM landen, lesen Sie im
        Artikel zur{" "}
        <Link href="/blog/crm-integration-neubauvertrieb">
          CRM-Integration im Neubauvertrieb
        </Link>.
      </p>
    </BlogArticle>
  );
}
