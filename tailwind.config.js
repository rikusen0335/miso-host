module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steel: {
          '50': '#f1f8fa',
          '100': '#e0f4f8',
          '200': '#b5e4f8',
          '300': '#8fd9ec',
          '400': '#4ebce3',
          '500': '#2598d9',
          '600': '#1d75c5',
          '700': '#205ca3',
          '800': '#1f487a',
          '900': '#1b3b5f',
        }
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
