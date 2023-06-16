import stylesheet from '~/tailwind.css';
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>Jorn Blaedel Garbosa</title>
        <meta name='title' content='Jorn Blaedel Garbosa' />
        <meta
          name='description'
          content='Devoted to constructing refined softwares with precision and crafting remarkable web experiences.'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.jorndoescode.lol/' />
        <meta property='og:title' content='Jorn Blaedel Garbosa' />
        <meta property='og:site_name' content='Jorn Blaedel Garbosa' />
        <meta
          property='og:description'
          content='Devoted to constructing refined softwares with precision and crafting remarkable web experiences.'
        />
        <meta
          property='og:image'
          content='https://www.jorndoescode.lol/assets/images/share.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.jorndoescode.lol/' />
        <meta property='twitter:title' content='Jorn Blaedel Garbosa' />
        <meta
          property='twitter:description'
          content='Devoted to constructing refined softwares with precision and crafting remarkable web experiences.'
        />
        <meta
          property='twitter:image'
          content='https://www.jorndoescode.lol/assets/images/share.png'
        />
        <Meta />
        <link rel='canonical' href='https://www.jorndoescode.lol' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/assets/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/assets/images/favicon-16x16.png'
        />
        <link rel='manifest' href='/assets/images/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/assets/images/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
