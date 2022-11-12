/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const _ = require("fromPairs");

module.exports = {
  mode: "jit",
  content: [".src/**/*.html", "./src/**/*.{html,css}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prototurk: "#32445a",
        twitter: "#1da1f2",
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
