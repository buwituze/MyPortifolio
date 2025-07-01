/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fasthand': ['fasthand', 'cursive'],
        'intel': ['Intel', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#0f0f23',
        'custom-dark-secondary': '#1a1a3a',
        'custom-navy': 'rgba(30, 30, 50, 0.95)',
      },
    },
  },
  plugins: [],
}