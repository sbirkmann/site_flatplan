"use client";
import { useState } from "react";
import { site } from "@/lib/site";

/** Live-Demo, eingebettet als Planfeld. Click-to-load: Der iframe lädt erst
    nach Klick — bis dahin trägt eine beschriftete Planfläche den Zustand,
    auch wenn der Demo-Server einmal nicht erreichbar ist. */
export default function DemoFrame({
  title = "Live-Demo · Haus am Park",
}: {
  title?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="demo-frame">
      <div className="demo-frame-bar">
        <span>{title}</span>
        <a
          className="demo-url"
          href={site.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.demoUrl.replace("https://", "")} ↗
        </a>
      </div>
      <div style={{ position: "relative" }}>
        {!loaded && (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="demo-start"
            aria-label="Live-Demo laden und starten"
          >
            <span className="demo-start-stamp">Live-Demo starten</span>
            <span className="demo-start-note">
              Lädt den echten Finder vom Demo-Server · alternativ direkt unter{" "}
              {site.demoUrl.replace("https://", "")}
            </span>
          </button>
        )}
        {loaded && (
          <iframe
            src={site.demoUrl}
            title="Live-Demo des flatplan.de Wohnungsfinders"
            allow="fullscreen"
          />
        )}
      </div>
    </div>
  );
}
