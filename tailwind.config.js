/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "index.html"],
  theme: {
    extend: {
      colors: {
        "blue-green-main": "#43e8c3",
        "dark-background-main": "#111e25",
        "dark-background-secondary": "#111e25",
        "font-main": "#ececfa",
        "blue-green-secondary": "#5cddc6",
      },
      dropShadow: {
        "backdrop-img": "0rem 0rem 8rem rgba(92, 221, 198, 1)",
      },
      fontFamily: {
        "primary-font": ["Geneva", "Arial"],
        chalkdust: "Chalkduster",
        varino: "varino",
      },
    },
  },
  plugins: [],
};
