---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx","src/app/globals.css"]
---

## Direction contract

THESIS: flatplan.de ist ein Planblatt. Die Website behandelt sich selbst als
amtlichen Lageplan des Produkts: Plankopf, Blattnummern, Haarlinien,
Schraffuren, Legende, Koordinaten. Sie verweigert die Kategorie-Standard-
Anordnung (Hero mit Browser-Mockup, Kartenraster, Logo-Leiste).

OWN-WORLD: Planpapier #faf9f4 als Grund, Tuscheschwarz #191916, Signalrot
#c8321e rationiert auf Handlungen und aktive Parzellen, Stahlblau #3d5a6e
für reserviert, Grau #8f8c85 für verkauft. Display: enge Kapitälchen-Grotesk
(Archivo Condensed/Barlow Condensed-Klasse); Fließtext neutrale Grotesk;
Koordinaten, Nummern, Legenden in Mono. Schraffur-Muster statt Farbflächen;
Haarlinien 1px; Plankopf-Felder mit Blatt-Nr., Maßstab, Datum. Maßketten als
wiederkehrender Rhythmus. Status über Linienmuster zusätzlich zur Farbe.

STORY: Entscheider (Bauträger, Projektentwickler, Makler) sehen sofort: dieses
Produkt IST der Plan ihres Bauvorhabens. Jede Wohnung eine Parzelle mit Code,
deep-linkbar; Liste und Plan ein Raum. Sie glauben: Status ohne Nachfrage,
Anfragen mit Wohnungsnummer. Sie handeln: Demo anfragen / Live-Demo im iframe.

FIRST VIEWPORT: Komplettes Blatt — Kopf als Plankopf (Logo links, Blatt-Nr.
und Maßstab rechts, Demo-Button als roter Stempel-CTA), darunter das Planfeld:
interaktive Fassadenzeichnung mit klickbaren Parzellen und Legende am Rand,
links die H1 in engen Kapitälchen mit zwei Zeilen Lead. Kein Eyebrow.

FORM: Amtlicher Lageplan/Bebauungsplan, Kandidat 4 der Resonanzliste
(Werkplan, Bautafel, Exposé davor). seed:80daf1464d7ce836. Code-led Build.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.
