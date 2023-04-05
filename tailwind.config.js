/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'libre': ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}

