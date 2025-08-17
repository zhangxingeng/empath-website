/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './data/**/*.yml',
    './hugo_stats.json'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia']
      },
      colors: {
        'primary': '#3c66a0',
        'accent': '#305693',
        'accent-2': '#274978'
      }
    },
  },
  plugins: [],
}
