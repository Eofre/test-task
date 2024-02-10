/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        violet: "#512689",
        "gray-light": "#F8F8F8",
      },
    },
  },
  plugins: [],
};
