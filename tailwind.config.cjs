/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#10394b",
        secondary: "#2cace4",
        terciary: "#f14d25",
        quarternary: "#34A936",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      
      xss: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sm2: "850px",
      md: "1024px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};