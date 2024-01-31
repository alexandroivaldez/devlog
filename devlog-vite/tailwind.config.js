/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'mongo-blue': '#001E2B',
        'mongo-green': '#00ED64',
        'mongo-grey': '#C1BEBC',
        'mongo-blue60': '#006CFA'
      }
    },
  },
  plugins: [],
}

