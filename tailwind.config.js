const { sand, sandDark, mauveDark, mauve } = require('@radix-ui/colors');
const { radixToTailwind } = require('./lib/radixToTailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: radixToTailwind(mauve),
        neutralDark: radixToTailwind(mauveDark)
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
