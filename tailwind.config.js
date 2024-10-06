/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./helpers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1634px",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem", //1618 + 16 px = 1634
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      inter: ["var(--font-inter)"],
      "act-of-rejection": ["var(--font-act-of-rejection)"],
    },
    extend: {
      fontSize: {
        "70px": "70px",
        "112px": "112px",
        "140px": "140px",
      },
      colors: {
        red: "#EA2127",
        dark: "#060606",
      },
      maxWidth: {
        "1684px": "1684px",
        "1733px": "1733px",
      },
      lineHeight: {
        "168px": "168px",
        "120%": "120%",
      },
      dropShadow: {
        "hero-shadow": "6px 6px 25px rgba(102, 66, 66, 0.2)",
        "get-one-card": "6px 6px 12px rgba(47, 47, 47, 0.02)",
      },
    },
  },
  plugins: [],
};
