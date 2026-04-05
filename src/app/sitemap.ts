import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flatplan.de';

  const routes = [
    '',
    '/features',
    '/preise',
    '/kontakt',
    '/faq',
    '/vorteile',
    '/referenzen',
    '/ueber-uns',
    '/impressum',
    '/datenschutz',
    '/agb',

    // Branchen
    '/branchen/bautraeger',
    '/branchen/immobilienmakler',
    '/branchen/projektentwicklung',

    // Funktionen
    '/funktionen/3d-grundrisse',
    '/funktionen/integrationen',
    '/funktionen/lead-generierung',
    '/funktionen/pdf-expose',

    // Use Cases
    '/use-cases/neubauvertrieb',
    '/use-cases/virtuelle-besichtigung',

    // Blog
    '/blog',
    '/wissen/glossar'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route === '/features' || route.startsWith('/branchen') ? 0.9 : 0.8),
  }));
}
