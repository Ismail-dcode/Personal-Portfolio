/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a001a",
        cardBg: "#1a0b2e",
        primary: "#b721ff",
      }
    },
  },
  plugins: [],
}
