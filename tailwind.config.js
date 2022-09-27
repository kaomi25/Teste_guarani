/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bg1:{
        'margin': '30px',
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': 0.6
      },
      backgroundImage: {
        // 'bgIMG': "url('../img/img1.jpg')" 
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        'tema': '#eb4034' 
      }
    },
  },
  plugins: [],
}