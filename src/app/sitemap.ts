import { MetadataRoute } from 'next';

const base = 'https://www.jorndoescode.lol';

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = [''].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  return [...routes];
};

export default sitemap;
