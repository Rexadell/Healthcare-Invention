/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#218011',
        'secondary': '#50C878'
      },
      fontFamily: {
        'inter': 'Inter'
      },
    },
  },
  plugins: [],
}

