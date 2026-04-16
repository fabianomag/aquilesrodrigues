import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf9f7",
          100: "#f0eeea",
          200: "#e0ddd6",
          300: "#c8c2b8",
          400: "#a8a194",
          500: "#8a8274",
          600: "#504b42",
          700: "#2a2723",
          800: "#1a1614",
          900: "#141210",
          950: "#080706",
        },
        gold: {
          300: "#e8d5a3",
          400: "#d4b978",
          500: "#c9a54a",
          600: "#a8892f",
        },
        accent: "#1a1614"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        brand: ["var(--font-antonio)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        "hero-lg": ["5rem", { lineHeight: "0.98", letterSpacing: "-0.05em" }],
        "section": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
      },
    },
  },
  plugins: [],
};

export default config;
