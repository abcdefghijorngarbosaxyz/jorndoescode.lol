import stylesheet from '~/tailwind.css';
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from '@remix-run/react';
import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './root.layout';

const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

const meta: V2_MetaFunction = () => [];

const Document = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta
          name='description'
          content='Devoted to constructing refined softwares with precision and crafting remarkable web experiences.'
        />
        <link rel='canonical' href='https://www.jorndoescode.lol' />
        <Meta />
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

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

const CatchBoundary = () => {
  const error = useRouteError();
  console.error('Err', error);
};

export { links, meta, CatchBoundary };

export default App;
