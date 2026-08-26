/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#06110b",
        darkSurface: "#0a1c12",
        cardBg: "rgba(10, 28, 18, 0.75)",
        cardBorder: "rgba(34, 197, 94, 0.18)",
        primary: {
          DEFAULT: "#10b981",
          hover: "#059669",
          light: "#4ade80",
          dark: "#047857",
        },
        accentCyan: "#2dd4bf",
        accentEmerald: "#10b981",
        accentViolet: "#a3e635",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-primary': '0 10px 30px -5px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 10px 30px -5px rgba(74, 222, 128, 0.35)',
      }
    },
  },
  plugins: [],
}

