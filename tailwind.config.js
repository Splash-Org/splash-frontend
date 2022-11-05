module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mplus': ["'M PLUS Rounded 1c'", 'sans-serif'],
        'Mitr':["'Mitr'", 'sans-serif'],
        'Rubik':["Rubik",'sans-serif'],
        'Rajdhani':["'Rajdhani'",'sans-serif'],
        'Varela':["'Varela Round'",'sans-serif']
      },
      colors: {
        'deep-blue': '#0B216B',
        'md1-blue':'#2557A2',
        'md2-blue':'#3E8BD8',
        'orange-pink':'#CB846B'
      },
    },
  },
  plugins: [],
}