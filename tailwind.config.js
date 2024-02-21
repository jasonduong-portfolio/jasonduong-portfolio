/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'gill-sans': ['Gill Sans', 'sans-serif'],
        'gill-sans-bold': ['Gill Sans Bold', 'sans-serif'],
        'gill-sans-italic': ['Gill Sans Italic', 'sans-serif'],
        'gill-sans-bold-italic': ['Gill Sans Bold Italic', 'sans-serif'],
        'gill-sans-heavy': ['Gill Sans Heavy', 'sans-serif'],
        'gill-sans-heavy-italic': ['Gill Sans Heavy Italic', 'sans-serif'],
        'gill-sans-light': ['Gill Sans Light', 'sans-serif'],
        'gill-sans-light-italic': ['Gill Sans Light Italic', 'sans-serif'],
        'habibi': ['Habibi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

