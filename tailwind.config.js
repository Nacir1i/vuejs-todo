/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c1d25",
        secondary: "#1b3541",
        third: "#305861",
        fourth: "#468b88",
        fith: "#559e9e",
      },
    },
  },
  plugins: [],
};
