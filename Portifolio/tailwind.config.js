/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        fasthand: ["Fasthand", "cursive"],
      },
      colors: {
        // One warm, quiet palette with a single accent
        ink: "#0f0f0e",
        surface: "#171715",
        line: "#2a2926",
        paper: "#ece8e1",
        muted: "#9a958c",
        accent: "#7c9cff",
      },
    },
  },
  plugins: [],
};
