import { site } from "@/lib/site";

/** Live-Demo des Wohnungsfinders, eingebettet als Planfeld. */
export default function DemoFrame({
  title = "Live-Demo · Haus am Park",
}: {
  title?: string;
}) {
  return (
    <div className="demo-frame">
      <div className="demo-frame-bar">
        <span>{title} · lädt vom Demo-Server</span>
        <a
          className="demo-url"
          href={site.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.demoUrl.replace("https://", "")} ↗
        </a>
      </div>
      <iframe
        src={site.demoUrl}
        title="Live-Demo des flatplan.de Wohnungsfinders"
        loading="lazy"
        allow="fullscreen"
      />
    </div>
  );
}
