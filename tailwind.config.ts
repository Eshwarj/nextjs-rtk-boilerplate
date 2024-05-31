/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backdropBlur: {
      sm: "6px",
    },
    fontWeight: {
      light: "200",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      borderRadius: {
        "4xl": "1.75rem",
      },
      colors: {
        dark: {
          50: "#141110",
          100: "#1C1917",
          900: "#0C0A09",

          text: {
            50: "#0C0A09",
            400: "#57534E",
            500: "#78716C",
            700: "#D6D3D1",
            950: "#FAFAF9",
          },
        },
        light: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          900: "#FFFFFF",

          text: {
            50: "#FAFAF9",
            400: "#A8A29E",
            500: "#78716C",
            700: "#44403C",
            950: "#0C0A09",
          },
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      boxShadow: {},
      backgroundImage: {},
      transitionDuration: {},
      backgroundPosition: {},

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1.05)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "scale 1s ease-out",
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
