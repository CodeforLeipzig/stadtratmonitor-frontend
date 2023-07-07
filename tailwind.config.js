/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': { // hand-choosen
          50:  '#FFF8F6',
          100: '#FFF2ED',
          200: '#F7E6E0',
          300: '#E4D1C8',
          400: '#CFBAB0',
          500: '#B8A599',
          600: '#9D8E83',
          700: '#7D7168',
          800: '#5D544D',
          900: '#403B36',
          950: '#2C2925',
        },
        'background': { // hand-choosen
          50:  '#FFF8F6',
          100: '#FFF2ED',
          200: '#F7E6E0',
          300: '#E4D1C8',
          400: '#CFBAB0',
          500: '#B8A599',
          600: '#9D8E83',
          700: '#7D7168',
          800: '#5D544D',
          900: '#403B36',
          950: '#2C2925',
        },
        'primary-button': { // hand-choosen
          DEFAULT: '#FFD470',
          50:  '#FFF6E1',
          100: '#FFEFCA',
          200: '#FFE8B4',
          300: '#FFE29D',
          400: '#FFDB87',
          500: '#FFD470',
          600: '#FFCD5A',
          700: '#FFC743',
          800: '#FFC02D',
          900: '#FFB916',
          950: '#FFB300',
        },
        'secondary-button': colors.slate,
        'accent': colors.amber,
/*      'secondary-button': {
          DEFAULT: '#e2e5e9',
          100: '#d8dade',
          200: '#ced0d3',
          300: '#c4c6c8',
          400: '#babbbe',
          500: '#b0b1b3',
          600: '#a6a7a9',
          700: '#9c9d9e',
          800: '#939394',
          900: '#898a8a',
        },
        'accent': {
          DEFAULT: '#f8d841',
          100: '#fdf8df',
          200: '#fdf4cf',
          300: '#fcf1bf',
          400: '#fbedae',
          500: '#fbe99c',
          600: '#fae589',
          700: '#f9e175',
          800: '#f9dc5e',
          900: '#f8d841',
        }, */
      }
    }
  },
  plugins: [],
}

