import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const inter = localFont({
  src: '../../public/assets/fonts/inter.woff2',
  display: 'block',
  weight: '100 900',
  variable: '--font-inter'
});
const lausanne = localFont({
  src: '../../public/assets/fonts/twk-lausanne.woff2',
  display: 'block',
  weight: '400',
  variable: '--font-lausanne'
});
const newsreader = localFont({
  src: '../../public/assets/fonts/newsreader.woff2',
  display: 'block',
  weight: '400',
  variable: '--font-newsreader',
  style: 'italic'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${lausanne.variable} ${newsreader.variable}`}>
      <body>
        <div>
          <main>
            <div>
              <article>{children}</article>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
