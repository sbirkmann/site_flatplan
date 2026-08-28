import type { Metadata, Viewport } from "next";
import { Syne, Source_Sans_3, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | flatplan.de",
  },
  description: site.description,
  keywords: [
    "Wohnungsfinder",
    "Vorverkauf",
    "Neubauvertrieb",
    "3D Grundriss",
    "Bauträger",
    "Immobilienmakler",
    "interaktiver Grundriss",
    "360 Rundgang Neubau",
    "onOffice",
  ],
  applicationName: site.name,
  verification: {
    google: "bpJ2DiIH1PxIhuL_ZejfuBQMhhCfFQlal6QK9UD2ZQw",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12151A",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.company.brand,
      legalName: site.company.legalName,
      url: site.url,
      email: site.company.email,
      telephone: site.company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.street,
        postalCode: site.company.zip,
        addressLocality: site.company.city,
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "de-DE",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
