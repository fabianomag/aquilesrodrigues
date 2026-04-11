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
          600: "#6b6459",
          700: "#504b42",
          800: "#363330",
          900: "#1e1c1a",
          950: "#0f0e0d",
        },
        gold: {
          400: "#c9a96e",
          500: "#b8944d",
          600: "#9a7a3d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-lg": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
};

export default config;
