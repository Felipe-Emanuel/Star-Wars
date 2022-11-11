/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'star':"url('/src/img/bg.jpg')",
      },
      fontFamily: {
        'Cinzel': 'Cinzel'
      },
    },
  },
  plugins: [],
}
