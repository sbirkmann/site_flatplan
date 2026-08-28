import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

const post = getPost("virtueller-rundgang-neubau")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Sie verkaufen Räume, die niemand betreten kann.</strong>
        {" "}
        Im Bestand entscheidet das Wohnzimmer. Im Neubau fehlt der Moment
        Monate. Der Standpunkt im Panorama: nächster Raum, Blick zur Loggia.
        Solange die Musterwohnung fehlt.
      </p>

      <h2>Panorama, nicht Spiel</h2>
      <p>
        Feste Standpunkte, verbunden. Wohnen, Küche, Loggia. Neubau: Bild
        aus unserem Modell. Bestand: Fotografie. Browser, WebGL, ohne App.
      </p>
      <p>
        Kein frei laufendes 3D-Modell. Kein Video, das man nur anschaut.
        Der Klick in den nächsten Raum, dann zur{" "}
        <Link href="/funktionen/3d-grundrisse">WE in der Fassade</Link>.
      </p>

      <h2>Wann er sich lohnt</h2>
      <p>
        Solange der Estrich fehlt. Für Schnitte, die sich im Grundriss
        nicht erklären: Durchblick, Loggia, Licht. Nicht für jedes Bad,
        wenn das Budget die Sequenz der Fassade zuerst braucht.
      </p>
      <p>
        Quelle und Pflege: Modell und Bilder von uns, oder Ihr Material
        aufbereitet. Hotspots bleiben. Neue Sequenz nach Umplanung gesondert.{" "}
        <Link href="/use-cases/virtuelle-besichtigung">360° vor der Fertigstellung</Link>.
      </p>

      <h2>Aus dem Rundgang in die Akte</h2>
      <p>
        Preis, Status, Gate. Derselbe Vorgang wie von der Fassade.
        Ablauf:{" "}
        <Link href="/use-cases/neubauvertrieb">vom Rendering bis zur Akte</Link>.
        Sortierung danach:{" "}
        <Link href="/blog/lead-qualitaet-verdoppeln">Anfrage mit Merkliste</Link>.
      </p>
    </BlogArticle>
  );
}
