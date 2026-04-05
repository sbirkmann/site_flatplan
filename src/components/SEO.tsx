import Script from 'next/script';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "flatplan.de",
    "applicationCategory": "BusinessSoftware",
    "operatingSystem": "WebBrowser",
    "url": "https://flatplan.de",
    "producer": {
      "@type": "Organization",
      "name": "Investora Commercial (EEIG)",
      "url": "https://flatplan.de",
      "contactPoint": {
         "@type": "ContactPoint",
         "telephone": "+49-931-49737742",
         "contactType": "Customer Service",
         "email": "/kontakt"
      }
    },
    "description": "Interaktiver 3D Wohnungsfinder für Bauträger und den digitalen Neubauvertrieb. Vollständig browserbasiert ohne App-Download.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
