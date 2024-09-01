/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      "bright-red": "#d12026",
      "dark-red": "#91030e",
      black: "#231f20",
      gray: colors.gray,
    },
  },
  plugins: [],
};
