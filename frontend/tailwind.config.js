module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        branca: '#ffffff',
        amareloClaro: '#fff1cc',
        marrom: '#8f5c0a',
        dourado: '#b37b0e',
        preto: '#1a1a1a',
        vinho: '#561113',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'arsenal-sc': ['Arsenal SC', 'sans-serif'],
        'quattrocento-sans': ['Quattrocento Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 