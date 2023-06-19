import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lausanne)', 'var(--font-fallback)'],
        serif: ['var(--font-newsreader)', 'serif'],
        mono: ['Menlo', 'monospace'],
        display: ['var(--font-inter)', 'var(--font-fallback)']
      }
    }
  },
  plugins: []
} satisfies Config;
