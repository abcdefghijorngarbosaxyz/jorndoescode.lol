import stylesheet from '~/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';
import { Default, NotFound, Internal } from './err';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

const Document = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.jorndoescode.lol/' />
        <meta property='og:title' content='Jorn Blaedel Garbosa' />
        <meta property='og:site_name' content='Jorn Blaedel Garbosa' />
        <meta
          property='og:description'
          content='Delighting in the art of web development, I dance with code, weaving digital wonders that captivate and inspire.'
        />
        <meta property='og:image' content='https://www.jorndoescode.lol/share.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='2400' />
        <meta property='og:image:height' content='1256' />
        <meta property='og:image:alt' content='Maybe an opengraph image' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.jorndoescode.lol/' />
        <meta property='twitter:title' content='Jorn Blaedel Garbosa' />
        <meta
          property='twitter:description'
          content='Delighting in the art of web development, I dance with code, weaving digital wonders that captivate and inspire.'
        />
        <meta property='twitter:image' content='https://www.jorndoescode.lol/share.png' />
        <meta
          name='google-site-verification'
          content='WdslNAxSJ1X3zg3p4bBOnmrt6f2EdDWskkERRtmVU8k'
        />
        <Meta />
        <link rel='canonical' href='https://www.jorndoescode.lol' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <Links />
      </head>
      <body>
        {children}
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export const CatchBoundary = () => {
  const caught = useCatch();

  let errComponent;

  switch (caught.status) {
    case 404:
      errComponent = <NotFound />;
      break;
    case 500:
      errComponent = <Internal />;
      break;
    default:
      errComponent = <Default />;
      break;
  }

  return (
    <Document>
      <div>
        <main>
          <div>
            <article>{errComponent}</article>
          </div>
        </main>
      </div>
    </Document>
  );
};

const App = () => {
  return (
    <Document>
      <div>
        <main>
          <div>
            <article>
              <Outlet />
            </article>
          </div>
        </main>
      </div>
    </Document>
  );
};

export default App;
