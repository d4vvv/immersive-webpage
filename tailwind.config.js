/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #291f3b 20%, #796c91 100%)',
        'gradient-pride':
          'linear-gradient(to right, rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 27%, rgb(241, 235, 27), rgb(241, 235, 27) 33%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142))',
      },
      fontFamily: {
        Lexend: ['Lexend', ...defaultTheme.fontFamily.mono],
        Dela: [
          '"Dela Gothic One", Helvetica, sans-serif',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}
