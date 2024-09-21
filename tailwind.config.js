const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans"],
      },
      colors: {
        redd: "#292929",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
