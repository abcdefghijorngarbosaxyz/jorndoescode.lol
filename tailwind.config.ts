import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    fontFamily: {
      sans: ['var(--font-lausanne)', 'var(--font-fallback)'],
      serif: ['var(--font-newsreader)', 'serif'],
      mono: ['Menlo', 'monospace'],
      display: ['var(--font-inter)', 'var(--font-fallback)']
    }
  },
  plugins: []
};

export default config;
