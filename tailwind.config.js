module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',]
    },
    extend: {
      colors: {
        "primary": {
          DEFAULT: '#7a9787',
          "50": "#c0ddcd",
          "100": "#b6d3c3",
          "200": "#acc9b9",
          "300": "#a2bfaf",
          "400": "#98b5a5",
          "500": "#8eab9b",
          "600": "#84a191",
          "700": "#7a9787",
          "800": "#708d7d",
          "900": "#668373"
        },
      },
    },
  },
  plugins: [],
}
