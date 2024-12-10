/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #3F48CC 75%, white 75)",
      },
      colors: {
        bodyColor: "#E2E3F7",
        buttonColor: "#3F48CC",
      },
    },
  },
  plugins: [],
};
