/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "index.html"],
  theme: {
    extend: {
      colors: {
        "blue-green-main": "#43e8c3",
        "dark-background-main": "#14423f",
        "dark-background-secondary": "#253F47",
        "dark-background-tertiary": "#101E24",
        "font-main": "#ececfa",
        "blue-green-secondary": "#5cddc6",
      },
      dropShadow: {
        "backdrop-img": "0rem 0rem 8rem rgba(92, 221, 198, 1)",
      },
      fontFamily: {
        "primary-font": ["Geneva", "Arial"],
      },
      height: {
        svh: "100svh",
      },
      boxShadow: {
        "main-upwards": "5px 0 10px 5px rgba(67, 232, 195, 0.3)",
      },
      inset: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
