/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../public/header.jpg')",
        "draper-one": "url('../public/draper_one.png')",
        "draper-two": "url('../public/draper_two.png')",
        "purple-circles": "url('../public/circles.png')",
      },
      colors: {
        "purple-heart": "#7b3fe4",
        "blue-ribbon": "#016eea",
        "black-pearl": "#080524",
        "sponsor-bg": "#f9f5ff",
        dim: "rgba(0,0,0,0.5)",
        glass: "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        futura: ["Futura"],
        satoshi: ["Satoshi"],
      },
    },
  },
  plugins: [],
};
