/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2e278c",
        light:"#8C8CC2",
        background:"#ACACE596"
      },
      screens: {
        '4xs': '180px', 
        '3xs': '300px', 
        '2xs': '350px', 
        '1xs': '400px', 
        'xs': '480px', 
      },
    },
  },
  plugins: [],
}