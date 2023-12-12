/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        xs: '500px',
      },
      colors: {
        iconColor: "#6680e5",
      },
    },
  },
  plugins: [],
}
