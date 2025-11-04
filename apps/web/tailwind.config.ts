import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#e6edff",
          200: "#c0d2ff",
          300: "#9bb8ff",
          400: "#759dff",
          500: "#4f83ff",
          600: "#3a69db",
          700: "#2c4faf",
          800: "#1d3473",
          900: "#101c3f"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
