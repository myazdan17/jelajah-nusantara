import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FDFCF7",
          100: "#F8F5EC",
          200: "#EFE9D8",
        },
        forest: {
          50: "#F0F5F1",
          100: "#D9E5DC",
          200: "#B3CBBA",
          400: "#5A8A6B",
          600: "#2F5D3F",
          700: "#234A31",
          800: "#1A3A26",
          900: "#0F2418",
        },
        sage: {
          100: "#E8EDE6",
          200: "#D1DACF",
          400: "#8FA88B",
          600: "#5E7A5B",
        },
        sand: {
          50: "#FBF7F0",
          100: "#F5EDDD",
          200: "#E8DAB8",
          300: "#E0CBA4",
          400: "#D4BB87",
        },
        terracotta: {
          400: "#D98560",
          500: "#C9653F",
          600: "#A85838",
        },
        charcoal: {
          600: "#4A4A47",
          700: "#3A3A38",
          800: "#2A2A28",
          900: "#1C1C1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 36, 24, 0.06)",
        card: "0 12px 32px -12px rgba(15, 36, 24, 0.14)",
        lift: "0 24px 48px -16px rgba(15, 36, 24, 0.20)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;