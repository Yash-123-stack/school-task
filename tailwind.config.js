/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
         'fade-overlay': 'linear-gradient(to right, rgba(234,215,255,1) 0%, rgba(234,215,255,0.9) 25%, rgba(234,215,255,0.5) 40%, rgba(234,215,255,0.1) 80%, transparent 50%)',
         'fade-overlay-mobile': 'linear-gradient(to bottom, rgba(234,215,255,1) 0%, rgba(234,215,255,0.9) 25%, rgba(234,215,255,0.5) 40%, rgba(234,215,255,0.1) 80%, transparent 50%)',
      },
      fontFamily: {
        museo: ['"Museo Sans"', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
     keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
}
