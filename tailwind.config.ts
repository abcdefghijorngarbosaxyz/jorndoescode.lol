import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Soehne', ...fontFamily.sans],
        serif: ['Newsreader', ...fontFamily.serif]
      }
    }
  },
  plugins: []
};

export default config;
