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
        <strong>„Setz WE 2.03 auf reserviert. Fasse die Anfragen von gestern.“</strong>
        {" "}
        Zwei Systeme, drei Klickpfade — oder ein Satz an den Assistenten,
        wenn er an die Projektdaten darf. MCP ist die Leitung. Status,
        Anfrage, Exposé-Satz. Keine Folie.
      </p>

      <h2>Was MCP hier ist</h2>
      <p>
        Ein offener Standard: der Assistent spricht mit dem Finder. Lesen,
        schreiben, in der Rolle des angemeldeten Nutzers. OAuth 2.1, rund
        30 Werkzeuge. Kein geteiltes Admin-Passwort.
      </p>

      <h2>Drei Arbeiten</h2>
      <p>
        Nach dem Notar: WE 2.04 auf verkauft. Der Status in der{" "}
        <Link href="/funktionen/3d-grundrisse">Ansicht</Link> ist sofort
        die Farbe. Aktionspreis, „auf Anfrage“, Nebenkosten. Jede Änderung
        im Protokoll, mit denselben Rechten wie in der Verwaltung.
      </p>
      <p>
        Montag, vierzehn Anfragen. Wer will die WE sehen, wer die knappen
        4-Zimmer, welcher UTM. Der Assistent sortiert. Den Anruf macht
        der Mensch.{" "}
        <Link href="/funktionen/lead-generierung">Anfragen und Gate</Link>.
      </p>
      <p>
        Exposé-Satz aus den Feldern: 3 Zimmer, 86 m², Süd-Loggia,
        Fußbodenheizung. Kein erfundenes Parkett. Redaktion danach.{" "}
        <Link href="/funktionen/pdf-expose">Exposé und QR</Link>.
      </p>

      <h2>OAuth, nicht das Login aus der Schublade</h2>
      <ul>
        <li>Token, widerrufbar. Kein Passwort im Chat.</li>
        <li>Rolle gilt. Betrachter ändert keinen Preis, auch per MCP.</li>
        <li>Protokoll wie bei der Handarbeit.</li>
      </ul>
      <p>
        Begriffe: <Link href="/wissen/glossar">Glossar</Link>.
      </p>

      <h2>MCP, Webhook, REST, CRM</h2>
      <p>
        Wiederkehrender Fluss: nativ onOffice, Propstack, Flowfact. Oder
        Webhook, lesende API, OpenImmo. Situativ, fragend, formulierend:
        MCP.{" "}
        <Link href="/funktionen/integrationen">CRM</Link>
        {" · "}
        <Link href="/blog/crm-integration-neubauvertrieb">Anfrage nach onOffice</Link>.
      </p>

      <h2>Grenze</h2>
      <p>
        Der Assistent verkauft nicht. Er entscheidet keine Reservierung.
        Entwurf, Mensch bestätigt. Masse ohne Aufsicht ist der teure Weg.
      </p>
      <p>
        Start mit Lesen: frei über 80 m², Anfragen der Woche nach Schnitt,
        Satz für WE 4.02. Schreiben, wenn das Team dem Werkzeug traut.
        Paket: <Link href="/preise">Preise</Link>.
      </p>
    </BlogArticle>
  );
}
