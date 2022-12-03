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
          DEFAULT: '#9BB8D3',
          '50': '#F4F6F9',
          '100': '#E6EBF2',
          '200': '#CBD6E5',
          '300': '#9BB8D3',
          '400': '#8BA2C4',
          '500': '#6685B1',
          '600': '#4B6994',
          '700': '#384E6F',
          '800': '#253449',
          '900': '#121A24'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
