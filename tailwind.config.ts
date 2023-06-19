import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lausanne', 'var(--font-fallback)'],
        serif: ['Newsreader', 'serif'],
        mono: ['Menlo', 'monospace'],
        display: ['Inter', 'var(--font-fallback)']
      }
    }
  },
  plugins: []
} satisfies Config;
