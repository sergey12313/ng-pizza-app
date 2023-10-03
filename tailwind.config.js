/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#fe724c',
        primaryHover: '#fe724c',
        muted: '#5b5b5e',
        separator: "#d4d6e0"
      },
    },
  },
  plugins: [],
}

