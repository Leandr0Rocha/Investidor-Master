module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'yellow-900': '#7c5a13',
        'yellow-800': '#b68d2a',
        'yellow-700': '#e6b84a',
        'input-card': '#8F5C0A',
        'text-general': '#FFF1CC',
        'banner-saiba': '#561113',
        'button-name': '#BE7B0E',
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