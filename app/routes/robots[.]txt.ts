import { LoaderFunction, Response } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const content = `
    User-agent: *
    Sitemap: https://www.jorndoescode.lol/sitemap.xml
    Host: https://www.jorndoescode.lol
    `;

  return new Response(content, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
