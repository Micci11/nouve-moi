/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          bg: '#EAFBF7',      // pale stripe blue
          text: '#0F3F3A',
          faded: '#EAFBF7',
          dark: '#DDF5EF',
          light: '#F6FEFC',
        },
        tiffany: {
          DEFAULT: '#55C6B7',
          dark: '#35B4A3',
          light: '#EAFBF7',
        },
        crave: {
          gray: '#F8FAFC',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        heading: [
          'Playfair Display',
          'Georgia',
          'serif',
        ],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
        card: '0 10px 25px rgba(0,0,0,0.08)',
        hover: '0 20px 40px rgba(0,0,0,0.12)',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};