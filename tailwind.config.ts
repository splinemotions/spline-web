import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ededed",
        brand: {
          orange: "#ff5500",
          amber: "#ff7a00",
          yellow: "#ffa726",
          dark: "#0a0a0a",
          card: "#111113",
          border: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(255, 85, 0, 0.25)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(255, 85, 0, 0.3)",
        "glow-md": "0 0 45px -10px rgba(255, 85, 0, 0.4)",
        "glow-lg": "0 0 80px -15px rgba(255, 120, 0, 0.35)",
        "pill": "0 2px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        "card-glow": "0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px -5px rgba(255, 85, 0, 0.12)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 9s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
