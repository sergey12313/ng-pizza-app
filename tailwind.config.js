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
        primaryHover: '#f96941',
        muted: '#5b5b5e',
        separator: "#d4d6e0"
      },
      boxShadow: {
        buttonShadow: '0px 10px 40px 0px rgba(122, 129, 190, 0.16)',
        inputShadow: '15px 20px 45px 0px rgba(233, 233, 233, 0.25)',
        cardShadow: '18.21429px 18.21429px 36.42857px 0px rgba(211, 209, 216, 0.25)',
      }
    },
  },
  plugins: [],
}

