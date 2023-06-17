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
          50: '#FDFDFD',
          100: '#F6F6F6',
          200: '#E8E8E7',
          300: '#D9D9D9',
          400: '#D0D0CF',
          500: '#BBBBBB',
          600: '#A1A1A1',
          700: '#848484',
          800: '#686867',
          900: '#494949',
          950: '#2C2C2C',
        },
        'background': { // hand-choosen
          50: '#FDFDFD',
          100: '#F3F3F6',
          200: '#DCDCE7',
          300: '#C0BFD9',
          400: '#AAA8CF',
          500: '#8A86BB',
          600: '#6C68A1',
          700: '#554F84',
          800: '#403B67',
          900: '#2C2849',
          950: '#1A182C',
        },
        'primary-button': { // hand-choosen
          DEFAULT: '#1550A3',
          50: '#F7FBFF',
          100: '#B2DBFF',
          200: '#75B3F1',
          300: '#4185D2',
          400: '#2562B9',
          500: '#1550A3',
          600: '#0C428E',
          700: '#043078',
          800: '#012668',
          900: '#001E58',
          950: '#000C24',
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

