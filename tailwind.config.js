/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef312d",
        primary100: "#fbcccb"
      },
      fontFamily: {
        body: ["Quicksand"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
