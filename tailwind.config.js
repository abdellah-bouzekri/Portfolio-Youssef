/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        space: {
          950: '#06070c',
          900: '#0b0d17',
          850: '#111422',
          800: '#171c30',
        },
        accent: {
          pink: '#f43f5e',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
