/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"']
      },
      backgroundImage: {
        'homePage': 'linear-gradient(rgba(0, 0, 0, 0.575),rgba(0, 0, 0, 0.575)), url("./assets/images/homePage.jpeg")',
        'aboutPage': 'linear-gradient(rgba(29, 78, 216, 0.25),rgba(29, 78, 216, 0.25)), url("./assets/images/about.jpg")'
      }
    },
  },
  plugins: [],
}

