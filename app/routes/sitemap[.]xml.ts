import { LoaderFunction, Response } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
    <loc>https://www.jorndoescode.lol/</loc>
    <lastmod>2023-06-18T05:54:22+00:00</lastmod>
    </url>
    </urlset>
    `;

  return new Response(content, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8'
    }
  });
};
