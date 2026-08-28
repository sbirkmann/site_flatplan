import type { Metadata } from "next";

export const site = {
  name: "flatplan.de",
  url: "https://flatplan.de",
  title: "flatplan.de | Wohnungsfinder für den Vorverkauf",
  description:
    "Wohnungsfinder für Bauträger und Makler im Vorverkauf. Wohnungen in der Fassade wählen, Status frei, reserviert oder verkauft, 3D-Grundriss und 360°. Anfragen mit Wohnungsnummer. Modelle und Renderings von Immowoo. Dashboard inklusive.",
  company: {
    brand: "Immowoo",
    legalName: "Immowoo Group GmbH",
    street: "Nördliche Münchner Str. 9 c",
    zip: "82031",
    city: "Grünwald",
    phone: "+49 931 30194458",
    phoneHref: "tel:+4993130194458",
    email: "info@flatplan.de",
  },
  demoUrl: "https://flatfind2.x900.3az.de/p/5",
} as const;

/** Einheitliche Page-Metadata mit Canonical & Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
