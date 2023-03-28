/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        "blue-green-main": "#43e8c3",
        "dark-background-main": "#111e25",
        "font-main": "#ececfa",
        "blue-green-secondary": "#5cddc6",
      },
    },
  },
  plugins: [],
};
