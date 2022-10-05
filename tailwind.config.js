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
        'wgray':'#C1C1C1',
        'wblack':"#090909",
        'wblacktotal':'#000000',
        "wbrown":"#D8A688",
        "wpinkdark":'#D8A788',
        'wpinklight':'#FFF6F0',
        "wyellow":'#FFA722'
      },
      fontFamily:{
        'kranky':['Kranky'],
        'signika':['Signika Negative'],
        'jost':['Jost'],
        'poppins':['Poppins']
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}