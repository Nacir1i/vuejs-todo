/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#402835",
        secondary: "#5a3544",
        third: "#844a57",
        fourth: "#bc6873",
      },
    },
  },
  plugins: [],
};
