import type { WithContext, Person } from 'schema-dts';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jorn Blaedel Garbosa',
  description:
    'Delighting in the art of web development, I dance with code, weaving digital wonders that captivate and inspire.',
  jobTitle: 'Freelancer',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '/').href,
  sameAs: [
    'https://github.com/abcdefghijorngarbosaxyz',
    'https://open.spotify.com/user/22uxjubqo5f5ttxanyjui37py'
  ],
  image: new URL('/opengraph-image.png', process.env.NEXT_PUBLIC_SITE_URL ?? '/').href,
  alumniOf: 'Capiz State University',
  birthPlace: {
    '@type': 'Place',
    name: 'Iloilo City, Philippines'
  },
  givenName: 'Jorn Blaedel',
  familyName: 'Garbosa',
  gender: 'Male',
  nationality: {
    '@type': 'Country',
    name: 'Philippines'
  }
} satisfies WithContext<Person>;

const schema = JSON.stringify(person, null, 2);

export default schema;
