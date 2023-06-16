import type { Config } from 'tailwindcss';

export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
