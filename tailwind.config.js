/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "c-purple": "#9371EA",
        "c-pink": "#C549BC",
        "c-gold": "#D7834F",
        "c-black": "#040E22",
        "c-bluish-green": "#1D273B",
        "c-blue-dark": "#0C1B3D",
        "c-blue": "#122652",
        "c-white": "#5D6D8B"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
}
