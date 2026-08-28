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
        <strong>Eine Anfrage, die nicht im System ankommt, existiert nicht.</strong>
        {" "}
        Formular, Postfach, Excel, Abtippen. Stunden, manchmal Tage. Der
        Interessent fragt parallel drei Projekte an. Die Wohnung steht dann nicht
        im Datensatz. Im Dashboard liegt sie mit Nummer. Ein CRM wie onOffice
        ist optional — wir binden es an, wenn das Büro eines nutzt.
      </p>

      <h2>Was beim Abtippen fehlt</h2>
      <p>
        WE 2.04 kommt als Mail. Jemand kopiert Name und Telefon. Die
        Merkliste fehlt. Der Besichtigungswunsch fehlt. Die Nummer hat einen
        Tippfehler. Der erste Rückruf trifft eine Mailbox oder die falsche
        Adresse.
      </p>

      <h2>onOffice, Propstack, Flowfact</h2>
      <p>
        Einmal Zugangsdaten, verschlüsselt. Jede Anfrage aus dem{" "}
        <Link href="/funktionen/3d-grundrisse">Finder</Link> kann als
        Datensatz landen: Kontakt, Wohnung, Merkliste, Wunsch. Protokoll je Übergabe.
        Ohne CRM bleiben die Anfragen im Dashboard.{" "}
        <Link href="/funktionen/integrationen">CRM</Link>.
      </p>

      <h2>Ohne eines der drei</h2>
      <ul>
        <li>Webhook an eine URL. Slack-kompatibel, wenn das Team es sofort sehen soll.</li>
        <li>Lesende REST-API für die eigene Seite oder ein Dashboard.</li>
        <li>
          OpenImmo-XML für Portale und den Bestand.{" "}
          <Link href="/blog/openimmo-schnittstelle-erklaert">OpenImmo aus dem Finder</Link>.
        </li>
      </ul>

      <h2>Was mitkommt</h2>
      <p>
        Nicht der Formulartext. Die WE-Nummer, Status zum Zeitpunkt der
        Anfrage, UTM, ob Gate oder Suchagent. Der Vertrieb öffnet die Akte
        und weiß, welche Loggia gemeint ist.
      </p>
      <p>
        Rollen: wer darf übergeben. 2FA. AES-256 an den Zugängen.{" "}
        <Link href="/faq">FAQ, Recht</Link>.
      </p>
    </BlogArticle>
  );
}
