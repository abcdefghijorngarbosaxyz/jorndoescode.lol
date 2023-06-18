import schema from '@/lib/schema';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  keywords: ['Jorn Blaedel', 'Garbosa', 'Jorn Blaedel Garbosa', 'jorndoescode'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
  alternates: {
    canonical: '/'
  },
  verification: {
    google: 'WdslNAxSJ1X3zg3p4bBOnmrt6f2EdDWskkERRtmVU8k',
    yandex: '96b5a55a9803320b'
  },
  twitter: {
    card: 'summary_large_image',
    site: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '').href,
    title: 'Jorn Blaedel Garbosa',
    description:
      'Delighting in the art of web development, I dance with code, weaving digital wonders that captivate and inspire.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div>
          <main>
            <div>
              <article>{children}</article>
            </div>
          </main>
        </div>
        <Analytics />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }}></script>
      </body>
    </html>
  );
}
