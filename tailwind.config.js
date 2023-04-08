/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "index.html"],
  theme: {
    extend: {
      colors: {
        "blue-green-main": "#43e8c3",
        "dark-background-main": "#111e25",
        "dark-background-secondary": "#253F47",
        "dark-background-tertiary": "#143c3d",
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
      width: {
        12.55: "12.55rem",
        4.3: "4.3rem",
      },
    },
  },
  plugins: [],
};
