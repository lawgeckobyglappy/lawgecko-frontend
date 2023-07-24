/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-color": "#FFA543",
        "primary-color": "#6CDFBD",
        "heading-text": "#323145",
        "light-dark-text": "#6E6E6E",
        "btn-hover": "#16a57a",
      },
    },
  },
  plugins: [],
};

