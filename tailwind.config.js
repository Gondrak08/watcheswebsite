/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "wwhite":"#FFFFFF",
        'wblack':"#090909",
        'wblacktotal':'#000000',
        "wbrown":"#D8A688"
      }
    },
  },
  plugins: [],
}