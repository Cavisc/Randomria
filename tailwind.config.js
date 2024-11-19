/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23ce6b",
        secondary: "#d7263d",
        tertiary: "#c0d8e0",
        base: "#f8fafc",
        text: "#0b0a07",
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
