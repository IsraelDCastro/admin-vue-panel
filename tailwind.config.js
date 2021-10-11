const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'twitter': '#00acee',
        'facebook': '#3b5998',
        'primary': {
          50: "",
          100: "#F7FAFC",
          200: "#04B2D9",
          300: "#04a8cd",
          400: "#04a8cd",
          500: "#049DD9",
          600: "#048ABF",
          700: "#00709B",
          800: "#00587a",
          900: "#e89747"
        },
        'secondary': {
          50: "",
          100: "#F2B705",
          200: "#ce9c04",
          300: "#0D0D0D",
          400: "#0D0D0D",
          500: "#F2F2F2",
          600: "#36b47c",
          700: "#C28E00",
          800: "#C28E00",
          900: "#936700",
        },
        'tertiary': {
          50: "#eeeeee",
          100: "#eeeeee",
          200: "#eeeeee",
          300: "#eeeeee",
          400: "#eeeeee",
          500: "#57586e",
          600: "#3a3b48",
          700: "#141C2C",
          800: "#101623",
          900: "#101623"
        },
        orange: colors.orange,
      },
      transitionDuration: {
        '0': '0ms',
        '400': '400ms',
        '600': '600ms'
      },
      zIndex: {
        '-1': -1,
        '1': 1,
        '5': 5,
      },
      screens: {
        'tablet': '989px',
        'max-md': {'max': '988px' }
      },
      boxShadow: {
        '3xl': '0 16px 42px -15px rgba(0, 0, 0, 0.10)',
      },
      flex: {
        'full': '1 1 100%',
      },
      inset: {
        '-100': '-100%'
      },
      borderWidth: {
        '6': '6px',
      },
    },
    fontFamily: {
      sans: [
        "DM Sans",
        "Lato",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        "Noto Sans",
        "Lato",
        '"Helvetica Neue"',
        "Helvetica ",
        "Arial",
        "sans-serif",
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
