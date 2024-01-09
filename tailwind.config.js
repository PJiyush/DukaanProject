/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondaryNavbar':'#1E2640',
        'tertiaryNavbar':'#353C53',
      }
    },
  },
  plugins: [],
}

