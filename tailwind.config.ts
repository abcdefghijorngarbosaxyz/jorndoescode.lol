import type { Config } from 'tailwindcss';

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
      sans: ['Lausanne', 'var(--font-fallback)'],
      serif: ['Newsreader', 'serif'],
      mono: ['Menlo', 'monospace'],
      display: ['Inter', 'var(--font-fallback)']
    }
  },
  plugins: []
};

export default config;
