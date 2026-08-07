/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#05020a",
        darkSurface: "#0d061a",
        cardBg: "rgba(22, 10, 38, 0.65)",
        cardBorder: "rgba(183, 33, 255, 0.18)",
        primary: {
          DEFAULT: "#b721ff",
          hover: "#d056ff",
          light: "#e28cff",
          dark: "#7c00c7",
        },
        accentCyan: "#00f0ff",
        accentEmerald: "#10b981",
        accentViolet: "#6366f1",
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
        'glow-primary': '0 0 25px rgba(183, 33, 255, 0.35)',
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.35)',
      }
    },
  },
  plugins: [],
}

