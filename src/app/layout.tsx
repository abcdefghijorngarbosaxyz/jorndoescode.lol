import schema from '@/lib/schema';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { inter, lausanne, newsreader } from '@/lib/fonts';

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
    <html lang='en' className='scroll-pt-[calc(var(--header-height)_+_16px)] text-[16px]'>
      <body
        className={`m-0 h-full overflow-x-hidden bg-white font-sans font-light antialiased selection:bg-[rgb(229,_229,_229)] dark:bg-neutral-950 dark:selection:bg-[rgb(64,_64,_64)] ${lausanne.variable} ${inter.variable} ${newsreader.variable}`}>
        <div className='min-h-full pb-[env(safe-area-inset-bottom)] pl-[var(--margin-left)] pr-[var(--margin-right)]'>
          <main className='relative mx-auto my-0 min-h-[calc(100vh_-_var(--footer-height))] max-w-[var(--page-width)] px-0 py-[var(--page-top)] max-md:max-w-[var(--content-width)]'>
            <div className='grid grid-cols-[192px_var(--content-width)_192px] items-start gap-x-6 max-lg:grid-cols-[auto_var(--content-width_auto)] max-lg:gap-x-4 max-md:flex max-md:flex-col max-md:items-stretch max-md:justify-start'>
              <article className='relative w-full max-w-[var(--content-width)] text-[#404040] dark:text-[#d4d4d4]'>
                {children}
              </article>
            </div>
          </main>
        </div>
        <Analytics />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }}></script>
      </body>
    </html>
  );
}
