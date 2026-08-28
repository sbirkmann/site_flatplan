import type { Metadata } from "next";

export const site = {
  name: "flatplan.de",
  url: "https://flatplan.de",
  title: "flatplan.de | Interaktiver Wohnungsfinder für den Neubauvertrieb",
  description:
    "Der interaktive Wohnungsfinder für Bauträger, Projektentwickler und Makler: drehbare 360°-Projektansicht, Grundriss-Navigation, Lead-Management, CRM-Sync (onOffice, Propstack, Flowfact) und OpenImmo-Export.",
  company: {
    brand: "Immowoo",
    legalName: "Immowoo Group GmbH",
    street: "Nördliche Münchner Str. 9 c",
    zip: "82031",
    city: "Grünwald",
    phone: "+49 931 30194458",
    phoneHref: "tel:+4993130194458",
    email: "info@fotoestate.de",
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
