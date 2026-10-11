/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: theme('colors.zinc.700'),
            a: { color: theme('colors.indigo.600') },
            'h1,h2,h3,h4': { color: theme('colors.zinc.900') },
            code: { color: theme('colors.indigo.600') },
          },
        },
        invert: {
          css: {
            color: theme('colors.zinc.300'),
            a: { color: theme('colors.indigo.400') },
            'h1,h2,h3,h4': { color: theme('colors.zinc.100') },
            code: { color: theme('colors.indigo.400') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
