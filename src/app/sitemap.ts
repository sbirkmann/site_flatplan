import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flatplan.de',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://flatplan.de/vorteile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
       url: 'https://flatplan.de/impressum',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 0.1,
    },
    {
       url: 'https://flatplan.de/datenschutz',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 0.1,
    },
  ];
}
