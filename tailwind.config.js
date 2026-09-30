/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#30363d',
          code: '#090d13'
        }
      }
    },
  },
  plugins: [],
}