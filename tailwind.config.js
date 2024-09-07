/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#218011',
        'secondary': '#50C878',
        'hover': '#166808'
      },
      fontFamily: {
        'inter': 'Inter'
      },
    },
  },
  plugins: [],
}

