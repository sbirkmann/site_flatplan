# DESIGN.md — flatplan.de

Gestaltungsgrundlage für die Website. Wer hier etwas ändert, sollte diese
Datei vorher lesen und danach aktualisieren.

## Leitidee

**Hell, ruhig, viel Weißraum. Struktur entsteht durch Abstand und Typografie,
nicht durch Rahmen.**

flatplan.de verkauft ein Vertriebswerkzeug an Bauträger, Projektentwickler und
Makler — ein Umfeld, in dem Seriosität mehr zählt als Effekt. Die Seite soll
wirken wie ein gut gesetztes Angebot, nicht wie eine Agentur-Selbstdarstellung.

### Die drei Regeln

1. **Keine Boxen.** Karten, Passepartouts, Rahmen um Bilder und umrandete
   Textplatten sind abgeschafft. Zusammenhang zeigt sich über Nähe, Trennung
   über Weißraum oder eine Haarlinie (`--rule`).
2. **Ein heller Grund.** Nur zwei Flächentöne: Weiß (`--papier`) und ein sehr
   helles Warmgrau (`--licht`). Sektionen wechseln zwischen beiden. Dunkle
   Vollflächen werden nicht mehr eingesetzt.
3. **Farbe ist Signal, nicht Dekoration.** Orange (`--sonne`) markiert
   ausschließlich Status („frei"), den empfohlenen Tarif und Fokus-Ringe.
   Primärbuttons sind dunkelgrau, nicht orange.

## Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--papier` | `#ffffff` | Grundfläche, Sektionen im Wechsel |
| `--licht` | `#f7f6f4` | zweite Sektionsfläche, Footer |
| `--tinte` | `#16181c` | Text, Primärbuttons, Header-CTA |
| `--graphit` | `#5a6069` | Fließtext (`--text-secondary`) |
| `--text-tertiary` | `#868b93` | Eyebrows, Meta, Tabellenköpfe |
| `--nebel` | `#e4e1dc` | Haarlinien (`--rule`) |
| `--sonne` | `#d8451a` | Status „frei", empfohlener Tarif, Fokus |
| `--himmel` | `#3d5a6e` | Status „reserviert" |
| `--verkauft` | `#9b9892` | Status „verkauft" |

`--bg-sonne`, `--bg-himmel`, `--bg-blatt` und `--bg-koralle` existieren nur noch
als Aliase auf `--licht`, damit Bestandsseiten weiterlaufen. Nicht neu verwenden.

## Typografie

- **Display (`--font-display`): Syne** — Überschriften, Zitate, Tarifnamen.
  Gewicht 600, `letter-spacing: -0.035em`.
- **Sans (`--font-sans`): Source Sans 3** — Fließtext, Leads, Buttons.
- **Mono (`--font-mono`): Spline Sans Mono** — Eyebrows, Wohnungsnummern,
  Metadaten, Tabellenköpfe. Immer Versalien, `letter-spacing: 0.16em`.

### Regeln

- `hyphens: manual` in Überschriften. Automatische Trennung zerlegt sonst
  Komposita wie „Wohnungsfinder" mitten in der Marke.
- **Kein `max-width` in `ch` auf Headlines mit langen Komposita.** Genau das
  ließ die alte H1 („Wohnungsfinder") aus dem Layout laufen.
- Fließtext maximal `40rem` breit, Leads `36rem`.

## Abstände

`--section-pad: clamp(4rem, 7.5vw, 7rem)` — der vertikale Rhythmus ist das
wichtigste Gestaltungsmittel. Im Zweifel mehr Luft, nicht weniger.

Sektionen nutzen `.section` (Standard) oder `.section-sm`. `.overlap-stage`
bringt eigenes Padding mit, weil es auf Unterseiten ohne `.section` vorkommt.

## Komponenten

| Klasse | Zweck |
|---|---|
| `.stack-grid` + `.stack-item` | Merkmalsraster; offener Block mit 2px-Oberlinie statt Karte |
| `.overlap-fassade` / `-interior` / `-desk` / `-leads` | Zweispalter Bild+Text. `-interior` dreht die Reihenfolge (Text links) — bewusst, gegen Monotonie |
| `.overlap-plate` | Textblock, rahmenlos, max. `34rem` |
| `.overlap-frame` | Bildcontainer, nur `border-radius` + `overflow:hidden` |
| `.walk` / `.walk-row` | Dreispaltige Ablaufliste mit Haarlinien |
| `.plan-grid` / `.plan` | Tarife; der empfohlene wird über die orange Oberlinie markiert, nicht über eine Fläche |
| `.price-table` | Preisliste; scrollt unter 640px horizontal statt zu quetschen |
| `.link-arrow` | Standard-Sekundärlink (unterstrichen, Pfeil). Ersetzt frühere Outline-Buttons |
| `.cta-band` | Abschluss-CTA, zweispaltig, hell |

### Buttons

- `.btn-primary` — dunkelgrau gefüllt. Genau **ein** Primärbutton pro Sektion.
- `.btn-outline` — nur wo ein zweiter echter Button nötig ist.
- `.link-arrow` — der Normalfall für sekundäre Aktionen.

## Bilder

Randlos, ohne Schatten, `border-radius: var(--radius-md)`. Bildunterschriften
liegen als halbtransparentes weißes Feld unten links im Bild (`.photo-frame
figcaption`).

Die Fassaden-Renderings sind das stärkste Asset — sie tragen die Seite. Aber
**nicht dieselbe Ansicht mehrfach auf einer Seite**: die Startseite zeigte den
FacadeFinder ursprünglich dreimal fast identisch; die dritte Stelle ist heute
eine echte Preistabelle.

## Bewegung

Einstiegs-Animationen sind entfernt (`.animate-up { animation: none }`). Der
Text soll sofort stehen. `prefers-reduced-motion` wird respektiert.

## Barrierefreiheit

- Fokus: `2px solid var(--sonne)`, Offset 3px.
- Touch-Ziele mindestens 44×44px (Header-Toggle, Buttons).
- Status wird nie allein über Farbe transportiert — die Legende und die
  `.unit-chip` nennen ihn zusätzlich als Text.
- Genau eine `<h1>` pro Seite (geprüft über alle 33 Routen).

## Bekannte Altlasten

- `site.demoUrl` (`https://flatfind2.x900.3az.de/p/5`) ist derzeit **nicht
  erreichbar** (TLS-Fehler). Der Hero zeigt deshalb den FacadeFinder statt
  eines iframes. Sobald die Demo wieder läuft, kann sie dort eingebettet werden.
- `.status-marquee`, `.device-frame`, `.browser-chrome` und `.card` sind
  neutralisiert, aber noch definiert — Bestandsseiten nutzen sie teilweise.
- ESLint meldet einen Bestandsfehler in `Header.tsx`
  (`react-hooks/set-state-in-effect`), unabhängig vom Redesign.
