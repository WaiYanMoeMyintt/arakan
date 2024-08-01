/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
