/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#0c0c0e',
          900: '#121215',
          850: '#17171c',
          800: '#1f1f26',
          700: '#2c2c36',
          600: '#414150',
          400: '#8b8b9e',
          300: '#b4b4c4',
          100: '#eaeaf0',
          50: '#f7f7fa',
        },
        brass: {
          DEFAULT: '#c5a880',
          light: '#d9c2a3',
          dark: '#a88960',
          glow: 'rgba(197, 168, 128, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
