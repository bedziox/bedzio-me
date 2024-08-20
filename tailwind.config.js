/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primaryb': '#0F110C',
        'secondaryb': '#dd0426',
        'accentb': '#9b9b9b',
        'powderb': '#fffcf9'
      }
    },
  },
  plugins: [],
}