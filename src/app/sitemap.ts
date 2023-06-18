import { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL;

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = [''].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  return [...routes];
};

export default sitemap;
