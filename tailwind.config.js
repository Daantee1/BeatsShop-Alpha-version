/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "'Lato', 'sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["dark"],
  },

}