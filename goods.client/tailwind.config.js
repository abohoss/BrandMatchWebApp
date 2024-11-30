/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#f8f4e3",
      "bright-red": "#e56133",
      "dark-red": "#af462e",
      "secondary-bright": "#32965d",
      "secondary-dark": "#276041",
      black: "#222a34",
      gray: colors.gray,
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
