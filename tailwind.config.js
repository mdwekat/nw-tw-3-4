/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'media', // replace with 'media' to make it work with Tailwind 3.4
  theme: {
    extend: {},
  },
  plugins: [],
};
